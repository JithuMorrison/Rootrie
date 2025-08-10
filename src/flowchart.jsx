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
  const fileInputRef = useRef(null);

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

  const handleFetchCurrentJson = () => {
    const blob = new Blob([handleExportJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${flowchart?.name || 'use-case-diagram'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    setActiveTab('json');
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        onJsonInputChange(JSON.stringify(jsonData, null, 2));
        setActiveTab('json');
      } catch (error) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleImportJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      onUpdateFlowchart({
        ...flowchart,
        nodes: parsedData.nodes || [],
        edges: parsedData.edges || []
      });
    } catch (error) {
      alert('Invalid JSON: ' + error.message);
    }
  };

  // Calculate the connection path between nodes with proper edge connections
  const calculateConnectionPath = (fromNode, toNode, edge) => {
    const fromCenterX = fromNode.x + fromNode.width / 2;
    const fromCenterY = fromNode.y + fromNode.height / 2;
    const toCenterX = toNode.x + toNode.width / 2;
    const toCenterY = toNode.y + toNode.height / 2;

    // Calculate direction vector
    const dx = toCenterX - fromCenterX;
    const dy = toCenterY - fromCenterY;
    const angle = Math.atan2(dy, dx);

    // Find exit point from source node
    let fromX, fromY;
    if (fromNode.type === 'circle' || fromNode.type === 'oval') {
      const radiusX = fromNode.width / 2;
      const radiusY = fromNode.type === 'oval' ? fromNode.height / 2 : radiusX;
      fromX = fromCenterX + radiusX * Math.cos(angle);
      fromY = fromCenterY + radiusY * Math.sin(angle);
    } else if (fromNode.type === 'diamond') {
      // Diamond shape connection point
      const diamondAngle = Math.atan2(fromNode.height, fromNode.width);
      if (angle > -diamondAngle && angle <= diamondAngle) {
        fromX = fromNode.x + fromNode.width;
        fromY = fromCenterY;
      } else if (angle > diamondAngle && angle <= Math.PI - diamondAngle) {
        fromX = fromCenterX;
        fromY = fromNode.y + fromNode.height;
      } else if (angle > Math.PI - diamondAngle || angle <= -Math.PI + diamondAngle) {
        fromX = fromNode.x;
        fromY = fromCenterY;
      } else {
        fromX = fromCenterX;
        fromY = fromNode.y;
      }
    } else if (fromNode.type === 'rhombus') {
      // Rhombus (slanted rectangle) connection point
      const slope = fromNode.height / fromNode.width;
      if (Math.abs(dy/dx) > slope) {
        fromX = fromCenterX;
        fromY = dy > 0 ? fromNode.y + fromNode.height : fromNode.y;
      } else {
        fromX = dx > 0 ? fromNode.x + fromNode.width : fromNode.x;
        fromY = fromCenterY;
      }
    } else {
      // Rectangle connection point
      if (Math.abs(dx) > Math.abs(dy)) {
        fromX = dx > 0 ? fromNode.x + fromNode.width : fromNode.x;
        fromY = fromCenterY;
      } else {
        fromX = fromCenterX;
        fromY = dy > 0 ? fromNode.y + fromNode.height : fromNode.y;
      }
    }

    // Find entry point to target node
    let toX, toY;
    if (toNode.type === 'circle' || toNode.type === 'oval') {
      const radiusX = toNode.width / 2;
      const radiusY = toNode.type === 'oval' ? toNode.height / 2 : radiusX;
      toX = toCenterX - radiusX * Math.cos(angle);
      toY = toCenterY - radiusY * Math.sin(angle);
    } else if (toNode.type === 'diamond') {
      // Diamond shape connection point
      const diamondAngle = Math.atan2(toNode.height, toNode.width);
      const reverseAngle = angle + Math.PI;
      if (reverseAngle > -diamondAngle && reverseAngle <= diamondAngle) {
        toX = toNode.x + toNode.width;
        toY = toCenterY;
      } else if (reverseAngle > diamondAngle && reverseAngle <= Math.PI - diamondAngle) {
        toX = toCenterX;
        toY = toNode.y + toNode.height;
      } else if (reverseAngle > Math.PI - diamondAngle || reverseAngle <= -Math.PI + diamondAngle) {
        toX = toNode.x;
        toY = toCenterY;
      } else {
        toX = toCenterX;
        toY = toNode.y;
      }
    } else if (toNode.type === 'rhombus') {
      // Rhombus (slanted rectangle) connection point
      const slope = toNode.height / toNode.width;
      if (Math.abs(dy/dx) > slope) {
        toX = toCenterX;
        toY = dy > 0 ? toNode.y + toNode.height : toNode.y;
      } else {
        toX = dx > 0 ? toNode.x + toNode.width : toNode.x;
        toY = toCenterY;
      }
    } else {
      // Rectangle connection point
      if (Math.abs(dx) > Math.abs(dy)) {
        toX = dx > 0 ? toNode.x : toNode.x + toNode.width;
        toY = toCenterY;
      } else {
        toX = toCenterX;
        toY = dy > 0 ? toNode.y : toNode.y + toNode.height;
      }
    }

    // Create path with a bend if needed (for better visualization)
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;

    // Only add bend if the line isn't straight
    if (Math.abs(fromX - toX) > 10 && Math.abs(fromY - toY) > 10) {
      return [
        { x: fromX, y: fromY },
        { x: midX, y: fromY },
        { x: midX, y: toY },
        { x: toX, y: toY }
      ];
    }

    return [
      { x: fromX, y: fromY },
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
    // For paths with bends, return the middle of the longest segment
    let longestSegment = 0;
    let maxLength = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const length = Math.sqrt(
        Math.pow(path[i+1].x - path[i].x, 2) + 
        Math.pow(path[i+1].y - path[i].y, 2)
      );
      if (length > maxLength) {
        maxLength = length;
        longestSegment = i;
      }
    }
    return {
      x: (path[longestSegment].x + path[longestSegment+1].x) / 2,
      y: (path[longestSegment].y + path[longestSegment+1].y) / 2
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
    const clickedNode = nodes.find(node => {
      if (node.type === 'circle') {
        const centerX = node.x + node.width / 2;
        const centerY = node.y + node.height / 2;
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        return distance <= node.width / 2;
      } else if (node.type === 'oval') {
        const centerX = node.x + node.width / 2;
        const centerY = node.y + node.height / 2;
        const normalizedX = (x - centerX) / (node.width / 2);
        const normalizedY = (y - centerY) / (node.height / 2);
        return Math.pow(normalizedX, 2) + Math.pow(normalizedY, 2) <= 1;
      } else if (node.type === 'diamond') {
        const centerX = node.x + node.width / 2;
        const centerY = node.y + node.height / 2;
        const relX = x - centerX;
        const relY = y - centerY;
        const diamondSlope = node.height / node.width;
        return (
          relY <= diamondSlope * relX + node.height / 2 &&
          relY <= -diamondSlope * relX + node.height / 2 &&
          relY >= diamondSlope * relX - node.height / 2 &&
          relY >= -diamondSlope * relX - node.height / 2
        );
      } else if (node.type === 'rhombus') {
        const centerX = node.x + node.width / 2;
        const centerY = node.y + node.height / 2;
        const relX = x - centerX;
        const relY = y - centerY;
        const rhombusSlope = node.height / node.width;
        return (
          Math.abs(relY) <= rhombusSlope * (node.width / 2) &&
          Math.abs(relX) <= node.width / 2
        );
      } else {
        // Rectangle
        return (
          x >= node.x && x <= node.x + node.width &&
          y >= node.y && y <= node.y + node.height
        );
      }
    });
    
    // Check if clicking on an edge
    const clickedEdge = !clickedNode ? getClickedEdge(x, y) : null;
    
    if (connectionMode && clickedNode) {
      if (!fromNode) {
        setFromNode(clickedNode);
      } else if (clickedNode.id !== fromNode.id) {
        if (fromNode.type === 'diamond' || fromNode.type === 'rhombus') {
          setPendingEdge({
            id: Date.now(),
            from: fromNode.id,
            to: clickedNode.id
          });
          setShowLabelModal(true);
        } else {
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
        x: x - (selectedTool === 'circle' || selectedTool === 'oval' ? 30 : 60),
        y: y - (selectedTool === 'circle' || selectedTool === 'oval' ? 30 : 30),
        width: selectedTool === 'circle' ? 60 : selectedTool === 'oval' ? 100 : 120,
        height: selectedTool === 'circle' ? 60 : selectedTool === 'oval' ? 60 : 60,
        text: getDefaultNodeText(selectedTool)
      };
      
      onUpdateFlowchart({
        ...flowchart,
        nodes: [...nodes, newNode]
      });
      
      setSelectedTool(null);
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
      case 'circle':
        return 'Connector';
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

  useEffect(() => {
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

  const handleExportImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Calculate canvas dimensions based on node positions
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    nodes.forEach(node => {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + node.width);
      maxY = Math.max(maxY, node.y + node.height);
    });
    
    // Add padding
    const padding = 40;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;
    
    const width = maxX - minX;
    const height = maxY - minY;
    
    canvas.width = width;
    canvas.height = height;
    
    // Set background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);
    
    // Draw edges first
    edges.forEach(edge => {
      const fromNodeData = nodes.find(n => n.id === edge.from);
      const toNodeData = nodes.find(n => n.id === edge.to);
      
      if (fromNodeData && toNodeData) {
        const path = calculateConnectionPath(fromNodeData, toNodeData, edge);
        
        // Adjust coordinates for export
        const adjustedPath = path.map(p => ({
          x: p.x - minX,
          y: p.y - minY
        }));
        
        ctx.strokeStyle = '#646cff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        // Draw path segments
        ctx.moveTo(adjustedPath[0].x, adjustedPath[0].y);
        for (let i = 1; i < adjustedPath.length; i++) {
          ctx.lineTo(adjustedPath[i].x, adjustedPath[i].y);
        }
        ctx.stroke();
        
        // Draw arrowhead at the end
        const lastSegment = adjustedPath[adjustedPath.length - 1];
        const secondLast = adjustedPath[adjustedPath.length - 2];
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
          const midPoint = getMidPoint(adjustedPath);
          ctx.fillStyle = 'white';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(edge.label, midPoint.x, midPoint.y - 5);
        }
      }
    });
    
    // Draw nodes
    nodes.forEach(node => {
      const adjustedX = node.x - minX;
      const adjustedY = node.y - minY;
      
      ctx.fillStyle = '#646cff';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      
      if (node.type === 'rectangle') {
        ctx.beginPath();
        ctx.roundRect(adjustedX, adjustedY, node.width, node.height, 4);
        ctx.fill();
        if (selectedNode?.id === node.id) {
          ctx.stroke();
        }
      } else if (node.type === 'circle') {
        ctx.beginPath();
        ctx.arc(adjustedX + node.width/2, adjustedY + node.height/2, node.width/2, 0, 2 * Math.PI);
        ctx.fill();
        if (selectedNode?.id === node.id) {
          ctx.stroke();
        }
      } else if (node.type === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(adjustedX + node.width/2, adjustedY);
        ctx.lineTo(adjustedX + node.width, adjustedY + node.height/2);
        ctx.lineTo(adjustedX + node.width/2, adjustedY + node.height);
        ctx.lineTo(adjustedX, adjustedY + node.height/2);
        ctx.closePath();
        ctx.fill();
        if (selectedNode?.id === node.id) {
          ctx.stroke();
        }
      } else if (node.type === 'rhombus') {
        ctx.beginPath();
        ctx.moveTo(adjustedX, adjustedY + node.height/2);
        ctx.lineTo(adjustedX + node.width/2, adjustedY);
        ctx.lineTo(adjustedX + node.width, adjustedY + node.height/2);
        ctx.lineTo(adjustedX + node.width/2, adjustedY + node.height);
        ctx.closePath();
        ctx.fill();
        if (selectedNode?.id === node.id) {
          ctx.stroke();
        }
      } else if (node.type === 'oval') {
        ctx.beginPath();
        ctx.ellipse(
          adjustedX + node.width/2, 
          adjustedY + node.height/2, 
          node.width/2, 
          node.height/2, 
          0, 0, 2 * Math.PI
        );
        ctx.fill();
        if (selectedNode?.id === node.id) {
          ctx.stroke();
        }
      }
      
      // Draw text
      ctx.fillStyle = 'white';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.text, adjustedX + node.width/2, adjustedY + node.height/2);
    });
    
    // Download the image
    const link = document.createElement('a');
    link.download = `${flowchart.name || 'flowchart'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const renderNode = (node) => {
    const isSelected = selectedNode?.id === node.id;
    const isEditing = editingNode === node.id;
    const isConnecting = connectionMode && fromNode?.id === node.id;
    
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
      fontWeight: '500',
      textAlign: 'center',
      wordBreak: 'break-word',
      padding: '8px',
      boxSizing: 'border-box',
      border: isSelected ? '2px solid #a855f7' : isConnecting ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.2)',
      userSelect: 'none',
      transition: 'all 0.2s ease',
      zIndex: isSelected ? 1000 : 1
    };

    if (node.type === 'circle') {
      nodeStyle.borderRadius = '50%';
    } else if (node.type === 'oval') {
      nodeStyle.borderRadius = '50%';
    } else if (node.type === 'diamond') {
      nodeStyle.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      nodeStyle.borderRadius = '0';
    } else if (node.type === 'rhombus') {
      nodeStyle.clipPath = 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)';
      nodeStyle.borderRadius = '0';
    } else {
      nodeStyle.borderRadius = '8px';
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
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '500',
              width: '100%',
              outline: 'none',
              borderRadius: '4px',
              padding: '2px'
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
                height: isSelected ? '3px' : '2px',
                backgroundColor: isSelected ? '#a855f7' : '#646cff',
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg)`,
                cursor: 'pointer',
                zIndex: 2
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
                left: `${lastSegment.x - 8}px`,
                top: `${lastSegment.y - 5}px`,
                width: '0',
                height: '0',
                borderLeft: `10px solid ${isSelected ? '#a855f7' : '#646cff'}`,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 50%',
                cursor: 'pointer',
                zIndex: 3
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
              top: `${getMidPoint(path).y - 12}px`,
              color: 'white',
              fontSize: '11px',
              fontWeight: '600',
              backgroundColor: '#1a1a1a',
              padding: '4px 8px',
              borderRadius: '12px',
              border: `1px solid #444`,
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              zIndex: 4,
              minWidth: isEditing ? '80px' : 'auto'
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
                  fontSize: '11px',
                  fontWeight: '600',
                  width: '100%',
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
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: 'rgba(255, 255, 255, 0.87)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '24px'
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          padding: '20px',
          backgroundColor: '#242424',
          borderRadius: '12px',
          border: '1px solid #444',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ 
            margin: '0',
            fontSize: '2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #646cff, #a855f7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {flowchart.name}
          </h1>
          <button 
            onClick={onBack}
            style={{
              padding: '12px 20px',
              backgroundColor: '#242424',
              color: 'rgba(255, 255, 255, 0.87)',
              border: '1px solid #646cff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Back to List
          </button>
        </div>
        
        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          marginBottom: '24px',
          backgroundColor: '#242424',
          borderRadius: '12px',
          padding: '4px',
          border: '1px solid #444',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <button 
            onClick={() => setActiveTab('editor')} 
            style={{
              padding: '12px 24px',
              border: 'none',
              backgroundColor: activeTab === 'editor' ? '#646cff' : 'transparent',
              color: activeTab === 'editor' ? 'white' : 'rgba(255, 255, 255, 0.87)',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'all 0.2s',
              flex: 1,
              textAlign: 'center'
            }}
          >
            🎨 Flowchart Editor
          </button>
          <button 
            onClick={() => {setActiveTab('json'); onJsonInputChange(handleExportJson);}} 
            style={{
              padding: '12px 24px',
              border: 'none',
              backgroundColor: activeTab === 'json' ? '#646cff' : 'transparent',
              color: activeTab === 'json' ? 'white' : 'rgba(255, 255, 255, 0.87)',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'all 0.2s',
              flex: 1,
              textAlign: 'center'
            }}
          >
            📝 JSON Editor
          </button>
        </div>
        
        {activeTab === 'editor' ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Toolbar */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '20px',
              backgroundColor: '#242424',
              borderRadius: '12px',
              border: '1px solid #444',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {[
                    { tool: 'rectangle', icon: '⬜', label: 'Process' },
                    { tool: 'diamond', icon: '◆', label: 'Diamond' },
                    { tool: 'rhombus', icon: '◊', label: 'Rhombus' },
                    { tool: 'circle', icon: '●', label: 'Circle' },
                    { tool: 'oval', icon: '⬭', label: 'Oval' }
                  ].map(({ tool, icon, label }) => (
                    <button 
                      key={tool}
                      onClick={() => setSelectedTool(tool)}
                      style={{
                        padding: '10px 16px',
                        backgroundColor: selectedTool === tool ? '#646cff' : '#1a1a1a',
                        color: selectedTool === tool ? 'white' : 'rgba(255, 255, 255, 0.87)',
                        border: '1px solid #444',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '500',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{icon}</span>
                      {label}
                    </button>
                  ))}
                  
                  <button 
                    onClick={handleArrowTool}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: connectionMode ? '#646cff' : '#1a1a1a',
                      color: connectionMode ? 'white' : 'rgba(255, 255, 255, 0.87)',
                      border: '1px solid #444',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '500',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>→</span>
                    {connectionMode ? (fromNode ? 'Select Target' : 'Select Source') : 'Connect'}
                  </button>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  {selectedNode && (
                    <button 
                      onClick={handleDeleteNode}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                    >
                      🗑 Delete Node
                    </button>
                  )}
                  {selectedEdge && (
                    <button 
                      onClick={handleDeleteEdge}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                    >
                      🗑 Delete Edge
                    </button>
                  )}
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button 
                  onClick={handleExportImage}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  📸 Export PNG
                </button>
                <button 
                  onClick={() => navigator.clipboard.writeText(handleExportJson())}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#a855f7',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  📋 Copy JSON
                </button>
                <button 
                  onClick={handleFetchCurrentJson}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  📥 Export JSON
                </button>
              </div>
            </div>
            
            {/* Instructions */}
            {(selectedTool || connectionMode) && (
              <div style={{
                padding: '16px',
                backgroundColor: 'rgba(100, 108, 255, 0.1)',
                border: '1px solid #646cff',
                borderRadius: '8px',
                color: '#646cff',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {connectionMode ? 
                  (fromNode ? 
                    `🎯 Click on target node to connect from "${fromNode.text}"` : 
                    '🎯 Click on a node to start connection'
                  ) :
                  `🎨 Click on canvas to place a ${selectedTool}`
                }
              </div>
            )}
            
            {/* Flowchart Canvas */}
            <div 
              ref={canvasRef}
              onClick={handleCanvasClick}
              style={{
                height: '700px',
                border: '2px dashed #444',
                borderRadius: '12px',
                backgroundColor: '#1a1a1a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: selectedTool ? 'crosshair' : 'default',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              {nodes.length === 0 && !selectedTool && (
                <div style={{
                  textAlign: 'center',
                  color: '#64748b',
                  pointerEvents: 'none'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
                  <h3 style={{ margin: '0 0 8px 0', fontWeight: '600' }}>Start Building Your Flowchart</h3>
                  <p style={{ margin: '0', fontSize: '14px' }}>Select a tool from the toolbar above to begin</p>
                </div>
              )}
              
              {/* Canvas content */}
              <div style={{
                position: 'absolute',
                transform: `scale(${flowchart.zoom}) translate(${flowchart.pan.x}px, ${flowchart.pan.y}px)`,
                transformOrigin: '0 0',
                width: '100%',
                height: '100%'
              }}>
                {/* Render edges first */}
                {edges.map(renderEdge)}
                
                {/* Render nodes on top */}
                {nodes.map(renderNode)}
              </div>
            </div>
            
            {/* Help Text */}
            <div style={{
              padding: '16px',
              backgroundColor: '#242424',
              borderRadius: '8px',
              border: '1px solid #444',
              fontSize: '13px',
              color: '#64748b',
              textAlign: 'center',
              lineHeight: '1.6'
            }}>
              💡 <strong>Pro Tips:</strong> Single click to select • Double click to edit text • 
              Drag nodes to move • Use Connect tool for arrows • 
              Press Delete to remove selected items
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}>
            {/* JSON Input */}
            <div style={{
              border: '1px solid #444',
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: '#242424',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                marginTop: '0',
                marginBottom: '16px',
                color: 'rgba(255, 255, 255, 0.87)',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                📥 Import JSON
              </h3>
              <textarea
                value={jsonInput}
                onChange={(e) => onJsonInputChange(e.target.value)}
                placeholder="Paste your flowchart JSON here..."
                style={{
                  width: '100%',
                  minHeight: '400px',
                  padding: '16px',
                  border: '1px solid #444',
                  borderRadius: '8px',
                  fontFamily: '"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                  backgroundColor: '#1a1a1a',
                  color: 'rgba(255, 255, 255, 0.87)',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <button 
                  onClick={handleImportJson}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    flex: 1,
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                >
                  📥 Import JSON
                </button>
                <button 
                  onClick={() => fileInputRef.current.click()}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#646cff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    flex: 1,
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                >
                  📁 Load File
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileImport}
                  accept=".json"
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            
            {/* JSON Output */}
            <div style={{
              border: '1px solid #444',
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: '#242424',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                marginTop: '0',
                marginBottom: '16px',
                color: 'rgba(255, 255, 255, 0.87)',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                📤 Current Flowchart JSON
              </h3>
              <pre style={{
                backgroundColor: '#1a1a1a',
                padding: '16px',
                border: '1px solid #444',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '450px',
                fontFamily: '"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',
                fontSize: '12px',
                lineHeight: '1.5',
                color: 'rgba(255, 255, 255, 0.87)',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                margin: 0
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
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            backdropFilter: 'blur(4px)'
          }}>
            <div style={{
              backgroundColor: '#242424',
              padding: '24px',
              borderRadius: '12px',
              width: '400px',
              border: '1px solid #646cff',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
              animation: 'slideIn 0.2s ease-out'
            }}>
              <h3 style={{ 
                marginTop: 0, 
                marginBottom: '8px',
                color: 'rgba(255, 255, 255, 0.87)',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                🏷️ Add Connection Label
              </h3>
              <p style={{ 
                color: '#64748b', 
                marginBottom: '20px',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:
              </p>
              <input
                type="text"
                value={edgeLabel}
                onChange={(e) => setEdgeLabel(e.target.value)}
                placeholder="e.g., Yes, No, True, False..."
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '20px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #444',
                  color: 'rgba(255, 255, 255, 0.87)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && handleLabelSubmit()}
              />
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                gap: '12px' 
              }}>
                <button
                  onClick={() => {
                    setShowLabelModal(false);
                    setEdgeLabel('');
                    setFromNode(null);
                    setConnectionMode(false);
                    setSelectedTool(null);
                  }}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#1a1a1a',
                    color: 'rgba(255, 255, 255, 0.87)',
                    border: '1px solid #444',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleLabelSubmit}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#646cff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                >
                  Add Label
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowchartMaker;