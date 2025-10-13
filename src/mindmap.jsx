import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  MoreHorizontal, 
  Menu, 
  MessageCircle, 
  Image, 
  Link, 
  HelpCircle, 
  Palette,
  Triangle,
  RefreshCw,
  Eye,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  ArrowLeft,
  Download,
  Copy,
  Upload,
  Save
} from 'lucide-react';

const MindMapMaker = ({ 
  mindMap, 
  nodes = [], 
  connections = [],
  onUpdateMindMap,
  onBack 
}) => {
  const svgRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
  const [editText, setEditText] = useState('');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragNode, setDragNode] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);
  const [connectionTarget, setConnectionTarget] = useState(null);
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');

  const MIN_VERTICAL_GAP = 20;
  const LEVEL_DISTANCE = 200;

  // Initialize with provided nodes or default
  const [currentNodes, setCurrentNodes] = useState(nodes.length > 0 ? nodes : [
    {
      id: 1,
      text: 'Central Idea',
      x: 400,
      y: 300,
      level: 0,
      parentId: null,
      isRoot: true,
      color: '#ff6b6b',
      width: 140,
      height: 40
    }
  ]);

  // Update local state when props change
  useEffect(() => {
    if (nodes.length > 0) {
      setCurrentNodes(nodes);
    }
  }, [nodes]);

  // Initialize JSON input
  useEffect(() => {
    setJsonInput(JSON.stringify({ nodes: currentNodes }, null, 2));
  }, [currentNodes]);

  const calculateNodeDimensions = (text) => {
    const baseWidth = 80;
    const charWidth = 8;
    const width = Math.max(baseWidth, text.length * charWidth + 30);
    return { width: Math.min(width, 300), height: 40 };
  };

  const getDirectChildren = (nodeId) => {
    return currentNodes.filter(n => n.parentId === nodeId);
  };

  const getAllChildren = (nodeId) => {
    const directChildren = getDirectChildren(nodeId);
    let allChildren = [...directChildren];
    
    directChildren.forEach(child => {
      allChildren = [...allChildren, ...getAllChildren(child.id)];
    });
    
    return allChildren;
  };

  const updateNodePosition = (nodeId, newX, newY, updateConnections = true) => {
    setCurrentNodes(prev => {
      const newNodes = [...prev];
      const nodeToUpdate = newNodes.find(n => n.id === nodeId);
      if (!nodeToUpdate) return prev;

      const originalNode = currentNodes.find(n => n.id === nodeId);
      const deltaX = newX - originalNode.x;
      const deltaY = newY - originalNode.y;

      nodeToUpdate.x = newX;
      nodeToUpdate.y = newY;

      const updateChildren = (parentId, parentDeltaX, parentDeltaY) => {
        const children = newNodes.filter(n => n.parentId === parentId);
        children.forEach(child => {
          child.x += parentDeltaX;
          child.y += parentDeltaY;
          updateChildren(child.id, parentDeltaX, parentDeltaY);
        });
      };

      if (updateConnections) {
        updateChildren(nodeId, deltaX, deltaY);
      }
      
      return newNodes;
    });
  };

  const autoRepositionAllNodes = () => {
    setCurrentNodes(prev => {
      const newNodes = [...prev];
      const root = newNodes.find(n => n.isRoot);
      if (!root) return prev;

      const NODE_HEIGHT = 30;
      const VERTICAL_GAP = 20;
      const LEVEL_DISTANCE = 200;

      const computeSubtreeHeight = (nodeId) => {
        const children = newNodes.filter(n => n.parentId === nodeId);
        if (children.length === 0) return NODE_HEIGHT;

        let total = 0;
        children.forEach((child, i) => {
          total += computeSubtreeHeight(child.id);
          if (i < children.length - 1) total += VERTICAL_GAP;
        });
        return Math.max(total, NODE_HEIGHT);
      };

      const positionNodeTree = (nodeId, baseX, baseY, side = null) => {
        const node = newNodes.find(n => n.id === nodeId);
        if (!node) return;

        node.x = baseX;
        node.y = baseY;

        const children = newNodes.filter(n => n.parentId === nodeId);
        if (children.length === 0) return;

        let leftChildren = [];
        let rightChildren = [];

        if (node.isRoot) {
          children.forEach(child => {
            if (child.x < node.x) leftChildren.push(child);
            else rightChildren.push(child);
          });
        } else {
          if (side === "right") rightChildren = children;
          else leftChildren = children;
        }

        const positionSide = (childList, direction) => {
          if (childList.length === 0) return;

          const subtreeHeights = childList.map(c => computeSubtreeHeight(c.id));
          const totalHeight = subtreeHeights.reduce((a, b) => a + b, 0) + (childList.length - 1) * VERTICAL_GAP;

          let currentY = baseY - totalHeight / 2;

          childList.forEach((child, i) => {
            const childHeight = subtreeHeights[i];
            const childY = currentY + childHeight / 2;
            const childX = direction === "left" ? baseX - LEVEL_DISTANCE : baseX + LEVEL_DISTANCE;

            positionNodeTree(child.id, childX, childY, direction);

            currentY += childHeight + VERTICAL_GAP;
          });
        };

        positionSide(leftChildren, "left");
        positionSide(rightChildren, "right");
      };

      positionNodeTree(root.id, root.x, root.y);
      return newNodes;
    });
  };

  const getConnectionPath = (parent, child) => {
    if (!parent || !child) return '';

    const parentCenterX = (parent.x + parent.width / 2) * zoom + pan.x;
    const parentCenterY = (parent.y + parent.height / 2) * zoom + pan.y;
    const childCenterX = (child.x + child.width / 2) * zoom + pan.x;
    const childCenterY = (child.y + child.height / 2) * zoom + pan.y;
    
    const dx = childCenterX - parentCenterX;
    const dy = childCenterY - parentCenterY;
    const controlDistance = Math.abs(dx) * 0.5;
    
    const controlX1 = parentCenterX + Math.sign(dx) * controlDistance;
    const controlY1 = parentCenterY + dy * 0.1;
    const controlX2 = childCenterX - Math.sign(dx) * controlDistance;
    const controlY2 = childCenterY - dy * 0.1;
    
    return `M ${parentCenterX} ${parentCenterY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${childCenterX} ${childCenterY}`;
  };

  const checkForConnectionTarget = (draggedNode, mouseX, mouseY) => {
    const threshold = 60;
    
    for (const node of currentNodes) {
      if (node.id === draggedNode.id) continue;
      if (getAllChildren(draggedNode.id).some(child => child.id === node.id)) continue;
      
      const nodeScreenX = node.x * zoom + pan.x;
      const nodeScreenY = node.y * zoom + pan.y;
      const distance = Math.sqrt(
        Math.pow(mouseX - (nodeScreenX + node.width * zoom / 2), 2) + 
        Math.pow(mouseY - (nodeScreenY + node.height * zoom / 2), 2)
      );
      
      if (distance < threshold * zoom) {
        return node;
      }
    }
    
    return null;
  };

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation();
    if (e.detail === 1) {
      setSelectedNode(node.id);
      setDragNode(node);
      setIsDragging(true);
      const rect = svgRef.current.getBoundingClientRect();
      setDragStart({ 
        x: e.clientX - rect.left - pan.x - node.x * zoom, 
        y: e.clientY - rect.top - pan.y - node.y * zoom 
      });
    }
  };

  const handleCanvasMouseDown = (e) => {
    if (e.target === svgRef.current) {
      setSelectedNode(null);
      setIsPanning(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && dragNode) {
      const rect = svgRef.current.getBoundingClientRect();
      const newX = (e.clientX - rect.left - pan.x - dragStart.x) / zoom;
      const newY = (e.clientY - rect.top - pan.y - dragStart.y) / zoom;

      const target = checkForConnectionTarget(dragNode, e.clientX - rect.left, e.clientY - rect.top);
      setConnectionTarget(target);

      updateNodePosition(dragNode.id, newX, newY, true);

    } else if (isPanning) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragNode, dragStart, zoom, pan, isPanning, currentNodes]);

  const handleMouseUp = useCallback(() => {
    if (isDragging && dragNode) {
      if (connectionTarget) {
        setCurrentNodes(prev => prev.map(node => {
          if (node.id === dragNode.id) {
            return {
              ...node,
              parentId: connectionTarget.id,
              level: connectionTarget.level + 1,
              color: connectionTarget.level + 1 === 1 ? '#4ecdc4' : '#95e1d3'
            };
          }
          return node;
        }));
      }

      setTimeout(() => {
        autoRepositionAllNodes();
      }, 50);
    }

    setIsDragging(false);
    setDragNode(null);
    setIsPanning(false);
    setConnectionTarget(null);
  }, [isDragging, dragNode, connectionTarget]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const addNode = (referenceNodeId, position = 'right') => {
    const referenceNode = currentNodes.find(n => n.id === referenceNodeId);
    if (!referenceNode) return;

    const root = currentNodes.find(n => n.isRoot);
    let isRightSide;
    
    if (referenceNode.isRoot) {
      isRightSide = position === 'right';
    } else {
      isRightSide = referenceNode.x > root.x;
      position = isRightSide ? 'right' : 'left';
    }

    const newNodeDimensions = calculateNodeDimensions('New Node');
    const children = getDirectChildren(referenceNodeId);
    
    const newX = referenceNode.x + (isRightSide ? LEVEL_DISTANCE : -LEVEL_DISTANCE);
    const newY = referenceNode.y + children.length * (40 + MIN_VERTICAL_GAP);

    const newNode = {
      id: Date.now(),
      text: 'New Node',
      x: newX,
      y: newY,
      level: referenceNode.level + 1,
      parentId: referenceNodeId,
      isRoot: false,
      color: referenceNode.level + 1 === 1 ? '#4ecdc4' : '#95e1d3',
      ...newNodeDimensions
    };

    const updatedNodes = [...currentNodes, newNode];
    setCurrentNodes(updatedNodes);
    setSelectedNode(newNode.id);

    // Update parent component
    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });

    setTimeout(() => {
      autoRepositionAllNodes();
    }, 50);
  };

  const deleteNode = (nodeId) => {
    const nodeToDelete = currentNodes.find(n => n.id === nodeId);
    if (nodeToDelete?.isRoot) return;
    
    const allChildren = getAllChildren(nodeId);
    const toDelete = [nodeToDelete, ...allChildren];
    const ids = toDelete.map(n => n.id);
    
    const updatedNodes = currentNodes.filter(n => !ids.includes(n.id));
    setCurrentNodes(updatedNodes);
    setSelectedNode(null);

    // Update parent component
    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });

    setTimeout(() => {
      autoRepositionAllNodes();
    }, 50);
  };

  const handleNodeDoubleClick = (node) => {
    setEditingNode(node.id);
    setEditText(node.text);
  };

  const updateNodeText = (nodeId, text) => {
    if (!text.trim()) return;
    
    const updatedNodes = currentNodes.map(n => 
      n.id === nodeId 
        ? { ...n, text, ...calculateNodeDimensions(text) } 
        : n
    );
    
    setCurrentNodes(updatedNodes);
    setEditingNode(null);
    setEditText('');

    // Update parent component
    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleZoomReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const toggleTheme = () => setDarkMode(prev => !prev);

  const exportToJson = () => {
    const data = { nodes: currentNodes };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.nodes)) {
        const updatedNodes = data.nodes;
        setCurrentNodes(updatedNodes);
        
        // Update parent component
        onUpdateMindMap({
          ...mindMap,
          nodes: updatedNodes
        });
      } else {
        alert('Invalid JSON format. Expected nodes array.');
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
        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
        scale: 2,
        useCORS: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${mindMap.name || 'mindmap'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  };

  const getTextColor = () => darkMode ? '#e2e8f0' : '#1f2937';
  const getConnectionColor = () => darkMode ? '#64748b' : '#475569';

  return (
    <div className={`mindmap-maker ${darkMode ? 'dark' : 'light'}`}>
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{mindMap.name}</h2>
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
              a.download = `${mindMap.name || 'mindmap'}.json`;
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
          Mind Map Editor
        </button>
        <button 
          className={`tab ${activeTab === 'json' ? 'active' : ''}`}
          onClick={() => setActiveTab('json')}
        >
          JSON Editor
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div className="mindmap-container">
          {/* Top Toolbar */}
          {showToolbar && (
            <div className="top-toolbar">
              <div className="toolbar-section">
                <button className="toolbar-btn" onClick={toggleTheme} title={darkMode ? "Light Mode" : "Dark Mode"}>
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button className="toolbar-btn" title="Auto Align" onClick={autoRepositionAllNodes}>
                  <RefreshCw size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Main Canvas */}
          <svg
            ref={svgRef}
            className="canvas"
            width="100%"
            height="100%"
            onMouseDown={handleCanvasMouseDown}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
              <filter id="connectionGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Connection Lines */}
            {currentNodes.map(node => {
              const parent = currentNodes.find(n => n.id === node.parentId);
              return parent ? (
                <path
                  key={`connection-${node.id}`}
                  d={getConnectionPath(parent, node)}
                  stroke={getConnectionColor()}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="connection-line"
                />
              ) : null;
            })}

            {/* Connection Target Indicator */}
            {connectionTarget && (
              <g>
                <circle
                  cx={(connectionTarget.x + connectionTarget.width / 2) * zoom + pan.x}
                  cy={(connectionTarget.y + connectionTarget.height / 2) * zoom + pan.y}
                  r={40}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  opacity="0.8"
                  filter="url(#connectionGlow)"
                >
                  <animate attributeName="r" values="35;45;35" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text
                  x={(connectionTarget.x + connectionTarget.width / 2) * zoom + pan.x}
                  y={(connectionTarget.y + connectionTarget.height / 2) * zoom + pan.y - 50}
                  textAnchor="middle"
                  fill="#10b981"
                  fontSize="12"
                  fontWeight="bold"
                >
                  Connect as Child
                </text>
              </g>
            )}

            {/* Nodes */}
            {currentNodes.map(node => (
              <g key={node.id}>
                {/* Node Shape */}
                <g
                  transform={`translate(${node.x * zoom + pan.x}, ${node.y * zoom + pan.y}) scale(${zoom})`}
                  className={`node-group ${isDragging && dragNode?.id === node.id ? 'dragging' : ''}`}
                >
                  <rect
                    width={node.width}
                    height={node.height}
                    rx={node.height / 2}
                    fill={node.color}
                    filter={selectedNode === node.id ? "url(#glow)" : "url(#shadow)"}
                    stroke={selectedNode === node.id ? "#fff" : "transparent"}
                    strokeWidth={selectedNode === node.id ? "2" : "0"}
                    style={{ cursor: 'grab' }}
                    onMouseDown={(e) => handleNodeMouseDown(e, node)}
                    onDoubleClick={() => handleNodeDoubleClick(node)}
                  />
                  
                  {/* Node Text */}
                  <text
                    x={node.width / 2}
                    y={node.height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={getTextColor()}
                    fontSize="14"
                    fontWeight="500"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {node.text.length > 25 ? node.text.substring(0, 25) + '...' : node.text}
                  </text>
                </g>

                {/* Add Child Buttons */}
                {selectedNode === node.id && (
                  <>
                    {(() => {
                      const root = currentNodes.find(n => n.isRoot);
                      const isNodeOnRight = node.isRoot ? true : node.x >= root.x;
                      const isNodeOnLeft = node.isRoot ? true : node.x < root.x;
                      
                      return (
                        <>
                          {/* Right Child Button */}
                          {(node.isRoot || isNodeOnRight) && (
                            <g transform={`translate(${(node.x + node.width + 15) * zoom + pan.x}, ${(node.y + node.height/2 - 12) * zoom + pan.y})`}>
                              <circle
                                cx={12}
                                cy={12}
                                r={12}
                                fill="#10b981"
                                stroke="white"
                                strokeWidth="2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => addNode(node.id, 'right')}
                              />
                              <ChevronRight size={12} color="white" x={6} y={6} style={{ pointerEvents: 'none' }} />
                            </g>
                          )}

                          {/* Left Child Button */}
                          {(node.isRoot || isNodeOnLeft) && (
                            <g transform={`translate(${(node.x - 35) * zoom + pan.x}, ${(node.y + node.height/2 - 12) * zoom + pan.y})`}>
                              <circle
                                cx={12}
                                cy={12}
                                r={12}
                                fill="#10b981"
                                stroke="white"
                                strokeWidth="2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => addNode(node.id, 'left')}
                              />
                              <ChevronLeft size={12} color="white" x={6} y={6} style={{ pointerEvents: 'none' }} />
                            </g>
                          )}
                        </>
                      );
                    })()}

                    {/* Action Panel */}
                    <g transform={`translate(${(node.x + node.width + 50) * zoom + pan.x}, ${(node.y - 15) * zoom + pan.y})`}>
                      <rect
                        x={0}
                        y={0}
                        width={100}
                        height={40}
                        rx={20}
                        fill={darkMode ? "#374151" : "white"}
                        stroke={darkMode ? "#4b5563" : "#e2e8f0"}
                        strokeWidth="1"
                        filter="url(#shadow)"
                      />
                      
                      {/* Edit Button */}
                      <circle
                        cx={25}
                        cy={20}
                        r={12}
                        fill="#3b82f6"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleNodeDoubleClick(node)}
                      />
                      <Edit3 size={12} color="white" x={19} y={14} style={{ pointerEvents: 'none' }} />
                      
                      {/* Delete Button */}
                      {!node.isRoot && (
                        <>
                          <circle
                            cx={50}
                            cy={20}
                            r={12}
                            fill="#ef4444"
                            style={{ cursor: 'pointer' }}
                            onClick={() => deleteNode(node.id)}
                          />
                          <Trash2 size={12} color="white" x={44} y={14} style={{ pointerEvents: 'none' }} />
                        </>
                      )}
                      
                      {/* More Button */}
                      <circle
                        cx={75}
                        cy={20}
                        r={12}
                        fill="#6b7280"
                        style={{ cursor: 'pointer' }}
                      />
                      <MoreHorizontal size={12} color="white" x={69} y={14} style={{ pointerEvents: 'none' }} />
                    </g>
                  </>
                )}
              </g>
            ))}
          </svg>

          {/* Edit Input */}
          {editingNode && (
            <div className="edit-overlay">
              <div className="edit-box">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => updateNodeText(editingNode, editText)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') updateNodeText(editingNode, editText);
                    if (e.key === 'Escape') { setEditingNode(null); setEditText(''); }
                  }}
                  placeholder="Enter node text..."
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Zoom Controls */}
          <div className="zoom-controls">
            <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">-</button>
            <span className="zoom-level">{Math.round(zoom * 100)}%</span>
            <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
            <button className="zoom-btn reset" onClick={handleZoomReset} title="Reset View">⌂</button>
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
        .mindmap-maker {
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
        
        .mindmap-container {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .light .top-toolbar {
          background: rgba(255, 255, 255, 0.95);
        }

        .dark .top-toolbar {
          background: rgba(55, 65, 81, 0.95);
        }

        .top-toolbar {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          border-radius: 25px;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toolbar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .light .toolbar-btn {
          color: #64748b;
        }

        .dark .toolbar-btn {
          color: #9ca3af;
        }

        .toolbar-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .canvas {
          cursor: grab;
          width: 100%;
          height: 100%;
        }

        .canvas:active {
          cursor: grabbing;
        }

        .node-group {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .node-group:hover rect {
          filter: url(#glow);
        }

        .node-group.dragging {
          opacity: 0.9;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3));
        }

        .connection-line {
          transition: all 0.1s ease;
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        .edit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }

        .edit-box {
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          min-width: 300px;
          padding: 20px;
        }

        .light .edit-box {
          background: white;
        }

        .dark .edit-box {
          background: #374151;
        }

        .edit-box input {
          width: 100%;
          font-size: 16px;
          padding: 12px 16px;
          border: 2px solid;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s ease;
        }

        .light .edit-box input {
          background: white;
          color: #1f2937;
          border-color: #e2e8f0;
        }

        .dark .edit-box input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .edit-box input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .zoom-controls {
          position: absolute;
          bottom: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          border-radius: 25px;
          padding: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          gap: 4px;
        }

        .light .zoom-controls {
          background: rgba(255, 255, 255, 0.95);
        }

        .dark .zoom-controls {
          background: rgba(55, 65, 81, 0.95);
        }

        .zoom-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.2s ease;
        }

        .light .zoom-btn {
          color: #64748b;
        }

        .dark .zoom-btn {
          color: #9ca3af;
        }

        .zoom-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .zoom-btn.reset {
          font-size: 16px;
        }

        .zoom-level {
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }

        .light .zoom-level {
          color: #64748b;
        }

        .dark .zoom-level {
          color: #9ca3af;
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

        .mindmap-container.light {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        }

        .mindmap-container.dark {
          background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
        }
      `}</style>
    </div>
  );
};

export default MindMapMaker;