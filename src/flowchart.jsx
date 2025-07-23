import React, { useState, useRef, useCallback, useEffect } from 'react';

const FlowchartMaker = ({ flowchart, nodes, edges, jsonInput, onJsonInputChange, onImportJson, onUpdateFlowchart, onBack }) => {
  const [activeTab, setActiveTab] = useState('editor');
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [dragState, setDragState] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
  const [editingEdge, setEditingEdge] = useState(null);
  const [editText, setEditText] = useState('');
  const [connectionMode, setConnectionMode] = useState(false);
  const [fromNode, setFromNode] = useState(null);
  const [showLabelModal, setShowLabelModal] = useState(false);
  const [edgeLabel, setEdgeLabel] = useState('');
  const [pendingEdge, setPendingEdge] = useState(null);
  const canvasRef = useRef(null);

  // Handle keyboard events for deletion
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete') {
        if (selectedNode) {
          handleDeleteNode();
        } else if (selectedEdge) {
          handleDeleteEdge();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedNode, selectedEdge]);

  const handleExportJson = () => {
    const data = { nodes, edges };
    return JSON.stringify(data, null, 2);
  };

  const handleExportImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    
    // Set background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw edges first
    edges.forEach(edge => {
      const fromNodeData = nodes.find(n => n.id === edge.from);
      const toNodeData = nodes.find(n => n.id === edge.to);
      
      if (fromNodeData && toNodeData) {
        const path = calculateConnectionPath(fromNodeData, toNodeData, edge);
        
        ctx.strokeStyle = '#646cff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        if (path.length > 2) {
          // Multi-segment path
          ctx.moveTo(path[0].x, path[0].y);
          for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x, path[i].y);
          }
        } else {
          // Direct line
          ctx.moveTo(path[0].x, path[0].y);
          ctx.lineTo(path[1].x, path[1].y);
        }
        ctx.stroke();
        
        // Draw arrowhead at the end
        const lastSegment = path[path.length - 1];
        const secondLast = path[path.length - 2];
        const angle = Math.atan2(lastSegment.y - secondLast.y, lastSegment.x - secondLast.x);
        const headLength = 10;
        
        ctx.fillStyle = '#646cff';
        ctx.beginPath();
        ctx.moveTo(lastSegment.x, lastSegment.y);
        ctx.lineTo(
          lastSegment.x - headLength * Math.cos(angle - Math.PI/6),
          lastSegment.y - headLength * Math.sin(angle - Math.PI/6)
        );
        ctx.lineTo(
          lastSegment.x - headLength * Math.cos(angle + Math.PI/6),
          lastSegment.y - headLength * Math.sin(angle + Math.PI/6)
        );
        ctx.closePath();
        ctx.fill();
        
        // Draw label if exists
        if (edge.label) {
          const midPoint = getMidPoint(path);
          ctx.fillStyle = 'white';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(edge.label, midPoint.x, midPoint.y - 5);
        }
      }
    });
    
    // Draw nodes
    nodes.forEach(node => {
      ctx.fillStyle = '#646cff';
      
      if (node.type === 'rectangle') {
        ctx.fillRect(node.x, node.y, node.width, node.height);
      } else if (node.type === 'circle') {
        ctx.beginPath();
        ctx.arc(node.x + node.width/2, node.y + node.height/2, node.width/2, 0, 2 * Math.PI);
        ctx.fill();
      } else if (node.type === 'diamond' || node.type === 'rhombus') {
        ctx.beginPath();
        ctx.moveTo(node.x + node.width/2, node.y);
        ctx.lineTo(node.x + node.width, node.y + node.height/2);
        ctx.lineTo(node.x + node.width/2, node.y + node.height);
        ctx.lineTo(node.x, node.y + node.height/2);
        ctx.closePath();
        ctx.fill();
      } else if (node.type === 'oval') {
        ctx.beginPath();
        ctx.ellipse(
          node.x + node.width/2, 
          node.y + node.height/2, 
          node.width/2, 
          node.height/2, 
          0, 0, 2 * Math.PI
        );
        ctx.fill();
      }
      
      // Draw text
      ctx.fillStyle = 'white';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.text, node.x + node.width/2, node.y + node.height/2);
    });
    
    // Download the image
    const link = document.createElement('a');
    link.download = `${flowchart.name || 'flowchart'}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  // Calculate connection path with turn to avoid overlaps
  const calculateConnectionPath = (fromNode, toNode, edge) => {
    const fromX = fromNode.x + fromNode.width / 2;
    const fromY = fromNode.y + fromNode.height / 2;
    const toX = toNode.x + toNode.width / 2;
    const toY = toNode.y + toNode.height / 2;

    // Check if there's already a direct connection between these nodes
    const existingDirectConnection = edges.find(e => 
      e.id !== edge.id && 
      ((e.from === edge.from && e.to === edge.to) || (e.from === edge.to && e.to === edge.from))
    );

    if (!existingDirectConnection) {
      // Direct connection
      return [{ x: fromX, y: fromY }, { x: toX, y: toY }];
    }

    // Create a path with turns to avoid overlap
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    const offset = 30;

    // Determine turn direction based on relative positions
    const turnRight = fromX < toX;
    const turnDown = fromY < toY;

    const turn1X = turnRight ? midX + offset : midX - offset;
    const turn1Y = turnDown ? midY + offset : midY - offset;

    return [
      { x: fromX, y: fromY },
      { x: turn1X, y: fromY },
      { x: turn1X, y: turn1Y },
      { x: toX, y: turn1Y },
      { x: toX, y: toY }
    ];
  };

  const getMidPoint = (path) => {
    if (path.length === 2) {
      return {
        x: (path[0].x + path[1].x) / 2,
        y: (path[0].y + path[1].y) / 2
      };
    }
    // For multi-segment paths, return the middle segment's midpoint
    const midIndex = Math.floor(path.length / 2);
    const prev = path[midIndex - 1];
    const next = path[midIndex];
    return {
      x: (prev.x + next.x) / 2,
      y: (prev.y + next.y) / 2
    };
  };

  // Check if point is on line segment
  const isPointOnLineSegment = (point, start, end, tolerance = 5) => {
    const A = point.x - start.x;
    const B = point.y - start.y;
    const C = end.x - start.x;
    const D = end.y - start.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;
    if (lenSq !== 0) {
      param = dot / lenSq;
    }

    let xx, yy;
    if (param < 0) {
      xx = start.x;
      yy = start.y;
    } else if (param > 1) {
      xx = end.x;
      yy = end.y;
    } else {
      xx = start.x + param * C;
      yy = start.y + param * D;
    }

    const dx = point.x - xx;
    const dy = point.y - yy;
    return Math.sqrt(dx * dx + dy * dy) <= tolerance;
  };

  // Check if click is on edge
  const getClickedEdge = (x, y) => {
    for (const edge of edges) {
      const fromNode = nodes.find(n => n.id === edge.from);
      const toNode = nodes.find(n => n.id === edge.to);
      
      if (!fromNode || !toNode) continue;
      
      const path = calculateConnectionPath(fromNode, toNode, edge);
      
      // Check each segment of the path
      for (let i = 0; i < path.length - 1; i++) {
        if (isPointOnLineSegment({ x, y }, path[i], path[i + 1])) {
          return edge;
        }
      }
    }
    return null;
  };

  const handleCanvasClick = (e) => {
    if (editingNode || editingEdge) return;
    
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - flowchart.pan.x) / flowchart.zoom;
    const y = (e.clientY - rect.top - flowchart.pan.y) / flowchart.zoom;
    
    // Check if clicking on a node first
    const clickedNode = nodes.find(node => 
      x >= node.x && x <= node.x + node.width &&
      y >= node.y && y <= node.y + node.height
    );
    
    // Check if clicking on an edge
    const clickedEdge = !clickedNode ? getClickedEdge(x, y) : null;
    
    if (connectionMode && clickedNode) {
      if (!fromNode) {
        setFromNode(clickedNode);
      } else if (clickedNode.id !== fromNode.id) {
        // Check if this is a diamond/rhombus node (decision node)
        if (fromNode.type === 'diamond' || fromNode.type === 'rhombus') {
          setPendingEdge({
            id: Date.now(),
            from: fromNode.id,
            to: clickedNode.id
          });
          setShowLabelModal(true);
        } else {
          // For other nodes, just create the connection
          const newEdge = {
            id: Date.now(),
            from: fromNode.id,
            to: clickedNode.id,
            label: ''
          };
          
          onUpdateFlowchart({
            ...flowchart,
            edges: [...edges, newEdge]
          });
          
          setFromNode(null);
          setConnectionMode(false);
          setSelectedTool(null);
        }
      }
      return;
    }
    
    if (clickedNode) {
      setSelectedNode(clickedNode);
      setSelectedEdge(null);
      return;
    }
    
    if (clickedEdge) {
      setSelectedEdge(clickedEdge);
      setSelectedNode(null);
      return;
    }
    
    // Place new node
    if (selectedTool && selectedTool !== 'arrow') {
      const newNode = {
        id: Date.now(),
        type: selectedTool,
        x,
        y,
        width: selectedTool === 'oval' ? 100 : 120,
        height: selectedTool === 'oval' ? 60 : 60,
        text: getDefaultNodeText(selectedTool)
      };
      
      onUpdateFlowchart({
        ...flowchart,
        nodes: [...nodes, newNode]
      });
      
      setSelectedTool(null); // Deselect tool after placing
    }
    
    setSelectedNode(null);
    setSelectedEdge(null);
  };

  const getDefaultNodeText = (type) => {
    switch (type) {
      case 'oval':
        return 'Start/End';
      case 'diamond':
        return 'Decision';
      case 'rhombus':
        return 'Decision';
      case 'rectangle':
        return 'Process';
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const handleNodeDoubleClick = (node) => {
    setEditingNode(node.id);
    setEditText(node.text);
  };

  const handleEdgeDoubleClick = (edge) => {
    setEditingEdge(edge.id);
    setEditText(edge.label || '');
  };

  const handleTextSubmit = () => {
    if (editingNode) {
      const updatedNodes = nodes.map(node => 
        node.id === editingNode ? { ...node, text: editText } : node
      );
      
      onUpdateFlowchart({
        ...flowchart,
        nodes: updatedNodes
      });
      
      setEditingNode(null);
    } else if (editingEdge) {
      const updatedEdges = edges.map(edge => 
        edge.id === editingEdge ? { ...edge, label: editText } : edge
      );
      
      onUpdateFlowchart({
        ...flowchart,
        edges: updatedEdges
      });
      
      setEditingEdge(null);
    }
    
    setEditText('');
  };

  const handleDeleteNode = () => {
    if (!selectedNode) return;
    
    // Remove the node and any connected edges
    const updatedNodes = nodes.filter(node => node.id !== selectedNode.id);
    const updatedEdges = edges.filter(edge => 
      edge.from !== selectedNode.id && edge.to !== selectedNode.id
    );
    
    onUpdateFlowchart({
      ...flowchart,
      nodes: updatedNodes,
      edges: updatedEdges
    });
    
    setSelectedNode(null);
  };

  const handleDeleteEdge = () => {
    if (!selectedEdge) return;
    
    const updatedEdges = edges.filter(edge => edge.id !== selectedEdge.id);
    
    onUpdateFlowchart({
      ...flowchart,
      edges: updatedEdges
    });
    
    setSelectedEdge(null);
  };

  const handleMouseDown = (e, node) => {
    if (editingNode || editingEdge) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;
    
    setDragState({
      nodeId: node.id,
      startX,
      startY,
      originalX: node.x,
      originalY: node.y
    });
  };

  const handleMouseMove = useCallback((e) => {
    if (!dragState) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    const deltaX = (currentX - dragState.startX) / flowchart.zoom;
    const deltaY = (currentY - dragState.startY) / flowchart.zoom;
    
    const updatedNodes = nodes.map(node => 
      node.id === dragState.nodeId 
        ? { 
            ...node, 
            x: dragState.originalX + deltaX,
            y: dragState.originalY + deltaY
          }
        : node
    );
    
    onUpdateFlowchart({
      ...flowchart,
      nodes: updatedNodes
    });
  }, [dragState, nodes, flowchart, onUpdateFlowchart]);

  const handleMouseUp = useCallback(() => {
    setDragState(null);
  }, []);

  React.useEffect(() => {
    if (dragState) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState, handleMouseMove, handleMouseUp]);

  const handleArrowTool = () => {
    setSelectedTool('arrow');
    setConnectionMode(true);
    setFromNode(null);
  };

  const handleLabelSubmit = () => {
    if (!pendingEdge) return;
    
    const newEdge = {
      ...pendingEdge,
      label: edgeLabel
    };
    
    onUpdateFlowchart({
      ...flowchart,
      edges: [...edges, newEdge]
    });
    
    setFromNode(null);
    setConnectionMode(false);
    setSelectedTool(null);
    setShowLabelModal(false);
    setPendingEdge(null);
    setEdgeLabel('');
  };

  const renderNode = (node) => {
    const isSelected = selectedNode?.id === node.id;
    const isEditing = editingNode === node.id;
    
    let nodeStyle = {
      position: 'absolute',
      left: `${node.x}px`,
      top: `${node.y}px`,
      width: `${node.width}px`,
      height: `${node.height}px`,
      backgroundColor: isSelected ? '#7c3aed' : '#646cff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      cursor: 'move',
      fontSize: '12px',
      textAlign: 'center',
      wordBreak: 'break-word',
      padding: '5px',
      boxSizing: 'border-box',
      border: isSelected ? '2px solid #a855f7' : '1px solid transparent',
      userSelect: 'none',
      transition: 'all 0.2s ease'
    };

    if (node.type === 'circle' || node.type === 'oval') {
      nodeStyle.borderRadius = node.type === 'oval' ? '50%' : '50%';
    } else if (node.type === 'diamond' || node.type === 'rhombus') {
      nodeStyle.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      nodeStyle.borderRadius = '0';
    } else {
      nodeStyle.borderRadius = '4px';
    }

    return (
      <div 
        key={node.id}
        style={nodeStyle}
        onMouseDown={(e) => handleMouseDown(e, node)}
        onDoubleClick={() => handleNodeDoubleClick(node)}
      >
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleTextSubmit}
            onKeyPress={(e) => e.key === 'Enter' && handleTextSubmit()}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              textAlign: 'center',
              fontSize: '12px',
              width: '100%',
              outline: 'none'
            }}
            autoFocus
          />
        ) : (
          node.text
        )}
      </div>
    );
  };

  const renderEdge = (edge) => {
    const fromNodeData = nodes.find(n => n.id === edge.from);
    const toNodeData = nodes.find(n => n.id === edge.to);
    
    if (!fromNodeData || !toNodeData) return null;
    
    const path = calculateConnectionPath(fromNodeData, toNodeData, edge);
    const isSelected = selectedEdge?.id === edge.id;
    const isEditing = editingEdge === edge.id;
    
    return (
      <div key={edge.id}>
        {/* Render path segments */}
        {path.map((point, index) => {
          if (index === path.length - 1) return null;
          
          const nextPoint = path[index + 1];
          const length = Math.sqrt(Math.pow(nextPoint.x - point.x, 2) + Math.pow(nextPoint.y - point.y, 2));
          const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;
          
          return (
            <div
              key={`segment-${index}`}
              style={{
                position: 'absolute',
                left: `${point.x}px`,
                top: `${point.y}px`,
                width: `${length}px`,
                height: isSelected ? '4px' : '2px',
                backgroundColor: isSelected ? '#a855f7' : '#646cff',
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg)`,
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEdge(edge);
                setSelectedNode(null);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                handleEdgeDoubleClick(edge);
              }}
            />
          );
        })}
        
        {/* Arrow head */}
        {(() => {
          const lastSegment = path[path.length - 1];
          const secondLast = path[path.length - 2];
          const angle = Math.atan2(lastSegment.y - secondLast.y, lastSegment.x - secondLast.x) * 180 / Math.PI;
          
          return (
            <div
              style={{
                position: 'absolute',
                left: `${lastSegment.x - 5}px`,
                top: `${lastSegment.y - 5}px`,
                width: '0',
                height: '0',
                borderLeft: `8px solid ${isSelected ? '#a855f7' : '#646cff'}`,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 50%',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEdge(edge);
                setSelectedNode(null);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                handleEdgeDoubleClick(edge);
              }}
            />
          );
        })()}
        
        {/* Label */}
        {(edge.label || isEditing) && (
          <div
            style={{
              position: 'absolute',
              left: `${getMidPoint(path).x}px`,
              top: `${getMidPoint(path).y - 10}px`,
              color: 'white',
              fontSize: '10px',
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: '2px 4px',
              borderRadius: '3px',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              border: isEditing ? '1px solid #646cff' : 'none'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedEdge(edge);
              setSelectedNode(null);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleEdgeDoubleClick(edge);
            }}
          >
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleTextSubmit}
                onKeyPress={(e) => e.key === 'Enter' && handleTextSubmit()}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '10px',
                  width: '60px',
                  outline: 'none'
                }}
                autoFocus
              />
            ) : (
              edge.label
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      color: 'rgba(255, 255, 255, 0.87)'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '1px solid #444'
      }}>
        <h2 style={{ 
          margin: '0',
          fontSize: '1.8em',
          color: 'rgba(255, 255, 255, 0.87)'
        }}>
          {flowchart.name}
        </h2>
        <button 
          onClick={onBack}
          style={{
            padding: '8px 16px',
            backgroundColor: '#1a1a1a',
            color: 'rgba(255, 255, 255, 0.87)',
            border: '1px solid #646cff',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'all 0.25s',
            fontWeight: '500'
          }}
        >
          Back to List
        </button>
      </div>
      
      {/* Tabs Navigation */}
      <div style={{
        display: 'flex',
        marginBottom: '20px',
        borderBottom: '1px solid #444'
      }}>
        <button 
          onClick={() => setActiveTab('editor')} 
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: activeTab === 'editor' ? '#646cff' : '#1a1a1a',
            color: 'rgba(255, 255, 255, 0.87)',
            cursor: 'pointer',
            fontSize: '1em',
            marginRight: '5px',
            borderRadius: '8px 8px 0 0',
            fontWeight: '500',
            transition: 'all 0.25s'
          }}
        >
          Flowchart Editor
        </button>
        <button 
          onClick={() => setActiveTab('json')} 
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: activeTab === 'json' ? '#646cff' : '#1a1a1a',
            color: 'rgba(255, 255, 255, 0.87)',
            cursor: 'pointer',
            fontSize: '1em',
            borderRadius: '8px 8px 0 0',
            fontWeight: '500',
            transition: 'all 0.25s'
          }}
        >
          JSON Editor
        </button>
      </div>
      
      {activeTab === 'editor' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Toolbar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '15px',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => setSelectedTool('rectangle')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'rectangle' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Add Rectangle
              </button>
              <button 
                onClick={() => setSelectedTool('diamond')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'diamond' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Add Diamond
              </button>
              <button 
                onClick={() => setSelectedTool('rhombus')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'rhombus' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Add Rhombus
              </button>
              <button 
                onClick={() => setSelectedTool('circle')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'circle' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Add Circle
              </button>
              <button 
                onClick={() => setSelectedTool('oval')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'oval' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Add Oval
              </button>
              <button 
                onClick={handleArrowTool}
                style={{
                  padding: '8px 16px',
                  backgroundColor: connectionMode ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                {connectionMode ? (fromNode ? 'Select Target' : 'Select Source') : 'Connect Nodes'}
              </button>
              {selectedNode && (
                <button 
                  onClick={handleDeleteNode}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.25s'
                  }}
                >
                  Delete Node
                </button>
              )}
              {selectedEdge && (
                <button 
                  onClick={handleDeleteEdge}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.25s'
                  }}
                >
                  Delete Connection
                </button>
              )}
            </div>
            
            <div style={{
              display: 'flex',
              gap: '10px',
              marginLeft: 'auto'
            }}>
              <button 
                onClick={handleExportImage}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#ff9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Export as Image
              </button>
              <button 
                onClick={() => navigator.clipboard.writeText(handleExportJson())}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#9c27b0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                Copy JSON
              </button>
            </div>
          </div>
          
          {/* Instructions */}
          {(selectedTool || connectionMode) && (
            <div style={{
              padding: '10px',
              backgroundColor: 'rgba(100, 108, 255, 0.1)',
              border: '1px solid #646cff',
              borderRadius: '8px',
              color: '#646cff',
              textAlign: 'center'
            }}>
              {connectionMode ? 
                (fromNode ? 
                  `Click on target node to connect from "${fromNode.text}"` : 
                  'Click on a node to start connection'
                ) :
                `Click on canvas to place a ${selectedTool}`
              }
            </div>
          )}
          
          {/* Flowchart Canvas */}
          <div 
            ref={canvasRef}
            onClick={handleCanvasClick}
            style={{
              height: '600px',
              border: '2px dashed #646cff',
              borderRadius: '8px',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              cursor: selectedTool ? 'crosshair' : 'default'
            }}
          >
            {nodes.length === 0 && !selectedTool && (
              <p style={{ 
                color: '#666',
                fontStyle: 'italic',
                pointerEvents: 'none'
              }}>
                Select a tool from the toolbar to start building your flowchart
              </p>
            )}
            
            {/* Render canvas content */}
            <div style={{
              position: 'absolute',
              transform: `scale(${flowchart.zoom}) translate(${flowchart.pan.x}px, ${flowchart.pan.y}px)`,
              transformOrigin: '0 0',
              width: '100%',
              height: '100%'
            }}>
              {/* Render edges */}
              {edges.map(renderEdge)}
              
              {/* Render nodes */}
              {nodes.map(renderNode)}
            </div>
          </div>
          
          {/* Instructions */}
          <div style={{
            fontSize: '14px',
            color: '#888',
            textAlign: 'center',
            marginTop: '10px'
          }}>
            • Single click to select nodes/connections • Double click to edit text • 
            Drag nodes to move them • Use "Connect Nodes" to create arrows • 
            Press Delete to remove selected item
          </div>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          {/* JSON Input */}
          <div style={{
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#1a1a1a'
          }}>
            <h3 style={{ 
              marginTop: '0',
              color: 'rgba(255, 255, 255, 0.87)'
            }}>
              Import JSON
            </h3>
            <textarea
              value={jsonInput}
              onChange={(e) => onJsonInputChange(e.target.value)}
              placeholder="Paste your flowchart JSON here"
              style={{
                width: '100%',
                minHeight: '300px',
                padding: '10px',
                border: '1px solid #444',
                borderRadius: '8px',
                fontFamily: 'monospace',
                marginBottom: '15px',
                backgroundColor: '#242424',
                color: 'rgba(255, 255, 255, 0.87)',
                resize: 'vertical'
              }}
            />
            <button 
              onClick={onImportJson}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1em',
                fontWeight: '500',
                transition: 'all 0.25s'
              }}
            >
              Import JSON
            </button>
          </div>
          
          {/* JSON Output */}
          <div style={{
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#1a1a1a'
          }}>
            <h3 style={{ 
              marginTop: '0',
              color: 'rgba(255, 255, 255, 0.87)'
            }}>
              Current Flowchart JSON
            </h3>
            <pre style={{
              backgroundColor: '#242424',
              padding: '15px',
              border: '1px solid #444',
              borderRadius: '8px',
              overflow: 'auto',
              maxHeight: '400px',
              fontFamily: 'monospace',
              color: 'rgba(255, 255, 255, 0.87)',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}>
              {handleExportJson()}
            </pre>
          </div>
        </div>
      )}

      {/* Label Modal */}
      {showLabelModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            border: '1px solid #646cff'
          }}>
            <h3 style={{ marginTop: 0, color: 'white' }}>Add Connection Label</h3>
            <p style={{ color: '#aaa', marginBottom: '20px' }}>
              Please enter a label for this connection (e.g., "Yes" or "No"):
            </p>
            <input
              type="text"
              value={edgeLabel}
              onChange={(e) => setEdgeLabel(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '20px',
                backgroundColor: '#242424',
                border: '1px solid #444',
                color: 'white',
                borderRadius: '4px'
              }}
              autoFocus
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => {
                  setShowLabelModal(false);
                  setEdgeLabel('');
                  setFromNode(null);
                  setConnectionMode(false);
                  setSelectedTool(null);
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleLabelSubmit}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#646cff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Label
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowchartMaker;