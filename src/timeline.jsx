import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Download, Upload, ZoomIn, ZoomOut, Trash2, X } from 'lucide-react';

const TIME_UNITS = [
  { value: 'bya', label: 'Billion Years Ago (BYA)', multiplier: 1000000000 },
  { value: 'mya', label: 'Million Years Ago (MYA)', multiplier: 1000000 },
  { value: 'kya', label: 'Thousand Years Ago (KYA)', multiplier: 1000 },
  { value: 'ya', label: 'Years Ago (YA)', multiplier: 1 }
];

const EvolutionChartMaker = ({ project, nodes, connections, onUpdateProject, onBack }) => {
  const TIMELINE_HEIGHT = 80;
  const NODE_WIDTH = 140;
  const NODE_HEIGHT = 25;

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const [localNodes, setLocalNodes] = useState(nodes || []);
  const [localConnections, setLocalConnections] = useState(connections || []);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [zoom, setZoom] = useState(project?.zoom || 1);
  const [pan, setPan] = useState(project?.pan || { x: 0, y: 0 });
  const [showNodeEditor, setShowNodeEditor] = useState(false);
  const [editingNode, setEditingNode] = useState(null);
  const [connectionMode, setConnectionMode] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [arrowAnimations, setArrowAnimations] = useState({});

  useEffect(() => {
    if (project) {
      const timer = setTimeout(() => {
        onUpdateProject({
          ...project,
          nodes: localNodes,
          connections: localConnections,
          zoom,
          pan
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [localNodes, localConnections, zoom, pan, project, onUpdateProject]);

  // Animate arrows along connections
  useEffect(() => {
    const interval = setInterval(() => {
      setArrowAnimations(prev => {
        const next = {};
        localConnections.forEach(conn => {
          next[conn.id] = ((prev[conn.id] || 0) + 2) % 100;
        });
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [localConnections]);

  const convertToYears = (value, unit) => {
    const unitObj = TIME_UNITS.find(u => u.value === unit) || TIME_UNITS[0];
    return value * unitObj.multiplier;
  };

  const getTimelinePosition = useCallback((timelineValue) => {
    if (!project) return 0;
    
    const valueInYears = convertToYears(timelineValue.value, timelineValue.unit);
    const startInYears = convertToYears(project.timelineStart, project.timeUnit);
    const endInYears = convertToYears(project.timelineEnd, project.timeUnit);
    
    const range = startInYears - endInYears;
    const position = (startInYears - valueInYears) / range;
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    
    return position * canvasWidth;
  }, [project]);

  const getTimelineFromX = useCallback((x) => {
    if (!project) return 0;
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    const startInYears = convertToYears(project.timelineStart, project.timeUnit);
    const endInYears = convertToYears(project.timelineEnd, project.timeUnit);
    const range = startInYears - endInYears;
    const position = x / canvasWidth;
    return startInYears - (position * range);
  }, [project]);

  const formatTimelineValue = (value, unit) => {
    const formatted = value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    if (unit === 'bya') return `${formatted} BYA`;
    if (unit === 'mya') return `${formatted} MYA`;
    if (unit === 'kya') return `${formatted} KYA`;
    return `${formatted} YA`;
  };

  const getVisibleTimelineMarkers = useCallback(() => {
    if (!project) return [];
    
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    const startInYears = convertToYears(project.timelineStart, project.timeUnit);
    const endInYears = convertToYears(project.timelineEnd, project.timeUnit);
    const range = startInYears - endInYears;
    const visibleRange = range / zoom;
    
    let stepYears;
    if (project.timeUnit === 'bya') {
      // Much fewer markers for billion-year scale
      if (visibleRange > 8000000000) stepYears = 2000000000;
      else if (visibleRange > 4000000000) stepYears = 1000000000;
      else if (visibleRange > 2000000000) stepYears = 500000000;
      else if (visibleRange > 1000000000) stepYears = 250000000;
      else if (visibleRange > 500000000) stepYears = 100000000;
      else stepYears = 50000000;
    } else if (project.timeUnit === 'mya') {
      if (visibleRange > 500000000) stepYears = 100000000;
      else if (visibleRange > 100000000) stepYears = 25000000;
      else if (visibleRange > 50000000) stepYears = 10000000;
      else if (visibleRange > 20000000) stepYears = 5000000;
      else if (visibleRange > 10000000) stepYears = 2500000;
      else if (visibleRange > 5000000) stepYears = 1000000;
      else stepYears = 500000;
    } else if (project.timeUnit === 'kya') {
      if (visibleRange > 500000) stepYears = 100000;
      else if (visibleRange > 100000) stepYears = 25000;
      else if (visibleRange > 50000) stepYears = 10000;
      else if (visibleRange > 20000) stepYears = 5000;
      else if (visibleRange > 10000) stepYears = 2500;
      else if (visibleRange > 5000) stepYears = 1000;
      else stepYears = 500;
    } else {
      if (visibleRange > 5000) stepYears = 1000;
      else if (visibleRange > 2000) stepYears = 500;
      else if (visibleRange > 1000) stepYears = 250;
      else if (visibleRange > 500) stepYears = 100;
      else if (visibleRange > 200) stepYears = 50;
      else if (visibleRange > 100) stepYears = 25;
      else if (visibleRange > 50) stepYears = 10;
      else stepYears = 5;
    }
    
    const markers = [];
    const leftTime = getTimelineFromX(-pan.x / zoom);
    const rightTime = getTimelineFromX((canvasWidth - pan.x) / zoom);
    
    const start = Math.ceil(Math.min(leftTime, rightTime) / stepYears) * stepYears;
    const end = Math.floor(Math.max(leftTime, rightTime) / stepYears) * stepYears;
    
    for (let i = start; i <= end; i += stepYears) {
      if (i >= endInYears && i <= startInYears) {
        let displayValue = i;
        let displayUnit = 'ya';
        
        if (i >= 1000000000) {
          displayValue = i / 1000000000;
          displayUnit = 'bya';
        } else if (i >= 1000000) {
          displayValue = i / 1000000;
          displayUnit = 'mya';
        } else if (i >= 1000) {
          displayValue = i / 1000;
          displayUnit = 'kya';
        }
        
        markers.push({
          value: displayValue,
          unit: displayUnit,
          position: (startInYears - i) / range
        });
      }
    }
    
    return markers;
  }, [project, zoom, pan, getTimelineFromX]);

  const getCentralNode = () => {
    const nodeConnectionCount = {};
    localNodes.forEach(node => {
      nodeConnectionCount[node.id] = 0;
    });
    
    localConnections.forEach(conn => {
      nodeConnectionCount[conn.from] = (nodeConnectionCount[conn.from] || 0) + 1;
      nodeConnectionCount[conn.to] = (nodeConnectionCount[conn.to] || 0) + 1;
    });
    
    let centralNodeId = null;
    let maxConnections = 0;
    
    Object.entries(nodeConnectionCount).forEach(([nodeId, count]) => {
      if (count > maxConnections) {
        maxConnections = count;
        centralNodeId = nodeId;
      }
    });
    
    return centralNodeId ? localNodes.find(n => n.id === parseInt(centralNodeId)) : null;
  };

  const createNode = (clientX, clientY) => {
    if (!project) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const canvasX = clientX - rect.left;
    const canvasY = clientY - rect.top - TIMELINE_HEIGHT;
    
    const years = getTimelineFromX((canvasX - pan.x) / zoom);
    const displayValue = years / (TIME_UNITS.find(u => u.value === project.timeUnit)?.multiplier || 1);
    
    const newNode = {
      id: Date.now(),
      x: (canvasX - pan.x) / zoom,
      y: Math.max(20, (canvasY - pan.y)),
      title: 'New Species',
      description: 'Description here...',
      imageSrc: '',
      timeline: {
        value: parseFloat(displayValue.toFixed(4)),
        unit: project.timeUnit
      }
    };
    
    setLocalNodes([...localNodes, newNode]);
    setEditingNode(newNode);
    setShowNodeEditor(true);
  };

  const updateNode = (updatedNode) => {
    setLocalNodes(localNodes.map(node => node.id === updatedNode.id ? updatedNode : node));
    setEditingNode(null);
    setShowNodeEditor(false);
  };

  const deleteNode = (nodeId) => {
    setLocalNodes(localNodes.filter(node => node.id !== nodeId));
    setLocalConnections(localConnections.filter(conn => conn.from !== nodeId && conn.to !== nodeId));
    setSelectedNode(null);
  };

  const createConnection = (fromId, toId) => {
    const newConnection = {
      id: Date.now(),
      from: fromId,
      to: toId
    };
    setLocalConnections([...localConnections, newConnection]);
  };

  const deleteConnection = (connectionId) => {
    setLocalConnections(localConnections.filter(conn => conn.id !== connectionId));
    setSelectedConnection(null);
  };

  const handleMouseDown = (e, node) => {
    if (connectionMode) return;
    
    e.stopPropagation();
    isDraggingRef.current = true;
    setSelectedNode(node);
    setSelectedConnection(null);
    
    lastPosition.current = { x: e.clientY, y: e.clientY };
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current || !selectedNode) return;
    
    const deltaY = e.clientY - lastPosition.current.y;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    
    const newY = Math.max(20, selectedNode.y + deltaY);
    
    const updatedNode = { ...selectedNode, y: newY };
    
    setLocalNodes(prev => prev.map(node => 
      node.id === selectedNode.id ? updatedNode : node
    ));
    setSelectedNode(updatedNode);
  }, [selectedNode]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleNodeClick = (e, node) => {
    e.stopPropagation();
    
    if (connectionMode) {
      if (!connectionStart) {
        setConnectionStart(node.id);
      } else if (connectionStart !== node.id) {
        const existingConnection = localConnections.find(conn =>
          (conn.from === connectionStart && conn.to === node.id) ||
          (conn.from === node.id && conn.to === connectionStart)
        );
        
        if (!existingConnection) {
          createConnection(connectionStart, node.id);
        }
        setConnectionMode(false);
        setConnectionStart(null);
      }
    } else if (!isDraggingRef.current) {
      setSelectedNode(node);
      setSelectedConnection(null);
    }
  };

  const getConnectionPath = (fromNode, toNode) => {
    if (!fromNode || !toNode) return '';
    
    const fromX = getTimelinePosition(fromNode.timeline) * zoom + pan.x + (NODE_WIDTH / 2);
    const fromY = fromNode.y + pan.y + TIMELINE_HEIGHT + (NODE_HEIGHT / 2);
    const toX = getTimelinePosition(toNode.timeline) * zoom + pan.x + (NODE_WIDTH / 2);
    const toY = toNode.y + pan.y + TIMELINE_HEIGHT + (NODE_HEIGHT / 2);
    
    const dx = toX - fromX;
    const dy = toY - fromY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const controlOffset = Math.min(distance * 0.4, 150);
    
    const controlX1 = fromX + (dx > 0 ? controlOffset : -controlOffset);
    const controlX2 = toX + (dx > 0 ? -controlOffset : controlOffset);
    
    return `M ${fromX} ${fromY} C ${controlX1} ${fromY}, ${controlX2} ${toY}, ${toX} ${toY}`;
  };

  const getArrowPosition = (fromNode, toNode, offset) => {
    if (!fromNode || !toNode) return { x: 0, y: 0, angle: 0 };
    
    const fromX = getTimelinePosition(fromNode.timeline) * zoom + pan.x + (NODE_WIDTH / 2);
    const fromY = fromNode.y + pan.y + TIMELINE_HEIGHT + (NODE_HEIGHT / 2);
    const toX = getTimelinePosition(toNode.timeline) * zoom + pan.x + (NODE_WIDTH / 2);
    const toY = toNode.y + pan.y + TIMELINE_HEIGHT + (NODE_HEIGHT / 2);
    
    const dx = toX - fromX;
    const dy = toY - fromY;
    const controlOffset = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.4, 150);
    
    const controlX1 = fromX + (dx > 0 ? controlOffset : -controlOffset);
    const controlX2 = toX + (dx > 0 ? -controlOffset : controlOffset);
    
    const t = offset / 100;
    const mt = 1 - t;
    const mt2 = mt * mt;
    const t2 = t * t;
    
    const x = mt2 * mt * fromX + 3 * mt2 * t * controlX1 + 3 * mt * t2 * controlX2 + t2 * t * toX;
    const y = mt2 * mt * fromY + 3 * mt2 * t * fromY + 3 * mt * t2 * toY + t2 * t * toY;
    
    const dx1 = 3 * mt2 * (controlX1 - fromX) + 6 * mt * t * (controlX2 - controlX1) + 3 * t2 * (toX - controlX2);
    const dy1 = 3 * mt2 * (fromY - fromY) + 6 * mt * t * (toY - fromY) + 3 * t2 * (toY - toY);
    
    const angle = Math.atan2(dy1, dx1) * 180 / Math.PI;
    
    return { x, y, angle };
  };

  const getConnectionMidpoint = (fromNode, toNode) => {
    const fromX = getTimelinePosition(fromNode.timeline) * zoom + pan.x + (NODE_WIDTH / 2);
    const fromY = fromNode.y + pan.y + TIMELINE_HEIGHT + (NODE_HEIGHT / 2);
    const toX = getTimelinePosition(toNode.timeline) * zoom + pan.x + (NODE_WIDTH / 2);
    const toY = toNode.y + pan.y + TIMELINE_HEIGHT + (NODE_HEIGHT / 2);
    
    return { x: (fromX + toX) / 2, y: (fromY + toY) / 2 };
  };

  const exportProject = () => {
    if (!project) return;
    
    const exportData = {
      project,
      nodes: localNodes,
      connections: localConnections,
      zoom,
      pan
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.name.replace(/\s+/g, '-')}-evolution-chart.json`;
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
        if (importData.project && importData.nodes) {
          onUpdateProject({
            ...importData.project,
            nodes: importData.nodes,
            connections: importData.connections,
            zoom: importData.zoom,
            pan: importData.pan
          });
          setLocalNodes(importData.nodes);
          setLocalConnections(importData.connections);
          setZoom(importData.zoom || 1);
          setPan(importData.pan || { x: 0, y: 0 });
        }
      } catch (error) {
        alert('Error parsing the file. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

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

  const handleZoom = (delta) => {
    setZoom(prev => Math.max(0.1, Math.min(5, prev + delta)));
  };

  const handleWheel = (e) => {
    e.preventDefault();
    
    if (e.shiftKey) {
      setPan(prev => ({ x: prev.x - e.deltaY * 0.5, y: prev.y }));
    } else {
      setPan(prev => ({ x: prev.x - e.deltaX * 0.5, y: prev.y - e.deltaY * 0.5 }));
    }
  };

  const handleKeyDown = useCallback((e) => {
    const speed = 20;
    
    switch(e.key) {
      case 'ArrowUp':
        e.preventDefault();
        setPan(prev => ({ ...prev, y: prev.y + speed }));
        break;
      case 'ArrowDown':
        e.preventDefault();
        setPan(prev => ({ ...prev, y: prev.y - speed }));
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setPan(prev => ({ ...prev, x: prev.x + speed }));
        break;
      case 'ArrowRight':
        e.preventDefault();
        setPan(prev => ({ ...prev, x: prev.x - speed }));
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const centralNode = getCentralNode();

  return (
    <div className="evolution-chart">
      <div className="header">
        <div className="header-left">
          <h1>🧬 Evolution Chart Maker</h1>
          <span className="project-name">{project?.name}</span>
        </div>
        
        <div className="toolbar">
          <button onClick={onBack} className="btn btn-primary">
            ← Back to Projects
          </button>
          
          <button
            onClick={() => {
              setConnectionMode(!connectionMode);
              setConnectionStart(null);
            }}
            className={`btn ${connectionMode ? 'btn-danger' : 'btn-warning'}`}
          >
            {connectionMode ? 'Cancel Connection' : '🔗 Connect Nodes'}
          </button>
          
          <button onClick={() => fileInputRef.current?.click()} className="btn btn-info">
            <Upload size={16} /> Import
          </button>
          
          <button onClick={exportProject} className="btn btn-success">
            <Download size={16} /> Export
          </button>
          
          <div className="zoom-controls">
            <button onClick={() => handleZoom(0.2)} className="zoom-btn">
              <ZoomIn size={16} />
            </button>
            <span className="zoom-level">{Math.round(zoom * 100)}%</span>
            <button onClick={() => handleZoom(-0.2)} className="zoom-btn">
              <ZoomOut size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="timeline">
        {getVisibleTimelineMarkers().map((marker, index) => (
          <div
            key={index}
            className="timeline-marker"
            style={{
              left: `${marker.position * (canvasRef.current?.offsetWidth || 800) * zoom + pan.x}px`,
            }}
          >
            <div className="timeline-tick" />
            <span className="timeline-label">
              {formatTimelineValue(marker.value, marker.unit)}
            </span>
          </div>
        ))}
      </div>

      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        onWheel={handleWheel}
        className="canvas"
        style={{ cursor: connectionMode ? 'crosshair' : 'grab' }}
      >
        <svg className="connections-layer">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.8)" />
            </marker>
            <marker
              id="arrowhead-selected"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#fbbf24" />
            </marker>
            <marker
              id="arrowhead-central"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
            </marker>
          </defs>
          
          {localConnections.map(conn => {
            const fromNode = localNodes.find(n => n.id === conn.from);
            const toNode = localNodes.find(n => n.id === conn.to);
            
            if (!fromNode || !toNode) return null;
            
            const midpoint = getConnectionMidpoint(fromNode, toNode);
            const isSelected = selectedConnection === conn.id || 
                              (selectedNode && (selectedNode.id === fromNode.id || selectedNode.id === toNode.id));
            const isCentral = centralNode && (fromNode.id === centralNode.id || toNode.id === centralNode.id);
            
            const arrowPos = getArrowPosition(fromNode, toNode, arrowAnimations[conn.id] || 0);
            
            return (
              <g key={conn.id}>
                <path
                  d={getConnectionPath(fromNode, toNode)}
                  stroke={isSelected ? '#fbbf24' : (isCentral ? '#60a5fa' : 'rgba(255,255,255,0.6)')}
                  strokeWidth={isCentral ? '3' : '2'}
                  fill="none"
                  markerEnd={`url(#${isSelected ? 'arrowhead-selected' : (isCentral ? 'arrowhead-central' : 'arrowhead')})`}
                />
                
                <polygon
                  points="0,-4 8,0 0,4"
                  fill={isSelected ? '#fbbf24' : (isCentral ? '#60a5fa' : 'rgba(255,255,255,0.8)')}
                  transform={`translate(${arrowPos.x}, ${arrowPos.y}) rotate(${arrowPos.angle})`}
                />
                
                {isSelected && (
                  <circle
                    cx={midpoint.x}
                    cy={midpoint.y}
                    r={10}
                    fill="#ef4444"
                    stroke="white"
                    strokeWidth="2"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteConnection(conn.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {localNodes.map(node => {
          const isCentral = centralNode && centralNode.id === node.id;
          const isSelected = selectedNode?.id === node.id;
          
          return (
            <div
              key={node.id}
              className={`node ${isSelected ? 'selected' : ''} ${isCentral ? 'central' : ''}`}
              style={{
                left: `${getTimelinePosition(node.timeline) * zoom + pan.x}px`,
                top: `${node.y + pan.y + TIMELINE_HEIGHT}px`,
              }}
              onMouseDown={(e) => handleMouseDown(e, node)}
              onClick={(e) => handleNodeClick(e, node)}
              onDoubleClick={() => handleNodeDoubleClick(node)}
            >
              {node.imageSrc && (
                <img src={node.imageSrc} alt={node.title} className="node-image" />
              )}
              
              <div className="node-content">
                <div className="node-title">{node.title}</div>
                <div className="node-time">
                  {formatTimelineValue(node.timeline.value, node.timeline.unit)}
                </div>
              </div>

              {isSelected && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNode(node.id);
                  }}
                  className="delete-btn"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          );
        })}

        {connectionMode && (
          <div className="connection-hint">
            {connectionStart ? '🎯 Select target node' : '🎯 Select source node'}
          </div>
        )}

        <div className="help-panel">
          <div><strong>💡 Ctrl+Click:</strong> Create node</div>
          <div><strong>🔗 Connect:</strong> Link nodes</div>
          <div><strong>🖱️ Drag:</strong> Move vertically</div>
          <div><strong>✏️ Double-click:</strong> Edit</div>
          <div><strong>🔍 Scroll:</strong> Pan canvas</div>
          <div><strong>⬆️⬇️⬅️➡️ Arrow keys:</strong> Navigate</div>
        </div>
      </div>

      {showNodeEditor && editingNode && (
        <div className="modal-overlay" onClick={() => setShowNodeEditor(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>✏️ Edit Node</h2>
              <button onClick={() => setShowNodeEditor(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                defaultValue={editingNode.title}
                placeholder="Species name"
                id="nodeTitle"
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                defaultValue={editingNode.imageSrc}
                placeholder="https://example.com/image.jpg"
                id="nodeImage"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Timeline Value</label>
                <input
                  type="number"
                  step="any"
                  defaultValue={editingNode.timeline.value}
                  id="nodeTimelineValue"
                />
              </div>
              <div className="form-group">
                <label>Time Unit</label>
                <select id="nodeTimelineUnit" defaultValue={editingNode.timeline.unit}>
                  {TIME_UNITS.map(unit => (
                    <option key={unit.value} value={unit.value}>
                      {unit.value.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                defaultValue={editingNode.description}
                placeholder="Brief description..."
                rows={4}
                id="nodeDescription"
              />
            </div>

            <div className="form-actions">
              <button onClick={() => setShowNodeEditor(false)} className="btn btn-secondary">
                Cancel
              </button>
              <button
                onClick={() => {
                  const updatedNode = {
                    ...editingNode,
                    title: document.getElementById('nodeTitle').value,
                    imageSrc: document.getElementById('nodeImage').value,
                    timeline: {
                      value: parseFloat(document.getElementById('nodeTimelineValue').value),
                      unit: document.getElementById('nodeTimelineUnit').value
                    },
                    description: document.getElementById('nodeDescription').value
                  };
                  updateNode(updatedNode);
                }}
                className="btn btn-primary"
              >
                💾 Save Changes
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

      <style jsx>{`
        .evolution-chart {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
          position: relative;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          position: relative;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .project-name {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .toolbar {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-right: 120px;
        }
        
        .btn {
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
          color: white;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .btn-secondary {
          background: #94a3b8;
        }
        
        .btn-success {
          background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
        }
        
        .btn-warning {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }
        
        .btn-danger {
          background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
        }
        
        .btn-info {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        }
        
        .zoom-controls {
          display: flex;
          gap: 8px;
          align-items: center;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 10px;
        }
        
        .zoom-btn {
          padding: 8px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: white;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
        }
        
        .zoom-level {
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          min-width: 45px;
          text-align: center;
        }
        
        .timeline {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: ${TIMELINE_HEIGHT}px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 3px solid rgba(102, 126, 234, 0.3);
          z-index: 100;
          overflow: hidden;
        }
        
        .timeline-marker {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        
        .timeline-tick {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, #667eea, transparent);
          margin-bottom: 8px;
        }
        
        .timeline-label {
          font-size: 13px;
          font-weight: 700;
          color: #475569;
          white-space: nowrap;
          background: rgba(255,255,255,0.9);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .canvas {
          position: absolute;
          top: ${70 + TIMELINE_HEIGHT}px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }
        
        .connections-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .connections-layer circle {
          pointer-events: auto;
        }
        
        .node {
          position: absolute;
          width: ${NODE_WIDTH}px;
          height: ${NODE_HEIGHT}px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 12px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(255,255,255,0.5);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .node:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        
        .node.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.3);
          z-index: 100;
        }
        
        .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
          border: 3px solid #60a5fa;
          box-shadow: 0 12px 40px rgba(96, 165, 250, 0.3);
        }
        
        .node.central.selected {
          border: 3px solid #fbbf24;
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.4);
        }
        
        .node:active {
          cursor: grabbing;
        }
        
        .node-image {
          width: 36px;
          height: 36px;
          object-fit: cover;
          border-radius: 50%;
          flex-shrink: 0;
          border: 2px solid rgba(102, 126, 234, 0.2);
        }
        
        .node-content {
          flex: 1;
          min-width: 0;
        }
        
        .node-title {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .node-time {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .delete-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #ef4444;
          color: white;
          border: 2px solid white;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          transition: all 0.2s;
        }
        
        .delete-btn:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        .connection-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          z-index: 1000;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.05); }
        }
        
        .help-panel {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 16px;
          border-radius: 12px;
          font-size: 12px;
          color: #475569;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .help-panel div {
          margin-bottom: 6px;
          line-height: 1.5;
        }
        
        .help-panel div:last-child {
          margin-bottom: 0;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.2s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal {
          background: white;
          border-radius: 20px;
          padding: 28px;
          width: 480px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .modal-header h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #64748b;
          transition: color 0.2s;
        }
        
        .close-btn:hover {
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #475569;
          font-size: 14px;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .form-row {
          display: flex;
          gap: 16px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        
        .form-actions .btn {
          flex: 1;
          justify-content: center;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 40px;
        }
      `}</style>
    </div>
  );
};

export default EvolutionChartMaker;