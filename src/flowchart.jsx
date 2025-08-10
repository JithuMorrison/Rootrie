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
  const [theme, setTheme] = useState('dark');
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
      nodeFill: '#4f46e5',
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

  // Improved shape connection point calculation
  const getShapeConnectionPoint = (node, fromX, fromY) => {
    const centerX = node.x + node.width / 2;
    const centerY = node.y + node.height / 2;
    
    if (node.type === 'circle') {
      const radius = node.width / 2;
      const angle = Math.atan2(fromY - centerY, fromX - centerX);
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    } else if (node.type === 'oval') {
      const radiusX = node.width / 2;
      const radiusY = node.height / 2;
      const angle = Math.atan2(fromY - centerY, fromX - centerX);
      
      // Calculate the exact point on ellipse perimeter
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const scale = Math.sqrt(1 / (Math.pow(cos / radiusX, 2) + Math.pow(sin / radiusY, 2)));
      
      return {
        x: centerX + scale * cos,
        y: centerY + scale * sin
      };
    } else if (node.type === 'diamond') {
      const dx = fromX - centerX;
      const dy = fromY - centerY;
      const halfWidth = node.width / 2;
      const halfHeight = node.height / 2;
      
      // Determine which edge of diamond to connect to
      const slope = halfHeight / halfWidth;
      
      if (Math.abs(dy) <= slope * Math.abs(dx)) {
        // Connect to left or right edge
        const x = dx > 0 ? node.x + node.width : node.x;
        const y = centerY + (dy / Math.abs(dx)) * halfWidth * slope;
        return { x, y: Math.max(node.y, Math.min(node.y + node.height, y)) };
      } else {
        // Connect to top or bottom edge
        const y = dy > 0 ? node.y + node.height : node.y;
        const x = centerX + (dx / Math.abs(dy)) * halfHeight / slope;
        return { x: Math.max(node.x, Math.min(node.x + node.width, x)), y };
      }
    } else if (node.type === 'rhombus') {
      const dx = fromX - centerX;
      const dy = fromY - centerY;
      const halfWidth = node.width / 2;
      const halfHeight = node.height / 2;
      const slantOffset = halfHeight * 0.3;
      
      // For rhombus, we need to check slanted edges
      if (Math.abs(dx) > Math.abs(dy)) {
        // Connect to left or right slanted edge
        const x = dx > 0 ? node.x + node.width : node.x;
        const edgeSlantY = dy > 0 ? 
          node.y + halfHeight + (halfHeight * (dx > 0 ? -slantOffset : slantOffset) / halfWidth) :
          node.y + halfHeight - (halfHeight * (dx > 0 ? -slantOffset : slantOffset) / halfWidth);
        return { x, y: Math.max(node.y, Math.min(node.y + node.height, edgeSlantY)) };
      } else {
        // Connect to top or bottom edge
        const y = dy > 0 ? node.y + node.height : node.y;
        const edgeSlantX = centerX + (dx * 0.7); // Adjust for slant
        return { x: Math.max(node.x - slantOffset, Math.min(node.x + node.width + slantOffset, edgeSlantX)), y };
      }
    } else {
      // Rectangle - find perpendicular connection point to edge
      const dx = fromX - centerX;
      const dy = fromY - centerY;
      const halfWidth = node.width / 2;
      const halfHeight = node.height / 2;
      
      // Determine which edge based on angle
      if (Math.abs(dx) * halfHeight > Math.abs(dy) * halfWidth) {
        // Connect to left or right edge
        const x = dx > 0 ? node.x + node.width : node.x;
        const y = centerY + (dy / Math.abs(dx)) * halfWidth;
        return { x, y: Math.max(node.y, Math.min(node.y + node.height, y)) };
      } else {
        // Connect to top or bottom edge
        const y = dy > 0 ? node.y + node.height : node.y;
        const x = centerX + (dx / Math.abs(dy)) * halfHeight;
        return { x: Math.max(node.x, Math.min(node.x + node.width, x)), y };
      }
    }
  };

  // Improved connection path calculation with smart routing
  const calculateConnectionPath = (fromNode, toNode) => {
    const fromCenter = { x: fromNode.x + fromNode.width / 2, y: fromNode.y + fromNode.height / 2 };
    const toCenter = { x: toNode.x + toNode.width / 2, y: toNode.y + toNode.height / 2 };
    
    // Get connection points on shape edges
    const fromPoint = getShapeConnectionPoint(fromNode, toCenter.x, toCenter.y);
    const toPoint = getShapeConnectionPoint(toNode, fromCenter.x, fromCenter.y);
    
    const dx = toPoint.x - fromPoint.x;
    const dy = toPoint.y - fromPoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Check if nodes are aligned (within threshold)
    const alignmentThreshold = 30; // pixels
    const isHorizontallyAligned = Math.abs(fromCenter.y - toCenter.y) < alignmentThreshold;
    const isVerticallyAligned = Math.abs(fromCenter.x - toCenter.x) < alignmentThreshold;
    
    // For short distances or aligned nodes, use straight line
    if (distance < 80 || isHorizontallyAligned || isVerticallyAligned) {
      return [fromPoint, toPoint];
    }
    
    // Check if nodes are close enough to avoid bending
    const horizontalDistance = Math.abs(dx);
    const verticalDistance = Math.abs(dy);
    const bendThreshold = 100; // Only bend if distance is significant
    
    if (horizontalDistance < bendThreshold && verticalDistance < bendThreshold) {
      return [fromPoint, toPoint];
    }
    
    // Create orthogonal routing for better visual clarity
    if (horizontalDistance > verticalDistance * 1.5) {
      // Primarily horizontal movement - route horizontally first
      const midX = fromPoint.x + dx * 0.7;
      return [
        fromPoint,
        { x: midX, y: fromPoint.y },
        { x: midX, y: toPoint.y },
        toPoint
      ];
    } else if (verticalDistance > horizontalDistance * 1.5) {
      // Primarily vertical movement - route vertically first  
      const midY = fromPoint.y + dy * 0.7;
      return [
        fromPoint,
        { x: fromPoint.x, y: midY },
        { x: toPoint.x, y: midY },
        toPoint
      ];
    } else {
      // Diagonal movement - choose best routing based on node positions
      if (Math.abs(dx) > Math.abs(dy)) {
        const midX = fromPoint.x + dx * 0.6;
        return [
          fromPoint,
          { x: midX, y: fromPoint.y },
          { x: midX, y: toPoint.y },
          toPoint
        ];
      } else {
        const midY = fromPoint.y + dy * 0.6;
        return [
          fromPoint,
          { x: fromPoint.x, y: midY },
          { x: toPoint.x, y: midY },
          toPoint
        ];
      }
    }
  };

  const getMidPoint = (path) => {
    if (path.length <= 2) {
      return {
        x: (path[0].x + path[path.length - 1].x) / 2,
        y: (path[0].y + path[path.length - 1].y) / 2
      };
    }
    
    // For multi-segment paths, find middle of longest segment
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
  };

  // Improved line click detection
  const isPointOnLineSegment = (point, start, end, tolerance = 8) => {
    const A = point.x - start.x;
    const B = point.y - start.y;
    const C = end.x - start.x;
    const D = end.y - start.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    
    if (lenSq === 0) return false;
    
    const param = dot / lenSq;
    
    if (param < 0 || param > 1) return false;
    
    const xx = start.x + param * C;
    const yy = start.y + param * D;
    
    const dx = point.x - xx;
    const dy = point.y - yy;
    return Math.sqrt(dx * dx + dy * dy) <= tolerance;
  };

  const getClickedEdge = (x, y) => {
    for (const edge of edges) {
      const fromNode = nodes.find(n => n.id === edge.from);
      const toNode = nodes.find(n => n.id === edge.to);
      
      if (!fromNode || !toNode) continue;
      
      const path = calculateConnectionPath(fromNode, toNode);
      
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
        const relX = Math.abs(x - centerX);
        const relY = Math.abs(y - centerY);
        return relX / (node.width / 2) + relY / (node.height / 2) <= 1;
      } else if (node.type === 'rhombus') {
        const relX = x - node.x;
        const relY = y - node.y;
        const slantOffset = node.height * 0.3;
        
        if (relY < 0 || relY > node.height) return false;
        
        const leftBound = -slantOffset + (relY / node.height) * slantOffset * 2;
        const rightBound = node.width + slantOffset - (relY / node.height) * slantOffset * 2;
        
        return relX >= leftBound && relX <= rightBound;
      } else {
        return (
          x >= node.x && x <= node.x + node.width &&
          y >= node.y && y <= node.y + node.height
        );
      }
    });
    
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
    
    // Calculate canvas dimensions
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    nodes.forEach(node => {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + node.width);
      maxY = Math.max(maxY, node.y + node.height);
    });
    
    const padding = 40;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;
    
    const width = maxX - minX;
    const height = maxY - minY;
    
    canvas.width = width;
    canvas.height = height;
    
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, width, height);
    
    // Draw edges using same logic
    edges.forEach(edge => {
      const fromNodeData = nodes.find(n => n.id === edge.from);
      const toNodeData = nodes.find(n => n.id === edge.to);
      
      if (fromNodeData && toNodeData) {
        const path = calculateConnectionPath(fromNodeData, toNodeData);
        const adjustedPath = path.map(p => ({ x: p.x - minX, y: p.y - minY }));
        
        ctx.strokeStyle = colors.edgeStroke;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        ctx.moveTo(adjustedPath[0].x, adjustedPath[0].y);
        for (let i = 1; i < adjustedPath.length; i++) {
          ctx.lineTo(adjustedPath[i].x, adjustedPath[i].y);
        }
        ctx.stroke();
        
        // Draw arrowhead at the exact end point
        const lastPoint = adjustedPath[adjustedPath.length - 1];
        const secondLastPoint = adjustedPath[adjustedPath.length - 2];
        const angle = Math.atan2(lastPoint.y - secondLastPoint.y, lastPoint.x - secondLastPoint.x);
        
        ctx.fillStyle = colors.edgeStroke;
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(
          lastPoint.x - 12 * Math.cos(angle - Math.PI/6),
          lastPoint.y - 12 * Math.sin(angle - Math.PI/6)
        );
        ctx.lineTo(
          lastPoint.x - 12 * Math.cos(angle + Math.PI/6),
          lastPoint.y - 12 * Math.sin(angle + Math.PI/6)
        );
        ctx.closePath();
        ctx.fill();
        
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
        ctx.stroke();
      } else if (node.type === 'circle') {
        ctx.beginPath();
        ctx.arc(adjustedX + node.width/2, adjustedY + node.height/2, node.width/2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      } else if (node.type === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(adjustedX + node.width/2, adjustedY);
        ctx.lineTo(adjustedX + node.width, adjustedY + node.height/2);
        ctx.lineTo(adjustedX + node.width/2, adjustedY + node.height);
        ctx.lineTo(adjustedX, adjustedY + node.height/2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (node.type === 'rhombus') {
        const slantOffset = node.height * 0.3;
        ctx.beginPath();
        ctx.moveTo(adjustedX - slantOffset, adjustedY);
        ctx.lineTo(adjustedX + node.width - slantOffset, adjustedY);
        ctx.lineTo(adjustedX + node.width + slantOffset, adjustedY + node.height);
        ctx.lineTo(adjustedX + slantOffset, adjustedY + node.height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (node.type === 'oval') {
        ctx.beginPath();
        ctx.ellipse(adjustedX + node.width/2, adjustedY + node.height/2, node.width/2, node.height/2, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }
      
      ctx.fillStyle = colors.text;
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.text, adjustedX + node.width/2, adjustedY + node.height/2);
    });
    
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
      const slantPercent = 15;
      nodeStyle.clipPath = `polygon(${slantPercent}% 0%, 100% 0%, ${100 - slantPercent}% 100%, 0% 100%)`;
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
    
    const path = calculateConnectionPath(fromNodeData, toNodeData);
    const isSelected = selectedEdge?.id === edge.id;
    const isEditing = editingEdge === edge.id;
    
    return (
      <div key={edge.id}>
        {/* Render improved path segments */}
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
                top: `${point.y - (isSelected ? 1.5 : 1)}px`,
                width: `${length}px`,
                height: isSelected ? '3px' : '2px',
                backgroundColor: isSelected ? colors.highlight : colors.edgeStroke,
                transformOrigin: '0 50%',
                transform: `rotate(${angle}deg)`,
                cursor: 'pointer',
                zIndex: isSelected ? 10 : 2,
                borderRadius: '1px'
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
        
        {/* Improved arrow head with correct positioning */}
        {(() => {
          const lastPoint = path[path.length - 1];
          const secondLastPoint = path[path.length - 2];
          const angle = Math.atan2(lastPoint.y - secondLastPoint.y, lastPoint.x - secondLastPoint.x);
          
          // Calculate arrowhead points
          const arrowSize = 8;
          const arrowAngle = Math.PI / 6; // 30 degrees
          
          const arrowPoint1 = {
            x: lastPoint.x - arrowSize * Math.cos(angle - arrowAngle),
            y: lastPoint.y - arrowSize * Math.sin(angle - arrowAngle)
          };
          
          const arrowPoint2 = {
            x: lastPoint.x - arrowSize * Math.cos(angle + arrowAngle),
            y: lastPoint.y - arrowSize * Math.sin(angle + arrowAngle)
          };
          
          // Create SVG for better arrow rendering
          return (
            <svg
              style={{
                position: 'absolute',
                left: `${Math.min(lastPoint.x, arrowPoint1.x, arrowPoint2.x) - 2}px`,
                top: `${Math.min(lastPoint.y, arrowPoint1.y, arrowPoint2.y) - 2}px`,
                width: `${Math.max(lastPoint.x, arrowPoint1.x, arrowPoint2.x) - Math.min(lastPoint.x, arrowPoint1.x, arrowPoint2.x) + 4}px`,
                height: `${Math.max(lastPoint.y, arrowPoint1.y, arrowPoint2.y) - Math.min(lastPoint.y, arrowPoint1.y, arrowPoint2.y) + 4}px`,
                pointerEvents: 'none',
                zIndex: isSelected ? 11 : 3
              }}
            >
              <polygon
                points={`${lastPoint.x - Math.min(lastPoint.x, arrowPoint1.x, arrowPoint2.x) + 2},${lastPoint.y - Math.min(lastPoint.y, arrowPoint1.y, arrowPoint2.y) + 2} ${arrowPoint1.x - Math.min(lastPoint.x, arrowPoint1.x, arrowPoint2.x) + 2},${arrowPoint1.y - Math.min(lastPoint.y, arrowPoint1.y, arrowPoint2.y) + 2} ${arrowPoint2.x - Math.min(lastPoint.x, arrowPoint1.x, arrowPoint2.x) + 2},${arrowPoint2.y - Math.min(lastPoint.y, arrowPoint1.y, arrowPoint2.y) + 2}`}
                fill={isSelected ? colors.highlight : colors.edgeStroke}
              />
            </svg>
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
              zIndex: isSelected ? 12 : 4,
              minWidth: isEditing ? '80px' : 'auto',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Theme Selection Buttons */}
            <div style={{ display: 'flex', gap: '4px', padding: '4px', backgroundColor: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              {[
                { key: 'dark', label: '🌙', title: 'Dark Theme' },
                { key: 'light', label: '☀️', title: 'Light Theme' },
                { key: 'blue', label: '🌊', title: 'Blue Theme' }
              ].map(({ key, label, title }) => (
                <button
                  key={key}
                  onClick={() => setTheme(key)}
                  title={title}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: theme === key ? colors.nodeFill : 'transparent',
                    color: theme === key ? 'white' : colors.text,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    minWidth: '40px'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
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
            onClick={() => {setActiveTab('json'); onJsonInputChange(handleExportJson());}} 
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
                    { tool: 'rhombus', icon: '🔷', label: 'Slanted' },
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
              Press Delete to remove selected items • Lines connect to shape edges and avoid bending for aligned nodes
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
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
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