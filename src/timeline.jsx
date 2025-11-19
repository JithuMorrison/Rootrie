import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Download, Upload, ZoomIn, ZoomOut, Trash2, X, Moon, Sun } from 'lucide-react';

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
  const scrollContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

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
  const [darkMode, setDarkMode] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollLeft(scrollContainerRef.current.scrollLeft);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    const canvasWidth = 3000; // Fixed large canvas width
    
    return position * canvasWidth;
  }, [project]);

  const getTimelineFromX = useCallback((x) => {
    if (!project) return 0;
    const canvasWidth = 3000;
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
    
    const canvasWidth = 3000;
    const startInYears = convertToYears(project.timelineStart, project.timeUnit);
    const endInYears = convertToYears(project.timelineEnd, project.timeUnit);
    const range = startInYears - endInYears;
    const visibleRange = range / zoom;
    
    let stepYears;
    if (project.timeUnit === 'bya') {
      if (visibleRange > 500000000000) stepYears = 100000000000;
      else if (visibleRange > 100000000000) stepYears = 25000000000;
      else if (visibleRange > 50000000000) stepYears = 10000000000;
      else if (visibleRange > 20000000000) stepYears = 5000000000;
      else if (visibleRange > 10000000000) stepYears = 2500000000;
      else if (visibleRange > 5000000000) stepYears = 1000000000;
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
    const start = Math.floor(endInYears / stepYears) * stepYears;
    const end = Math.ceil(startInYears / stepYears) * stepYears;
    
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
  }, [project, zoom]);

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
    if (!project || !scrollContainerRef.current) return;
    
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const scrollTop = scrollContainerRef.current.scrollTop;
    
    const canvasX = clientX - rect.left + scrollLeft;
    const canvasY = clientY - rect.top + scrollTop - TIMELINE_HEIGHT;
    
    const years = getTimelineFromX(canvasX / zoom);
    const displayValue = years / (TIME_UNITS.find(u => u.value === project.timeUnit)?.multiplier || 1);
    
    const newNode = {
      id: Date.now(),
      x: canvasX / zoom,
      y: Math.max(20, canvasY / zoom),
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
    
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current || !selectedNode) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      lastPosition.current = { x: e.clientX, y: e.clientY };
      
      const newX = selectedNode.x + deltaX / zoom;
      const newY = Math.max(20, selectedNode.y + deltaY / zoom);
      
      const updatedNode = { ...selectedNode, x: newX, y: newY };
      
      setLocalNodes(prev => prev.map(node => 
        node.id === selectedNode.id ? updatedNode : node
      ));
      setSelectedNode(updatedNode);
    });
  }, [selectedNode, zoom]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
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

  const getNodeEdgePoint = (node, targetNode) => {
    const nodeX = getTimelinePosition(node.timeline) * zoom;
    const nodeY = node.y * zoom + TIMELINE_HEIGHT;
    const nodeCenterX = nodeX + (NODE_WIDTH * zoom / 2);
    const nodeCenterY = nodeY + (NODE_HEIGHT * zoom / 2);
    
    const targetX = getTimelinePosition(targetNode.timeline) * zoom;
    const targetY = targetNode.y * zoom + TIMELINE_HEIGHT;
    const targetCenterX = targetX + (NODE_WIDTH * zoom / 2);
    const targetCenterY = targetY + (NODE_HEIGHT * zoom / 2);
    
    const dx = targetCenterX - nodeCenterX;
    const dy = targetCenterY - nodeCenterY;
    const angle = Math.atan2(dy, dx);
    
    let edgeX, edgeY;
    const rectAngle = Math.atan2(NODE_HEIGHT * zoom / 2, NODE_WIDTH * zoom / 2);
    
    if (Math.abs(angle) <= rectAngle) {
      edgeX = nodeX + NODE_WIDTH * zoom;
      edgeY = nodeCenterY + Math.tan(angle) * (NODE_WIDTH * zoom / 2);
    } else if (Math.abs(angle) >= Math.PI - rectAngle) {
      edgeX = nodeX;
      edgeY = nodeCenterY - Math.tan(angle) * (NODE_WIDTH * zoom / 2);
    } else if (angle > 0) {
      edgeY = nodeY + NODE_HEIGHT * zoom;
      edgeX = nodeCenterX + (NODE_HEIGHT * zoom / 2) / Math.tan(angle);
    } else {
      edgeY = nodeY;
      edgeX = nodeCenterX - (NODE_HEIGHT * zoom / 2) / Math.tan(angle);
    }
    
    return { x: edgeX, y: edgeY };
  };

  const getConnectionPath = (fromNode, toNode) => {
    if (!fromNode || !toNode) return '';
    
    const fromPoint = getNodeEdgePoint(fromNode, toNode);
    const toPoint = getNodeEdgePoint(toNode, fromNode);
    
    const dx = toPoint.x - fromPoint.x;
    const dy = toPoint.y - fromPoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const curvature = Math.min(distance * 0.4, 150);
    
    const controlX1 = fromPoint.x + curvature;
    const controlY1 = fromPoint.y;
    const controlX2 = toPoint.x - curvature;
    const controlY2 = toPoint.y;
    
    return `M ${fromPoint.x} ${fromPoint.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${toPoint.x} ${toPoint.y}`;
  };

  const getArrowPosition = (fromNode, toNode, offset) => {
    if (!fromNode || !toNode) return { x: 0, y: 0, angle: 0 };
    
    const fromPoint = getNodeEdgePoint(fromNode, toNode);
    const toPoint = getNodeEdgePoint(toNode, fromNode);
    
    const dx = toPoint.x - fromPoint.x;
    const dy = toPoint.y - fromPoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const curvature = Math.min(distance * 0.4, 150);
    
    const controlX1 = fromPoint.x + curvature;
    const controlY1 = fromPoint.y;
    const controlX2 = toPoint.x - curvature;
    const controlY2 = toPoint.y;
    
    const t = offset / 100;
    const mt = 1 - t;
    const mt2 = mt * mt;
    const t2 = t * t;
    
    const x = mt2 * mt * fromPoint.x + 3 * mt2 * t * controlX1 + 3 * mt * t2 * controlX2 + t2 * t * toPoint.x;
    const y = mt2 * mt * fromPoint.y + 3 * mt2 * t * controlY1 + 3 * mt * t2 * controlY2 + t2 * t * toPoint.y;
    
    const dx1 = 3 * mt2 * (controlX1 - fromPoint.x) + 6 * mt * t * (controlX2 - controlX1) + 3 * t2 * (toPoint.x - controlX2);
    const dy1 = 3 * mt2 * (controlY1 - fromPoint.y) + 6 * mt * t * (controlY2 - controlY1) + 3 * t2 * (toPoint.y - controlY2);
    
    const angle = Math.atan2(dy1, dx1) * 180 / Math.PI;
    
    return { x, y, angle };
  };

  const getConnectionMidpoint = (fromNode, toNode) => {
    const fromPoint = getNodeEdgePoint(fromNode, toNode);
    const toPoint = getNodeEdgePoint(toNode, fromNode);
    
    return { x: (fromPoint.x + toPoint.x) / 2, y: (fromPoint.y + toPoint.y) / 2 };
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
    setZoom(prev => Math.max(0.1, Math.min(100, prev + delta)));
  };

  const handleWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const delta = -e.deltaY * 0.001;
      const newZoom = Math.max(0.1, Math.min(100, zoom + delta));
      
      setZoom(newZoom);
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    const speed = 20;
    
    switch(e.key) {
      case 'ArrowUp':
        e.preventDefault();
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop -= speed;
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop += speed;
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft -= speed;
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += speed;
        }
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, handleMouseUp]);

  const centralNode = getCentralNode();

  return (
    <div className={`evolution-chart ${darkMode ? 'dark' : ''}`}>
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

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="btn btn-secondary"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            {darkMode ? ' Light' : ' Dark'}
          </button>
          
          <div className="zoom-controls">
            <button onClick={() => handleZoom(0.2)} className="zoom-btn">
              <ZoomIn size={16} />
            </button>
            
            <div className="zoom-input-container">
              <input
                type="number"
                min="10"
                max="10000"
                step="10"
                value={Math.round(zoom * 100)}
                onChange={(e) => {
                  const newZoom = Math.max(0.1, Math.min(100, parseInt(e.target.value) / 100));
                  setZoom(newZoom);
                }}
                className="zoom-input"
              />
              <span className="zoom-percent">%</span>
            </div>
            
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
              left: `${marker.position * 3000 * zoom - scrollLeft}px`,
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
        ref={scrollContainerRef}
        className="scroll-container"
        onWheel={handleWheel}
      >
        <div
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="canvas"
          style={{ 
            cursor: connectionMode ? 'crosshair' : 'default',
            width: `${3300 * zoom}px`,
            height: `${2000 * zoom}px`,
            minHeight: '100%'
          }}
        >
          <svg className="connections-layer" style={{ width: '100%', height: '100%' }}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" className="arrowhead" />
              </marker>
              <marker
                id="arrowhead-selected"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" className="arrowhead-selected" />
              </marker>
              <marker
                id="arrowhead-central"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" className="arrowhead-central" />
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
                    className={`connection-path ${isSelected ? 'selected' : ''} ${isCentral ? 'central' : ''}`}
                    strokeWidth={isCentral ? '3' : '2'}
                    fill="none"
                    markerEnd={`url(#${isSelected ? 'arrowhead-selected' : (isCentral ? 'arrowhead-central' : 'arrowhead')})`}
                  />
                  
                  <polygon
                    points="0,-4 8,0 0,4"
                    className={`arrow ${isSelected ? 'selected' : ''} ${isCentral ? 'central' : ''}`}
                    transform={`translate(${arrowPos.x}, ${arrowPos.y}) rotate(${arrowPos.angle})`}
                  />
                  
                  {isSelected && (
                    <circle
                      cx={midpoint.x}
                      cy={midpoint.y}
                      r={10}
                      className="delete-connection"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteConnection(conn.id);
                      }}
                      style={{ cursor: 'pointer', pointerEvents: 'all' }}
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
                  left: `${getTimelinePosition(node.timeline) * zoom}px`,
                  top: `${node.y * zoom + TIMELINE_HEIGHT}px`,
                  // Keep node size constant regardless of zoom
                  width: `${NODE_WIDTH}px`,
                  height: `${NODE_HEIGHT}px`,
                  fontSize: `13px`,
                  transform: `scale(${zoom})`, // Scale the entire node instead of individual dimensions
                  transformOrigin: 'top left' // Ensure scaling starts from top-left corner
                }}
                onMouseDown={(e) => handleMouseDown(e, node)}
                onClick={(e) => handleNodeClick(e, node)}
                onDoubleClick={() => handleNodeDoubleClick(node)}
              >
                {node.imageSrc && (
                  <img 
                    src={node.imageSrc} 
                    alt={node.title} 
                    className="node-image"
                    style={{
                      width: `32px`,
                      height: `32px`
                    }}
                  />
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
                    style={{
                      // Keep delete button size constant
                      width: `24px`,
                      height: `24px`,
                      top: `-8px`,
                      right: `-8px`
                    }}
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
            <div><strong>📜 Scrollbars:</strong> Navigate canvas</div>
            <div><strong>⚡ Ctrl+Scroll:</strong> Zoom</div>
            <div><strong>⬆️⬇️⬅️➡️ Arrow keys:</strong> Navigate</div>
          </div>
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
          background: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .evolution-chart.dark {
          background: #0f172a;
          color: #f8fafc;
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
        
        .dark .header {
          background: rgba(15, 23, 42, 0.98);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
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
        
        .dark .btn-secondary {
          background: #475569;
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
        
        .dark .zoom-controls {
          background: #1e293b;
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
        
        .dark .zoom-btn {
          background: #334155;
          color: #f8fafc;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
        }
        
        .dark .zoom-btn:hover {
          background: #475569;
        }
        
        .zoom-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .zoom-input {
          width: 60px;
          padding: 6px 8px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          background: white;
          color: #475569;
        }

        .dark .zoom-input {
          background: #334155;
          border: 1px solid #475569;
          color: #f8fafc;
        }

        .zoom-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
        }

        .zoom-percent {
          position: absolute;
          right: 8px;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          pointer-events: none;
        }

        .dark .zoom-percent {
          color: #94a3b8;
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
        
        .dark .timeline {
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 3px solid rgba(102, 126, 234, 0.5);
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
        
        .dark .timeline-label {
          color: #cbd5e1;
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid rgba(102, 126, 234, 0.4);
        }
        
        .scroll-container {
          position: absolute;
          top: ${70 + TIMELINE_HEIGHT}px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
          background: #f8fafc;
        }
        
        .dark .scroll-container {
          background: #0f172a;
        }
        
        .scroll-container::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        
        .dark .scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 6px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.5);
        }
        
        .dark .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.5);
        }
        
        .dark .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.7);
        }
        
        .canvas {
          position: relative;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        
        .dark .canvas {
          background: #0f172a;
        }
        
        .connections-layer {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .connection-path {
          stroke: rgba(102, 126, 234, 0.6);
          transition: all 0.3s ease;
        }
        
        .dark .connection-path {
          stroke: rgba(102, 126, 234, 0.8);
        }
        
        .connection-path.selected {
          stroke: #fbbf24;
          stroke-width: 3;
        }
        
        .connection-path.central {
          stroke: #60a5fa;
          stroke-width: 3;
        }
        
        .arrowhead {
          fill: rgba(102, 126, 234, 0.6);
        }
        
        .dark .arrowhead {
          fill: rgba(102, 126, 234, 0.8);
        }
        
        .arrowhead-selected {
          fill: #fbbf24;
        }
        
        .arrowhead-central {
          fill: #60a5fa;
        }
        
        .arrow {
          fill: rgba(102, 126, 234, 0.6);
        }
        
        .dark .arrow {
          fill: rgba(102, 126, 234, 0.8);
        }
        
        .arrow.selected {
          fill: #fbbf24;
        }
        
        .arrow.central {
          fill: #60a5fa;
        }
        
        .delete-connection {
          fill: #ef4444;
          stroke: white;
          stroke-width: 2;
          transition: all 0.2s;
        }
        
        .delete-connection:hover {
          fill: #dc2626;
          transform: scale(1.1);
        }
        
        .node {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 10px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(148, 145, 145, 0.5);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dark .node {
          background: rgba(30, 41, 59, 0.95);
          border: 2px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .node:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .dark .node:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }
        
        .node.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
          z-index: 100;
        }
        
        .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
          border: 2px solid #60a5fa;
          box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
        }
        
        .dark .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25));
        }
        
        .node.central.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }
        
        .node:active {
          cursor: grabbing;
        }
        
        .node-image {
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
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dark .node-title {
          color: #f8fafc;
        }
        
        .node-time {
          font-size: 0.85em;
          font-weight: 600;
          color: #64748b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dark .node-time {
          color: #94a3b8;
        }
        
        .delete-btn {
          position: absolute;
          background: #ef4444;
          color: white;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          transition: all 0.2s;
        }
        
        .dark .delete-btn {
          border: 2px solid #0f172a;
        }
        
        .delete-btn:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        .connection-hint {
          position: fixed;
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
        
        .dark .connection-hint {
          background: rgba(30, 41, 59, 0.95);
          color: #cbd5e1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.05); }
        }
        
        .help-panel {
          position: fixed;
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
        
        .dark .help-panel {
          background: rgba(30, 41, 59, 0.95);
          color: #cbd5e1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
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
        
        .dark .modal {
          background: #1e293b;
          color: #f8fafc;
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
        
        .dark .modal-header h2 {
          color: #f8fafc;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #64748b;
          transition: color 0.2s;
        }
        
        .dark .close-btn {
          color: #94a3b8;
        }
        
        .close-btn:hover {
          color: #1e293b;
        }
        
        .dark .close-btn:hover {
          color: #f8fafc;
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
        
        .dark .form-group label {
          color: #cbd5e1;
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
          background: white;
          color: #1e293b;
        }
        
        .dark .form-group input,
        .dark .form-group textarea,
        .dark .form-group select {
          background: #334155;
          border: 2px solid #475569;
          color: #f8fafc;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .dark .form-group input:focus,
        .dark .form-group textarea:focus,
        .dark .form-group select:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
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
        
        .dark select {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default EvolutionChartMaker;