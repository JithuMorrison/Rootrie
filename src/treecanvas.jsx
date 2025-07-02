import React, { useRef, useState, useEffect, useCallback } from 'react';
import Node from './node';
import Connection from './connection';
import NodeEditor from './nodeeditor';
import Timeline from './timeline';
import ProjectSettings from './projectsettings';

const TreeCanvas = ({ treeData, setTreeData, project, setProject }) => {
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [newNodePosition, setNewNodePosition] = useState(null);
  const [timelineDirection, setTimelineDirection] = useState('pastToPresent');
  const [showProjectSettings, setShowProjectSettings] = useState(false);
  const [visibleTimelineRange, setVisibleTimelineRange] = useState([
    project.timelineStart,
    project.timelineEnd
  ]);

  // Convert any time unit to MYA for consistent calculations
  const convertToMya = useCallback((value, unit) => {
    const numValue = parseFloat(value) || 0;
    switch(unit) {
      case 'bya': return numValue * 1000;
      case 'mya': return numValue;
      case 'kya': return numValue / 1000;
      case 'lya': return numValue / 100000;
      case 'ya': return numValue / 1000000;
      default: return numValue;
    }
  }, []);

  // Convert MYA to display unit
  const convertFromMya = useCallback((value, unit) => {
    switch(unit) {
      case 'bya': return value / 1000;
      case 'mya': return value;
      case 'kya': return value * 1000;
      case 'lya': return value * 100000;
      case 'ya': return value * 1000000;
      default: return value;
    }
  }, []);

  // Calculate X position based on timeline value
  const getXPositionFromTimeline = useCallback((timelineValue) => {
    const canvasWidth = canvasRef.current ? canvasRef.current.offsetWidth : 1000;
    const normalized = (timelineValue - project.timelineStart) / 
                     (project.timelineEnd - project.timelineStart);
    return normalized * canvasWidth;
  }, [project.timelineStart, project.timelineEnd]);

  // Calculate timeline value from X position
  const getTimelineFromXPosition = useCallback((x) => {
    const canvasWidth = canvasRef.current ? canvasRef.current.offsetWidth : 1000;
    return (x / canvasWidth) * (project.timelineEnd - project.timelineStart) + project.timelineStart;
  }, [project.timelineStart, project.timelineEnd]);

  // Handle double-click to add new node
  const handleAddNode = (e) => {
    if (e.detail !== 2) return;
    if (connecting) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const timelineValue = getTimelineFromXPosition((x - position.x) / scale);
    const timelineDisplayValue = convertFromMya(Math.abs(timelineValue), project.timelineUnit);
    
    setNewNodePosition({ 
      x: getXPositionFromTimeline(timelineValue),
      y,
      timeline: timelineDisplayValue.toFixed(2),
      timelineUnit: project.timelineUnit
    });
  };

  // Confirm adding new node
  const confirmAddNode = (nodeData) => {
    const timelineMya = convertToMya(nodeData.timeline, nodeData.timelineUnit);
    const x = getXPositionFromTimeline(-timelineMya);
    
    const newNode = {
      id: Date.now(),
      x,
      y: newNodePosition.y,
      title: nodeData.title || 'New Species',
      description: nodeData.description || 'Enter description here',
      image: nodeData.image || 'https://via.placeholder.com/100?text=New',
      timeline: nodeData.timeline,
      timelineUnit: nodeData.timelineUnit
    };

    setTreeData(prev => ({
      ...prev,
      nodes: [...prev.nodes, newNode]
    }));
    
    setNewNodePosition(null);
  };

  // Handle node connection
  const handleNodeClick = (node, e) => {
    e.stopPropagation();
    
    if (connecting) {
      if (!connectionStart) {
        setConnectionStart(node.id);
      } else if (connectionStart !== node.id) {
        // Create connection if it doesn't already exist
        const connectionExists = treeData.connections.some(
          conn => conn.from === connectionStart && conn.to === node.id
        );
        
        if (!connectionExists) {
          setTreeData(prev => ({
            ...prev,
            connections: [...prev.connections, {
              from: connectionStart,
              to: node.id
            }]
          }));
        }
        setConnecting(false);
        setConnectionStart(null);
      }
    } else {
      setSelectedNode(node);
    }
  };

  // Handle node deletion
  const handleDeleteNode = (id) => {
    setTreeData(prev => ({
      nodes: prev.nodes.filter(node => node.id !== id),
      connections: prev.connections.filter(conn => 
        conn.from !== id && conn.to !== id
      )
    }));
    setSelectedNode(null);
  };

  // Handle node updates
  const handleUpdateNode = (updatedNode) => {
    const timelineMya = convertToMya(updatedNode.timeline, updatedNode.timelineUnit);
    const x = getXPositionFromTimeline(-timelineMya);
    
    setTreeData(prev => ({
      ...prev,
      nodes: prev.nodes.map(node => 
        node.id === updatedNode.id ? { ...updatedNode, x } : node
      )
    }));
    setSelectedNode(null);
  };

  // Handle node dragging (vertical only)
  const handleNodeDrag = (id, newY) => {
    setTreeData(prev => ({
      ...prev,
      nodes: prev.nodes.map(node => 
        node.id === id ? { ...node, y: newY } : node
      )
    }));
  };

  // Handle canvas dragging
  const handleMouseDown = (e) => {
    if (e.target === canvasRef.current) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle zooming
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.5, scale + delta), 3);
    
    // Adjust position to zoom toward mouse pointer
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setPosition(prev => ({
      x: mouseX - (mouseX - prev.x) * (newScale / scale),
      y: mouseY - (mouseY - prev.y) * (newScale / scale)
    }));
    
    setScale(newScale);
  };

  // Update visible timeline range when zooming/panning
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvasWidth = canvasRef.current.offsetWidth;
    const visibleStart = getTimelineFromXPosition(-position.x / scale);
    const visibleEnd = getTimelineFromXPosition((canvasWidth - position.x) / scale);
    
    setVisibleTimelineRange([
      Math.max(project.timelineStart, visibleStart),
      Math.min(project.timelineEnd, visibleEnd)
    ]);
  }, [position, scale, project.timelineStart, project.timelineEnd, getTimelineFromXPosition]);

  // Auto-arrange nodes vertically by timeline
  const autoArrange = () => {
    if (treeData.nodes.length === 0) return;

    // Group nodes by timeline (rounded to nearest 10MYA for grouping)
    const timelineGroups = {};
    treeData.nodes.forEach(node => {
      const timeline = Math.round(convertToMya(node.timeline, node.timelineUnit) / 10) * 10;
      if (!timelineGroups[timeline]) {
        timelineGroups[timeline] = [];
      }
      timelineGroups[timeline].push(node);
    });

    // Arrange nodes vertically within each timeline group
    const newNodes = [...treeData.nodes];
    Object.entries(timelineGroups).forEach(([timeline, group]) => {
      const ySpacing = 120;
      const startY = 50;
      group.forEach((node, index) => {
        const nodeIndex = newNodes.findIndex(n => n.id === node.id);
        if (nodeIndex !== -1) {
          newNodes[nodeIndex].y = startY + index * ySpacing;
        }
      });
    });

    setTreeData(prev => ({
      ...prev,
      nodes: newNodes
    }));
  };

  // Handle export
  const handleExport = () => {
    const dataStr = JSON.stringify({
      ...treeData,
      projectSettings: project
    }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'evolutionary-tree.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Handle import
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.projectSettings) {
          setProject(data.projectSettings);
        }
        if (data.nodes && data.connections) {
          setTreeData({
            nodes: data.nodes,
            connections: data.connections
          });
        }
      } catch (err) {
        alert('Error parsing JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="tree-container">
      <div className="toolbar">
        <button 
          onClick={() => setShowProjectSettings(true)}
          className="tool-button"
        >
          Project Settings
        </button>
        <button 
          onClick={() => setConnecting(!connecting)}
          className={`tool-button ${connecting ? 'active' : ''}`}
        >
          {connecting ? 'Cancel Connection' : 'Create Connection'}
        </button>
        <select
          value={timelineDirection}
          onChange={(e) => setTimelineDirection(e.target.value)}
          className="tool-button"
        >
          <option value="pastToPresent">Past → Present</option>
          <option value="presentToPast">Present → Past</option>
        </select>
        <button onClick={autoArrange} className="tool-button">
          Auto Arrange
        </button>
        <button onClick={handleExport} className="tool-button">
          Export Tree
        </button>
        <label className="tool-button">
          Import Tree
          <input 
            type="file" 
            accept=".json" 
            onChange={handleImport}
            style={{ display: 'none' }}
          />
        </label>
        {connecting && (
          <div className="connection-hint">
            {connectionStart ? 'Select child node' : 'Select parent node'}
          </div>
        )}
      </div>

      <Timeline 
        timelineRange={visibleTimelineRange} 
        zoom={scale} 
        pan={position}
        direction={timelineDirection}
        unit={project.timelineUnit}
        projectRange={[project.timelineStart, project.timelineEnd]}
      />

      <div 
        ref={canvasRef}
        className="tree-canvas"
        onDoubleClick={handleAddNode}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? 'grabbing' : 'default',
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          width: `${Math.abs(project.timelineEnd - project.timelineStart) * 10}px`,
          minHeight: '500px'
        }}
      >
        {treeData.connections.map((conn, index) => {
          const fromNode = treeData.nodes.find(n => n.id === conn.from);
          const toNode = treeData.nodes.find(n => n.id === conn.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <Connection 
              key={`${conn.from}-${conn.to}-${index}`}
              from={fromNode}
              to={toNode}
            />
          );
        })}

        {treeData.nodes.map(node => (
          <Node
            key={node.id}
            node={node}
            onClick={(e) => handleNodeClick(node, e)}
            isSelected={selectedNode?.id === node.id}
            isConnectionStart={connectionStart === node.id}
            onDrag={handleNodeDrag}
            scale={scale}
          />
        ))}
      </div>

      {showProjectSettings && (
        <ProjectSettings
          project={project}
          onSave={(updatedProject) => {
            setProject(updatedProject);
            setShowProjectSettings(false);
          }}
          onClose={() => setShowProjectSettings(false)}
        />
      )}

      {selectedNode && (
        <NodeEditor
          node={selectedNode}
          onUpdate={handleUpdateNode}
          onDelete={handleDeleteNode}
          onClose={() => setSelectedNode(null)}
        />
      )}

      {newNodePosition && (
        <NodeEditor
          node={{
            title: 'New Species',
            description: 'Enter description here',
            image: 'https://via.placeholder.com/100?text=New',
            timeline: newNodePosition.timeline,
            timelineUnit: newNodePosition.timelineUnit
          }}
          onUpdate={confirmAddNode}
          onClose={() => setNewNodePosition(null)}
          isNewNode={true}
        />
      )}
    </div>
  );
};

export default TreeCanvas;