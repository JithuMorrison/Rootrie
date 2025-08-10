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
  const [theme, setTheme] = useState('dark'); // 'dark', 'light', or 'blue'
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Theme colors
  const themes = {
    dark: {
      background: '#1a1a1a',
      panel: '#242424',
      border: '#444',
      text: 'rgba(255, 255, 255, 0.87)',
      nodeFill: '#646cff',
      nodeStroke: '#a855f7',
      edgeStroke: '#646cff',
      highlight: '#a855f7',
      secondaryText: '#64748b',
      buttonHover: '#333'
    },
    light: {
      background: '#f5f5f5',
      panel: '#ffffff',
      border: '#ddd',
      text: '#333',
      nodeFill: '#a2deffff',
      nodeStroke: '#7c3aed',
      edgeStroke: '#4f46e5',
      highlight: '#7c3aed',
      secondaryText: '#666',
      buttonHover: '#eee'
    },
    blue: {
      background: '#0f172a',
      panel: '#1e293b',
      border: '#334155',
      text: '#f8fafc',
      nodeFill: '#3b82f6',
      nodeStroke: '#6366f1',
      edgeStroke: '#3b82f6',
      highlight: '#6366f1',
      secondaryText: '#94a3b8',
      buttonHover: '#1e293b'
    }
  };

  const colors = themes[theme];

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

  // Calculate intersection point with shape boundary
  const getShapeIntersection = (node, x, y) => {
    const centerX = node.x + node.width / 2;
    const centerY = node.y + node.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX);
    
    if (node.type === 'circle') {
      const radius = node.width / 2;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    } else if (node.type === 'oval') {
      const radiusX = node.width / 2;
      const radiusY = node.height / 2;
      return {
        x: centerX + radiusX * Math.cos(angle),
        y: centerY + radiusY * Math.sin(angle)
      };
    } else if (node.type === 'diamond') {
      const diamondAngle = Math.atan2(node.height, node.width);
      if (angle > -diamondAngle && angle <= diamondAngle) {
        return { x: node.x + node.width, y: centerY };
      } else if (angle > diamondAngle && angle <= Math.PI - diamondAngle) {
        return { x: centerX, y: node.y + node.height };
      } else if (angle > Math.PI - diamondAngle || angle <= -Math.PI + diamondAngle) {
        return { x: node.x, y: centerY };
      } else {
        return { x: centerX, y: node.y };
      }
    } else if (node.type === 'rhombus') {
      // Rhombus with 30° slant (rectangle with slanted sides)
      const slantAngle = Math.PI / 6; // 30 degrees
      const halfWidth = node.width / 2;
      const halfHeight = node.height / 2;
      const slantOffset = halfHeight / Math.tan(slantAngle);
      
      if (angle > -slantAngle && angle <= slantAngle) {
        // Right side
        return { x: node.x + node.width, y: centerY };
      } else if (angle > slantAngle && angle <= Math.PI - slantAngle) {
        // Bottom side
        const x = centerX + (angle > Math.PI/2 ? -halfWidth : halfWidth);
        return { 
          x: x, 
          y: node.y + node.height 
        };
      } else if (angle > Math.PI - slantAngle || angle <= -Math.PI + slantAngle) {
        // Left side
        return { x: node.x, y: centerY };
      } else {
        // Top side
        const x = centerX + (angle > -Math.PI/2 ? halfWidth : -halfWidth);
        return { 
          x: x, 
          y: node.y 
        };
      }
    } else {
      // Rectangle
      const halfWidth = node.width / 2;
      const halfHeight = node.height / 2;
      
      // Calculate which side to intersect with
      const tanTheta = Math.abs(Math.tan(angle));
      const tanPhi = halfHeight / halfWidth;
      
      if (tanTheta > tanPhi) {
        // Top or bottom
        const x = centerX + halfHeight / tanTheta * (angle > 0 ? 1 : -1);
        return {
          x: x,
          y: angle > 0 ? node.y + node.height : node.y
        };
      } else {
        // Left or right
        const y = centerY + halfWidth * tanTheta * (Math.abs(angle) > Math.PI/2 ? -1 : 1);
        return {
          x: angle > -Math.PI/2 && angle <= Math.PI/2 ? node.x + node.width : node.x,
          y: y
        };
      }
    }
  };

  // Calculate the connection path between nodes with straight turning lines
  const calculateConnectionPath = (fromNode, toNode, edge) => {
    const fromPoint = getShapeIntersection(fromNode, toNode.x + toNode.width/2, toNode.y + toNode.height/2);
    const toPoint = getShapeIntersection(toNode, fromNode.x + fromNode.width/2, fromNode.y + fromNode.height/2);
    
    // Calculate direction
    const dx = toPoint.x - fromPoint.x;
    const dy = toPoint.y - fromPoint.y;
    
    // Create path with one turning point (straight lines)
    const midX = (fromPoint.x + toPoint.x) / 2;
    const midY = (fromPoint.y + toPoint.y) / 2;
    
    // Only add turning point if not a straight line
    if (Math.abs(dx) > 10 && Math.abs(dy) > 10) {
      return [
        { x: fromPoint.x, y: fromPoint.y },
        { x: midX, y: fromPoint.y },
        { x: midX, y: toPoint.y },
        { x: toPoint.x, y: toPoint.y }
      ];
    }
    
    return [
      { x: fromPoint.x, y: fromPoint.y },
      { x: toPoint.x, y: toPoint.y }
    ];
  };

  const getMidPoint = (path) => {
    if (path.length === 2) {
      return {
        x: (path[0].x + path[1].x) / 2,
        y: (path[0].y + path[1].y) / 2
      };
    } else {
      // For paths with turns, return the middle of the longest segment
      let maxLength = 0;
      let longestSegment = 0;
      
      for (let i = 0; i < path.length - 1; i++) {
        const segmentLength = Math.sqrt(
          Math.pow(path[i+1].x - path[i].x, 2) + 
          Math.pow(path[i+1].y - path[i].y, 2)
        );
        if (segmentLength > maxLength) {
          maxLength = segmentLength;
          longestSegment = i;
        }
      }
      
      return {
        x: (path[longestSegment].x + path[longestSegment+1].x) / 2,
        y: (path[longestSegment].y + path[longestSegment+1].y) / 2
      };
    }
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
        // Rhombus (rectangle with 30° slanted sides)
        const centerX = node.x + node.width / 2;
        const centerY = node.y + node.height / 2;
        const relX = x - centerX;
        const relY = y - centerY;
        const slantAngle = Math.PI / 6; // 30 degrees
        const slantOffset = (node.height / 2) / Math.tan(slantAngle);
        
        return (
          relY <= (node.height / 2) &&
          relY >= -(node.height / 2) &&
          relX <= (node.width / 2) + slantOffset - (relY + node.height/2) / Math.tan(slantAngle) &&
          relX >= -(node.width / 2) - slantOffset + (relY + node.height/2) / Math.tan(slantAngle)
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
    ctx.fillStyle = colors.background;
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
        
        ctx.strokeStyle = colors.edgeStroke;
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
        
        ctx.fillStyle = colors.edgeStroke;
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
          ctx.fillStyle = colors.text;
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
      
      ctx.fillStyle = colors.nodeFill;
      ctx.strokeStyle = colors.nodeStroke;
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
        // Draw rhombus (rectangle with 30° slanted sides)
        const slantOffset = node.height / 2 * Math.tan(Math.PI/6);
        ctx.beginPath();
        ctx.moveTo(adjustedX + slantOffset, adjustedY);
        ctx.lineTo(adjustedX + node.width - slantOffset, adjustedY);
        ctx.lineTo(adjustedX + node.width + slantOffset, adjustedY + node.height);
        ctx.lineTo(adjustedX - slantOffset, adjustedY + node.height);
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
      ctx.fillStyle = colors.text;
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
      backgroundColor: isSelected ? colors.highlight : colors.nodeFill,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.text,
      cursor: 'move',
      fontSize: '12px',
      fontWeight: '500',
      textAlign: 'center',
      wordBreak: 'break-word',
      padding: '8px',
      boxSizing: 'border-box',
      border: isSelected ? `2px solid ${colors.nodeStroke}` : isConnecting ? `2px solid #f59e0b` : `1px solid rgba(255,255,255,0.2)`,
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
      // Rhombus (rectangle with 30° slanted sides)
      const slantOffset = node.height / 2 * Math.tan(Math.PI/6);
      nodeStyle.clipPath = `polygon(
        ${slantOffset}px 0, 
        calc(100% - ${slantOffset}px) 0, 
        100% 50%, 
        calc(100% - ${slantOffset}px) 100%, 
        ${slantOffset}px 100%, 
        0 50%
      )`;
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
              color: colors.text,
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
                backgroundColor: isSelected ? colors.highlight : colors.edgeStroke,
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
                borderLeft: `10px solid ${isSelected ? colors.highlight : colors.edgeStroke}`,
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
              color: colors.text,
              fontSize: '11px',
              fontWeight: '600',
              backgroundColor: colors.panel,
              padding: '4px 8px',
              borderRadius: '12px',
              border: `1px solid ${colors.border}`,
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
                  color: colors.text,
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
      backgroundColor: colors.background,
      color: colors.text,
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
          backgroundColor: colors.panel,
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
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
          <div style={{ display: 'flex', gap: '12px' }}>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{
                padding: '8px 12px',
                backgroundColor: colors.panel,
                color: colors.text,
                border: `1px solid ${colors.border}`,
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <option value="dark">Dark Theme</option>
              <option value="light">Light Theme</option>
              <option value="blue">Blue Theme</option>
            </select>
            <button 
              onClick={onBack}
              style={{
                padding: '12px 20px',
                backgroundColor: colors.panel,
                color: colors.text,
                border: `1px solid ${colors.nodeFill}`,
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
        </div>
        
        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          marginBottom: '24px',
          backgroundColor: colors.panel,
          borderRadius: '12px',
          padding: '4px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <button 
            onClick={() => setActiveTab('editor')} 
            style={{
              padding: '12px 24px',
              border: 'none',
              backgroundColor: activeTab === 'editor' ? colors.nodeFill : 'transparent',
              color: activeTab === 'editor' ? 'white' : colors.text,
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
              backgroundColor: activeTab === 'json' ? colors.nodeFill : 'transparent',
              color: activeTab === 'json' ? 'white' : colors.text,
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
              backgroundColor: colors.panel,
              borderRadius: '12px',
              border: `1px solid ${colors.border}`,
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
                        backgroundColor: selectedTool === tool ? colors.nodeFill : colors.background,
                        color: selectedTool === tool ? 'white' : colors.text,
                        border: `1px solid ${colors.border}`,
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
                      backgroundColor: connectionMode ? colors.nodeFill : colors.background,
                      color: connectionMode ? 'white' : colors.text,
                      border: `1px solid ${colors.border}`,
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
                border: `1px solid ${colors.nodeFill}`,
                borderRadius: '8px',
                color: colors.nodeFill,
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
                border: `2px dashed ${colors.border}`,
                borderRadius: '12px',
                backgroundColor: colors.background,
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
                  color: colors.secondaryText,
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
              backgroundColor: colors.panel,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              fontSize: '13px',
              color: colors.secondaryText,
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
              border: `1px solid ${colors.border}`,
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: colors.panel,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                marginTop: '0',
                marginBottom: '16px',
                color: colors.text,
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
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  fontFamily: '"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                  backgroundColor: colors.background,
                  color: colors.text,
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
                    backgroundColor: colors.nodeFill,
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
              border: `1px solid ${colors.border}`,
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: colors.panel,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                marginTop: '0',
                marginBottom: '16px',
                color: colors.text,
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                📤 Current Flowchart JSON
              </h3>
              <pre style={{
                backgroundColor: colors.background,
                padding: '16px',
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '450px',
                fontFamily: '"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',
                fontSize: '12px',
                lineHeight: '1.5',
                color: colors.text,
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
              backgroundColor: colors.panel,
              padding: '24px',
              borderRadius: '12px',
              width: '400px',
              border: `1px solid ${colors.nodeFill}`,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
              animation: 'slideIn 0.2s ease-out'
            }}>
              <h3 style={{ 
                marginTop: 0, 
                marginBottom: '8px',
                color: colors.text,
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                🏷️ Add Connection Label
              </h3>
              <p style={{ 
                color: colors.secondaryText, 
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
                  backgroundColor: colors.background,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
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
                    backgroundColor: colors.background,
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
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
                    backgroundColor: colors.nodeFill,
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