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
  ChevronRight
} from 'lucide-react';

const MindMapMaker = () => {
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState([
    {
      id: 1,
      text: 'Evolution',
      x: 400,
      y: 300,
      level: 0,
      parentId: null,
      isRoot: true,
      color: '#ff6b6b',
      width: 140,
      height: 40
    },
    {
      id: 2,
      text: 'Natural Selection',
      x: 200,
      y: 200,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 160,
      height: 40
    },
    {
      id: 3,
      text: 'Genetic Drift',
      x: 200,
      y: 260,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 140,
      height: 40
    },
    {
      id: 4,
      text: 'Mutation',
      x: 200,
      y: 320,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 120,
      height: 40
    },
    {
      id: 5,
      text: 'Gene Flow',
      x: 200,
      y: 380,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 120,
      height: 40
    },
    {
      id: 6,
      text: 'Speciation',
      x: 600,
      y: 240,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 140,
      height: 40
    },
    {
      id: 7,
      text: 'Adaptation',
      x: 600,
      y: 300,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 140,
      height: 40
    },
    {
      id: 8,
      text: 'Fitness',
      x: 600,
      y: 360,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 100,
      height: 40
    }
  ]);
  
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

  const MIN_VERTICAL_GAP = 20;
  const LEVEL_DISTANCE = 200;

  const calculateNodeDimensions = (text) => {
    const baseWidth = 80;
    const charWidth = 8;
    const width = Math.max(baseWidth, text.length * charWidth + 30);
    return { width: Math.min(width, 300), height: 40 };
  };

  // Get direct children of a node
  const getDirectChildren = (nodeId) => {
    return nodes.filter(n => n.parentId === nodeId);
  };

  // Get all children recursively
  const getAllChildren = (nodeId) => {
    const directChildren = getDirectChildren(nodeId);
    let allChildren = [...directChildren];
    
    directChildren.forEach(child => {
      allChildren = [...allChildren, ...getAllChildren(child.id)];
    });
    
    return allChildren;
  };

  // Calculate proper vertical positions for children to avoid overlap
  const calculateChildPositions = (parentId) => {
    const parent = nodes.find(n => n.id === parentId);
    if (!parent) return;

    const children = getDirectChildren(parentId);
    if (children.length === 0) return;

    // Sort children by current Y position
    children.sort((a, b) => a.y - b.y);

    const startY = parent.y - ((children.length - 1) * (40 + MIN_VERTICAL_GAP)) / 2;
    
    return children.map((child, index) => ({
      ...child,
      y: startY + index * (40 + MIN_VERTICAL_GAP)
    }));
  };

  // Update node position and detach from old parent when dragging starts
  const updateNodePosition = (nodeId, newX, newY, isDetached = false) => {
    setNodes(prev => {
      const newNodes = [...prev];
      const nodeToUpdate = newNodes.find(n => n.id === nodeId);
      if (!nodeToUpdate) return prev;

      // Detach node from old parent when dragging starts
      if (isDetached && !nodeToUpdate.isRoot) {
        nodeToUpdate.parentId = null;
      }

      const originalNode = nodes.find(n => n.id === nodeId);
      const deltaX = newX - originalNode.x;
      const deltaY = newY - originalNode.y;

      // Update the dragged node
      nodeToUpdate.x = newX;
      nodeToUpdate.y = newY;

      // Update all children recursively
      const updateChildren = (parentId, parentDeltaX, parentDeltaY) => {
        const children = newNodes.filter(n => n.parentId === parentId);
        children.forEach(child => {
          child.x += parentDeltaX;
          child.y += parentDeltaY;
          updateChildren(child.id, parentDeltaX, parentDeltaY);
        });
      };

      updateChildren(nodeId, deltaX, deltaY);
      return newNodes;
    });
  };

  // Automatically reposition all nodes to maintain proper hierarchy
  const autoRepositionAllNodes = () => {
    setNodes(prev => {
      const newNodes = [...prev];
      const root = newNodes.find(n => n.isRoot);
      if (!root) return prev;

      // Recursively position all nodes from root
      const positionNodeTree = (nodeId, baseX, baseY, side = null) => {
        const node = newNodes.find(n => n.id === nodeId);
        if (!node) return;

        // Update node position
        node.x = baseX;
        node.y = baseY;

        // Get children and group by side
        const children = newNodes.filter(n => n.parentId === nodeId);
        if (children.length === 0) return;

        let leftChildren = [];
        let rightChildren = [];

        if (node.isRoot) {
          // For root, maintain existing sides
          children.forEach(child => {
            if (child.x < node.x) {
              leftChildren.push(child);
            } else {
              rightChildren.push(child);
            }
          });
        } else {
          // For non-root, all children go to same side as parent
          if (side === 'right') {
            rightChildren = children;
          } else {
            leftChildren = children;
          }
        }

        // Sort children by Y position
        leftChildren.sort((a, b) => a.y - b.y);
        rightChildren.sort((a, b) => a.y - b.y);

        // Position left children
        if (leftChildren.length > 0) {
          const leftTotalHeight = (leftChildren.length - 1) * (40 + MIN_VERTICAL_GAP);
          const leftStartY = baseY - leftTotalHeight / 2;
          
          leftChildren.forEach((child, index) => {
            const childY = leftStartY + index * (40 + MIN_VERTICAL_GAP);
            const childX = baseX - LEVEL_DISTANCE;
            positionNodeTree(child.id, childX, childY, 'left');
          });
        }

        // Position right children
        if (rightChildren.length > 0) {
          const rightTotalHeight = (rightChildren.length - 1) * (40 + MIN_VERTICAL_GAP);
          const rightStartY = baseY - rightTotalHeight / 2;
          
          rightChildren.forEach((child, index) => {
            const childY = rightStartY + index * (40 + MIN_VERTICAL_GAP);
            const childX = baseX + LEVEL_DISTANCE;
            positionNodeTree(child.id, childX, childY, 'right');
          });
        }
      };

      // Start positioning from root
      positionNodeTree(root.id, root.x, root.y);
      return newNodes;
    });
  };

  // Generate smooth curved connection paths for all lines
  const getConnectionPath = (parent, children) => {
    if (!parent || children.length === 0) return '';

    const parentCenterX = (parent.x + parent.width / 2) * zoom + pan.x;
    const parentCenterY = (parent.y + parent.height / 2) * zoom + pan.y;

    if (children.length === 1) {
      // Single child - smooth curved line
      const child = children[0];
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
    } else {
      // Multiple children - all curved connections
      let pathString = '';
      
      children.forEach(child => {
        const childCenterX = (child.x + child.width / 2) * zoom + pan.x;
        const childCenterY = (child.y + child.height / 2) * zoom + pan.y;
        
        const dx = childCenterX - parentCenterX;
        const dy = childCenterY - parentCenterY;
        const controlDistance = Math.abs(dx) * 0.4;
        
        // Create smooth S-curve for each child
        const controlX1 = parentCenterX + Math.sign(dx) * controlDistance;
        const controlY1 = parentCenterY + dy * 0.2;
        const controlX2 = childCenterX - Math.sign(dx) * controlDistance;
        const controlY2 = childCenterY - dy * 0.2;
        
        if (pathString !== '') pathString += ' ';
        pathString += `M ${parentCenterX} ${parentCenterY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${childCenterX} ${childCenterY}`;
      });
      
      return pathString;
    }
  };

  // Check if a node is near another node for connection
  const checkForConnectionTarget = (draggedNode, mouseX, mouseY) => {
    const threshold = 60;
    
    for (const node of nodes) {
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
    
    // Only detach from parent when dragging actually starts (not on initial click)
    // This will be handled in the mouse move when movement is detected
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

      // Check for connection targets
      const target = checkForConnectionTarget(dragNode, e.clientX - rect.left, e.clientY - rect.top);
      setConnectionTarget(target);

      // Update position (detached mode)
      updateNodePosition(dragNode.id, newX, newY, false);

    } else if (isPanning) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragNode, dragStart, zoom, pan, isPanning, nodes]);

  const handleMouseUp = useCallback(() => {
    if (isDragging && dragNode) {
      if (connectionTarget) {
        // Connect the dragged node to the target
        setNodes(prev => prev.map(node => {
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

      // Auto-reposition all nodes after any change
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
    const referenceNode = nodes.find(n => n.id === referenceNodeId);
    if (!referenceNode) return;

    // Determine the side of the reference node relative to root
    const root = nodes.find(n => n.isRoot);
    let isRightSide;
    
    if (referenceNode.isRoot) {
      // For root node, use the specified position
      isRightSide = position === 'right';
    } else {
      // For non-root nodes, maintain the same side as the reference node
      isRightSide = referenceNode.x > root.x;
      // Override position to match the side
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

    setNodes(prev => [...prev, newNode]);
    setSelectedNode(newNode.id);

    // Auto-reposition all nodes after adding
    setTimeout(() => {
      autoRepositionAllNodes();
    }, 50);
  };

  const deleteNode = (nodeId) => {
    const nodeToDelete = nodes.find(n => n.id === nodeId);
    if (nodeToDelete?.isRoot) return;
    
    const allChildren = getAllChildren(nodeId);
    const toDelete = [nodeToDelete, ...allChildren];
    const ids = toDelete.map(n => n.id);
    
    const parentId = nodeToDelete.parentId;
    
    setNodes(prev => prev.filter(n => !ids.includes(n.id)));
    setSelectedNode(null);

    // Auto-reposition all nodes after deletion
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
    setNodes(prev => prev.map(n => 
      n.id === nodeId 
        ? { ...n, text, ...calculateNodeDimensions(text) } 
        : n
    ));
    setEditingNode(null);
    setEditText('');
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleZoomReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  // Group nodes by parent for rendering connections
  const connectionGroups = nodes.reduce((groups, node) => {
    if (node.parentId) {
      if (!groups[node.parentId]) {
        groups[node.parentId] = [];
      }
      groups[node.parentId].push(node);
    }
    return groups;
  }, {});

  return (
    <div className="mindmap-container">
      {/* Top Toolbar */}
      {showToolbar && (
        <div className="top-toolbar">
          <div className="toolbar-section">
            <button className="toolbar-btn" title="Undo">
              <RefreshCw size={18} />
            </button>
            <button className="toolbar-btn" title="Export">
              <Eye size={18} />
            </button>
            <button className="toolbar-btn" title="Comments">
              <MessageCircle size={18} />
            </button>
            <button className="toolbar-btn" title="Menu">
              <Menu size={18} />
            </button>
          </div>
          
          <div className="toolbar-section">
            <button className="toolbar-btn" title="Add Image">
              <Image size={18} />
            </button>
            <button className="toolbar-btn" title="Add Link">
              <Link size={18} />
            </button>
            <button className="toolbar-btn" title="Help">
              <HelpCircle size={18} />
            </button>
            <div className="auto-align-toggle">
              <span className="toggle-bg">
                <span className="toggle-switch"></span>
              </span>
              <span className="toggle-label">Auto align</span>
            </div>
            <button className="toolbar-btn" title="Colors">
              <Palette size={18} />
            </button>
            <button className="toolbar-btn" title="Warning">
              <Triangle size={18} />
            </button>
            <button className="toolbar-btn" title="More">
              <MoreHorizontal size={18} />
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

        {/* Connection Lines - each child gets its own curved path */}
        {nodes.map(node => {
          const parent = nodes.find(n => n.id === node.parentId);
          return parent ? (
            <path
              key={`connection-${node.id}`}
              d={getConnectionPath(parent, [node])}
              stroke="#64748b"
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
        {nodes.map(node => (
          <g key={node.id}>
            {/* Node Shape */}
            <g
              transform={`translate(${node.x * zoom + pan.x}, ${node.y * zoom + pan.y}) scale(${zoom})`}
              className="node-group"
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
                fill="white"
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
                {/* Show only appropriate side button based on node's position relative to root */}
                {(() => {
                  const root = nodes.find(n => n.isRoot);
                  const isNodeOnRight = node.isRoot ? true : node.x >= root.x;
                  const isNodeOnLeft = node.isRoot ? true : node.x < root.x;
                  
                  return (
                    <>
                      {/* Right Child Button - show if node is root or on right side */}
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

                      {/* Left Child Button - show if node is root or on left side */}
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
                    fill="white"
                    stroke="#e2e8f0"
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

      {/* Legend */}
      <div className="legend">
        <div className="legend-item">
          <div className="legend-icon fork"></div>
          <span>Fork connections</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon drag"></div>
          <span>Drag to reconnect</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon spacing"></div>
          <span>20px min spacing</span>
        </div>
      </div>

      <style jsx>{`
        .mindmap-container {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .top-toolbar {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 8px 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          z-index: 100;
          min-width: 600px;
        }

        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 12px;
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
          color: #64748b;
        }

        .toolbar-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .auto-align-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toggle-bg {
          width: 40px;
          height: 20px;
          background: #3b82f6;
          border-radius: 10px;
          position: relative;
          cursor: pointer;
        }

        .toggle-switch {
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          right: 2px;
          transition: all 0.2s ease;
        }

        .toggle-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .canvas {
          cursor: grab;
          width: 100%;
          height: 100%;
        }

        .canvas:active {
          cursor: grabbing;
        }

        .node-group:hover rect {
          filter: url(#glow);
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
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          min-width: 300px;
        }

        .edit-box input {
          width: 100%;
          font-size: 16px;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s ease;
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
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          gap: 4px;
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
          color: #64748b;
          transition: all 0.2s ease;
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
          color: #64748b;
          min-width: 40px;
          text-align: center;
        }

        .legend {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
        }

        .legend-icon {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legend-icon.fork {
          background: linear-gradient(45deg, #64748b, #475569);
          position: relative;
        }

        .legend-icon.fork::after {
          content: '⋈';
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        .legend-icon.drag {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          position: relative;
        }

        .legend-icon.drag::after {
          content: '↗';
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        .legend-icon.spacing {
          background: linear-gradient(45deg, #10b981, #059669);
          position: relative;
        }

        .legend-icon.spacing::after {
          content: '↕';
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        circle, rect {
          transition: all 0.2s ease;
        }

        circle:hover {
          transform: scale(1.05);
        }

        /* Connection indicator animations */
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .connection-indicator {
          animation: pulse 1s infinite;
        }

        /* Drag feedback */
        .node-group.dragging {
          opacity: 0.8;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
        }

        /* Fork-style connections */
        path {
          transition: all 0.3s ease;
        }

        path:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .top-toolbar {
            min-width: 90vw;
            padding: 6px 12px;
          }
          
          .toolbar-section {
            gap: 8px;
          }
          
          .toolbar-btn {
            width: 32px;
            height: 32px;
          }
          
          .zoom-controls {
            bottom: 20px;
            right: 20px;
          }

          .legend {
            bottom: 20px;
            left: 20px;
            padding: 12px;
          }

          .legend-item {
            font-size: 11px;
          }

          .legend-icon {
            width: 18px;
            height: 18px;
          }
        }

        /* Enhanced visual feedback for connection zones */
        .connection-target {
          animation: connectionPulse 1s infinite;
        }

        @keyframes connectionPulse {
          0% { 
            stroke-width: 2px; 
            stroke-opacity: 0.6; 
            r: 35px; 
          }
          50% { 
            stroke-width: 4px; 
            stroke-opacity: 1; 
            r: 45px; 
          }
          100% { 
            stroke-width: 2px; 
            stroke-opacity: 0.6; 
            r: 35px; 
          }
        }

        /* Node positioning feedback */
        .node-repositioning {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Connection line styling */
        .connection-line {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
          filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4));
        }

        /* Smooth curved connections */
        path {
          vector-effect: non-scaling-stroke;
        }

        /* Node repositioning feedback */
        .node-repositioning {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Detached node styling */
        .node-detached {
          opacity: 0.9;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3)) saturate(1.2);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default MindMapMaker;