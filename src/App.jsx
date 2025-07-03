import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Plus, Download, Upload, ZoomIn, ZoomOut, Trash2, X, Link } from 'lucide-react';

const EvolutionChartMaker = () => {
  // Constants
  const TIMELINE_HEIGHT = 60;
  const NODE_WIDTH = 120;
  const NODE_HEIGHT = 100;

  // Load from localStorage
  const loadFromStorage = () => {
    const saved = localStorage.getItem('evolutionChartData');
    return saved ? JSON.parse(saved) : null;
  };

  // State management
  const [projects, setProjects] = useState(loadFromStorage()?.projects || []);
  const [currentProject, setCurrentProject] = useState(loadFromStorage()?.currentProject || null);
  const [nodes, setNodes] = useState(loadFromStorage()?.nodes || []);
  const [connections, setConnections] = useState(loadFromStorage()?.connections || []);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showNodeEditor, setShowNodeEditor] = useState(false);
  const [editingNode, setEditingNode] = useState(null);
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [connectionMode, setConnectionMode] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragNode, setDragNode] = useState(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Save to localStorage
  useEffect(() => {
    const data = { projects, currentProject, nodes, connections, zoom, pan };
    localStorage.setItem('evolutionChartData', JSON.stringify(data));
  }, [projects, currentProject, nodes, connections, zoom, pan]);

  // Create new project
  const createProject = (name, start, end) => {
    const newProject = {
      id: Date.now(),
      name,
      timelineStart: start,
      timelineEnd: end,
      nodes: [],
      connections: []
    };
    setProjects([...projects, newProject]);
    setCurrentProject(newProject);
    setNodes([]);
    setConnections([]);
    setShowProjectDialog(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Delete project
  const deleteProject = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId));
    if (currentProject?.id === projectId) {
      setCurrentProject(null);
      setNodes([]);
      setConnections([]);
    }
  };

  // Load project
  const loadProject = (project) => {
    setCurrentProject(project);
    setNodes(project.nodes || []);
    setConnections(project.connections || []);
    setShowProjectDialog(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Save current project
  const saveCurrentProject = () => {
    if (!currentProject) return;
    
    const updatedProject = {
      ...currentProject,
      nodes,
      connections
    };
    
    setProjects(projects.map(p => p.id === currentProject.id ? updatedProject : p));
    setCurrentProject(updatedProject);
  };

  // Timeline calculations
  const getTimelinePosition = useCallback((timeline) => {
    if (!currentProject) return 0;
    const range = currentProject.timelineStart - currentProject.timelineEnd;
    const position = (currentProject.timelineStart - timeline) / range;
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    return position * canvasWidth;
  }, [currentProject]);

  const getTimelineFromX = useCallback((x) => {
    if (!currentProject) return 0;
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    const range = currentProject.timelineStart - currentProject.timelineEnd;
    const position = x / canvasWidth;
    return currentProject.timelineStart - (position * range);
  }, [currentProject]);

  // Format timeline marker based on zoom level
  const formatTimelineMarker = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)} BYA`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)} MYA`;
    } else if (value >= 1) {
      return `${value} KYA`;
    } else {
      return `${(value * 1000).toFixed(0)} LYA`;
    }
  };

  const getVisibleTimelineMarkers = useCallback(() => {
    if (!currentProject) return [];
    
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    const range = currentProject.timelineStart - currentProject.timelineEnd;
    const visibleRange = range / zoom;
    
    // Determine step size based on zoom level
    let step;
    if (visibleRange > 2000000) step = 1000000;
    else if (visibleRange > 1000000) step = 500000;
    else if (visibleRange > 500000) step = 100000;
    else if (visibleRange > 200000) step = 50000;
    else if (visibleRange > 100000) step = 25000;
    else if (visibleRange > 50000) step = 10000;
    else if (visibleRange > 20000) step = 5000;
    else if (visibleRange > 10000) step = 2500;
    else if (visibleRange > 5000) step = 1000;
    else if (visibleRange > 2000) step = 500;
    else if (visibleRange > 1000) step = 250;
    else if (visibleRange > 500) step = 100;
    else if (visibleRange > 200) step = 50;
    else if (visibleRange > 100) step = 25;
    else if (visibleRange > 50) step = 10;
    else if (visibleRange > 20) step = 5;
    else step = 1;
    
    const markers = [];
    const leftTime = getTimelineFromX(-pan.x / zoom);
    const rightTime = getTimelineFromX((canvasWidth - pan.x) / zoom);
    
    const start = Math.ceil(Math.min(leftTime, rightTime) / step) * step;
    const end = Math.floor(Math.max(leftTime, rightTime) / step) * step;
    
    for (let i = start; i <= end; i += step) {
      if (i >= currentProject.timelineEnd && i <= currentProject.timelineStart) {
        markers.push(i);
      }
    }
    return markers;
  }, [currentProject, zoom, pan, getTimelineFromX]);

  // Node management
  const createNode = (clientX, clientY) => {
    if (!currentProject) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const canvasX = clientX - rect.left;
    const canvasY = clientY - rect.top - TIMELINE_HEIGHT;
    
    // Calculate timeline position based on X coordinate
    const timeline = getTimelineFromX((canvasX - pan.x) / zoom);
    
    const newNode = {
      id: Date.now(),
      x: (canvasX - pan.x) / zoom,
      y: Math.max(20, (canvasY - pan.y) / zoom),
      title: 'New Species',
      description: 'Description here...',
      imageSrc: '',
      timeline: Math.round(timeline * 10) / 10
    };
    
    setNodes([...nodes, newNode]);
    setEditingNode(newNode);
    setShowNodeEditor(true);
  };

  const updateNode = (updatedNode) => {
    setNodes(nodes.map(node => node.id === updatedNode.id ? updatedNode : node));
    setEditingNode(null);
    setShowNodeEditor(false);
  };

  const deleteNode = (nodeId) => {
    setNodes(nodes.filter(node => node.id !== nodeId));
    setConnections(connections.filter(conn => conn.from !== nodeId && conn.to !== nodeId));
    setSelectedNode(null);
  };

  // Connection management
  const deleteConnection = (connectionId) => {
    setConnections(connections.filter(conn => conn.id !== connectionId));
    setSelectedConnection(null);
  };

  // Dragging functionality
  const handleMouseDown = (e, node) => {
    if (connectionMode) return;
    
    e.stopPropagation();
    setIsDragging(true);
    setDragNode(node);
    
    const rect = canvasRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setSelectedNode(node);
    setSelectedConnection(null);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !dragNode) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    // Calculate new Y position (X is fixed by timeline)
    const deltaY = (currentY - dragStart.y) / zoom;
    const newY = Math.max(20, dragNode.y + deltaY);
    
    // Update node position
    const updatedNode = {
      ...dragNode,
      y: newY
    };
    
    setNodes(prev => prev.map(node => 
      node.id === dragNode.id ? updatedNode : node
    ));
    
    setDragNode(updatedNode);
    setDragStart({ x: currentX, y: currentY });
  }, [isDragging, dragNode, dragStart, zoom]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragNode(null);
  }, []);

  // Connection management
  const handleNodeClick = (e, node) => {
    e.stopPropagation();
    
    if (connectionMode) {
      if (!connectionStart) {
        setConnectionStart(node.id);
      } else if (connectionStart !== node.id) {
        // Create connection if it doesn't exist
        const existingConnection = connections.find(conn =>
          (conn.from === connectionStart && conn.to === node.id) ||
          (conn.from === node.id && conn.to === connectionStart)
        );
        
        if (!existingConnection) {
          setConnections([...connections, {
            id: Date.now(),
            from: connectionStart,
            to: node.id
          }]);
        }
        setConnectionMode(false);
        setConnectionStart(null);
      }
    } else if (!isDragging) {
      setSelectedNode(node);
      setSelectedConnection(null);
    }
  };

  // Calculate curved path for connections
  const getConnectionPath = (fromNode, toNode) => {
    const fromX = (getTimelinePosition(fromNode.timeline) + pan.x) * zoom + (NODE_WIDTH * zoom) / 2;
    const fromY = (fromNode.y + pan.y) * zoom + TIMELINE_HEIGHT + (NODE_HEIGHT * zoom) / 2;
    const toX = (getTimelinePosition(toNode.timeline) + pan.x) * zoom + (NODE_WIDTH * zoom) / 2;
    const toY = (toNode.y + pan.y) * zoom + TIMELINE_HEIGHT + (NODE_HEIGHT * zoom) / 2;
    
    const controlOffset = Math.abs(fromY - toY) * 0.3;
    
    return `M ${fromX} ${fromY}
            C ${fromX} ${fromY + controlOffset},
              ${toX} ${toY - controlOffset},
              ${toX} ${toY}`;
  };

  // Get midpoint of connection for delete button
  const getConnectionMidpoint = (fromNode, toNode) => {
    const fromX = (getTimelinePosition(fromNode.timeline) + pan.x) * zoom + (NODE_WIDTH * zoom) / 2;
    const fromY = (fromNode.y + pan.y) * zoom + TIMELINE_HEIGHT + (NODE_HEIGHT * zoom) / 2;
    const toX = (getTimelinePosition(toNode.timeline) + pan.x) * zoom + (NODE_WIDTH * zoom) / 2;
    const toY = (toNode.y + pan.y) * zoom + TIMELINE_HEIGHT + (NODE_HEIGHT * zoom) / 2;
    
    return {
      x: (fromX + toX) / 2,
      y: (fromY + toY) / 2
    };
  };

  // Export/Import functionality
  const exportProject = () => {
    if (!currentProject) return;
    
    const exportData = {
      project: currentProject,
      nodes,
      connections
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentProject.name.replace(/\s+/g, '-')}-evolution-chart.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importProject = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importData = JSON.parse(e.target.result);
        if (importData.project) {
          setCurrentProject(importData.project);
          setNodes(importData.nodes || []);
          setConnections(importData.connections || []);
          
          if (!projects.some(p => p.id === importData.project.id)) {
            setProjects([...projects, importData.project]);
          }
        }
      } catch (error) {
        alert('Error parsing the file. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  // Canvas interaction handlers
  const handleCanvasClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      createNode(e.clientX, e.clientY);
    } else {
      setSelectedNode(null);
      setSelectedConnection(null);
      if (connectionMode) {
        setConnectionMode(false);
        setConnectionStart(null);
      }
    }
  };

  const handleNodeDoubleClick = (node) => {
    setEditingNode(node);
    setShowNodeEditor(true);
  };

  // Zoom and pan functionality
  const handleZoom = (delta, centerX = null, centerY = null) => {
    const newZoom = Math.max(0.1, Math.min(5, zoom + delta));
    
    if (centerX !== null && centerY !== null) {
      setPan({
        x: centerX - (centerX - pan.x) * (newZoom / zoom),
        y: centerY - (centerY - pan.y) * (newZoom / zoom)
      });
    }
    
    setZoom(newZoom);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    
    if (e.shiftKey) {
      // Smooth horizontal scrolling with Shift
      setPan({
        x: pan.x - e.deltaY * 0.8,
        y: pan.y
      });
    } else if (e.ctrlKey) {
      // Zoom centered on mouse position
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      handleZoom(-e.deltaY * 0.001, mouseX, mouseY);
    } else {
      // Regular panning
      setPan({
        x: pan.x - e.deltaX * 0.5,
        y: pan.y - e.deltaY * 0.5
      });
    }
  };

  // Event listeners
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Auto-save current project
  useEffect(() => {
    if (currentProject) {
      const timer = setTimeout(saveCurrentProject, 1000);
      return () => clearTimeout(timer);
    }
  }, [nodes, connections, currentProject]);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#4a90a4',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
      userSelect: 'none'
    }}>
      {/* Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        zIndex: 1000,
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '700', color: '#2d3748' }}>
            🧬 Evolution Chart Maker
          </h1>
          {currentProject && (
            <span style={{
              background: '#4299e1',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {currentProject.name}
            </span>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setShowProjectDialog(true)}
            style={{
              background: '#48bb78',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '500'
            }}
          >
            <Plus size={16} /> {currentProject ? 'Project' : 'New Project'}
          </button>
          
          {currentProject && (
            <>
              <button
                onClick={() => {
                  setConnectionMode(!connectionMode);
                  setConnectionStart(null);
                }}
                style={{
                  background: connectionMode ? '#f56565' : '#ed8936',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: '500'
                }}
              >
                {connectionMode ? 'Cancel' : 'Connect'}
              </button>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  background: '#ed8936',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: '500'
                }}
              >
                <Upload size={16} /> Import
              </button>
              
              <button
                onClick={exportProject}
                style={{
                  background: '#4299e1',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: '500'
                }}
              >
                <Download size={16} /> Export
              </button>
            </>
          )}
          
          <div style={{ display: 'flex', gap: '4px' }}>
            <button 
              onClick={() => handleZoom(0.1)} 
              style={{ 
                padding: '8px', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                background: '#e2e8f0' 
              }}
            >
              <ZoomIn size={16} />
            </button>
            <button 
              onClick={() => handleZoom(-0.1)} 
              style={{ 
                padding: '8px', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                background: '#e2e8f0' 
              }}
            >
              <ZoomOut size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      {currentProject && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: '0',
          right: '0',
          height: `${TIMELINE_HEIGHT}px`,
          background: 'rgba(255, 255, 255, 0.9)',
          borderBottom: '2px solid #4299e1',
          zIndex: 100,
          overflow: 'hidden'
        }}>
          {getVisibleTimelineMarkers().map(marker => (
            <div
              key={marker}
              style={{
                position: 'absolute',
                left: `${(getTimelinePosition(marker) + pan.x) * zoom}px`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '60px',
                transition: 'left 0.1s ease'
              }}
            >
              <div style={{
                width: '2px',
                height: '20px',
                background: '#4299e1',
                marginBottom: '4px'
              }} />
              <span style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#2d3748',
                whiteSpace: 'nowrap'
              }}>
                {formatTimelineMarker(marker)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Main Canvas */}
      {currentProject ? (
        <div
          ref={canvasRef}
          onClick={handleCanvasClick}
          onWheel={handleWheel}
          style={{
            position: 'absolute',
            top: `${70 + TIMELINE_HEIGHT}px`,
            left: '0',
            right: '0',
            bottom: '0',
            cursor: connectionMode ? 'crosshair' : isDragging ? 'grabbing' : 'default',
            overflow: 'hidden',
            background: '#4a90a4'
          }}
        >
          {/* SVG for connections */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {connections.map(conn => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              
              const midpoint = getConnectionMidpoint(fromNode, toNode);
              const isSelected = selectedConnection === conn.id || 
                                (selectedNode && (selectedNode.id === fromNode.id || selectedNode.id === toNode.id));
              
              return (
                <g key={conn.id}>
                  <path
                    d={getConnectionPath(fromNode, toNode)}
                    stroke={isSelected ? '#ffeb3b' : '#ffffff'}
                    strokeWidth={isSelected ? '3' : '2'}
                    fill="none"
                    opacity="0.8"
                  />
                  {isSelected && (
                    <circle
                      cx={midpoint.x}
                      cy={midpoint.y}
                      r={8 * zoom}
                      fill="#e53e3e"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteConnection(conn.id);
                      }}
                      style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map(node => (
            <div
              key={node.id}
              onMouseDown={(e) => handleMouseDown(e, node)}
              onClick={(e) => handleNodeClick(e, node)}
              onDoubleClick={() => handleNodeDoubleClick(node)}
              style={{
                position: 'absolute',
                left: `${(getTimelinePosition(node.timeline) + pan.x) * zoom}px`,
                top: `${(node.y + pan.y) * zoom}px`,
                width: `${NODE_WIDTH * zoom}px`,
                height: `${NODE_HEIGHT * zoom}px`,
                background: selectedNode?.id === node.id ? '#81c784' : '#66bb6a',
                borderRadius: '25px',
                padding: `${8 * zoom}px`,
                cursor: isDragging && dragNode?.id === node.id ? 'grabbing' : 'grab',
                zIndex: selectedNode?.id === node.id ? 100 : 10,
                border: selectedNode?.id === node.id ? '3px solid #2e7d32' : '2px solid rgba(255,255,255,0.3)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                transition: isDragging && dragNode?.id === node.id ? 'none' : 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              {node.imageSrc && (
                <img
                  src={node.imageSrc}
                  alt={node.title}
                  style={{
                    width: `${40 * zoom}px`,
                    height: `${40 * zoom}px`,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginBottom: `${4 * zoom}px`,
                    pointerEvents: 'none'
                  }}
                />
              )}
              
              <div style={{
                color: 'white',
                fontSize: `${11 * zoom}px`,
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: `${2 * zoom}px`,
                lineHeight: '1.2',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical'
              }}>
                {node.title}
              </div>
              
              <div style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: `${9 * zoom}px`,
                textAlign: 'center',
                fontWeight: '500'
              }}>
                {formatTimelineMarker(node.timeline)}
              </div>

              {selectedNode?.id === node.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNode(node.id);
                  }}
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: '#e53e3e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: `${24 * zoom}px`,
                    height: `${24 * zoom}px`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 200
                  }}
                >
                  <Trash2 size={12 * zoom} />
                </button>
              )}
            </div>
          ))}

          {/* Connection mode indicator */}
          {connectionMode && (
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#2d3748',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              zIndex: 1000
            }}>
              {connectionStart ? 'Select child node' : 'Select parent node'}
            </div>
          )}

          {/* Instructions */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '12px',
            color: '#4a5568',
            zIndex: 100
          }}>
            <div>💡 <strong>Ctrl+Click:</strong> Create new node</div>
            <div>🔗 <strong>Connect Mode:</strong> Click two nodes to link them</div>
            <div>❌ <strong>Click connection midpoint:</strong> Delete connection</div>
            <div>📍 <strong>Drag:</strong> Move nodes vertically (timeline fixed)</div>
            <div>✏️ <strong>Double-click:</strong> Edit node details</div>
            <div>🔍 <strong>Ctrl+Scroll:</strong> Zoom | <strong>Shift+Scroll:</strong> Horizontal Pan</div>
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 70px)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🧬</div>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Welcome to Evolution Chart Maker</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: '0.9' }}>
            Create beautiful evolutionary trees and classification charts
          </p>
          <button
            onClick={() => setShowProjectDialog(true)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '16px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease'
            }}
          >
            Create Your First Project
          </button>
        </div>
      )}

      {/* Project Dialog */}
      {showProjectDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            width: '400px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#2d3748' }}>Project Manager</h2>
              <button onClick={() => setShowProjectDialog(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '12px', color: '#4a5568' }}>Create New Project</h3>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Mammalian Evolution"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                  id="projectName"
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                    Timeline Start (MYA)
                  </label>
                  <input
                    type="number"
                    defaultValue="500"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                    id="timelineStart"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                    Timeline End (MYA)
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                    id="timelineEnd"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  const name = document.getElementById('projectName').value;
                  const start = parseInt(document.getElementById('timelineStart').value);
                  const end = parseInt(document.getElementById('timelineEnd').value);
                  if (name.trim() && start > end) {
                    createProject(name, start, end);
                  }
                }}
                style={{
                  background: '#48bb78',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: '600'
                }}
              >
                Create Project
              </button>
            </div>

            {projects.length > 0 && (
              <div>
                <h3 style={{ marginBottom: '12px', color: '#4a5568' }}>Existing Projects</h3>
                {projects.map(project => (
                  <div
                    key={project.id}
                    style={{
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      marginBottom: '8px',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4299e1'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                  >
                    <div 
                      onClick={() => loadProject(project)}
                      style={{ flex: 1, cursor: 'pointer' }}
                    >
                      <div style={{ fontWeight: '600', color: '#2d3748' }}>{project.name}</div>
                      <div style={{ fontSize: '12px', color: '#718096' }}>
                        Timeline: {project.timelineStart} - {project.timelineEnd} MYA
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteProject(project.id);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        color: '#e53e3e'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Node Editor */}
      {showNodeEditor && editingNode && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            width: '400px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#2d3748' }}>Edit Node</h2>
              <button onClick={() => setShowNodeEditor(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                Title
              </label>
              <input
                type="text"
                defaultValue={editingNode.title}
                placeholder="Species name"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
                id="nodeTitle"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                Image URL
              </label>
              <input
                type="text"
                defaultValue={editingNode.imageSrc}
                placeholder="https://example.com/image.jpg"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
                id="nodeImage"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                Timeline (Million Years Ago)
              </label>
              <input
                type="number"
                defaultValue={editingNode.timeline}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
                id="nodeTimeline"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#4a5568' }}>
                Description
              </label>
              <textarea
                defaultValue={editingNode.description}
                placeholder="Brief description of the species..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                id="nodeDescription"
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowNodeEditor(false)}
                style={{
                  flex: 1,
                  background: '#e2e8f0',
                  color: '#4a5568',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const updatedNode = {
                    ...editingNode,
                    title: document.getElementById('nodeTitle').value,
                    imageSrc: document.getElementById('nodeImage').value,
                    timeline: parseFloat(document.getElementById('nodeTimeline').value),
                    description: document.getElementById('nodeDescription').value
                  };
                  updateNode(updatedNode);
                }}
                style={{
                  flex: 1,
                  background: '#48bb78',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={importProject}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default EvolutionChartMaker;