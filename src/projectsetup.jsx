import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Plus, Trash2, Edit3 } from 'lucide-react';

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
      color: '#ef4444',
      width: 120,
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

  const calculateNodeDimensions = (text) => {
    const baseWidth = 80;
    const charWidth = 7;
    const width = Math.max(baseWidth, text.length * charWidth + 30);
    return { width: Math.min(width, 250), height: 35 };
  };

  const getConnectionPath = (parentNode, childNode) => {
    const startX = (parentNode.x + parentNode.width / 2) * zoom + pan.x;
    const startY = (parentNode.y + parentNode.height / 2) * zoom + pan.y;
    const endX = (childNode.x + childNode.width / 2) * zoom + pan.x;
    const endY = (childNode.y + childNode.height / 2) * zoom + pan.y;

    const dx = endX - startX;
    const dy = endY - startY;
    const controlX = startX + dx / 2;

    return `M ${startX} ${startY} C ${controlX} ${startY}, ${controlX} ${endY}, ${endX} ${endY}`;
  };

  const handleMouseDown = (e, node) => {
    e.stopPropagation();
    setSelectedNode(node.id);
    setDragNode(node);
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x - node.x * zoom, y: e.clientY - pan.y - node.y * zoom });
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && dragNode) {
      const newX = (e.clientX - pan.x - dragStart.x) / zoom;
      const newY = (e.clientY - pan.y - dragStart.y) / zoom;

      setNodes(prev => prev.map(node => 
        node.id === dragNode.id 
          ? { ...node, x: newX, y: newY }
          : node
      ));
    }
  }, [isDragging, dragNode, dragStart, zoom, pan]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragNode(null);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const addNode = (parentId) => {
    const parentNode = nodes.find(n => n.id === parentId);
    if (!parentNode) return;

    const newNode = {
      id: Date.now(),
      text: 'New Node',
      x: parentNode.x + 200,
      y: parentNode.y,
      level: parentNode.level + 1,
      parentId: parentId,
      isRoot: false,
      color: '#14b8a6',
      ...calculateNodeDimensions('New Node')
    };

    setNodes([...nodes, newNode]);
  };

  const deleteNode = (nodeId) => {
    const nodeToDelete = nodes.find(n => n.id === nodeId);
    if (nodeToDelete?.isRoot) return;
    const getChildren = (id) => nodes.filter(n => n.parentId === id).flatMap(c => [c, ...getChildren(c.id)]);
    const toDelete = [nodeToDelete, ...getChildren(nodeId)];
    const ids = toDelete.map(n => n.id);
    setNodes(nodes.filter(n => !ids.includes(n.id)));
    setSelectedNode(null);
  };

  const handleNodeDoubleClick = (node) => {
    setEditingNode(node.id);
    setEditText(node.text);
  };

  const updateNodeText = (nodeId, text) => {
    if (!text.trim()) return;
    setNodes(nodes.map(n => n.id === nodeId ? { ...n, text, ...calculateNodeDimensions(text) } : n));
    setEditingNode(null);
    setEditText('');
  };

  return (
    <div className="mindmap-wrapper">
      <svg
        ref={svgRef}
        className="canvas"
        width="100%"
        height="100%"
      >
        {nodes.map(node => node.parentId && (
          <path
            key={`line-${node.id}`}
            d={getConnectionPath(nodes.find(n => n.id === node.parentId), node)}
            stroke="#94a3b8"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {nodes.map(node => (
          <g
            key={node.id}
            transform={`translate(${node.x * zoom + pan.x}, ${node.y * zoom + pan.y}) scale(${zoom})`}
          >
            <rect
              width={node.width}
              height={node.height}
              rx={20}
              fill={node.color}
              onMouseDown={(e) => handleMouseDown(e, node)}
              onDoubleClick={() => handleNodeDoubleClick(node)}
            />
            <text
              x={node.width / 2}
              y={node.height / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="14"
              fontWeight="600"
            >
              {node.text}
            </text>

            {selectedNode === node.id && (
              <g transform={`translate(${node.width + 10}, ${-10}) scale(${1/zoom})`}>
                <rect x={0} y={0} width={100} height={30} rx={6} fill="white" stroke="#cbd5e1" />
                <g transform="translate(5,5)">
                  <Plus size={18} color="#10b981" onClick={() => addNode(node.id)} style={{cursor:'pointer'}} />
                </g>
                {!node.isRoot && (
                  <g transform="translate(35,5)">
                    <Trash2 size={18} color="#ef4444" onClick={() => deleteNode(node.id)} style={{cursor:'pointer'}} />
                  </g>
                )}
                <g transform="translate(65,5)">
                  <Edit3 size={18} color="#3b82f6" onClick={() => handleNodeDoubleClick(node)} style={{cursor:'pointer'}} />
                </g>
              </g>
            )}
          </g>
        ))}
      </svg>

      {editingNode && (
        <div className="edit-box">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => updateNodeText(editingNode, editText)}
            onKeyDown={(e) => e.key === 'Enter' && updateNodeText(editingNode, editText)}
            autoFocus
          />
        </div>
      )}

      <style jsx>{`
        .mindmap-wrapper {
          width: 100vw;
          height: 100vh;
          background: #0f4c64;
          position: relative;
          overflow: hidden;
        }
        .canvas {
          cursor: grab;
        }
        rect {
          cursor: grab;
        }
        .edit-box {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 8px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .edit-box input {
          font-size: 14px;
          padding: 6px 10px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default MindMapMaker;