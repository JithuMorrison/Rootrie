import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  ArrowLeft,
  Download,
  Copy,
  Upload,
  Save,
  Image,
  Play,
  Square,
  Circle,
  Diamond,
  Merge,
  GitBranch,
  Minus,
  ZoomIn,
  ZoomOut,
  User
} from 'lucide-react';

const ActivityDiagramMaker = ({ 
  activityDiagram, 
  swimlanes = [], 
  nodes = [], 
  edges = [],
  onUpdateActivityDiagram,
  onBack 
}) => {
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedSwimlane, setSelectedSwimlane] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [dragNode, setDragNode] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [selectedTool, setSelectedTool] = useState('select');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [newSwimlaneName, setNewSwimlaneName] = useState('');
  const [swimlaneWidth] = useState(200);

  const [currentSwimlanes, setCurrentSwimlanes] = useState(swimlanes.length > 0 ? swimlanes : [
    { id: 1, name: 'Customer', order: 0 },
    { id: 2, name: 'Order', order: 1 },
    { id: 3, name: 'Accounting', order: 2 },
    { id: 4, name: 'Shipping', order: 3 }
  ]);

  const [currentNodes, setCurrentNodes] = useState(nodes.length > 0 ? nodes : [
    { id: 1, type: 'initial', text: 'Start', x: 100, y: 80, width: 40, height: 40, swimlaneId: 1 },
    { id: 2, type: 'activity', text: 'Place order', x: 60, y: 150, width: 120, height: 60, swimlaneId: 1 },
    { id: 3, type: 'fork', text: '', x: 80, y: 240, width: 80, height: 10, swimlaneId: 1 },
    { id: 4, type: 'activity', text: 'Receive confirmation', x: 40, y: 310, width: 120, height: 60, swimlaneId: 1 },
    { id: 5, type: 'activity', text: 'Take order', x: 260, y: 310, width: 100, height: 60, swimlaneId: 2 },
    { id: 6, type: 'activity', text: 'Process order', x: 460, y: 310, width: 100, height: 60, swimlaneId: 3 },
    { id: 7, type: 'activity', text: 'Pack in box', x: 660, y: 310, width: 100, height: 60, swimlaneId: 4 },
    { id: 8, type: 'activity', text: 'Record shipping', x: 460, y: 420, width: 120, height: 60, swimlaneId: 3 },
    { id: 9, type: 'activity', text: 'Ship order', x: 660, y: 420, width: 100, height: 60, swimlaneId: 4 },
    { id: 10, type: 'join', text: '', x: 80, y: 530, width: 80, height: 10, swimlaneId: 1 },
    { id: 11, type: 'activity', text: 'Receive order', x: 50, y: 600, width: 120, height: 60, swimlaneId: 1 },
    { id: 12, type: 'activity', text: 'Pay bill', x: 60, y: 700, width: 100, height: 60, swimlaneId: 1 },
    { id: 13, type: 'activity', text: 'Close order', x: 460, y: 700, width: 100, height: 60, swimlaneId: 3 },
    { id: 14, type: 'final', text: 'End', x: 490, y: 800, width: 40, height: 40, swimlaneId: 3 }
  ]);

  const [currentEdges, setCurrentEdges] = useState(edges.length > 0 ? edges : [
    { id: 1, source: 1, target: 2, label: '' },
    { id: 2, source: 2, target: 3, label: '' },
    { id: 3, source: 3, target: 4, label: '' },
    { id: 4, source: 3, target: 5, label: '' },
    { id: 5, source: 5, target: 6, label: '' },
    { id: 6, source: 6, target: 7, label: '' },
    { id: 7, source: 6, target: 8, label: '' },
    { id: 8, source: 7, target: 9, label: '' },
    { id: 9, source: 8, target: 9, label: '' },
    { id: 10, source: 4, target: 10, label: '' },
    { id: 11, source: 9, target: 10, label: '' },
    { id: 12, source: 10, target: 11, label: '' },
    { id: 13, source: 11, target: 12, label: '' },
    { id: 14, source: 12, target: 13, label: '' },
    { id: 15, source: 13, target: 14, label: '' }
  ]);

  useEffect(() => {
    if (swimlanes.length > 0) setCurrentSwimlanes(swimlanes);
    if (nodes.length > 0) setCurrentNodes(nodes);
    if (edges.length > 0) setCurrentEdges(edges);
  }, [swimlanes, nodes, edges]);

  useEffect(() => {
    setJsonInput(JSON.stringify({ 
      swimlanes: currentSwimlanes, 
      nodes: currentNodes, 
      edges: currentEdges 
    }, null, 2));
  }, [currentSwimlanes, currentNodes, currentEdges]);

  const nodeTypes = {
    initial: { width: 40, height: 40, color: '#10b981', shape: 'circle' },
    activity: { width: 120, height: 60, color: '#60a5fa', shape: 'rounded' },
    decision: { width: 80, height: 80, color: '#f59e0b', shape: 'diamond' },
    final: { width: 40, height: 40, color: '#1e293b', shape: 'doublecircle' },
    fork: { width: 80, height: 10, color: '#6b7280', shape: 'rectangle' },
    join: { width: 80, height: 10, color: '#6b7280', shape: 'rectangle' }
  };

  const calculateNodeDimensions = (type, text) => {
    const base = nodeTypes[type];
    if (type === 'activity') {
      const textWidth = Math.max(100, text.length * 7 + 30);
      return { ...base, width: Math.min(textWidth, 180) };
    }
    return base;
  };

  const addSwimlane = () => {
    if (!newSwimlaneName.trim()) return;
    
    const newSwimlane = {
      id: Date.now(),
      name: newSwimlaneName,
      order: currentSwimlanes.length
    };
    
    const updatedSwimlanes = [...currentSwimlanes, newSwimlane];
    setCurrentSwimlanes(updatedSwimlanes);
    setNewSwimlaneName('');
    
    onUpdateActivityDiagram({
      ...activityDiagram,
      swimlanes: updatedSwimlanes,
      nodes: currentNodes,
      edges: currentEdges
    });
  };

  const deleteSwimlane = (swimlaneId) => {
    const updatedSwimlanes = currentSwimlanes.filter(s => s.id !== swimlaneId);
    const updatedNodes = currentNodes.filter(n => n.swimlaneId !== swimlaneId);
    
    setCurrentSwimlanes(updatedSwimlanes);
    setCurrentNodes(updatedNodes);
    setSelectedSwimlane(null);
    
    onUpdateActivityDiagram({
      ...activityDiagram,
      swimlanes: updatedSwimlanes,
      nodes: updatedNodes,
      edges: currentEdges
    });
  };

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation();
    if (selectedTool === 'select') {
      setSelectedNode(node.id);
      setDragNode(node);
      setIsDragging(true);
      const rect = canvasRef.current.getBoundingClientRect();
      setDragStart({ 
        x: (e.clientX - rect.left) / zoom - node.x, 
        y: (e.clientY - rect.top) / zoom - node.y 
      });
    } else if (selectedTool === 'connection') {
      setConnectionStart(node.id);
      setIsConnecting(true);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && dragNode && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const newX = (e.clientX - rect.left) / zoom - dragStart.x;
      const newY = (e.clientY - rect.top) / zoom - dragStart.y;

      setCurrentNodes(prev => prev.map(node => 
        node.id === dragNode.id ? { ...node, x: Math.max(0, newX), y: Math.max(0, newY) } : node
      ));
    }
  }, [isDragging, dragNode, dragStart, zoom]);

  const handleMouseUp = useCallback((e) => {
    if (isConnecting && connectionStart && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / zoom;
      const mouseY = (e.clientY - rect.top) / zoom;

      const targetNode = currentNodes.find(node => {
        return mouseX >= node.x && mouseX <= node.x + node.width &&
               mouseY >= node.y && mouseY <= node.y + node.height;
      });

      if (targetNode && targetNode.id !== connectionStart) {
        const newEdge = {
          id: Date.now(),
          source: connectionStart,
          target: targetNode.id,
          label: ''
        };
        const updatedEdges = [...currentEdges, newEdge];
        setCurrentEdges(updatedEdges);
        
        onUpdateActivityDiagram({
          ...activityDiagram,
          swimlanes: currentSwimlanes,
          nodes: currentNodes,
          edges: updatedEdges
        });
      }
    }

    setIsDragging(false);
    setDragNode(null);
    setIsConnecting(false);
    setConnectionStart(null);
  }, [isConnecting, connectionStart, currentNodes, currentEdges, currentSwimlanes, zoom, activityDiagram, onUpdateActivityDiagram]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const addNode = (type, swimlaneId) => {
    if (!swimlaneId && currentSwimlanes.length > 0) {
      swimlaneId = currentSwimlanes[0].id;
    }

    const swimlaneIndex = currentSwimlanes.findIndex(s => s.id === swimlaneId);
    const xPos = 80 + (swimlaneIndex * swimlaneWidth);
    
    const newNode = {
      id: Date.now(),
      type,
      text: type === 'initial' ? 'Start' : 
            type === 'final' ? 'End' : 
            type === 'decision' ? 'Decision' : 
            type === 'fork' ? '' : 
            type === 'join' ? '' : 'New Activity',
      x: xPos,
      y: 200,
      swimlaneId,
      ...calculateNodeDimensions(type, 'New Activity')
    };

    const updatedNodes = [...currentNodes, newNode];
    setCurrentNodes(updatedNodes);
    setSelectedNode(newNode.id);

    onUpdateActivityDiagram({
      ...activityDiagram,
      swimlanes: currentSwimlanes,
      nodes: updatedNodes,
      edges: currentEdges
    });
  };

  const deleteNode = (nodeId) => {
    const updatedNodes = currentNodes.filter(n => n.id !== nodeId);
    const updatedEdges = currentEdges.filter(e => 
      e.source !== nodeId && e.target !== nodeId
    );
    
    setCurrentNodes(updatedNodes);
    setCurrentEdges(updatedEdges);
    setSelectedNode(null);

    onUpdateActivityDiagram({
      ...activityDiagram,
      swimlanes: currentSwimlanes,
      nodes: updatedNodes,
      edges: updatedEdges
    });
  };

  const deleteEdge = (edgeId) => {
    const updatedEdges = currentEdges.filter(e => e.id !== edgeId);
    setCurrentEdges(updatedEdges);

    onUpdateActivityDiagram({
      ...activityDiagram,
      swimlanes: currentSwimlanes,
      nodes: currentNodes,
      edges: updatedEdges
    });
  };

  const updateNodeText = (nodeId, text) => {
    const updatedNodes = currentNodes.map(n => 
      n.id === nodeId 
        ? { ...n, text, ...calculateNodeDimensions(n.type, text) } 
        : n
    );
    
    setCurrentNodes(updatedNodes);

    onUpdateActivityDiagram({
      ...activityDiagram,
      swimlanes: currentSwimlanes,
      nodes: updatedNodes,
      edges: currentEdges
    });
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleZoomReset = () => setZoom(1);

  const exportToJson = () => {
    const data = { swimlanes: currentSwimlanes, nodes: currentNodes, edges: currentEdges };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.swimlanes) && Array.isArray(data.nodes) && Array.isArray(data.edges)) {
        setCurrentSwimlanes(data.swimlanes);
        setCurrentNodes(data.nodes);
        setCurrentEdges(data.edges);
        
        onUpdateActivityDiagram({
          ...activityDiagram,
          swimlanes: data.swimlanes,
          nodes: data.nodes,
          edges: data.edges
        });
      } else {
        alert('Invalid JSON format. Expected swimlanes, nodes and edges arrays.');
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
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(canvasRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${activityDiagram.name || 'activity-diagram'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  };

  const getConnectionPath = (sourceNode, targetNode) => {
    const getNodeCenter = (node) => ({
      x: node.x + node.width / 2,
      y: node.y + node.height / 2
    });

    const source = getNodeCenter(sourceNode);
    const target = getNodeCenter(targetNode);
    
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    
    if (Math.abs(dx) > Math.abs(dy)) {
      const midY = source.y;
      return `M ${source.x} ${source.y} L ${target.x} ${midY} L ${target.x} ${target.y}`;
    } else {
      const midX = source.x;
      return `M ${source.x} ${source.y} L ${midX} ${target.y} L ${target.x} ${target.y}`;
    }
  };

  const renderSwimlane = (swimlane, index) => {
    const x = index * swimlaneWidth;
    const height = Math.max(900, currentNodes.reduce((max, n) => Math.max(max, n.y + n.height + 100), 0));
    
    return (
      <g key={swimlane.id}>
        <rect
          x={x}
          y={0}
          width={swimlaneWidth}
          height={height}
          fill={index % 2 === 0 ? '#ffffff' : '#f9fafb'}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <text
          x={x + swimlaneWidth / 2}
          y={30}
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#1f2937"
        >
          {swimlane.name}
        </text>
        <line
          x1={x}
          y1={50}
          x2={x + swimlaneWidth}
          y2={50}
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </g>
    );
  };

  const renderNode = (node) => {
    const isSelected = selectedNode === node.id;
    const nodeConfig = nodeTypes[node.type];

    return (
      <g
        key={node.id}
        className={`node-group ${isSelected ? 'selected' : ''}`}
        onMouseDown={(e) => handleNodeMouseDown(e, node)}
        style={{ cursor: selectedTool === 'select' ? 'move' : 'crosshair' }}
      >
        {nodeConfig.shape === 'circle' && (
          <circle
            cx={node.x + node.width / 2}
            cy={node.y + node.height / 2}
            r={node.width / 2}
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : '#fff'}
            strokeWidth={isSelected ? '3' : '2'}
          />
        )}
        
        {nodeConfig.shape === 'doublecircle' && (
          <>
            <circle
              cx={node.x + node.width / 2}
              cy={node.y + node.height / 2}
              r={node.width / 2}
              fill="none"
              stroke={nodeConfig.color}
              strokeWidth="3"
            />
            <circle
              cx={node.x + node.width / 2}
              cy={node.y + node.height / 2}
              r={node.width / 2 - 5}
              fill={nodeConfig.color}
              stroke="none"
            />
          </>
        )}
        
        {nodeConfig.shape === 'rounded' && (
          <rect
            x={node.x}
            y={node.y}
            width={node.width}
            height={node.height}
            rx="15"
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : '#fff'}
            strokeWidth={isSelected ? '2' : '1'}
          />
        )}
        
        {nodeConfig.shape === 'diamond' && (
          <polygon
            points={`
              ${node.x + node.width / 2},${node.y} 
              ${node.x + node.width},${node.y + node.height / 2} 
              ${node.x + node.width / 2},${node.y + node.height} 
              ${node.x},${node.y + node.height / 2}
            `}
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : '#fff'}
            strokeWidth={isSelected ? '2' : '1'}
          />
        )}
        
        {nodeConfig.shape === 'rectangle' && (
          <rect
            x={node.x}
            y={node.y}
            width={node.width}
            height={node.height}
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : 'none'}
            strokeWidth="2"
          />
        )}
        
        {(node.type !== 'fork' && node.type !== 'join' && node.type !== 'initial' && node.type !== 'final') && (
          <text
            x={node.x + node.width / 2}
            y={node.y + node.height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="11"
            fontWeight="500"
          >
            {node.text.length > 18 ? node.text.substring(0, 18) + '...' : node.text}
          </text>
        )}
      </g>
    );
  };

  const renderEdge = (edge) => {
    const sourceNode = currentNodes.find(n => n.id === edge.source);
    const targetNode = currentNodes.find(n => n.id === edge.target);
    
    if (!sourceNode || !targetNode) return null;

    const path = getConnectionPath(sourceNode, targetNode);

    return (
      <g key={edge.id} className="edge-group">
        <path
          d={path}
          stroke="#6b7280"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {edge.label && (
          <text
            x={(sourceNode.x + targetNode.x) / 2}
            y={(sourceNode.y + targetNode.y) / 2 - 10}
            fill="#6b7280"
            fontSize="10"
            fontWeight="500"
          >
            {edge.label}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="activity-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{activityDiagram.name}</h2>
        <div className="spacer"></div>
        
        <div className="zoom-controls">
          <button onClick={handleZoomOut} className="zoom-btn">
            <ZoomOut size={16} />
          </button>
          <span className="zoom-level">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="zoom-btn">
            <ZoomIn size={16} />
          </button>
          <button onClick={handleZoomReset} className="zoom-btn">
            Reset
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
              a.download = `${activityDiagram.name || 'activity-diagram'}.json`;
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
          <div className="sidebar">
            <div className="sidebar-section">
              <h3>Swimlanes</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newSwimlaneName}
                  onChange={(e) => setNewSwimlaneName(e.target.value)}
                  placeholder="New swimlane name"
                  onKeyPress={(e) => e.key === 'Enter' && addSwimlane()}
                />
              </div>
              <button onClick={addSwimlane} className="add-btn">
                <Plus size={16} /> Add Swimlane
              </button>
              <div className="list">
                {currentSwimlanes.map(swimlane => (
                  <div key={swimlane.id} className="list-item">
                    <div className="item-info">
                      <div className="item-name">{swimlane.name}</div>
                    </div>
                    <button 
                      onClick={() => deleteSwimlane(swimlane.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Tools</h3>
              <button 
                className={`tool-btn ${selectedTool === 'select' ? 'active' : ''}`}
                onClick={() => setSelectedTool('select')}
              >
                Select & Move
              </button>
              <button 
                className={`tool-btn ${selectedTool === 'connection' ? 'active' : ''}`}
                onClick={() => setSelectedTool('connection')}
              >
                <GitBranch size={16} /> Create Connection
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Add Nodes</h3>
              {currentSwimlanes.length > 0 && (
                <div className="form-group">
                  <label>Swimlane</label>
                  <select 
                    value={selectedSwimlane || currentSwimlanes[0]?.id || ''}
                    onChange={(e) => setSelectedSwimlane(parseInt(e.target.value))}
                  >
                    {currentSwimlanes.map(swimlane => (
                      <option key={swimlane.id} value={swimlane.id}>{swimlane.name}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="node-buttons">
                <button onClick={() => addNode('initial', selectedSwimlane || currentSwimlanes[0]?.id)}>
                  <Play size={14} /> Initial
                </button>
                <button onClick={() => addNode('activity', selectedSwimlane || currentSwimlanes[0]?.id)}>
                  <Square size={14} /> Activity
                </button>
                <button onClick={() => addNode('decision', selectedSwimlane || currentSwimlanes[0]?.id)}>
                  <Diamond size={14} /> Decision
                </button>
                <button onClick={() => addNode('fork', selectedSwimlane || currentSwimlanes[0]?.id)}>
                  <Minus size={14} /> Fork
                </button>
                <button onClick={() => addNode('join', selectedSwimlane || currentSwimlanes[0]?.id)}>
                  <Merge size={14} /> Join
                </button>
                <button onClick={() => addNode('final', selectedSwimlane || currentSwimlanes[0]?.id)}>
                  <Circle size={14} /> Final
                </button>
              </div>
            </div>
          </div>
          
          <div className="canvas-wrapper">
            <div 
              className="canvas" 
              ref={canvasRef}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top left'
              }}
            >
              <svg
                width={currentSwimlanes.length * swimlaneWidth}
                height={Math.max(900, currentNodes.reduce((max, n) => Math.max(max, n.y + n.height + 100), 0))}
                style={{ background: '#fff' }}
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#6b7280"
                    />
                  </marker>
                </defs>

                {/* Swimlanes */}
                {currentSwimlanes.map((swimlane, index) => renderSwimlane(swimlane, index))}

                {/* Edges */}
                {currentEdges.map(edge => renderEdge(edge))}

                {/* Nodes */}
                {currentNodes.map(node => renderNode(node))}

                {/* Connection in progress */}
                {isConnecting && connectionStart && (
                  <line
                    x1={currentNodes.find(n => n.id === connectionStart)?.x + currentNodes.find(n => n.id === connectionStart)?.width / 2}
                    y1={currentNodes.find(n => n.id === connectionStart)?.y + currentNodes.find(n => n.id === connectionStart)?.height / 2}
                    x2={0}
                    y2={0}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )}
              </svg>
            </div>
          </div>

          {/* Properties Panel */}
          {selectedNode && (
            <div className="properties-panel">
              <h3>Properties</h3>
              {(() => {
                const node = currentNodes.find(n => n.id === selectedNode);
                if (!node) return null;

                return (
                  <div className="property-group">
                    {node.type !== 'fork' && node.type !== 'join' && (
                      <>
                        <label>Text</label>
                        <input
                          type="text"
                          value={node.text}
                          onChange={(e) => updateNodeText(node.id, e.target.value)}
                        />
                      </>
                    )}
                    
                    <label>Type</label>
                    <select
                      value={node.type}
                      onChange={(e) => {
                        const updatedNodes = currentNodes.map(n => 
                          n.id === selectedNode 
                            ? { ...n, type: e.target.value, ...calculateNodeDimensions(e.target.value, n.text) } 
                            : n
                        );
                        setCurrentNodes(updatedNodes);
                        
                        onUpdateActivityDiagram({
                          ...activityDiagram,
                          swimlanes: currentSwimlanes,
                          nodes: updatedNodes,
                          edges: currentEdges
                        });
                      }}
                    >
                      <option value="initial">Initial Node</option>
                      <option value="activity">Activity</option>
                      <option value="decision">Decision</option>
                      <option value="fork">Fork</option>
                      <option value="join">Join</option>
                      <option value="final">Final Node</option>
                    </select>

                    <label>Swimlane</label>
                    <select
                      value={node.swimlaneId || ''}
                      onChange={(e) => {
                        const updatedNodes = currentNodes.map(n => 
                          n.id === selectedNode 
                            ? { ...n, swimlaneId: parseInt(e.target.value) } 
                            : n
                        );
                        setCurrentNodes(updatedNodes);
                        
                        onUpdateActivityDiagram({
                          ...activityDiagram,
                          swimlanes: currentSwimlanes,
                          nodes: updatedNodes,
                          edges: currentEdges
                        });
                      }}
                    >
                      {currentSwimlanes.map(swimlane => (
                        <option key={swimlane.id} value={swimlane.id}>{swimlane.name}</option>
                      ))}
                    </select>

                    <button 
                      onClick={() => deleteNode(selectedNode)}
                      className="delete-node-btn"
                    >
                      <Trash2 size={14} /> Delete Node
                    </button>
                  </div>
                );
              })()}
            </div>
          )}
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
        .activity-maker {
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
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          gap: 12px;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        
        .spacer {
          flex: 1;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 6px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          color: #475569;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
        }
        
        .zoom-level {
          font-size: 12px;
          font-weight: 500;
          padding: 0 8px;
          color: #475569;
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
          font-size: 14px;
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
          font-size: 14px;
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
        
        .sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          overflow-y: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin: 0 0 12px 0;
          font-size: 14px;
          color: #1e293b;
          font-weight: 600;
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
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 12px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .list {
          margin-top: 12px;
          max-height: 200px;
          overflow-y: auto;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-info {
          flex: 1;
        }
        
        .item-name {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 4px;
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
        
        .tool-btn {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 8px;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
        }
        
        .tool-btn.active {
          border-color: #3b82f6;
          background: #dbeafe;
          color: #3b82f6;
        }
        
        .node-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        
        .node-buttons button {
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 500;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.2s;
        }
        
        .node-buttons button:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          color: #3b82f6;
        }
        
        .canvas-wrapper {
          flex: 1;
          background: #f9fafb;
          overflow: auto;
          position: relative;
        }
        
        .canvas {
          transform-origin: top left;
          min-width: 100%;
          min-height: 100%;
        }
        
        .node-group {
          transition: all 0.1s ease;
        }
        
        .node-group.selected {
          filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.6));
        }
        
        .properties-panel {
          width: 260px;
          background: white;
          border-left: 1px solid #e2e8f0;
          padding: 16px;
          overflow-y: auto;
        }
        
        .properties-panel h3 {
          margin: 0 0 16px 0;
          font-size: 14px;
          color: #1e293b;
          font-weight: 600;
        }
        
        .property-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .property-group label {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          margin-bottom: -6px;
        }
        
        .property-group input,
        .property-group select {
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
        }
        
        .property-group input:focus,
        .property-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
        
        .delete-node-btn {
          background: #fee2e2;
          color: #ef4444;
          border: 1px solid #fecaca;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 13px;
          font-weight: 500;
        }
        
        .delete-node-btn:hover {
          background: #fecaca;
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
          font-size: 14px;
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
          font-size: 12px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default ActivityDiagramMaker;