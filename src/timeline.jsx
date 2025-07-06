import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Download, Upload, ZoomIn, ZoomOut, Trash2, X, Link } from 'lucide-react';

const TIME_UNITS = [
  { value: 'bya', label: 'Billion Years Ago (BYA)', multiplier: 1000000000 },
  { value: 'mya', label: 'Million Years Ago (MYA)', multiplier: 1000000 },
  { value: 'kya', label: 'Thousand Years Ago (KYA)', multiplier: 1000 },
  { value: 'ya', label: 'Years Ago (YA)', multiplier: 1 }
];

const EvolutionChartMaker = ({ project, nodes, connections, onUpdateProject, onBack }) => {
  // Constants
  const TIMELINE_HEIGHT = 60;
  const NODE_WIDTH = 120;
  const NODE_HEIGHT = 100;
  const CONNECTION_COLOR = '#ffffff';
  const SELECTED_CONNECTION_COLOR = '#ffeb3b';

  // Refs
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const animationRef = useRef(null);
  const lastPanTime = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const timestampRef = useRef(0);
  const isDraggingRef = useRef(false);

  // State
  const [localNodes, setLocalNodes] = useState(nodes || []);
  const [localConnections, setLocalConnections] = useState(connections || []);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [zoom, setZoom] = useState(project?.zoom || 1);
  const [pan, setPan] = useState(project?.pan || { x: 0, y: 0 });
  const [targetPan, setTargetPan] = useState(project?.pan || { x: 0, y: 0 });
  const [showNodeEditor, setShowNodeEditor] = useState(false);
  const [editingNode, setEditingNode] = useState(null);
  const [connectionMode, setConnectionMode] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);

  // Save to parent whenever relevant data changes
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

  // Smooth pan animation using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      const now = Date.now();
      const deltaTime = Math.min(now - lastPanTime.current, 100) / 1000;
      lastPanTime.current = now;

      if (deltaTime > 0 && !isDraggingRef.current) {
        // Apply smooth interpolation to target pan
        const dx = (targetPan.x - pan.x) * 0.2;
        const dy = (targetPan.y - pan.y) * 0.2;
        
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          setPan(prev => ({
            x: prev.x + dx,
            y: prev.y + dy
          }));
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setPan(targetPan);
        }
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pan, targetPan]);

  // Timeline calculations
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

  const convertToYears = (value, unit) => {
    const unitObj = TIME_UNITS.find(u => u.value === unit) || TIME_UNITS[0];
    return value * unitObj.multiplier;
  };

  const formatTimelineValue = (value, unit) => {
    if (unit === 'bya') return `${value} BYA`;
    if (unit === 'mya') return `${value} MYA`;
    if (unit === 'kya') return `${value} KYA`;
    return `${value} YA`;
  };

  const getTimelineFromX = useCallback((x) => {
    if (!project) return 0;
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    const startInYears = convertToYears(project.timelineStart, project.timeUnit);
    const endInYears = convertToYears(project.timelineEnd, project.timeUnit);
    const range = startInYears - endInYears;
    const position = x / canvasWidth;
    return startInYears - (position * range);
  }, [project]);

  const getVisibleTimelineMarkers = useCallback(() => {
    if (!project) return [];
    
    const canvasWidth = canvasRef.current?.offsetWidth || 800;
    const startInYears = convertToYears(project.timelineStart, project.timeUnit);
    const endInYears = convertToYears(project.timelineEnd, project.timeUnit);
    const range = startInYears - endInYears;
    const visibleRange = range / zoom;
    
    // Determine step size based on zoom level
    let stepYears;
    if (visibleRange > 2000000000) stepYears = 1000000000;
    else if (visibleRange > 1000000000) stepYears = 500000000;
    else if (visibleRange > 500000000) stepYears = 100000000;
    else if (visibleRange > 200000000) stepYears = 50000000;
    else if (visibleRange > 100000000) stepYears = 25000000;
    else if (visibleRange > 50000000) stepYears = 10000000;
    else if (visibleRange > 20000000) stepYears = 5000000;
    else if (visibleRange > 10000000) stepYears = 2500000;
    else if (visibleRange > 5000000) stepYears = 1000000;
    else if (visibleRange > 2000000) stepYears = 500000;
    else if (visibleRange > 1000000) stepYears = 250000;
    else if (visibleRange > 500000) stepYears = 100000;
    else if (visibleRange > 200000) stepYears = 50000;
    else if (visibleRange > 100000) stepYears = 25000;
    else if (visibleRange > 50000) stepYears = 10000;
    else if (visibleRange > 20000) stepYears = 5000;
    else if (visibleRange > 10000) stepYears = 2500;
    else if (visibleRange > 5000) stepYears = 1000;
    else if (visibleRange > 2000) stepYears = 500;
    else if (visibleRange > 1000) stepYears = 250;
    else if (visibleRange > 500) stepYears = 100;
    else if (visibleRange > 200) stepYears = 50;
    else if (visibleRange > 100) stepYears = 25;
    else if (visibleRange > 50) stepYears = 10;
    else if (visibleRange > 20) stepYears = 5;
    else stepYears = 1;
    
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

  // Node management
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
      y: Math.max(20, (canvasY - pan.y) / zoom),
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

  // Connection management
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

  // Improved dragging functionality
  const handleMouseDown = (e, node) => {
    if (connectionMode) return;
    
    e.stopPropagation();
    isDraggingRef.current = true;
    setSelectedNode(node);
    setSelectedConnection(null);
    
    const rect = canvasRef.current.getBoundingClientRect();
    lastPosition.current = {
      x: e.clientX,
      y: e.clientY
    };
    timestampRef.current = performance.now();
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current || !selectedNode) return;
    
    const now = performance.now();
    const deltaTime = (now - timestampRef.current) / 1000;
    timestampRef.current = now;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    // Calculate velocity
    const deltaX = e.clientX - lastPosition.current.x;
    const deltaY = e.clientY - lastPosition.current.y;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    
    velocityRef.current = {
      x: deltaX / (deltaTime || 0.016),
      y: deltaY / (deltaTime || 0.016)
    };
    
    // Calculate new Y position (X is fixed by timeline)
    const deltaYPos = deltaY / zoom;
    const newY = Math.max(20, selectedNode.y + deltaYPos);
    
    // Update node position
    const updatedNode = {
      ...selectedNode,
      y: newY
    };
    
    setLocalNodes(prev => prev.map(node => 
      node.id === selectedNode.id ? updatedNode : node
    ));
    setSelectedNode(updatedNode);
  }, [selectedNode, zoom]);

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    
    isDraggingRef.current = false;
    
    // Apply momentum scrolling if velocity is significant
    if (Math.abs(velocityRef.current.y) > 50) {
      const momentumFactor = 0.9;
      const momentumY = velocityRef.current.y * momentumFactor;
      
      setTargetPan(prev => ({
        x: prev.x,
        y: prev.y - momentumY
      }));
    }
    
    velocityRef.current = { x: 0, y: 0 };
  }, []);

  // Connection handling
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

  // Calculate curved path for connections that stay properly attached
  const getConnectionPath = (fromNode, toNode) => {
    if (!fromNode || !toNode) return '';
    
    // Calculate positions in the canvas space (not zoomed/panned space)
    const fromX = getTimelinePosition(fromNode.timeline) + (NODE_WIDTH / 2);
    const fromY = fromNode.y + (NODE_HEIGHT / 2);
    const toX = getTimelinePosition(toNode.timeline) + (NODE_WIDTH / 2);
    const toY = toNode.y + (NODE_HEIGHT / 2);
    
    const controlOffset = Math.abs(fromY - toY) * 0.3;
    
    // Apply zoom and pan transformations when rendering, not when calculating
    return `M ${fromX} ${fromY}
            C ${fromX} ${fromY + controlOffset},
              ${toX} ${toY - controlOffset},
              ${toX} ${toY}`;
  };

  const getConnectionMidpoint = (fromNode, toNode) => {
    const fromX = getTimelinePosition(fromNode.timeline) + (NODE_WIDTH / 2);
    const fromY = fromNode.y + (NODE_HEIGHT / 2);
    const toX = getTimelinePosition(toNode.timeline) + (NODE_WIDTH / 2);
    const toY = toNode.y + (NODE_HEIGHT / 2);
    
    return {
      x: (fromX + toX) / 2,
      y: (fromY + toY) / 2
    };
  };

  // Export functionality
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

  // Import functionality
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
          setTargetPan(importData.pan || { x: 0, y: 0 });
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

  // Improved zoom functionality
  const handleZoom = (delta, centerX = null, centerY = null) => {
    const newZoom = Math.max(0.1, Math.min(5, zoom + delta));
    
    if (centerX !== null && centerY !== null) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = centerX - rect.left;
      const mouseY = centerY - rect.top - TIMELINE_HEIGHT;
      
      // Calculate new pan to keep content under mouse stable
      const newPan = {
        x: mouseX - (mouseX - pan.x) * (newZoom / zoom),
        y: mouseY - (mouseY - pan.y) * (newZoom / zoom)
      };
      
      setPan(newPan);
      setTargetPan(newPan);
    }
    
    setZoom(newZoom);
  };

  // Smooth scrolling for both normal and shift scroll
  const handleWheel = (e) => {
    e.preventDefault();
    
    const deltaFactor = 0.5;
    const smoothingFactor = 0.1;
    
    if (e.shiftKey) {
      // Horizontal scrolling with shift
      setTargetPan(prev => ({
        x: prev.x - e.deltaY * deltaFactor,
        y: prev.y
      }));
    } else {
      // Normal scrolling (vertical)
      setTargetPan(prev => ({
        x: prev.x - e.deltaX * deltaFactor,
        y: prev.y - e.deltaY * deltaFactor
      }));
    }
  };

  // Event listeners for smooth dragging
  useEffect(() => {
    const handleMouseUpGlobal = () => handleMouseUp();
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUpGlobal);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="evolution-chart-maker">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <h1>🧬 Evolution Chart Maker</h1>
          <span className="project-name">{project.name}</span>
        </div>
        
        <div className="toolbar">
          <button
            onClick={onBack}
            className="toolbar-btn primary"
          >
            ← Back to Projects
          </button>
          
          <button
            onClick={() => {
              setConnectionMode(!connectionMode);
              setConnectionStart(null);
            }}
            className={`toolbar-btn ${connectionMode ? 'danger' : 'warning'}`}
          >
            {connectionMode ? 'Cancel' : 'Connect'}
          </button>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="toolbar-btn warning"
          >
            <Upload size={16} /> Import
          </button>
          
          <button
            onClick={exportProject}
            className="toolbar-btn info"
          >
            <Download size={16} /> Export
          </button>
          
          <div className="zoom-controls">
            <button 
              onClick={() => handleZoom(0.1)} 
              className="zoom-btn"
            >
              <ZoomIn size={16} />
            </button>
            <button 
              onClick={() => handleZoom(-0.1)} 
              className="zoom-btn"
            >
              <ZoomOut size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {getVisibleTimelineMarkers().map((marker, index) => (
          <div
            key={index}
            className="timeline-marker"
            style={{
              left: `${(marker.position * (canvasRef.current?.offsetWidth || 800) * zoom + pan.x)}px`,
            }}
          >
            <div className="timeline-line" />
            <span className="timeline-label">
              {formatTimelineValue(marker.value, marker.unit)}
            </span>
          </div>
        ))}
      </div>

      {/* Main Canvas */}
      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        onWheel={handleWheel}
        className="canvas"
        style={{
          cursor: connectionMode ? 'crosshair' : isDraggingRef.current ? 'grabbing' : 'default',
        }}
      >
        {/* SVG for connections */}
        <svg className="connections-svg">
          {localConnections.map(conn => {
            const fromNode = localNodes.find(n => n.id === conn.from);
            const toNode = localNodes.find(n => n.id === conn.to);
            
            if (!fromNode || !toNode) return null;
            
            const midpoint = getConnectionMidpoint(fromNode, toNode);
            const isSelected = selectedConnection === conn.id || 
                              (selectedNode && (selectedNode.id === fromNode.id || selectedNode.id === toNode.id));
            
            return (
              <g key={conn.id}>
                <path
                  d={getConnectionPath(fromNode, toNode)}
                  stroke={isSelected ? SELECTED_CONNECTION_COLOR : CONNECTION_COLOR}
                  strokeWidth={isSelected ? '3' : '2'}
                  fill="none"
                  opacity="0.8"
                  transform={`translate(${pan.x}, ${pan.y + TIMELINE_HEIGHT}) scale(${zoom})`}
                />
                {isSelected && (
                  <circle
                    cx={midpoint.x * zoom + pan.x}
                    cy={midpoint.y * zoom + pan.y + TIMELINE_HEIGHT}
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
        {localNodes.map(node => (
          <div
            key={node.id}
            className={`node ${selectedNode?.id === node.id ? 'selected' : ''}`}
            style={{
              left: `${getTimelinePosition(node.timeline) * zoom + pan.x}px`,
              top: `${node.y * zoom + pan.y + TIMELINE_HEIGHT}px`,
              width: `${NODE_WIDTH * zoom}px`,
              height: `${NODE_HEIGHT * zoom}px`,
              transform: selectedNode?.id === node.id && isDraggingRef.current ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.1s ease'
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
                  width: `${40 * zoom}px`,
                  height: `${40 * zoom}px`
                }}
              />
            )}
            
            <div className="node-title" style={{ fontSize: `${11 * zoom}px` }}>
              {node.title}
            </div>
            
            <div className="node-timeline" style={{ fontSize: `${9 * zoom}px` }}>
              {formatTimelineValue(node.timeline.value, node.timeline.unit)}
            </div>

            {selectedNode?.id === node.id && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNode(node.id);
                }}
                className="delete-node-btn"
                style={{
                  width: `${24 * zoom}px`,
                  height: `${24 * zoom}px`
                }}
              >
                <Trash2 size={12 * zoom} />
              </button>
            )}
          </div>
        ))}

        {/* Connection mode indicator */}
        {connectionMode && (
          <div className="connection-mode-indicator">
            {connectionStart ? 'Select child node' : 'Select parent node'}
          </div>
        )}

        {/* Instructions */}
        <div className="instructions-panel">
          <div>💡 <strong>Ctrl+Click:</strong> Create new node</div>
          <div>🔗 <strong>Connect Mode:</strong> Click two nodes to link them</div>
          <div>❌ <strong>Click connection midpoint:</strong> Delete connection</div>
          <div>📍 <strong>Drag:</strong> Move nodes vertically</div>
          <div>✏️ <strong>Double-click:</strong> Edit node details</div>
          <div>🔍 <strong>Scroll:</strong> Pan | <strong>Shift+Scroll:</strong> Horizontal Pan | <strong>Ctrl+Scroll:</strong> Zoom</div>
        </div>
      </div>

      {/* Node Editor */}
      {showNodeEditor && editingNode && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Node</h2>
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
                  defaultValue={editingNode.timeline.value}
                  id="nodeTimelineValue"
                />
              </div>
              <div className="form-group">
                <label>Time Unit</label>
                <select 
                  id="nodeTimelineUnit" 
                  defaultValue={editingNode.timeline.unit}
                >
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
                placeholder="Brief description of the species..."
                rows={4}
                id="nodeDescription"
              />
            </div>

            <div className="form-actions">
              <button
                onClick={() => setShowNodeEditor(false)}
                className="cancel-btn"
              >
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
                className="save-btn"
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

      <style jsx>{`
        .evolution-chart-maker {
          width: 100vw;
          height: 100vh;
          background: #4a90a4;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.95);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          z-index: 1000;
          position: relative;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .project-name {
          background: #4299e1;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .toolbar {
          display: flex;
          gap: 8px;
        }
        
        .toolbar-btn {
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          font-size: 14px;
        }
        
        .primary {
          background: #48bb78;
        }
        
        .warning {
          background: #ed8936;
        }
        
        .danger {
          background: #f56565;
        }
        
        .info {
          background: #4299e1;
        }
        
        .zoom-controls {
          display: flex;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background: #e2e8f0;
        }
        
        .timeline {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: ${TIMELINE_HEIGHT}px;
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 2px solid #4299e1;
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
          min-width: 60px;
        }
        
        .timeline-line {
          width: 2px;
          height: 20px;
          background: #4299e1;
          margin-bottom: 4px;
        }
        
        .timeline-label {
          font-size: 12px;
          font-weight: 600;
          color: #2d3748;
          white-space: nowrap;
        }
        
        .canvas {
          position: absolute;
          top: ${70 + TIMELINE_HEIGHT}px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          background: #4a90a4;
        }
        
        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .node {
          position: absolute;
          background: #66bb6a;
          border-radius: 25px;
          padding: 8px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .node.selected {
          background: #81c784;
          border: 3px solid #2e7d32;
          z-index: 100;
        }
        
        .node-image {
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 4px;
          pointer-events: none;
        }
        
        .node-title {
          color: white;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2px;
          line-height: 1.2;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        
        .node-timeline {
          color: rgba(255,255,255,0.9);
          text-align: center;
          font-weight: 500;
        }
        
        .delete-node-btn {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #e53e3e;
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }
        
        .connection-mode-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        
        .instructions-panel {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.9);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 12px;
          color: #4a5568;
          z-index: 100;
        }
        
        .instructions-panel div {
          margin-bottom: 4px;
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 400px;
          max-height: 80vh;
          overflow: auto;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #4a5568;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        .form-actions {
          display: flex;
          gap: 12px;
        }
        
        .cancel-btn {
          flex: 1;
          background: #e2e8f0;
          color: #4a5568;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        
        .save-btn {
          flex: 1;
          background: #48bb78;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
      `}</style>
    </div>
  );
};

export default EvolutionChartMaker;