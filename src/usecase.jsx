import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Users, GitMerge, Download, Upload, Image, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';

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
  const [selectedActor, setSelectedActor] = useState(null);
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [relationshipType, setRelationshipType] = useState('association');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Initialize JSON input with current diagram data
  useEffect(() => {
    setJsonInput(JSON.stringify({ actors, useCases, relationships }, null, 2));
  }, [actors, useCases, relationships]);

  const addActor = () => {
    if (!newActor.trim()) return;
    
    const updatedActors = [
      ...actors,
      {
        id: Date.now(),
        name: newActor,
        x: 50 + Math.random() * 100,
        y: 50 + Math.random() * 100
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
        x: 200 + Math.random() * 200,
        y: 100 + Math.random() * 200
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
    if (!selectedActor || !selectedUseCase) return;
    
    const newRelationship = {
      id: Date.now(),
      source: selectedActor,
      target: selectedUseCase,
      type: relationshipType
    };
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      relationships: [...relationships, newRelationship]
    });
    
    setSelectedActor(null);
    setSelectedUseCase(null);
  };

  const deleteRelationship = (relationshipId) => {
    const updatedRelationships = relationships.filter(rel => rel.id !== relationshipId);
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      relationships: updatedRelationships
    });
  };

  const handleMouseDown = (e, item, type) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setDragItem({ ...item, type });
    setDragOffset({
      x: x - item.x,
      y: y - item.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragItem) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;
    
    if (dragItem.type === 'actor') {
      const updatedActors = actors.map(actor => 
        actor.id === dragItem.id ? { ...actor, x, y } : actor
      );
      onUpdateUseCaseDiagram({
        ...useCaseDiagram,
        actors: updatedActors
      });
    } else if (dragItem.type === 'useCase') {
      const updatedUseCases = useCases.map(useCase => 
        useCase.id === dragItem.id ? { ...useCase, x, y } : useCase
      );
      onUpdateUseCaseDiagram({
        ...useCaseDiagram,
        useCases: updatedUseCases
      });
    }
  };

  const handleMouseUp = () => {
    setDragItem(null);
  };

  useEffect(() => {
    if (dragItem) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, handleMouseMove]);

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
    
    html2canvas(canvasRef.current, {
      backgroundColor: '#f8fafc',
      scale: 2
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `${useCaseDiagram.name || 'use-case-diagram'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  const renderActor = (actor) => {
    return (
      <div 
        key={actor.id}
        className="actor"
        style={{
          left: `${actor.x}px`,
          top: `${actor.y}px`,
          cursor: dragItem?.id === actor.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, actor, 'actor')}
      >
        <div className="actor-icon">
          <Users size={24} />
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
          cursor: dragItem?.id === useCase.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, useCase, 'useCase')}
      >
        <div className="use-case-name">{useCase.name}</div>
      </div>
    );
  };

  const renderRelationship = (relationship) => {
    const source = actors.find(a => a.id === relationship.source) || 
                   useCases.find(uc => uc.id === relationship.source);
    const target = useCases.find(uc => uc.id === relationship.target) || 
                  actors.find(a => a.id === relationship.target);
    
    if (!source || !target) return null;

    const sourceX = source.x + (source.hasOwnProperty('name') ? 25 : 75);
    const sourceY = source.y + (source.hasOwnProperty('name') ? 50 : 15);
    const targetX = target.x + (target.hasOwnProperty('name') ? 75 : 25);
    const targetY = target.y + (target.hasOwnProperty('name') ? 15 : 50);

    // Calculate arrow direction
    const dx = targetX - sourceX;
    const dy = targetY - sourceY;
    const angle = Math.atan2(dy, dx);
    const headLength = 10;

    // Adjust starting point to edge of actor/use case
    const startX = sourceX + (source.hasOwnProperty('name') ? 0 : 50 * Math.cos(angle));
    const startY = sourceY + (source.hasOwnProperty('name') ? 0 : 50 * Math.sin(angle));
    const endX = targetX - (target.hasOwnProperty('name') ? 50 * Math.cos(angle) : 0);
    const endY = targetY - (target.hasOwnProperty('name') ? 50 * Math.sin(angle) : 0);

    // Style based on relationship type
    let lineStyle = {};
    if (relationship.type === 'include') {
      lineStyle = { strokeDasharray: '5,5', stroke: '#3b82f6' };
    } else if (relationship.type === 'extend') {
      lineStyle = { strokeDasharray: '5,5', stroke: '#10b981' };
    } else if (relationship.type === 'generalization') {
      lineStyle = { stroke: '#8b5cf6' };
    } else {
      lineStyle = { stroke: '#64748b' };
    }

    return (
      <svg key={relationship.id} className="relationship">
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          strokeWidth="2"
          {...lineStyle}
        />
        {/* Arrowhead */}
        <polygon
          points={`
            ${endX},${endY}
            ${endX - headLength * Math.cos(angle - Math.PI / 6)},${endY - headLength * Math.sin(angle - Math.PI / 6)}
            ${endX - headLength * Math.cos(angle + Math.PI / 6)},${endY - headLength * Math.sin(angle + Math.PI / 6)}
          `}
          fill={lineStyle.stroke || '#64748b'}
        />
        {/* Relationship type label */}
        {relationship.type !== 'association' && (
          <text
            x={(startX + endX) / 2}
            y={(startY + endY) / 2 - 10}
            textAnchor="middle"
            fontSize="12"
            fill={lineStyle.stroke || '#64748b'}
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
                <label>Actor</label>
                <select 
                  value={selectedActor || ''}
                  onChange={(e) => setSelectedActor(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">Select actor</option>
                  {actors.map(actor => (
                    <option key={actor.id} value={actor.id}>{actor.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Use Case</label>
                <select 
                  value={selectedUseCase || ''}
                  onChange={(e) => setSelectedUseCase(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">Select use case</option>
                  {useCases.map(useCase => (
                    <option key={useCase.id} value={useCase.id}>{useCase.name}</option>
                  ))}
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
                disabled={!selectedActor || !selectedUseCase}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Relationship
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Current Relationships</h3>
              <div className="relationship-list">
                {relationships.map(rel => {
                  const actor = actors.find(a => a.id === rel.source) || 
                               actors.find(a => a.id === rel.target);
                  const useCase = useCases.find(uc => uc.id === rel.source) || 
                                 useCases.find(uc => uc.id === rel.target);
                  
                  if (!actor || !useCase) return null;
                  
                  return (
                    <div key={rel.id} className="list-item">
                      <div className="item-name">
                        {actor.name} → {useCase.name} ({rel.type})
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
          
          <div className="diagram-canvas" ref={canvasRef}>
            {relationships.map(renderRelationship)}
            {actors.map(renderActor)}
            {useCases.map(renderUseCase)}
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
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
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
          overflow: auto;
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
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
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
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
        }
        
        .actor-list,
        .use-case-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
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
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }
        
        .actor {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50px;
        }
        
        .actor-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .actor-name {
          margin-top: 4px;
          font-size: 12px;
          text-align: center;
          font-weight: 500;
          background: white;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
        }
        
        .use-case {
          position: absolute;
          width: 150px;
          height: 30px;
          background: white;
          border: 2px solid #64748b;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
        }
        
        .relationship {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn, .fetch-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }
        
        .import-btn {
          background: #10b981;
          color: white;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .fetch-btn {
          background: #3b82f6;
          color: white;
        }
        
        .fetch-btn:hover {
          background: #2563eb;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
};

export default UseCaseDiagramMaker;