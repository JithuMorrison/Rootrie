import React, { useState, useRef, useCallback, useEffect } from 'react';

const FlowchartMaker = ({ flowchart, nodes, edges, jsonInput, onJsonInputChange, onImportJson, onUpdateFlowchart, onBack }) => {
  const [activeTab, setActiveTab] = useState('editor');
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [dragState, setDragState] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
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
      if (e.key === 'Delete' && selectedNode) {
        handleDeleteNode();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedNode]);

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
        const fromX = fromNodeData.x + fromNodeData.width / 2;
        const fromY = fromNodeData.y + fromNodeData.height / 2;
        const toX = toNodeData.x + toNodeData.width / 2;
        const toY = toNodeData.y + toNodeData.height / 2;
        
        ctx.strokeStyle = '#646cff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        
        // Draw arrowhead
        const angle = Math.atan2(toY - fromY, toX - fromX);
        const headLength = 10;
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI/6), toY - headLength * Math.sin(angle - Math.PI/6));
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI/6), toY - headLength * Math.sin(angle + Math.PI/6));
        ctx.stroke();
        
        // Draw label if exists
        if (edge.label) {
          const midX = (fromX + toX) / 2;
          const midY = (fromY + toY) / 2;
          ctx.fillStyle = 'white';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(edge.label, midX, midY - 5);
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
      } else if (node.type === 'diamond') {
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

  const handleCanvasClick = (e) => {
    if (editingNode) return;
    
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - flowchart.pan.x) / flowchart.zoom;
    const y = (e.clientY - rect.top - flowchart.pan.y) / flowchart.zoom;
    
    // Check if clicking on a node
    const clickedNode = nodes.find(node => 
      x >= node.x && x <= node.x + node.width &&
      y >= node.y && y <= node.y + node.height
    );
    
    if (connectionMode && clickedNode) {
      if (!fromNode) {
        setFromNode(clickedNode);
      } else if (clickedNode.id !== fromNode.id) {
        // Check if this is a diamond node (decision node)
        if (fromNode.type === 'diamond') {
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
  };

  const getDefaultNodeText = (type) => {
    switch (type) {
      case 'oval':
        return type === 'start' ? 'Start' : 'End';
      case 'diamond':
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

  const handleTextSubmit = () => {
    const updatedNodes = nodes.map(node => 
      node.id === editingNode ? { ...node, text: editText } : node
    );
    
    onUpdateFlowchart({
      ...flowchart,
      nodes: updatedNodes
    });
    
    setEditingNode(null);
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

  const handleMouseDown = (e, node) => {
    if (editingNode) return;
    
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
    } else if (node.type === 'diamond') {
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
    
    const fromX = fromNodeData.x + fromNodeData.width / 2;
    const fromY = fromNodeData.y + fromNodeData.height / 2;
    const toX = toNodeData.x + toNodeData.width / 2;
    const toY = toNodeData.y + toNodeData.height / 2;
    
    const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
    const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
    
    return (
      <div key={edge.id}>
        <div
          style={{
            position: 'absolute',
            left: `${fromX}px`,
            top: `${fromY}px`,
            width: `${length}px`,
            height: '2px',
            backgroundColor: '#646cff',
            transformOrigin: '0 0',
            transform: `rotate(${angle}deg)`,
            pointerEvents: 'none'
          }}
        />
        {/* Arrow head */}
        <div
          style={{
            position: 'absolute',
            left: `${toX - 5}px`,
            top: `${toY - 5}px`,
            width: '0',
            height: '0',
            borderLeft: '5px solid #646cff',
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            transform: `rotate(${angle}deg)`,
            pointerEvents: 'none'
          }}
        />
        {/* Label */}
        {edge.label && (
          <div
            style={{
              position: 'absolute',
              left: `${(fromX + toX) / 2}px`,
              top: `${(fromY + toY) / 2 - 10}px`,
              color: 'white',
              fontSize: '10px',
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: '2px 4px',
              borderRadius: '3px',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          >
            {edge.label}
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
            fontWeight: '500',
            '&:hover': {
              borderColor: '#a855f7'
            }
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: selectedTool === 'rectangle' ? '#7c3aed' : '#444'
                  }
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: selectedTool === 'diamond' ? '#7c3aed' : '#444'
                  }
                }}
              >
                Add Diamond
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: selectedTool === 'circle' ? '#7c3aed' : '#444'
                  }
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: selectedTool === 'oval' ? '#7c3aed' : '#444'
                  }
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: connectionMode ? '#7c3aed' : '#444'
                  }
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
                    transition: 'all 0.25s',
                    '&:hover': {
                      backgroundColor: '#dc2626'
                    }
                  }}
                >
                  Delete Node
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: '#e68a00'
                  }
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
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: '#8a1fa0'
                  }
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
            • Single click to select nodes • Double click to edit text • Drag nodes to move them • Use "Connect Nodes" to create arrows • Press Delete to remove selected node
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
                transition: 'all 0.25s',
                '&:hover': {
                  backgroundColor: '#3e8e41'
                }
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