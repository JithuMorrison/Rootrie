import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Users, GitMerge, Download, Upload, Image, Copy, Move, Grid, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const UseCaseDiagramMaker = ({ 
  useCaseDiagram, 
  actors = [], 
  useCases = [], 
  relationships = [],
  onUpdateUseCaseDiagram,
  onBack 
}) => {
  const [newActor, setNewActor] = useState('');
  const [newUseCase, setNewUseCase] = useState('');
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [relationshipType, setRelationshipType] = useState('association');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showGrid, setShowGrid] = useState(false);
  const [snapToGrid, setSnapToGrid] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);
  const [lastCanvasMousePos, setLastCanvasMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const GRID_SIZE = 20;
  const ACTOR_WIDTH = 60;
  const ACTOR_HEIGHT = 80;
  const USECASE_WIDTH = 150;
  const USECASE_HEIGHT = 40;

  useEffect(() => {
    setJsonInput(JSON.stringify({ actors, useCases, relationships }, null, 2));
  }, [actors, useCases, relationships]);

  const snapToGridIfEnabled = (value) => {
    return snapToGrid ? Math.round(value / GRID_SIZE) * GRID_SIZE : value;
  };

  const addActor = () => {
    if (!newActor.trim()) return;
    
    const updatedActors = [
      ...actors,
      {
        id: Date.now(),
        name: newActor,
        x: snapToGridIfEnabled(100 + Math.random() * 200),
        y: snapToGridIfEnabled(100 + Math.random() * 200)
      }
    ];
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      actors: updatedActors
    });
    
    setNewActor('');
  };

  const addUseCase = () => {
    if (!newUseCase.trim()) return;
    
    const updatedUseCases = [
      ...useCases,
      {
        id: Date.now(),
        name: newUseCase,
        x: snapToGridIfEnabled(300 + Math.random() * 300),
        y: snapToGridIfEnabled(150 + Math.random() * 200)
      }
    ];
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      useCases: updatedUseCases
    });
    
    setNewUseCase('');
  };

  const deleteActor = (actorId) => {
    const updatedActors = actors.filter(actor => actor.id !== actorId);
    const updatedRelationships = relationships.filter(
      rel => !(rel.source === actorId || rel.target === actorId)
    );
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      actors: updatedActors,
      relationships: updatedRelationships
    });
  };

  const deleteUseCase = (useCaseId) => {
    const updatedUseCases = useCases.filter(uc => uc.id !== useCaseId);
    const updatedRelationships = relationships.filter(
      rel => !(rel.source === useCaseId || rel.target === useCaseId)
    );
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      useCases: updatedUseCases,
      relationships: updatedRelationships
    });
  };

  const addRelationship = () => {
    if (!selectedSource || !selectedTarget) return;
    
    // Validate relationship types
    const sourceIsActor = actors.some(a => a.id === selectedSource);
    const targetIsActor = actors.some(a => a.id === selectedTarget);
    const sourceIsUseCase = useCases.some(uc => uc.id === selectedSource);
    const targetIsUseCase = useCases.some(uc => uc.id === selectedTarget);
    
    if (relationshipType === 'include' || relationshipType === 'extend') {
      // Include/Extend must be between use cases
      if (!sourceIsUseCase || !targetIsUseCase) {
        alert('Include and extend relationships must be between use cases');
        return;
      }
    } else if (relationshipType === 'generalization') {
      // Generalization must be between same types (actor-actor or usecase-usecase)
      if ((sourceIsActor && !targetIsActor) || (sourceIsUseCase && !targetIsUseCase)) {
        alert('Generalization must be between two actors or two use cases');
        return;
      }
    } else if (relationshipType === 'association') {
      // Association must be between actor and use case
      if (!(sourceIsActor && targetIsUseCase) && !(sourceIsUseCase && targetIsActor)) {
        alert('Association must be between an actor and a use case');
        return;
      }
    }
    
    const newRelationship = {
      id: Date.now(),
      source: selectedSource,
      target: selectedTarget,
      type: relationshipType
    };
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      relationships: [...relationships, newRelationship]
    });
    
    setSelectedSource(null);
    setSelectedTarget(null);
  };

  const deleteRelationship = (relationshipId) => {
    const updatedRelationships = relationships.filter(rel => rel.id !== relationshipId);
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      relationships: updatedRelationships
    });
  };

  const getElementCenter = (element, isActor) => {
    if (isActor) {
      return {
        x: element.x + ACTOR_WIDTH / 2,
        y: element.y + ACTOR_HEIGHT / 2
      };
    } else {
      return {
        x: element.x + USECASE_WIDTH / 2,
        y: element.y + USECASE_HEIGHT / 2
      };
    }
  };

  const getElementBorderPoint = (element, isActor, angle) => {
    const center = getElementCenter(element, isActor);
    
    if (isActor) {
      const radius = 25;
      return {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle)
      };
    } else {
      const a = USECASE_WIDTH / 2;
      const b = USECASE_HEIGHT / 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const r = (a * b) / Math.sqrt(b * b * cos * cos + a * a * sin * sin);
      
      return {
        x: center.x + r * cos,
        y: center.y + r * sin
      };
    }
  };

  const constrainToCanvas = (x, y, itemWidth, itemHeight) => {
    const container = containerRef.current;
    if (!container) return { x, y };
    
    const canvasRect = container.getBoundingClientRect();
    const minX = Math.max(0, -canvasOffset.x);
    const minY = Math.max(0, -canvasOffset.y);
    const maxX = Math.min(canvasRect.width / zoom - itemWidth, (canvasRect.width / zoom) - canvasOffset.x - itemWidth);
    const maxY = Math.min(canvasRect.height / zoom - itemHeight, (canvasRect.height / zoom) - canvasOffset.y - itemHeight);
    
    return {
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y))
    };
  };

  const handleMouseDown = (e, item, type) => {
    e.preventDefault();
    e.stopPropagation();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - canvasOffset.x) / zoom;
    const y = (e.clientY - rect.top - canvasOffset.y) / zoom;
    
    setDragItem({ ...item, type });
    setDragOffset({
      x: x - item.x,
      y: y - item.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragItem && !isDraggingCanvas) return;
    
    if (isDraggingCanvas) {
      const deltaX = e.clientX - lastCanvasMousePos.x;
      const deltaY = e.clientY - lastCanvasMousePos.y;
      
      setCanvasOffset(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      
      setLastCanvasMousePos({ x: e.clientX, y: e.clientY });
      return;
    }

    if (dragItem) {
      const rect = canvasRef.current.getBoundingClientRect();
      let x = (e.clientX - rect.left - canvasOffset.x) / zoom - dragOffset.x;
      let y = (e.clientY - rect.top - canvasOffset.y) / zoom - dragOffset.y;
      
      x = snapToGridIfEnabled(x);
      y = snapToGridIfEnabled(y);
      
      const itemWidth = dragItem.type === 'actor' ? ACTOR_WIDTH : USECASE_WIDTH;
      const itemHeight = dragItem.type === 'actor' ? ACTOR_HEIGHT : USECASE_HEIGHT;
      
      const constrained = constrainToCanvas(x, y, itemWidth, itemHeight);
      
      if (dragItem.type === 'actor') {
        const updatedActors = actors.map(actor => 
          actor.id === dragItem.id ? { ...actor, x: constrained.x, y: constrained.y } : actor
        );
        onUpdateUseCaseDiagram({
          ...useCaseDiagram,
          actors: updatedActors
        });
      } else if (dragItem.type === 'useCase') {
        const updatedUseCases = useCases.map(useCase => 
          useCase.id === dragItem.id ? { ...useCase, x: constrained.x, y: constrained.y } : useCase
        );
        onUpdateUseCaseDiagram({
          ...useCaseDiagram,
          useCases: updatedUseCases
        });
      }
    }
  };

  const handleMouseUp = () => {
    setDragItem(null);
    setIsDraggingCanvas(false);
  };

  const handleCanvasMouseDown = (e) => {
    if (e.target === canvasRef.current) {
      setIsDraggingCanvas(true);
      setLastCanvasMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.2, 0.3));
  };

  const resetView = () => {
    setZoom(1);
    setCanvasOffset({ x: 0, y: 0 });
  };

  const autoLayout = () => {
    const updatedActors = actors.map((actor, index) => ({
      ...actor,
      x: 50,
      y: 100 + index * 120
    }));
    
    const updatedUseCases = useCases.map((useCase, index) => ({
      ...useCase,
      x: 400,
      y: 100 + index * 80
    }));
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      actors: updatedActors,
      useCases: updatedUseCases
    });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    
    if (dragItem || isDraggingCanvas) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [dragItem, isDraggingCanvas, dragOffset, canvasOffset, zoom, actors, useCases, onUpdateUseCaseDiagram, useCaseDiagram, lastCanvasMousePos, snapToGrid]);

  const exportToJson = () => {
    const data = { actors, useCases, relationships };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.actors) && Array.isArray(data.useCases) && Array.isArray(data.relationships)) {
        onUpdateUseCaseDiagram({
          ...useCaseDiagram,
          actors: data.actors,
          useCases: data.useCases,
          relationships: data.relationships
        });
      } else {
        alert('Invalid JSON format. Expected actors, useCases, and relationships arrays.');
      }
    } catch (error) {
      alert('Error parsing JSON: ' + error.message);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setJsonInput(event.target.result);
    };
    reader.readAsText(file);
  };

  const exportToImage = () => {
    if (!canvasRef.current) return;
    
    const originalTransform = canvasRef.current.style.transform;
    canvasRef.current.style.transform = 'scale(1) translate(0px, 0px)';
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(canvasRef.current, {
        backgroundColor: '#f8fafc',
        scale: 2,
        useCORS: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${useCaseDiagram.name || 'use-case-diagram'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        canvasRef.current.style.transform = originalTransform;
      });
    });
  };

  const renderGrid = () => {
    if (!showGrid) return null;
    
    const container = containerRef.current;
    if (!container) return null;
    
    const rect = container.getBoundingClientRect();
    const width = rect.width / zoom;
    const height = rect.height / zoom;
    
    const startX = Math.floor(-canvasOffset.x / zoom / GRID_SIZE) * GRID_SIZE;
    const startY = Math.floor(-canvasOffset.y / zoom / GRID_SIZE) * GRID_SIZE;
    
    const lines = [];
    
    for (let x = startX; x < width - canvasOffset.x / zoom; x += GRID_SIZE) {
      lines.push(
        <line
          key={`v-${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={height}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
    }
    
    for (let y = startY; y < height - canvasOffset.y / zoom; y += GRID_SIZE) {
      lines.push(
        <line
          key={`h-${y}`}
          x1={0}
          y1={y}
          x2={width}
          y2={y}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
    }
    
    return (
      <svg className="grid-overlay">
        {lines}
      </svg>
    );
  };

  const renderActor = (actor) => {
    return (
      <div 
        key={actor.id}
        className="actor"
        style={{
          left: `${actor.x}px`,
          top: `${actor.y}px`,
          width: `${ACTOR_WIDTH}px`,
          height: `${ACTOR_HEIGHT}px`,
          cursor: dragItem?.id === actor.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, actor, 'actor')}
      >
        <div className="actor-icon">
          <Users size={20} />
        </div>
        <div className="actor-name">{actor.name}</div>
      </div>
    );
  };

  const renderUseCase = (useCase) => {
    return (
      <div 
        key={useCase.id}
        className="use-case"
        style={{
          left: `${useCase.x}px`,
          top: `${useCase.y}px`,
          width: `${USECASE_WIDTH}px`,
          height: `${USECASE_HEIGHT}px`,
          cursor: dragItem?.id === useCase.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, useCase, 'useCase')}
      >
        <div className="use-case-name">{useCase.name}</div>
      </div>
    );
  };

  const renderRelationship = (relationship) => {
    let source, target;
    let sourceIsActor = false;
    let targetIsActor = false;
    
    source = actors.find(a => a.id === relationship.source);
    if (source) {
      sourceIsActor = true;
    } else {
      source = useCases.find(uc => uc.id === relationship.source);
    }
    
    target = actors.find(a => a.id === relationship.target);
    if (target) {
      targetIsActor = true;
    } else {
      target = useCases.find(uc => uc.id === relationship.target);
    }
    
    if (!source || !target) return null;

    const sourceCenter = getElementCenter(source, sourceIsActor);
    const targetCenter = getElementCenter(target, targetIsActor);
    
    const dx = targetCenter.x - sourceCenter.x;
    const dy = targetCenter.y - sourceCenter.y;
    const angle = Math.atan2(dy, dx);
    
    const sourcePoint = getElementBorderPoint(source, sourceIsActor, angle);
    const targetPoint = getElementBorderPoint(target, targetIsActor, angle + Math.PI);
    
    let lineStyle = {};
    let arrowStyle = {};
    
    if (relationship.type === 'include') {
      lineStyle = { strokeDasharray: '5,5', stroke: '#3b82f6' };
      arrowStyle = { fill: '#3b82f6' };
    } else if (relationship.type === 'extend') {
      lineStyle = { strokeDasharray: '8,3', stroke: '#10b981' };
      arrowStyle = { fill: '#10b981' };
    } else if (relationship.type === 'generalization') {
      lineStyle = { stroke: '#8b5cf6' };
      arrowStyle = { fill: 'none', stroke: '#8b5cf6', strokeWidth: '2' };
    } else {
      lineStyle = { stroke: '#64748b' };
      arrowStyle = { fill: '#64748b' };
    }

    const headLength = 8;
    const headWidth = 6;
    
    const arrowAngle = Math.atan2(targetPoint.y - sourcePoint.y, targetPoint.x - sourcePoint.x);
    const arrowPoint1 = {
      x: targetPoint.x - headLength * Math.cos(arrowAngle - Math.PI / 6),
      y: targetPoint.y - headLength * Math.sin(arrowAngle - Math.PI / 6)
    };
    const arrowPoint2 = {
      x: targetPoint.x - headLength * Math.cos(arrowAngle + Math.PI / 6),
      y: targetPoint.y - headLength * Math.sin(arrowAngle + Math.PI / 6)
    };

    if (relationship.type === 'generalization') {
      return (
        <svg key={relationship.id} className="relationship">
          <line
            x1={sourcePoint.x}
            y1={sourcePoint.y}
            x2={targetPoint.x}
            y2={targetPoint.y}
            strokeWidth="2"
            {...lineStyle}
          />
          <polygon
            points={`
              ${targetPoint.x},${targetPoint.y}
              ${arrowPoint1.x},${arrowPoint1.y}
              ${arrowPoint2.x},${arrowPoint2.y}
            `}
            {...arrowStyle}
          />
          <text
            x={(sourcePoint.x + targetPoint.x) / 2}
            y={(sourcePoint.y + targetPoint.y) / 2 - 8}
            textAnchor="middle"
            fontSize="11"
            fill={lineStyle.stroke || '#64748b'}
            className="relationship-label"
          >
            {`<<${relationship.type}>>`}
          </text>
        </svg>
      );
    } else if (relationship.type === 'association') {
      return (
        <svg key={relationship.id} className="relationship">
          <line
            x1={sourcePoint.x}
            y1={sourcePoint.y}
            x2={targetPoint.x}
            y2={targetPoint.y}
            strokeWidth="2"
            {...lineStyle}
          />
        </svg>
      );
    }

    return (
      <svg key={relationship.id} className="relationship">
        <defs>
          <marker
            id={`arrowhead-${relationship.id}`}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              {...arrowStyle}
            />
          </marker>
        </defs>
        
        <line
          x1={sourcePoint.x}
          y1={sourcePoint.y}
          x2={targetPoint.x}
          y2={targetPoint.y}
          strokeWidth="2"
          markerEnd={`url(#arrowhead-${relationship.id})`}
          {...lineStyle}
        />
        
        {relationship.type !== 'association' && (
          <text
            x={(sourcePoint.x + targetPoint.x) / 2}
            y={(sourcePoint.y + targetPoint.y) / 2 - 8}
            textAnchor="middle"
            fontSize="11"
            fill={lineStyle.stroke || '#64748b'}
            className="relationship-label"
          >
            {`<<${relationship.type}>>`}
          </text>
        )}
      </svg>
    );
  };

  return (
    <div className="use-case-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{useCaseDiagram.name}</h2>
        <div className="spacer"></div>
        <div className="toolbar-controls">
          <button onClick={() => setShowGrid(!showGrid)} className={`tool-btn ${showGrid ? 'active' : ''}`}>
            <Grid size={16} />
          </button>
          <button onClick={() => setSnapToGrid(!snapToGrid)} className={`tool-btn ${snapToGrid ? 'active' : ''}`}>
            <Move size={16} />
          </button>
          <button onClick={handleZoomOut} className="tool-btn">
            <ZoomOut size={16} />
          </button>
          <span className="zoom-level">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="tool-btn">
            <ZoomIn size={16} />
          </button>
          <button onClick={resetView} className="tool-btn">
            <RotateCcw size={16} />
          </button>
          <button onClick={autoLayout} className="tool-btn">
            Auto
          </button>
        </div>
        <div className="export-buttons">
          <button onClick={exportToImage} className="export-btn">
            <Image size={16} /> Export Image
          </button>
          <button onClick={copyToClipboard} className="export-btn">
            <Copy size={16} /> Copy JSON
          </button>
          <button 
            onClick={() => {
              const blob = new Blob([exportToJson()], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${useCaseDiagram.name || 'use-case-diagram'}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }} 
            className="export-btn"
          >
            <Download size={16} /> Export JSON
          </button>
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          Diagram Editor
        </button>
        <button 
          className={`tab ${activeTab === 'json' ? 'active' : ''}`}
          onClick={() => setActiveTab('json')}
        >
          JSON Editor
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div className="diagram-container">
          <div className="diagram-sidebar">
            <div className="sidebar-section">
              <h3>Actors</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newActor}
                  onChange={(e) => setNewActor(e.target.value)}
                  placeholder="New actor name"
                  onKeyPress={(e) => e.key === 'Enter' && addActor()}
                />
                <button onClick={addActor} className="add-btn">
                  <Plus size={16} /> Add Actor
                </button>
              </div>
              <div className="actor-list">
                {actors.map(actor => (
                  <div key={actor.id} className="list-item">
                    <div className="item-name">{actor.name}</div>
                    <button 
                      onClick={() => deleteActor(actor.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Use Cases</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newUseCase}
                  onChange={(e) => setNewUseCase(e.target.value)}
                  placeholder="New use case name"
                  onKeyPress={(e) => e.key === 'Enter' && addUseCase()}
                />
                <button onClick={addUseCase} className="add-btn">
                  <Plus size={16} /> Add Use Case
                </button>
              </div>
              <div className="use-case-list">
                {useCases.map(useCase => (
                  <div key={useCase.id} className="list-item">
                    <div className="item-name">{useCase.name}</div>
                    <button 
                      onClick={() => deleteUseCase(useCase.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Relationships</h3>
              <div className="form-group">
                <label>Source</label>
                <select 
                  value={selectedSource || ''}
                  onChange={(e) => setSelectedSource(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">Select source</option>
                  <optgroup label="Actors">
                    {actors.map(actor => (
                      <option key={actor.id} value={actor.id}>{actor.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Use Cases">
                    {useCases.map(useCase => (
                      <option key={useCase.id} value={useCase.id}>{useCase.name}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label>Target</label>
                <select 
                  value={selectedTarget || ''}
                  onChange={(e) => setSelectedTarget(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">Select target</option>
                  <optgroup label="Actors">
                    {actors.map(actor => (
                      <option key={actor.id} value={actor.id}>{actor.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Use Cases">
                    {useCases.map(useCase => (
                      <option key={useCase.id} value={useCase.id}>{useCase.name}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label>Relationship Type</label>
                <select 
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                >
                  <option value="association">Association</option>
                  <option value="include">Include</option>
                  <option value="extend">Extend</option>
                  <option value="generalization">Generalization</option>
                </select>
              </div>
              <button 
                onClick={addRelationship}
                disabled={!selectedSource || !selectedTarget}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Relationship
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Current Relationships</h3>
              <div className="relationship-list">
                {relationships.map(rel => {
                  let source, target;
                  let sourceName = '';
                  let targetName = '';
                  
                  source = actors.find(a => a.id === rel.source);
                  if (source) {
                    sourceName = source.name;
                  } else {
                    source = useCases.find(uc => uc.id === rel.source);
                    if (source) sourceName = source.name;
                  }
                  
                  target = actors.find(a => a.id === rel.target);
                  if (target) {
                    targetName = target.name;
                  } else {
                    target = useCases.find(uc => uc.id === rel.target);
                    if (target) targetName = target.name;
                  }
                  
                  if (!source || !target) return null;
                  
                  return (
                    <div key={rel.id} className="list-item">
                      <div className="item-name">
                        {sourceName} → {targetName} ({rel.type})
                      </div>
                      <button 
                        onClick={() => deleteRelationship(rel.id)}
                        className="delete-btn"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div 
            className="diagram-canvas-container" 
            ref={containerRef}
            onMouseDown={handleCanvasMouseDown}
          >
            <div 
              className="diagram-canvas" 
              ref={canvasRef}
              style={{
                transform: `scale(${zoom}) translate(${canvasOffset.x / zoom}px, ${canvasOffset.y / zoom}px)`,
                transformOrigin: '0 0'
              }}
            >
              {renderGrid()}
              {relationships.map(renderRelationship)}
              {actors.map(renderActor)}
              {useCases.map(renderUseCase)}
            </div>
          </div>
        </div>
      ) : (
        <div className="json-editor">
          <div className="json-actions">
            <button 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = handleFileUpload;
                input.click();
              }}
              className="import-btn"
            >
              <Upload size={16} /> Import JSON File
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="json-textarea"
          />
          <button 
            onClick={importFromJson}
            className="import-btn"
          >
            <Save size={16} /> Apply JSON
          </button>
        </div>
      )}

      <style jsx>{`
        .use-case-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 16px;
        }
        
        .tool-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          background: #e2e8f0;
          color: #475569;
        }
        
        .tool-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .zoom-level {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          transition: background 0.2s;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
          color: #6b7280;
        }
        
        .actor-list,
        .use-case-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
          color: #1e293b;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 8px;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-container {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
          cursor: grab;
        }
        
        .diagram-canvas-container:active {
          cursor: grabbing;
        }
        
        .diagram-canvas {
          width: 100%;
          height: 100%;
          position: relative;
          background: #f8fafc;
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .actor {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
          user-select: none;
          color: #1e293b;
        }
        
        .actor-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }
        
        .actor:hover .actor-icon {
          border-color: #3b82f6;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .actor-name {
          margin-top: 8px;
          font-size: 12px;
          text-align: center;
          font-weight: 500;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          max-width: 80px;
          word-wrap: break-word;
          line-height: 1.2;
        }
        
        .use-case {
          position: absolute;
          background: white;
          border: 2px solid #64748b;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          z-index: 10;
          user-select: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
          text-align: center;
          line-height: 1.2;
          color: #1e293b;
        }
        
        .use-case:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .use-case-name {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .relationship {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }
        
        .relationship-label {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-shrink: 0;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          transition: background 0.2s;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Scrollbar styles */
        .actor-list::-webkit-scrollbar,
        .use-case-list::-webkit-scrollbar,
        .relationship-list::-webkit-scrollbar,
        .diagram-sidebar::-webkit-scrollbar,
        .json-textarea::-webkit-scrollbar {
          width: 6px;
        }
        
        .actor-list::-webkit-scrollbar-track,
        .use-case-list::-webkit-scrollbar-track,
        .relationship-list::-webkit-scrollbar-track,
        .diagram-sidebar::-webkit-scrollbar-track,
        .json-textarea::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .actor-list::-webkit-scrollbar-thumb,
        .use-case-list::-webkit-scrollbar-thumb,
        .relationship-list::-webkit-scrollbar-thumb,
        .diagram-sidebar::-webkit-scrollbar-thumb,
        .json-textarea::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .actor-list::-webkit-scrollbar-thumb:hover,
        .use-case-list::-webkit-scrollbar-thumb:hover,
        .relationship-list::-webkit-scrollbar-thumb:hover,
        .diagram-sidebar::-webkit-scrollbar-thumb:hover,
        .json-textarea::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default UseCaseDiagramMaker;