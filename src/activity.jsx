import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
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
  MousePointer,
  Move
} from 'lucide-react';

const ActivityDiagramMaker = () => {
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
  const [connectionMouse, setConnectionMouse] = useState({ x: 0, y: 0 });
  const [newSwimlaneName, setNewSwimlaneName] = useState('');
  const [swimlaneWidth] = useState(220);
  const [diagramName, setDiagramName] = useState('Activity Diagram');

  const [currentSwimlanes, setCurrentSwimlanes] = useState([
    { id: 1, name: 'Customer', order: 0 },
    { id: 2, name: 'Order System', order: 1 },
    { id: 3, name: 'Accounting', order: 2 },
    { id: 4, name: 'Shipping', order: 3 }
  ]);

  const [currentNodes, setCurrentNodes] = useState([]);

  const [currentEdges, setCurrentEdges] = useState([]);

  useEffect(() => {
    setJsonInput(JSON.stringify({ 
      name: diagramName,
      swimlanes: currentSwimlanes, 
      nodes: currentNodes, 
      edges: currentEdges 
    }, null, 2));
  }, [currentSwimlanes, currentNodes, currentEdges, diagramName]);

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
      const textWidth = Math.max(100, text.length * 8 + 40);
      return { ...base, width: Math.min(textWidth, 180) };
    }
    return base;
  };

  // Get swimlane bounds
  const getSwimlaneById = (swimlaneId) => {
    const swimlane = currentSwimlanes.find(s => s.id === swimlaneId);
    if (!swimlane) return null;
    const index = currentSwimlanes.findIndex(s => s.id === swimlaneId);
    return {
      ...swimlane,
      x: index * swimlaneWidth,
      width: swimlaneWidth,
      centerX: index * swimlaneWidth + swimlaneWidth / 2
    };
  };

  // Center node in swimlane
  const centerNodeInSwimlane = (node) => {
    const swimlane = getSwimlaneById(node.swimlaneId);
    if (!swimlane) return node;
    
    const centeredX = swimlane.centerX - node.width / 2;
    return { ...node, x: centeredX };
  };

  // Constrain node position within swimlane
  const constrainNodeToSwimlane = (node, newX, newY) => {
    const swimlane = getSwimlaneById(node.swimlaneId);
    if (!swimlane) return { x: newX, y: newY };

    const minX = swimlane.x + 10;
    const maxX = swimlane.x + swimlane.width - node.width - 10;
    const minY = 60;

    const constrainedX = Math.max(minX, Math.min(maxX, newX));
    const constrainedY = Math.max(minY, newY);

    return { x: constrainedX, y: constrainedY };
  };

  // Detect which swimlane the node is in
  const detectSwimlaneForPosition = (x, nodeWidth) => {
    const nodeCenterX = x + nodeWidth / 2;
    
    for (let i = 0; i < currentSwimlanes.length; i++) {
      const swimlaneX = i * swimlaneWidth;
      if (nodeCenterX >= swimlaneX && nodeCenterX < swimlaneX + swimlaneWidth) {
        return currentSwimlanes[i].id;
      }
    }
    
    return currentSwimlanes[0]?.id || null;
  };

  const addSwimlane = () => {
    if (!newSwimlaneName.trim()) return;
    
    const newSwimlane = {
      id: Date.now(),
      name: newSwimlaneName,
      order: currentSwimlanes.length
    };
    
    setCurrentSwimlanes([...currentSwimlanes, newSwimlane]);
    setNewSwimlaneName('');
  };

  const deleteSwimlane = (swimlaneId) => {
    if (currentSwimlanes.length <= 1) {
      alert('Cannot delete the last swimlane');
      return;
    }

    const updatedSwimlanes = currentSwimlanes.filter(s => s.id !== swimlaneId);
    const updatedNodes = currentNodes.filter(n => n.swimlaneId !== swimlaneId);
    
    setCurrentSwimlanes(updatedSwimlanes);
    setCurrentNodes(updatedNodes);
    setSelectedSwimlane(null);
  };

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation();
    setSelectedNode(node.id);
    
    if (selectedTool === 'select') {
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
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / zoom;
      const mouseY = (e.clientY - rect.top) / zoom;
      
      if (isConnecting) {
        setConnectionMouse({ x: mouseX, y: mouseY });
      }

      if (isDragging && dragNode) {
        let newX = mouseX - dragStart.x;
        let newY = mouseY - dragStart.y;

        // Constrain to swimlane bounds
        const constrained = constrainNodeToSwimlane(dragNode, newX, newY);
        
        // Detect swimlane change
        const newSwimlaneId = detectSwimlaneForPosition(constrained.x, dragNode.width);

        setCurrentNodes(prev => prev.map(node => 
          node.id === dragNode.id 
            ? { ...node, x: constrained.x, y: constrained.y, swimlaneId: newSwimlaneId } 
            : node
        ));
      }
    }
  }, [isDragging, isConnecting, dragNode, dragStart, zoom]);

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
        const existingEdge = currentEdges.find(
          e => e.source === connectionStart && e.target === targetNode.id
        );
        
        if (!existingEdge) {
          const newEdge = {
            id: Date.now(),
            source: connectionStart,
            target: targetNode.id,
            label: ''
          };
          setCurrentEdges([...currentEdges, newEdge]);
        }
      }
    }

    setIsDragging(false);
    setDragNode(null);
    setIsConnecting(false);
    setConnectionStart(null);
  }, [isConnecting, connectionStart, currentNodes, currentEdges, zoom]);

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

    const swimlane = getSwimlaneById(swimlaneId);
    if (!swimlane) return;
    
    const newNode = {
      id: Date.now(),
      type,
      text: type === 'initial' ? 'Start' : 
            type === 'final' ? 'End' : 
            type === 'decision' ? 'Decision' : 
            type === 'fork' ? '' : 
            type === 'join' ? '' : 'New Activity',
      y: 200,
      swimlaneId,
      ...calculateNodeDimensions(type, 'New Activity')
    };

    // Center the node in the swimlane
    const centeredNode = centerNodeInSwimlane(newNode);

    setCurrentNodes([...currentNodes, centeredNode]);
    setSelectedNode(centeredNode.id);
  };

  const deleteNode = (nodeId) => {
    setCurrentNodes(currentNodes.filter(n => n.id !== nodeId));
    setCurrentEdges(currentEdges.filter(e => e.source !== nodeId && e.target !== nodeId));
    setSelectedNode(null);
  };

  const deleteEdge = (edgeId) => {
    setCurrentEdges(currentEdges.filter(e => e.id !== edgeId));
  };

  const updateNodeText = (nodeId, text) => {
    setCurrentNodes(currentNodes.map(n => 
      n.id === nodeId 
        ? { ...n, text, ...calculateNodeDimensions(n.type, text) } 
        : n
    ));
  };

  const centerNodeInCurrentSwimlane = (nodeId) => {
    setCurrentNodes(currentNodes.map(n => 
      n.id === nodeId ? centerNodeInSwimlane(n) : n
    ));
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleZoomReset = () => setZoom(1);

  const exportToJson = () => {
    const data = { 
      name: diagramName,
      swimlanes: currentSwimlanes, 
      nodes: currentNodes, 
      edges: currentEdges 
    };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
    alert('JSON copied to clipboard!');
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (data.swimlanes && data.nodes && data.edges) {
        setCurrentSwimlanes(data.swimlanes);
        setCurrentNodes(data.nodes);
        setCurrentEdges(data.edges);
        if (data.name) setDiagramName(data.name);
        alert('Diagram imported successfully!');
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
    const height = Math.max(1000, currentNodes.reduce((max, n) => Math.max(max, n.y + n.height + 150), 0));
    
    return (
      <g key={swimlane.id}>
        <rect
          x={x}
          y={0}
          width={swimlaneWidth}
          height={height}
          fill={index % 2 === 0 ? '#ffffff' : '#f9fafb'}
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <text
          x={x + swimlaneWidth / 2}
          y={30}
          textAnchor="middle"
          fontSize="15"
          fontWeight="600"
          fill="#1f2937"
        >
          {swimlane.name}
        </text>
        <line
          x1={x}
          y1={55}
          x2={x + swimlaneWidth}
          y2={55}
          stroke="#d1d5db"
          strokeWidth="2"
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
        className="node-group"
        onMouseDown={(e) => handleNodeMouseDown(e, node)}
        style={{ 
          cursor: selectedTool === 'select' ? 'move' : 'crosshair',
          pointerEvents: 'all'
        }}
      >
        {nodeConfig.shape === 'circle' && (
          <circle
            cx={node.x + node.width / 2}
            cy={node.y + node.height / 2}
            r={node.width / 2}
            fill={nodeConfig.color}
            stroke={isSelected ? '#3b82f6' : '#fff'}
            strokeWidth={isSelected ? '3' : '2'}
            style={{ filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'none' }}
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
              style={{ filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'none' }}
            />
            <circle
              cx={node.x + node.width / 2}
              cy={node.y + node.height / 2}
              r={node.width / 2 - 5}
              fill={nodeConfig.color}
              stroke={isSelected ? '#3b82f6' : 'none'}
              strokeWidth={isSelected ? '2' : '0'}
            />
          </>
        )}
        
        {nodeConfig.shape === 'rounded' && (
          <rect
            x={node.x}
            y={node.y}
            width={node.width}
            height={node.height}
            rx="12"
            fill={nodeConfig.color}
            stroke={isSelected ? '#3b82f6' : '#fff'}
            strokeWidth={isSelected ? '3' : '2'}
            style={{ filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
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
            stroke={isSelected ? '#3b82f6' : '#fff'}
            strokeWidth={isSelected ? '3' : '2'}
            style={{ filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        )}
        
        {nodeConfig.shape === 'rectangle' && (
          <rect
            x={node.x}
            y={node.y}
            width={node.width}
            height={node.height}
            fill={nodeConfig.color}
            stroke={isSelected ? '#3b82f6' : '#6b7280'}
            strokeWidth={isSelected ? '3' : '2'}
            style={{ filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'none' }}
          />
        )}
        
        {(node.type !== 'fork' && node.type !== 'join' && node.type !== 'initial' && node.type !== 'final') && (
          <text
            x={node.x + node.width / 2}
            y={node.y + node.height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="12"
            fontWeight="600"
          >
            {node.text.length > 20 ? node.text.substring(0, 20) + '...' : node.text}
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
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm('Delete this connection?')) {
              deleteEdge(edge.id);
            }
          }}
        />
        
        {edge.label && (
          <text
            x={(sourceNode.x + targetNode.x) / 2}
            y={(sourceNode.y + targetNode.y) / 2 - 10}
            fill="#374151"
            fontSize="11"
            fontWeight="500"
            style={{ pointerEvents: 'none' }}
          >
            {edge.label}
          </text>
        )}
      </g>
    );
  };

  const canvasHeight = Math.max(1000, currentNodes.reduce((max, n) => Math.max(max, n.y + n.height + 150), 0));
  const canvasWidth = currentSwimlanes.length * swimlaneWidth;

  return (
    <div className="activity-maker">
      <div className="toolbar">
        <div className="toolbar-left">
          <input
            type="text"
            value={diagramName}
            onChange={(e) => setDiagramName(e.target.value)}
            className="diagram-name-input"
          />
        </div>
        
        <div className="toolbar-center">
          <div className="zoom-controls">
            <button onClick={handleZoomOut} className="zoom-btn" title="Zoom Out">
              <ZoomOut size={16} />
            </button>
            <span className="zoom-level">{Math.round(zoom * 100)}%</span>
            <button onClick={handleZoomIn} className="zoom-btn" title="Zoom In">
              <ZoomIn size={16} />
            </button>
            <button onClick={handleZoomReset} className="zoom-btn" title="Reset Zoom">
              Reset
            </button>
          </div>
        </div>
        
        <div className="toolbar-right">
          <button onClick={copyToClipboard} className="export-btn" title="Copy JSON">
            <Copy size={16} /> Copy
          </button>
          <button 
            onClick={() => {
              const blob = new Blob([exportToJson()], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${diagramName.replace(/\s+/g, '-').toLowerCase()}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }} 
            className="export-btn"
            title="Download JSON"
          >
            <Download size={16} /> Export
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
              <h3>Tools</h3>
              <button 
                className={`tool-btn ${selectedTool === 'select' ? 'active' : ''}`}
                onClick={() => setSelectedTool('select')}
              >
                <MousePointer size={16} /> Select & Move
              </button>
              <button 
                className={`tool-btn ${selectedTool === 'connection' ? 'active' : ''}`}
                onClick={() => setSelectedTool('connection')}
              >
                <GitBranch size={16} /> Create Connection
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Swimlanes</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newSwimlaneName}
                  onChange={(e) => setNewSwimlaneName(e.target.value)}
                  placeholder="Swimlane name"
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
                      title="Delete swimlane"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Add Nodes</h3>
              {currentSwimlanes.length > 0 && (
                <div className="form-group">
                  <label>Target Swimlane</label>
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
                <button onClick={() => addNode('initial', selectedSwimlane || currentSwimlanes[0]?.id)} title="Start node">
                  <Play size={14} /> Initial
                </button>
                <button onClick={() => addNode('activity', selectedSwimlane || currentSwimlanes[0]?.id)} title="Activity node">
                  <Square size={14} /> Activity
                </button>
                <button onClick={() => addNode('decision', selectedSwimlane || currentSwimlanes[0]?.id)} title="Decision node">
                  <Diamond size={14} /> Decision
                </button>
                <button onClick={() => addNode('fork', selectedSwimlane || currentSwimlanes[0]?.id)} title="Fork node">
                  <Minus size={14} /> Fork
                </button>
                <button onClick={() => addNode('join', selectedSwimlane || currentSwimlanes[0]?.id)} title="Join node">
                  <Merge size={14} /> Join
                </button>
                <button onClick={() => addNode('final', selectedSwimlane || currentSwimlanes[0]?.id)} title="End node">
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
                transformOrigin: 'top left',
                width: canvasWidth,
                height: canvasHeight
              }}
            >
              <svg
                ref={svgRef}
                width={canvasWidth}
                height={canvasHeight}
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
                    x2={connectionMouse.x}
                    y2={connectionMouse.y}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
              </svg>
            </div>
          </div>

          {/* Properties Panel */}
          {selectedNode && (
            <div className="properties-panel">
              <h3>Node Properties</h3>
              {(() => {
                const node = currentNodes.find(n => n.id === selectedNode);
                if (!node) return null;

                return (
                  <div className="property-group">
                    <label>Node ID</label>
                    <input
                      type="text"
                      value={node.id}
                      disabled
                      className="disabled-input"
                    />

                    {node.type !== 'fork' && node.type !== 'join' && (
                      <>
                        <label>Text Label</label>
                        <input
                          type="text"
                          value={node.text}
                          onChange={(e) => updateNodeText(node.id, e.target.value)}
                          placeholder="Enter text"
                        />
                      </>
                    )}
                    
                    <label>Node Type</label>
                    <select
                      value={node.type}
                      onChange={(e) => {
                        const updatedNodes = currentNodes.map(n => 
                          n.id === selectedNode 
                            ? { ...n, type: e.target.value, ...calculateNodeDimensions(e.target.value, n.text) } 
                            : n
                        );
                        setCurrentNodes(updatedNodes);
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
                        const newSwimlaneId = parseInt(e.target.value);
                        const updatedNodes = currentNodes.map(n => {
                          if (n.id === selectedNode) {
                            const updatedNode = { ...n, swimlaneId: newSwimlaneId };
                            return centerNodeInSwimlane(updatedNode);
                          }
                          return n;
                        });
                        setCurrentNodes(updatedNodes);
                      }}
                    >
                      {currentSwimlanes.map(swimlane => (
                        <option key={swimlane.id} value={swimlane.id}>{swimlane.name}</option>
                      ))}
                    </select>

                    <label>Position</label>
                    <div className="position-group">
                      <div className="position-item">
                        <span>X:</span>
                        <input
                          type="number"
                          value={Math.round(node.x)}
                          onChange={(e) => {
                            const newX = parseInt(e.target.value) || 0;
                            const constrained = constrainNodeToSwimlane(node, newX, node.y);
                            setCurrentNodes(currentNodes.map(n => 
                              n.id === selectedNode ? { ...n, x: constrained.x } : n
                            ));
                          }}
                        />
                      </div>
                      <div className="position-item">
                        <span>Y:</span>
                        <input
                          type="number"
                          value={Math.round(node.y)}
                          onChange={(e) => {
                            const newY = parseInt(e.target.value) || 0;
                            const constrained = constrainNodeToSwimlane(node, node.x, newY);
                            setCurrentNodes(currentNodes.map(n => 
                              n.id === selectedNode ? { ...n, y: constrained.y } : n
                            ));
                          }}
                        />
                      </div>
                    </div>

                    <button 
                      onClick={() => centerNodeInCurrentSwimlane(selectedNode)}
                      className="center-btn"
                    >
                      <Move size={14} /> Center in Swimlane
                    </button>

                    <button 
                      onClick={() => {
                        if (window.confirm('Delete this node and all connected edges?')) {
                          deleteNode(selectedNode);
                        }
                      }}
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
            <button 
              onClick={importFromJson}
              className="import-btn apply-btn"
            >
              <Save size={16} /> Apply Changes
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="json-textarea"
            placeholder="Paste or edit JSON here..."
          />
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .activity-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: white;
          border-bottom: 2px solid #e2e8f0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          gap: 16px;
          flex-shrink: 0;
        }

        .toolbar-left,
        .toolbar-center,
        .toolbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toolbar-center {
          flex: 1;
          justify-content: center;
        }

        .diagram-name-input {
          padding: 8px 14px;
          font-size: 16px;
          font-weight: 600;
          border: 2px solid transparent;
          border-radius: 8px;
          background: #f8fafc;
          color: #1e293b;
          min-width: 250px;
          transition: all 0.2s;
        }

        .diagram-name-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 8px;
          padding: 4px;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s;
          min-width: 36px;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-level {
          font-size: 13px;
          font-weight: 600;
          padding: 0 10px;
          color: #64748b;
          min-width: 50px;
          text-align: center;
        }
        
        .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          background: #3b82f6;
          color: white;
          border: none;
        }
        
        .export-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .tabs {
          display: flex;
          border-bottom: 2px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
        }
        
        .tab {
          padding: 14px 28px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          border-bottom: 3px solid transparent;
          font-size: 14px;
          transition: all 0.2s;
        }

        .tab:hover {
          color: #3b82f6;
          background: #f8fafc;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }
        
        .sidebar {
          width: 300px;
          background: white;
          border-right: 2px solid #e2e8f0;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin: 0 0 16px 0;
          font-size: 15px;
          color: #1e293b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .form-group {
          margin-bottom: 14px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 10px 14px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .add-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }
        
        .list {
          margin-top: 14px;
          max-height: 220px;
          overflow-y: auto;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-info {
          flex: 1;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .delete-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
          transform: scale(1.1);
        }
        
        .tool-btn {
          width: 100%;
          padding: 12px 14px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          transform: translateX(2px);
        }
        
        .tool-btn.active {
          border-color: #3b82f6;
          background: #dbeafe;
          color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .node-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        
        .node-buttons button {
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }
        
        .node-buttons button:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          color: #3b82f6;
          transform: scale(1.05);
        }
        
        .canvas-wrapper {
          flex: 1;
          background: #f9fafb;
          overflow: auto;
          position: relative;
          min-width: 0;
        }
        
        .canvas {
          transform-origin: top left;
          transition: transform 0.1s ease-out;
        }
        
        .node-group {
          cursor: move;
          transition: filter 0.2s;
        }
        
        .properties-panel {
          width: 300px;
          background: white;
          border-left: 2px solid #e2e8f0;
          padding: 20px;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .properties-panel h3 {
          margin: 0 0 20px 0;
          font-size: 15px;
          color: #1e293b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .property-group {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .property-group label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: -8px;
        }
        
        .property-group input,
        .property-group select {
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }

        .property-group input.disabled-input {
          background: #f1f5f9;
          color: #94a3b8;
          cursor: not-allowed;
        }
        
        .property-group input:focus,
        .property-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .position-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .position-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .position-item span {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
        }

        .position-item input {
          padding: 8px 10px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
        }

        .center-btn {
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .center-btn:hover {
          background: #7c3aed;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(139, 92, 246, 0.3);
        }
        
        .delete-node-btn {
          background: #fee2e2;
          color: #ef4444;
          border: 2px solid #fecaca;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .delete-node-btn:hover {
          background: #fecaca;
          border-color: #ef4444;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3);
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 20px;
          background: white;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .import-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }

        .import-btn.apply-btn {
          background: #3b82f6;
        }

        .import-btn.apply-btn:hover {
          background: #2563eb;
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 13px;
          resize: none;
          line-height: 1.6;
          background: #f8fafc;
          color: #1e293b;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .edge-group path {
          transition: stroke 0.2s;
        }

        .edge-group:hover path {
          stroke: #3b82f6;
          stroke-width: 3;
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default ActivityDiagramMaker;