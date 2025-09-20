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
      x: 600,
      y: 350,
      level: 0,
      parentId: null,
      isRoot: true,
      color: '#ff6b6b',
      width: 140,
      height: 50
    },
    {
      id: 2,
      text: 'Peripatus',
      x: 400,
      y: 180,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 120,
      height: 45
    },
    {
      id: 3,
      text: 'Anthracosauria',
      x: 900,
      y: 200,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 150,
      height: 45
    },
    {
      id: 4,
      text: 'Tannuella',
      x: 350,
      y: 320,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 120,
      height: 45
    },
    {
      id: 5,
      text: 'Nectocaris',
      x: 500,
      y: 500,
      level: 1,
      parentId: 1,
      isRoot: false,
      color: '#4ecdc4',
      width: 130,
      height: 45
    },
    {
      id: 6,
      text: 'Spiriggina floundersi',
      x: 600,
      y: 80,
      level: 2,
      parentId: 2,
      isRoot: false,
      color: '#95e1d3',
      width: 180,
      height: 45
    }
  ]);
  
  const [selectedNode, setSelectedNode] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
  const [editText, setEditText] = useState('');
  const [zoom, setZoom] = useState(0.8);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragNode, setDragNode] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);

  const calculateNodeDimensions = (text) => {
    const baseWidth = 100;
    const charWidth = 8;
    const width = Math.max(baseWidth, text.length * charWidth + 40);
    return { width: Math.min(width, 300), height: 45 };
  };

  // Check if position overlaps with existing nodes
  const isPositionOverlapping = (x, y, width, height, excludeNodeId = null) => {
    const padding = 20;
    return nodes.some(node => {
      if (node.id === excludeNodeId) return false;
      
      const nodeLeft = node.x - padding;
      const nodeRight = node.x + node.width + padding;
      const nodeTop = node.y - padding;
      const nodeBottom = node.y + node.height + padding;
      
      const newLeft = x - padding;
      const newRight = x + width + padding;
      const newTop = y - padding;
      const newBottom = y + height + padding;
      
      return !(newRight < nodeLeft || newLeft > nodeRight || newBottom < nodeTop || newTop > nodeBottom);
    });
  };

  // Find optimal position for new node
  const findOptimalPosition = (referenceNode, direction, newNodeDimensions) => {
    const baseDistance = 180;
    const { width: newWidth, height: newHeight } = newNodeDimensions;
    
    let baseX = referenceNode.x;
    let baseY = referenceNode.y;
    
    // Calculate base position based on direction
    switch (direction) {
      case 'right':
        baseX = referenceNode.x + referenceNode.width + baseDistance;
        baseY = referenceNode.y;
        break;
      case 'left':
        baseX = referenceNode.x - newWidth - baseDistance;
        baseY = referenceNode.y;
        break;
      case 'top':
        baseX = referenceNode.x;
        baseY = referenceNode.y - newHeight - baseDistance;
        break;
      case 'bottom':
        baseX = referenceNode.x;
        baseY = referenceNode.y + referenceNode.height + baseDistance;
        break;
    }
    
    // Check for overlaps and adjust position
    let attempts = 0;
    let currentX = baseX;
    let currentY = baseY;
    
    while (isPositionOverlapping(currentX, currentY, newWidth, newHeight) && attempts < 20) {
      attempts++;
      
      // Spiral outward to find free space
      const angle = (attempts * Math.PI * 2) / 8;
      const distance = baseDistance + (attempts * 30);
      
      switch (direction) {
        case 'right':
          currentX = baseX + Math.cos(angle) * 50;
          currentY = baseY + Math.sin(angle) * distance;
          break;
        case 'left':
          currentX = baseX - Math.cos(angle) * 50;
          currentY = baseY + Math.sin(angle) * distance;
          break;
        case 'top':
          currentX = baseX + Math.sin(angle) * distance;
          currentY = baseY - Math.cos(angle) * 50;
          break;
        case 'bottom':
          currentX = baseX + Math.sin(angle) * distance;
          currentY = baseY + Math.cos(angle) * 50;
          break;
      }
    }
    
    return { x: currentX, y: currentY };
  };

  const getConnectionPath = (parentNode, childNode) => {
    const startX = (parentNode.x + parentNode.width / 2) * zoom + pan.x;
    const startY = (parentNode.y + parentNode.height / 2) * zoom + pan.y;
    const endX = (childNode.x + childNode.width / 2) * zoom + pan.x;
    const endY = (childNode.y + childNode.height / 2) * zoom + pan.y;

    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const controlDistance = Math.min(distance * 0.5, 100);
    
    const controlX1 = startX + (dx > 0 ? controlDistance : -controlDistance);
    const controlX2 = endX - (dx > 0 ? controlDistance : -controlDistance);

    return `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
  };

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation();
    if (e.detail === 1) { // Single click
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

      setNodes(prev => prev.map(node => 
        node.id === dragNode.id 
          ? { ...node, x: newX, y: newY }
          : node
      ));
    } else if (isPanning) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragNode, dragStart, zoom, pan, isPanning]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragNode(null);
    setIsPanning(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const addNode = (referenceNodeId, direction = 'right', nodeType = 'child') => {
    const referenceNode = nodes.find(n => n.id === referenceNodeId);
    if (!referenceNode) return;

    const newNodeDimensions = calculateNodeDimensions('New Node');
    const position = findOptimalPosition(referenceNode, direction, newNodeDimensions);
    
    // Determine parent and level based on node type
    let parentId, level, color;
    
    if (nodeType === 'sibling') {
      parentId = referenceNode.parentId;
      level = referenceNode.level;
      color = referenceNode.color;
    } else {
      parentId = referenceNodeId;
      level = referenceNode.level + 1;
      color = referenceNode.level === 0 ? '#4ecdc4' : '#95e1d3';
    }

    const newNode = {
      id: Date.now(),
      text: 'New Node',
      x: position.x,
      y: position.y,
      level: level,
      parentId: parentId,
      isRoot: false,
      color: color,
      ...newNodeDimensions
    };

    setNodes(prev => [...prev, newNode]);
    setSelectedNode(newNode.id);
  };

  const deleteNode = (nodeId) => {
    const nodeToDelete = nodes.find(n => n.id === nodeId);
    if (nodeToDelete?.isRoot) return;
    
    const getChildren = (id) => {
      return nodes.filter(n => n.parentId === id).flatMap(c => [c, ...getChildren(c.id)]);
    };
    
    const toDelete = [nodeToDelete, ...getChildren(nodeId)];
    const ids = toDelete.map(n => n.id);
    setNodes(prev => prev.filter(n => !ids.includes(n.id)));
    setSelectedNode(null);
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
        </defs>

        {/* Connection Lines */}
        {nodes.map(node => {
          const parent = nodes.find(n => n.id === node.parentId);
          return parent ? (
            <path
              key={`line-${node.id}`}
              d={getConnectionPath(parent, node)}
              stroke="#64748b"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          ) : null;
        })}

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
                {node.text.length > 20 ? node.text.substring(0, 20) + '...' : node.text}
              </text>

              {/* Node Menu Icon */}
              <g transform={`translate(${node.width - 25}, ${node.height / 2 - 8})`}>
                <circle r="8" fill="rgba(255,255,255,0.2)" />
                <Menu size={12} color="white" x={-6} y={-6} style={{ pointerEvents: 'none' }} />
              </g>
            </g>

            {/* Directional Add Buttons */}
            {selectedNode === node.id && (
              <>
                {/* Top Sibling Button */}
                <g transform={`translate(${(node.x + node.width/2 - 12) * zoom + pan.x}, ${(node.y - 35) * zoom + pan.y})`}>
                  <circle
                    cx={12}
                    cy={12}
                    r={12}
                    fill="#8b5cf6"
                    stroke="white"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => addNode(node.id, 'top', 'sibling')}
                  />
                  <ChevronUp size={12} color="white" x={6} y={6} style={{ pointerEvents: 'none' }} />
                </g>

                {/* Bottom Sibling Button */}
                <g transform={`translate(${(node.x + node.width/2 - 12) * zoom + pan.x}, ${(node.y + node.height + 15) * zoom + pan.y})`}>
                  <circle
                    cx={12}
                    cy={12}
                    r={12}
                    fill="#8b5cf6"
                    stroke="white"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => addNode(node.id, 'bottom', 'sibling')}
                  />
                  <ChevronDown size={12} color="white" x={6} y={6} style={{ pointerEvents: 'none' }} />
                </g>

                {/* Left Child Button */}
                <g transform={`translate(${(node.x - 35) * zoom + pan.x}, ${(node.y + node.height/2 - 12) * zoom + pan.y})`}>
                  <circle
                    cx={12}
                    cy={12}
                    r={12}
                    fill="#10b981"
                    stroke="white"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => addNode(node.id, 'left', 'child')}
                  />
                  <ChevronLeft size={12} color="white" x={6} y={6} style={{ pointerEvents: 'none' }} />
                </g>

                {/* Right Child Button */}
                <g transform={`translate(${(node.x + node.width + 15) * zoom + pan.x}, ${(node.y + node.height/2 - 12) * zoom + pan.y})`}>
                  <circle
                    cx={12}
                    cy={12}
                    r={12}
                    fill="#10b981"
                    stroke="white"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => addNode(node.id, 'right', 'child')}
                  />
                  <ChevronRight size={12} color="white" x={6} y={6} style={{ pointerEvents: 'none' }} />
                </g>

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
          <div className="legend-icon green"><ChevronLeft size={12} /></div>
          <span>Child (Left/Right)</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon purple"><ChevronUp size={12} /></div>
          <span>Sibling (Up/Down)</span>
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
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legend-icon.green {
          background: #10b981;
          color: white;
        }

        .legend-icon.purple {
          background: #8b5cf6;
          color: white;
        }

        circle, rect {
          transition: all 0.2s ease;
        }

        circle:hover {
          transform: scale(1.1);
        }

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
        }
      `}</style>
    </div>
  );
};

export default MindMapMaker;