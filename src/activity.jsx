import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  MoreHorizontal, 
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
  ZoomOut
} from 'lucide-react';

const ActivityDiagramMaker = ({ 
  activityDiagram, 
  nodes = [], 
  edges = [],
  onUpdateActivityDiagram,
  onBack 
}) => {
  const svgRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
  const [editText, setEditText] = useState('');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragNode, setDragNode] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [selectedTool, setSelectedTool] = useState('select');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);

  const [currentNodes, setCurrentNodes] = useState(nodes.length > 0 ? nodes : [
    {
      id: 1,
      type: 'initial',
      text: 'Start',
      x: 400,
      y: 100,
      width: 60,
      height: 60,
      color: '#10b981'
    }
  ]);

  const [currentEdges, setCurrentEdges] = useState(edges);

  // Update local state when props change
  useEffect(() => {
    if (nodes.length > 0) {
      setCurrentNodes(nodes);
    }
    if (edges.length > 0) {
      setCurrentEdges(edges);
    }
  }, [nodes, edges]);

  // Initialize JSON input
  useEffect(() => {
    setJsonInput(JSON.stringify({ nodes: currentNodes, edges: currentEdges }, null, 2));
  }, [currentNodes, currentEdges]);

  const nodeTypes = {
    initial: { width: 60, height: 60, color: '#10b981', shape: 'circle' },
    activity: { width: 120, height: 60, color: '#3b82f6', shape: 'rounded' },
    decision: { width: 80, height: 80, color: '#f59e0b', shape: 'diamond' },
    final: { width: 60, height: 60, color: '#ef4444', shape: 'circle' },
    fork: { width: 20, height: 80, color: '#6b7280', shape: 'rectangle' },
    join: { width: 20, height: 80, color: '#6b7280', shape: 'rectangle' }
  };

  const calculateNodeDimensions = (type, text) => {
    const base = nodeTypes[type];
    if (type === 'activity') {
      const textWidth = Math.max(120, text.length * 8 + 40);
      return { ...base, width: Math.min(textWidth, 200) };
    }
    return base;
  };

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation();
    if (selectedTool === 'select') {
      setSelectedNode(node.id);
      setDragNode(node);
      setIsDragging(true);
      const rect = svgRef.current.getBoundingClientRect();
      setDragStart({ 
        x: e.clientX - rect.left - pan.x - node.x * zoom, 
        y: e.clientY - rect.top - pan.y - node.y * zoom 
      });
    } else if (selectedTool === 'connection') {
      setConnectionStart(node.id);
      setIsConnecting(true);
    }
  };

  const handleCanvasMouseDown = (e) => {
    if (e.target === svgRef.current) {
      if (selectedTool === 'select') {
        setSelectedNode(null);
        setIsPanning(true);
        setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      } else if (selectedTool === 'connection' && isConnecting) {
        // Cancel connection
        setIsConnecting(false);
        setConnectionStart(null);
      }
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && dragNode) {
      const rect = svgRef.current.getBoundingClientRect();
      const newX = (e.clientX - rect.left - pan.x - dragStart.x) / zoom;
      const newY = (e.clientY - rect.top - pan.y - dragStart.y) / zoom;

      setCurrentNodes(prev => prev.map(node => 
        node.id === dragNode.id ? { ...node, x: newX, y: newY } : node
      ));
    } else if (isPanning) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragNode, dragStart, zoom, pan, isPanning]);

  const handleMouseUp = useCallback((e) => {
    if (isConnecting && connectionStart) {
      const rect = svgRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Find node under mouse
      const targetNode = currentNodes.find(node => {
        const nodeX = node.x * zoom + pan.x;
        const nodeY = node.y * zoom + pan.y;
        return mouseX >= nodeX && mouseX <= nodeX + node.width * zoom &&
               mouseY >= nodeY && mouseY <= nodeY + node.height * zoom;
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
        
        // Update parent component
        onUpdateActivityDiagram({
          ...activityDiagram,
          nodes: currentNodes,
          edges: updatedEdges
        });
      }
    }

    setIsDragging(false);
    setDragNode(null);
    setIsPanning(false);
    setIsConnecting(false);
    setConnectionStart(null);
  }, [isDragging, isConnecting, connectionStart, currentNodes, currentEdges, zoom, pan, activityDiagram, onUpdateActivityDiagram]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const addNode = (type) => {
    const newNode = {
      id: Date.now(),
      type,
      text: type === 'initial' ? 'Start' : 
            type === 'final' ? 'End' : 
            type === 'decision' ? 'Decision' : 
            type === 'fork' ? '' : 
            type === 'join' ? '' : 'Activity',
      x: 400 + Math.random() * 200 - 100,
      y: 300 + Math.random() * 200 - 100,
      ...calculateNodeDimensions(type, 'Activity')
    };

    const updatedNodes = [...currentNodes, newNode];
    setCurrentNodes(updatedNodes);
    setSelectedNode(newNode.id);

    // Update parent component
    onUpdateActivityDiagram({
      ...activityDiagram,
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

    // Update parent component
    onUpdateActivityDiagram({
      ...activityDiagram,
      nodes: updatedNodes,
      edges: updatedEdges
    });
  };

  const deleteEdge = (edgeId) => {
    const updatedEdges = currentEdges.filter(e => e.id !== edgeId);
    setCurrentEdges(updatedEdges);

    // Update parent component
    onUpdateActivityDiagram({
      ...activityDiagram,
      nodes: currentNodes,
      edges: updatedEdges
    });
  };

  const handleNodeDoubleClick = (node) => {
    if (node.type !== 'fork' && node.type !== 'join') {
      setEditingNode(node.id);
      setEditText(node.text);
    }
  };

  const updateNodeText = (nodeId, text) => {
    if (!text.trim()) return;
    
    const updatedNodes = currentNodes.map(n => 
      n.id === nodeId 
        ? { ...n, text, ...calculateNodeDimensions(n.type, text) } 
        : n
    );
    
    setCurrentNodes(updatedNodes);
    setEditingNode(null);
    setEditText('');

    // Update parent component
    onUpdateActivityDiagram({
      ...activityDiagram,
      nodes: updatedNodes,
      edges: currentEdges
    });
  };

  const updateEdgeLabel = (edgeId, label) => {
    const updatedEdges = currentEdges.map(e => 
      e.id === edgeId ? { ...e, label } : e
    );
    
    setCurrentEdges(updatedEdges);

    // Update parent component
    onUpdateActivityDiagram({
      ...activityDiagram,
      nodes: currentNodes,
      edges: updatedEdges
    });
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleZoomReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const exportToJson = () => {
    const data = { nodes: currentNodes, edges: currentEdges };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.nodes) && Array.isArray(data.edges)) {
        setCurrentNodes(data.nodes);
        setCurrentEdges(data.edges);
        
        // Update parent component
        onUpdateActivityDiagram({
          ...activityDiagram,
          nodes: data.nodes,
          edges: data.edges
        });
      } else {
        alert('Invalid JSON format. Expected nodes and edges arrays.');
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
    if (!svgRef.current) return;
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(svgRef.current.parentElement, {
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
    const sourceX = sourceNode.x + sourceNode.width / 2;
    const sourceY = sourceNode.y + sourceNode.height / 2;
    const targetX = targetNode.x + targetNode.width / 2;
    const targetY = targetNode.y + targetNode.height / 2;
    
    const dx = targetX - sourceX;
    const dy = targetY - sourceY;
    
    // For decisions, create angled connections
    if (sourceNode.type === 'decision') {
      const midX = sourceX + dx * 0.5;
      const midY = sourceY + dy * 0.5;
      return `M ${sourceX} ${sourceY} L ${midX} ${midY} L ${targetX} ${targetY}`;
    }
    
    return `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
  };

  const renderNode = (node) => {
    const nodeStyle = {
      transform: `translate(${node.x * zoom + pan.x}px, ${node.y * zoom + pan.y}px) scale(${zoom})`,
    };

    const isSelected = selectedNode === node.id;
    const nodeConfig = nodeTypes[node.type];

    return (
      <g
        key={node.id}
        style={nodeStyle}
        className={`node-group ${isSelected ? 'selected' : ''} ${isDragging && dragNode?.id === node.id ? 'dragging' : ''}`}
        onMouseDown={(e) => handleNodeMouseDown(e, node)}
        onDoubleClick={() => handleNodeDoubleClick(node)}
      >
        {nodeConfig.shape === 'circle' && (
          <circle
            cx={node.width / 2}
            cy={node.height / 2}
            r={node.width / 2}
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : 'none'}
            strokeWidth="2"
            style={{ cursor: 'grab' }}
          />
        )}
        
        {nodeConfig.shape === 'rounded' && (
          <rect
            width={node.width}
            height={node.height}
            rx="8"
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : 'none'}
            strokeWidth="2"
            style={{ cursor: 'grab' }}
          />
        )}
        
        {nodeConfig.shape === 'diamond' && (
          <polygon
            points={`
              ${node.width / 2},0 
              ${node.width},${node.height / 2} 
              ${node.width / 2},${node.height} 
              0,${node.height / 2}
            `}
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : 'none'}
            strokeWidth="2"
            style={{ cursor: 'grab' }}
          />
        )}
        
        {nodeConfig.shape === 'rectangle' && (
          <rect
            width={node.width}
            height={node.height}
            fill={nodeConfig.color}
            stroke={isSelected ? '#000' : 'none'}
            strokeWidth="2"
            style={{ cursor: 'grab' }}
          />
        )}
        
        {(node.type !== 'fork' && node.type !== 'join') && (
          <text
            x={node.width / 2}
            y={node.height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="12"
            fontWeight="500"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            {node.text.length > 15 ? node.text.substring(0, 15) + '...' : node.text}
          </text>
        )}
        
        {node.type === 'initial' && (
          <Play
            size={16}
            color="white"
            x={node.width / 2 - 8}
            y={node.height / 2 - 8}
            style={{ pointerEvents: 'none' }}
          />
        )}
        
        {node.type === 'final' && (
          <Square
            size={20}
            color="white"
            x={node.width / 2 - 10}
            y={node.height / 2 - 10}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </g>
    );
  };

  const renderEdge = (edge) => {
    const sourceNode = currentNodes.find(n => n.id === edge.source);
    const targetNode = currentNodes.find(n => n.id === edge.target);
    
    if (!sourceNode || !targetNode) return null;

    const path = getConnectionPath(sourceNode, targetNode);
    const isSelected = false; // You can implement edge selection if needed

    return (
      <g key={edge.id} className={`edge-group ${isSelected ? 'selected' : ''}`}>
        <path
          d={path}
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {edge.label && (
          <text
            x={(sourceNode.x + targetNode.x) / 2 + 10}
            y={(sourceNode.y + targetNode.y) / 2 - 10}
            fill="#64748b"
            fontSize="11"
            fontWeight="500"
          >
            {edge.label}
          </text>
        )}
        
        {/* Edge delete button */}
        <circle
          cx={(sourceNode.x + targetNode.x) / 2}
          cy={(sourceNode.y + targetNode.y) / 2}
          r="8"
          fill="#ef4444"
          style={{ cursor: 'pointer', opacity: 0 }}
          className="edge-delete-btn"
          onClick={() => deleteEdge(edge.id)}
        />
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
          <div className="tool-palette">
            <div className="tool-section">
              <h4>Tools</h4>
              <button 
                className={`tool-btn ${selectedTool === 'select' ? 'active' : ''}`}
                onClick={() => setSelectedTool('select')}
                title="Select and Move"
              >
                <div className="cursor-icon">↔</div>
              </button>
              <button 
                className={`tool-btn ${selectedTool === 'connection' ? 'active' : ''}`}
                onClick={() => setSelectedTool('connection')}
                title="Create Connection"
              >
                <GitBranch size={16} />
              </button>
            </div>

            <div className="tool-section">
              <h4>Nodes</h4>
              <button className="tool-btn" onClick={() => addNode('initial')} title="Initial Node">
                <Play size={16} />
              </button>
              <button className="tool-btn" onClick={() => addNode('activity')} title="Activity">
                <Square size={16} />
              </button>
              <button className="tool-btn" onClick={() => addNode('decision')} title="Decision">
                <Diamond size={16} />
              </button>
              <button className="tool-btn" onClick={() => addNode('fork')} title="Fork">
                <Minus size={16} />
              </button>
              <button className="tool-btn" onClick={() => addNode('join')} title="Join">
                <Merge size={16} />
              </button>
              <button className="tool-btn" onClick={() => addNode('final')} title="Final Node">
                <Circle size={16} />
              </button>
            </div>

            <div className="tool-section">
              <h4>View</h4>
              <button className="tool-btn" onClick={handleZoomOut} title="Zoom Out">
                <ZoomOut size={16} />
              </button>
              <button className="tool-btn" onClick={handleZoomIn} title="Zoom In">
                <ZoomIn size={16} />
              </button>
              <button className="tool-btn" onClick={handleZoomReset} title="Reset View">
                ⌂
              </button>
            </div>
          </div>
          
          <div className="diagram-canvas-wrapper">
            <div 
              className="diagram-canvas" 
              ref={svgRef}
              onMouseDown={handleCanvasMouseDown}
            >
              <svg
                width="100%"
                height="100%"
                style={{ 
                  background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                  cursor: isConnecting ? 'crosshair' : isPanning ? 'grabbing' : 'grab'
                }}
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
                      fill="#64748b"
                    />
                  </marker>
                </defs>

                {/* Connection Lines */}
                {currentEdges.map(edge => renderEdge(edge))}

                {/* Nodes */}
                {currentNodes.map(node => renderNode(node))}

                {/* Connection in progress */}
                {isConnecting && connectionStart && (
                  <line
                    x1={currentNodes.find(n => n.id === connectionStart).x + currentNodes.find(n => n.id === connectionStart).width / 2}
                    y1={currentNodes.find(n => n.id === connectionStart).y + currentNodes.find(n => n.id === connectionStart).height / 2}
                    x2={pan.x}
                    y2={pan.y}
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
                    <label>Text</label>
                    <input
                      type="text"
                      value={node.text}
                      onChange={(e) => {
                        const updatedNodes = currentNodes.map(n => 
                          n.id === selectedNode 
                            ? { ...n, text: e.target.value, ...calculateNodeDimensions(n.type, e.target.value) } 
                            : n
                        );
                        setCurrentNodes(updatedNodes);
                        
                        // Update parent component
                        onUpdateActivityDiagram({
                          ...activityDiagram,
                          nodes: updatedNodes,
                          edges: currentEdges
                        });
                      }}
                    />
                    
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
                        
                        // Update parent component
                        onUpdateActivityDiagram({
                          ...activityDiagram,
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

                    <button 
                      onClick={() => deleteNode(selectedNode)}
                      className="delete-btn"
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
        
        .tool-palette {
          width: 200px;
          background: white;
          border-right: 1px solid #e2e8f0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .tool-section h4 {
          margin: 0 0 12px 0;
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
        }
        
        .tool-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
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
        }
        
        .cursor-icon {
          font-size: 18px;
          font-weight: bold;
        }
        
        .diagram-canvas-wrapper {
          flex: 1;
          background: white;
          overflow: hidden;
          position: relative;
        }
        
        .diagram-canvas {
          width: 100%;
          height: 100%;
        }
        
        .node-group {
          transition: all 0.2s ease;
        }
        
        .node-group.selected {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }
        
        .node-group.dragging {
          opacity: 0.8;
        }
        
        .edge-group:hover .edge-delete-btn {
          opacity: 1;
        }
        
        .edge-delete-btn:hover {
          opacity: 1 !important;
        }
        
        .properties-panel {
          width: 280px;
          background: white;
          border-left: 1px solid #e2e8f0;
          padding: 16px;
          overflow-y: auto;
        }
        
        .properties-panel h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          color: #1e293b;
        }
        
        .property-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .property-group label {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .property-group input,
        .property-group select {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .property-group .delete-btn {
          background: #fee2e2;
          color: #ef4444;
          border: 1px solid #fecaca;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .property-group .delete-btn:hover {
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
          font-size: 13px;
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