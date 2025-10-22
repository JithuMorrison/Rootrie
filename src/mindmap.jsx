import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Image, 
  ArrowLeft,
  Download,
  Copy,
  Upload,
  Save,
  FileText,
  X,
  Sun,
  Moon,
  RefreshCw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const MindMapMaker = ({ 
  mindMap, 
  nodes = [], 
  connections = [],
  onUpdateMindMap,
  onBack 
}) => {
  const svgRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
  const [editText, setEditText] = useState('');
  const [editSubtext, setEditSubtext] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImageUrl, setEditImageUrl] = useState('');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragNode, setDragNode] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);
  const [connectionTarget, setConnectionTarget] = useState(null);
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [showImages, setShowImages] = useState(true);
  const [descriptionDialog, setDescriptionDialog] = useState(null);
  const [editMode, setEditMode] = useState('text');
  const [imageUrlDialog, setImageUrlDialog] = useState(null);

  const MIN_VERTICAL_GAP = 20;
  const LEVEL_DISTANCE = 200;
  const MAX_TEXT_LENGTH = 15;
  const MAX_SUBTEXT_LENGTH = 25;

  const [currentNodes, setCurrentNodes] = useState(nodes.length > 0 ? nodes : [
    {
      id: 1,
      text: 'Origin',
      subtext: 'Click to edit subtext',
      description: 'This is the central idea of your mind map. You can add descriptions to provide more details.',
      imageUrl: '',
      x: 400,
      y: 300,
      level: 0,
      parentId: null,
      isRoot: true,
      color: '#ff6b6b',
      width: 160,
      height: 80
    }
  ]);

  useEffect(() => {
    if (nodes.length > 0) {
      setCurrentNodes(nodes);
    }
  }, [nodes]);

  useEffect(() => {
    setJsonInput(JSON.stringify({ nodes: currentNodes }, null, 2));
  }, [currentNodes]);

  // Function to get text color based on background color for better contrast
  const getTextColorForBackground = (backgroundColor) => {
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#ffffff';
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  };

  const calculateNodeDimensions = (text, subtext = '', isRoot = false) => {
    const baseWidth = 160;
    const charWidth = 8;
    
    const truncatedText = truncateText(text, MAX_TEXT_LENGTH);
    const truncatedSubtext = subtext ? truncateText(subtext, MAX_SUBTEXT_LENGTH) : '';
    
    const textWidth = truncatedText.length * charWidth;
    const subtextWidth = truncatedSubtext ? truncatedSubtext.length * charWidth * 0.8 : 0;
    const maxTextWidth = Math.max(textWidth, subtextWidth);
    
    let width = Math.max(baseWidth, maxTextWidth + 40);
    let height = 25;

    if (isRoot){
      height += 20;
    }
    
    if (subtext) {
      height += 20;
    }
    
    return { 
      width: Math.min(width, 300),
      height: Math.min(height, 200)
    };
  };

  const getDirectChildren = (nodeId) => {
    return currentNodes.filter(n => n.parentId === nodeId);
  };

  const getAllChildren = (nodeId) => {
    const directChildren = getDirectChildren(nodeId);
    let allChildren = [...directChildren];
    
    directChildren.forEach(child => {
      allChildren = [...allChildren, ...getAllChildren(child.id)];
    });
    
    return allChildren;
  };

  const updateNodePosition = (nodeId, newX, newY, updateConnections = true) => {
    setCurrentNodes(prev => {
      const newNodes = [...prev];
      const nodeToUpdate = newNodes.find(n => n.id === nodeId);
      if (!nodeToUpdate) return prev;

      const originalNode = prev.find(n => n.id === nodeId);
      const deltaX = newX - originalNode.x;
      const deltaY = newY - originalNode.y;

      nodeToUpdate.x = newX;
      nodeToUpdate.y = newY;

      const moveChildren = (parentId, parentDeltaX, parentDeltaY) => {
        const children = newNodes.filter(n => n.parentId === parentId);
        children.forEach(child => {
          child.x += parentDeltaX;
          child.y += parentDeltaY;
          moveChildren(child.id, parentDeltaX, parentDeltaY);
        });
      };

      if (updateConnections) {
        moveChildren(nodeId, deltaX, deltaY);
      }
      
      return newNodes;
    });
  };

  const autoRepositionAllNodes = () => {
    setCurrentNodes(prev => {
      const newNodes = [...prev];
      const root = newNodes.find(n => n.isRoot);
      if (!root) return prev;

      const computeSubtreeHeight = (nodeId) => {
        const node = newNodes.find(n => n.id === nodeId);
        const children = newNodes.filter(n => n.parentId === nodeId);
        if (children.length === 0) return node.height;

        let total = 0;
        children.forEach((child, i) => {
          total += computeSubtreeHeight(child.id);
          if (i < children.length - 1) total += MIN_VERTICAL_GAP;
        });
        return Math.max(total, node.height);
      };

      const positionNodeTree = (nodeId, baseX, baseY, side = null) => {
        const node = newNodes.find(n => n.id === nodeId);
        if (!node) return;

        node.x = baseX;
        node.y = baseY;

        const children = newNodes.filter(n => n.parentId === nodeId);
        if (children.length === 0) return;

        let leftChildren = [];
        let rightChildren = [];

        if (node.isRoot) {
          children.forEach(child => {
            if (child.x < node.x) leftChildren.push(child);
            else rightChildren.push(child);
          });
        } else {
          if (side === "right") rightChildren = children;
          else leftChildren = children;
        }

        const positionSide = (childList, direction) => {
          if (childList.length === 0) return;

          const subtreeHeights = childList.map(c => computeSubtreeHeight(c.id));
          const totalHeight = subtreeHeights.reduce((a, b) => a + b, 0) + (childList.length - 1) * MIN_VERTICAL_GAP;

          let currentY = baseY - totalHeight / 2;

          childList.forEach((child, i) => {
            const childHeight = subtreeHeights[i];
            const childY = currentY + childHeight / 2;
            const childX = direction === "left" ? baseX - LEVEL_DISTANCE : baseX + LEVEL_DISTANCE;

            positionNodeTree(child.id, childX, childY, direction);

            currentY += childHeight + MIN_VERTICAL_GAP;
          });
        };

        positionSide(leftChildren, "left");
        positionSide(rightChildren, "right");
      };

      positionNodeTree(root.id, root.x, root.y);
      return newNodes;
    });
  };

  const getConnectionPath = (parent, child) => {
    if (!parent || !child) return '';

    const startX = (parent.x + parent.width) * zoom + pan.x;
    const startY = (parent.y + parent.height / 2) * zoom + pan.y;
    const endX = child.x * zoom + pan.x;
    const endY = (child.y + child.height / 2) * zoom + pan.y;
    
    const dx = endX - startX;
    const horizontalDistance = Math.abs(dx);
    
    const controlDistanceX = horizontalDistance * 0.5;
    
    const controlX1 = startX + controlDistanceX;
    const controlY1 = startY;
    const controlX2 = endX - controlDistanceX;
    const controlY2 = endY;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  const checkForConnectionTarget = (draggedNode, mouseX, mouseY) => {
    const threshold = 80;
    
    for (const node of currentNodes) {
      if (node.id === draggedNode.id) continue;
      if (getAllChildren(draggedNode.id).some(child => child.id === node.id)) continue;
      
      const nodeScreenX = node.x * zoom + pan.x;
      const nodeScreenY = node.y * zoom + pan.y;
      const distance = Math.sqrt(
        Math.pow(mouseX - (nodeScreenX + node.width * zoom / 2), 2) + 
        Math.pow(mouseY - (nodeScreenY + node.height * zoom / 2), 2)
      );
      
      if (distance < threshold * zoom) {
        return node;
      }
    }
    
    return null;
  };

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation();
    if (e.detail === 1) {
      setSelectedNode(node.id);
      setDragNode(node);
      setIsDragging(true);
      const rect = svgRef.current.getBoundingClientRect();
      setDragStart({ 
        x: e.clientX - rect.left - pan.x - node.x * zoom, 
        y: e.clientY - rect.top - pan.y - node.y * zoom 
      });
    }
  };

  const handleCanvasMouseDown = (e) => {
    if (e.target === svgRef.current) {
      setSelectedNode(null);
      setIsPanning(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  // Optimized mouse move handler with requestAnimationFrame
  const handleMouseMove = useCallback((e) => {
    if (isDragging && dragNode) {
      const rect = svgRef.current.getBoundingClientRect();
      const newX = (e.clientX - rect.left - pan.x - dragStart.x) / zoom;
      const newY = (e.clientY - rect.top - pan.y - dragStart.y) / zoom;

      const target = checkForConnectionTarget(dragNode, e.clientX - rect.left, e.clientY - rect.top);
      setConnectionTarget(target);

      // Use requestAnimationFrame for smooth dragging
      requestAnimationFrame(() => {
        updateNodePosition(dragNode.id, newX, newY, true);
      });

    } else if (isPanning) {
      // Smooth panning with requestAnimationFrame
      requestAnimationFrame(() => {
        setPan({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      });
    }
  }, [isDragging, dragNode, dragStart, zoom, pan, isPanning, currentNodes]);

  const handleMouseUp = useCallback(() => {
    if (isDragging && dragNode) {
      if (connectionTarget) {
        setCurrentNodes(prev => prev.map(node => {
          if (node.id === dragNode.id) {
            return {
              ...node,
              parentId: connectionTarget.id,
              level: connectionTarget.level + 1,
              color: connectionTarget.level + 1 === 1 ? '#4ecdc4' : '#95e1d3'
            };
          }
          return node;
        }));
      }

      setTimeout(() => {
        autoRepositionAllNodes();
      }, 50);
    }

    setIsDragging(false);
    setDragNode(null);
    setIsPanning(false);
    setConnectionTarget(null);
  }, [isDragging, dragNode, connectionTarget]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const addNode = (referenceNodeId, position = 'right') => {
    const referenceNode = currentNodes.find(n => n.id === referenceNodeId);
    if (!referenceNode) return;

    const root = currentNodes.find(n => n.isRoot);
    let isRightSide;
    
    if (referenceNode.isRoot) {
      isRightSide = position === 'right';
    } else {
      isRightSide = referenceNode.x > root.x;
      position = isRightSide ? 'right' : 'left';
    }

    const newNodeDimensions = calculateNodeDimensions('New Node', 'Add subtext here');
    const children = getDirectChildren(referenceNodeId);
    
    const newX = referenceNode.x + (isRightSide ? LEVEL_DISTANCE : -LEVEL_DISTANCE);
    const newY = referenceNode.y + children.length * (newNodeDimensions.height + MIN_VERTICAL_GAP);

    const newNode = {
      id: Date.now(),
      text: 'New Node',
      subtext: 'Add subtext here',
      description: '',
      imageUrl: '',
      x: newX,
      y: newY,
      level: referenceNode.level + 1,
      parentId: referenceNodeId,
      isRoot: false,
      color: referenceNode.level + 1 === 1 ? '#4ecdc4' : '#95e1d3',
      ...newNodeDimensions
    };

    const updatedNodes = [...currentNodes, newNode];
    setCurrentNodes(updatedNodes);
    setSelectedNode(newNode.id);

    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });

    setTimeout(() => {
      autoRepositionAllNodes();
    }, 50);
  };

  const deleteNode = (nodeId) => {
    const nodeToDelete = currentNodes.find(n => n.id === nodeId);
    if (nodeToDelete?.isRoot) return;
    
    const allChildren = getAllChildren(nodeId);
    const toDelete = [nodeToDelete, ...allChildren];
    const ids = toDelete.map(n => n.id);
    
    const updatedNodes = currentNodes.filter(n => !ids.includes(n.id));
    setCurrentNodes(updatedNodes);
    setSelectedNode(null);

    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });

    setTimeout(() => {
      autoRepositionAllNodes();
    }, 50);
  };

  const handleNodeDoubleClick = (node) => {
    setEditingNode(node.id);
    setEditText(node.text);
    setEditSubtext(node.subtext || '');
    setEditDescription(node.description || '');
    setEditImageUrl(node.imageUrl || '');
    setEditMode('text');
  };

  const updateNodeText = (nodeId, text, subtext = null, description = null, imageUrl = null) => {
    if (!text.trim()) return;
    
    const updatedNodes = currentNodes.map(n => {
      if (n.id === nodeId) {
        const updatedNode = { 
          ...n, 
          text,
          subtext: subtext !== null ? subtext : n.subtext,
          description: description !== null ? description : n.description,
          imageUrl: imageUrl !== null ? imageUrl : n.imageUrl
        };
        return { 
          ...updatedNode, 
          ...calculateNodeDimensions(text, updatedNode.subtext, updatedNode.isRoot) 
        };
      }
      return n;
    });
    
    setCurrentNodes(updatedNodes);
    setEditingNode(null);
    setEditText('');
    setEditSubtext('');
    setEditDescription('');
    setEditImageUrl('');

    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });
  };

  const updateNodeImageUrl = (nodeId, imageUrl) => {
    const updatedNodes = currentNodes.map(n => {
      if (n.id === nodeId) {
        return { ...n, imageUrl };
      }
      return n;
    });
    
    setCurrentNodes(updatedNodes);
    setImageUrlDialog(null);
    
    onUpdateMindMap({
      ...mindMap,
      nodes: updatedNodes
    });
  };

  const removeImage = (nodeId) => {
    updateNodeImageUrl(nodeId, '');
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleZoomReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleImages = () => setShowImages(prev => !prev);

  const exportToJson = () => {
    const data = { nodes: currentNodes };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.nodes)) {
        const updatedNodes = data.nodes;
        setCurrentNodes(updatedNodes);
        
        onUpdateMindMap({
          ...mindMap,
          nodes: updatedNodes
        });
      } else {
        alert('Invalid JSON format. Expected nodes array.');
      }
    } catch (error) {
      alert('Error parsing JSON: ' + error.message);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setJsonInput(event.target.result);
    };
    reader.readAsText(file);
  };

  const exportToImage = () => {
    if (!svgRef.current) return;
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(svgRef.current.parentElement, {
        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
        scale: 2,
        useCORS: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${mindMap.name || 'mindmap'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  };

  const getTextColor = () => darkMode ? '#e2e8f0' : '#1f2937';
  const getConnectionColor = () => darkMode ? '#64748b' : '#475569';

  // Render node content as SVG elements
  const renderNodeContent = (node) => {
    const elements = [];
    let currentY = 20;

    if (node.isRoot){
      currentY += 7;
    }

    // Calculate text color based on node background color for better contrast
    const textColor = getTextColorForBackground(node.color);

    // Main text (truncated)
    const displayText = truncateText(node.text, MAX_TEXT_LENGTH);
    elements.push(
      <text
        key="main-text"
        x={node.width / 2}
        y={currentY}
        textAnchor="middle"
        fill={textColor}
        fontSize="14"
        fontWeight="600"
        style={{ pointerEvents: 'none' }}
      >
        {displayText}
      </text>
    );
    currentY += 15;

    // Subtext (truncated)
    if (node.subtext) {
      const displaySubtext = truncateText(node.subtext, MAX_SUBTEXT_LENGTH);
      elements.push(
        <text
          key="subtext"
          x={node.width / 2}
          y={currentY}
          textAnchor="middle"
          fill={textColor}
          fontSize="11"
          fontStyle="italic"
          opacity="0.8"
          style={{ pointerEvents: 'none' }}
        >
          {displaySubtext}
        </text>
      );
      currentY += 15;
    }

    // Description indicator
    if (node.description) {
      elements.push(
        <g key="desc-indicator">
          <circle
            cx={node.width - 12}
            cy={12}
            r={8}
            fill="#f59e0b"
          />
          <text
            x={node.width - 12}
            y={16}
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >
            i
          </text>
        </g>
      );
    }

    return elements;
  };

  // Render image above node
  const renderNodeImage = (node) => {
    if (!node.imageUrl || !showImages) return null;

    const imageSize = 60;
    const imageX = node.x * zoom + pan.x + (node.width * zoom) / 2 - (imageSize / 2);
    const imageY = node.y * zoom + pan.y - imageSize - 10; // Position above the node

    return (
      <g key={`image-${node.id}`}>
        <image
          href={node.imageUrl}
          x={imageX}
          y={imageY}
          width={imageSize}
          height={imageSize}
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#imageClip)"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
          style={{ cursor: 'pointer' }}
        />
        {/* Remove image button */}
        <circle
          cx={imageX + imageSize - 10}
          cy={imageY + 10}
          r={8}
          fill="#ef4444"
          stroke="white"
          strokeWidth="1"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            removeImage(node.id);
          }}
        />
        <text
          x={imageX + imageSize - 10}
          y={imageY + 13}
          textAnchor="middle"
          fill="white"
          fontSize="8"
          fontWeight="bold"
          style={{ pointerEvents: 'none' }}
        >
          ×
        </text>
      </g>
    );
  };

  return (
    <div className={`mindmap-maker ${darkMode ? 'dark' : 'light'}`}>
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{mindMap.name}</h2>
        <div className="spacer"></div>
        
        <div className="export-buttons">
          <button onClick={exportToImage} className="export-btn">
            <Image size={16} /> Export Image
          </button>
          <button onClick={copyToClipboard} className="export-btn">
            <Copy size={16} /> Copy JSON
          </button>
          <button 
            onClick={() => {
              const blob = new Blob([exportToJson()], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${mindMap.name || 'mindmap'}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }} 
            className="export-btn"
          >
            <Download size={16} /> Export JSON
          </button>
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          Mind Map Editor
        </button>
        <button 
          className={`tab ${activeTab === 'json' ? 'active' : ''}`}
          onClick={() => setActiveTab('json')}
        >
          JSON Editor
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div className="mindmap-container">
          {/* Top Toolbar */}
          {showToolbar && (
            <div className="top-toolbar">
              <div className="toolbar-section">
                <button className="toolbar-btn" onClick={toggleTheme} title={darkMode ? "Light Mode" : "Dark Mode"}>
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button className="toolbar-btn" title="Auto Align" onClick={autoRepositionAllNodes}>
                  <RefreshCw size={18} />
                </button>
                <button 
                  className={`toolbar-btn ${showImages ? 'active' : ''}`} 
                  onClick={toggleImages}
                  title={showImages ? "Hide Images" : "Show Images"}
                >
                  <Image size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Main Canvas */}
          <svg
            ref={svgRef}
            className="canvas"
            width="100%"
            height="100%"
            onMouseDown={handleCanvasMouseDown}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
              <filter id="connectionGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <clipPath id="imageClip">
                <rect x="0" y="0" width="60" height="60" rx="8" />
              </clipPath>
            </defs>

            {/* Connection Lines */}
            {currentNodes.map(node => {
              const parent = currentNodes.find(n => n.id === node.parentId);
              return parent ? (
                <path
                  key={`connection-${node.id}`}
                  d={getConnectionPath(parent, node)}
                  stroke={getConnectionColor()}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                  strokeLinecap="round"
                  className="connection-line"
                />
              ) : null;
            })}

            {/* Images above nodes */}
            {currentNodes.map(node => renderNodeImage(node))}

            {/* Connection Target Indicator */}
            {connectionTarget && (
              <g>
                <circle
                  cx={(connectionTarget.x + connectionTarget.width / 2) * zoom + pan.x}
                  cy={(connectionTarget.y + connectionTarget.height / 2) * zoom + pan.y}
                  r={40}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  opacity="0.8"
                  filter="url(#connectionGlow)"
                >
                  <animate attributeName="r" values="35;45;35" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text
                  x={(connectionTarget.x + connectionTarget.width / 2) * zoom + pan.x}
                  y={(connectionTarget.y + connectionTarget.height / 2) * zoom + pan.y - 50}
                  textAnchor="middle"
                  fill="#10b981"
                  fontSize="12"
                  fontWeight="bold"
                >
                  Connect as Child
                </text>
              </g>
            )}

            {/* Nodes */}
            {currentNodes.map(node => (
              <g key={node.id}>
                {/* Node Shape */}
                <g
                  transform={`translate(${node.x * zoom + pan.x}, ${node.y * zoom + pan.y}) scale(${zoom})`}
                  className={`node-group ${isDragging && dragNode?.id === node.id ? 'dragging' : ''}`}
                >
                  <rect
                    width={node.width}
                    height={node.height}
                    rx={12}
                    fill={node.color}
                    filter={selectedNode === node.id ? "url(#glow)" : "url(#shadow)"}
                    stroke={selectedNode === node.id ? "#fff" : "transparent"}
                    strokeWidth={selectedNode === node.id ? "2" : "0"}
                    style={{ cursor: 'grab' }}
                    onMouseDown={(e) => handleNodeMouseDown(e, node)}
                    onDoubleClick={() => handleNodeDoubleClick(node)}
                  />
                  
                  {/* Node Content */}
                  {renderNodeContent(node)}
                </g>

                {/* Add Child Buttons */}
                {selectedNode === node.id && (
                  <>
                    {(() => {
                      const root = currentNodes.find(n => n.isRoot);
                      const isNodeOnRight = node.isRoot ? true : node.x >= root.x;
                      const isNodeOnLeft = node.isRoot ? true : node.x < root.x;
                      
                      return (
                        <>
                          {/* Right Child Button */}
                          {(node.isRoot || isNodeOnRight) && (
                            <g transform={`translate(${(node.x + node.width + 15) * zoom + pan.x}, ${(node.y + node.height/2 - 12) * zoom + pan.y})`}>
                              <circle
                                cx={12}
                                cy={12}
                                r={12}
                                fill="#10b981"
                                stroke="white"
                                strokeWidth="2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => addNode(node.id, 'right')}
                              />
                              <text
                                x={12}
                                y={16}
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                                fontWeight="bold"
                                style={{ pointerEvents: 'none' }}
                              >
                                +
                              </text>
                            </g>
                          )}

                          {/* Left Child Button */}
                          {(node.isRoot || isNodeOnLeft) && (
                            <g transform={`translate(${(node.x - 35) * zoom + pan.x}, ${(node.y + node.height/2 - 12) * zoom + pan.y})`}>
                              <circle
                                cx={12}
                                cy={12}
                                r={12}
                                fill="#10b981"
                                stroke="white"
                                strokeWidth="2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => addNode(node.id, 'left')}
                              />
                              <text
                                x={12}
                                y={16}
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                                fontWeight="bold"
                                style={{ pointerEvents: 'none' }}
                              >
                                +
                              </text>
                            </g>
                          )}
                        </>
                      );
                    })()}
                  </>
                )}
              </g>
            ))}
          </svg>

          {/* Floating Action Buttons for Selected Node */}
          {selectedNode && (
            <div className="floating-actions">
              <button 
                className="action-btn edit-btn"
                onClick={() => {
                  const node = currentNodes.find(n => n.id === selectedNode);
                  handleNodeDoubleClick(node);
                }}
                title="Edit Node"
              >
                <Edit3 size={16} />
              </button>
              
              <button 
                className="action-btn image-btn"
                onClick={() => {
                  const node = currentNodes.find(n => n.id === selectedNode);
                  setImageUrlDialog(node);
                }}
                title="Add Image URL"
              >
                <Image size={16} />
              </button>
              
              {currentNodes.find(n => n.id === selectedNode)?.description && (
                <button 
                  className="action-btn desc-btn"
                  onClick={() => {
                    const node = currentNodes.find(n => n.id === selectedNode);
                    setDescriptionDialog(node);
                  }}
                  title="View Description"
                >
                  <FileText size={16} />
                </button>
              )}
              
              {!currentNodes.find(n => n.id === selectedNode)?.isRoot && (
                <button 
                  className="action-btn delete-btn"
                  onClick={() => deleteNode(selectedNode)}
                  title="Delete Node"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          )}

          {/* Edit Input */}
          {editingNode && (
            <div className="edit-overlay">
              <div className="edit-box">
                <div className="edit-tabs">
                  <button 
                    className={`edit-tab ${editMode === 'text' ? 'active' : ''}`}
                    onClick={() => setEditMode('text')}
                  >
                    Main Text
                  </button>
                  <button 
                    className={`edit-tab ${editMode === 'subtext' ? 'active' : ''}`}
                    onClick={() => setEditMode('subtext')}
                  >
                    Subtext
                  </button>
                  <button 
                    className={`edit-tab ${editMode === 'description' ? 'active' : ''}`}
                    onClick={() => setEditMode('description')}
                  >
                    Description
                  </button>
                  <button 
                    className={`edit-tab ${editMode === 'image' ? 'active' : ''}`}
                    onClick={() => setEditMode('image')}
                  >
                    Image URL
                  </button>
                </div>
                
                <div className="edit-content">
                  {editMode === 'text' && (
                    <div className="input-with-counter">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') updateNodeText(editingNode, editText, editSubtext, editDescription, editImageUrl);
                          if (e.key === 'Escape') { setEditingNode(null); setEditText(''); }
                        }}
                        placeholder="Enter main text..."
                        autoFocus
                        maxLength={50}
                      />
                      <div className="char-counter">
                        {editText.length}/{MAX_TEXT_LENGTH}
                      </div>
                    </div>
                  )}
                  
                  {editMode === 'subtext' && (
                    <div className="input-with-counter">
                      <input
                        type="text"
                        value={editSubtext}
                        onChange={(e) => setEditSubtext(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') updateNodeText(editingNode, editText, editSubtext, editDescription, editImageUrl);
                          if (e.key === 'Escape') { setEditingNode(null); setEditSubtext(''); }
                        }}
                        placeholder="Enter subtext..."
                        autoFocus
                        maxLength={60}
                      />
                      <div className="char-counter">
                        {editSubtext.length}/{MAX_SUBTEXT_LENGTH}
                      </div>
                    </div>
                  )}
                  
                  {editMode === 'description' && (
                    <textarea
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Enter description..."
                      rows="4"
                      autoFocus
                    />
                  )}
                  
                  {editMode === 'image' && (
                    <div className="image-url-input">
                      <input
                        type="url"
                        value={editImageUrl}
                        onChange={(e) => setEditImageUrl(e.target.value)}
                        placeholder="Enter image URL..."
                        autoFocus
                      />
                      {editImageUrl && (
                        <div className="image-preview">
                          <img src={editImageUrl} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                          <small>Image Preview</small>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="edit-actions">
                  <button 
                    onClick={() => {
                      setEditingNode(null);
                      setEditText('');
                      setEditSubtext('');
                      setEditDescription('');
                      setEditImageUrl('');
                    }}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => updateNodeText(editingNode, editText, editSubtext, editDescription, editImageUrl)}
                    className="save-btn"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Image URL Dialog */}
          {imageUrlDialog && (
            <div className="dialog-overlay">
              <div className="dialog">
                <div className="dialog-header">
                  <h3>Add Image URL</h3>
                  <button onClick={() => setImageUrlDialog(null)} className="close-btn">
                    <X size={20} />
                  </button>
                </div>
                <div className="dialog-content">
                  <input
                    type="url"
                    placeholder="Enter image URL..."
                    value={imageUrlDialog.imageUrl || ''}
                    onChange={(e) => {
                      const node = currentNodes.find(n => n.id === imageUrlDialog.id);
                      if (node) {
                        setImageUrlDialog({...node, imageUrl: e.target.value});
                      }
                    }}
                    className="url-input"
                  />
                  {imageUrlDialog.imageUrl && (
                    <div className="image-preview">
                      <img src={imageUrlDialog.imageUrl} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                      <small>Image Preview</small>
                    </div>
                  )}
                  <div className="dialog-actions">
                    <button 
                      onClick={() => setImageUrlDialog(null)}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => updateNodeImageUrl(imageUrlDialog.id, imageUrlDialog.imageUrl)}
                      className="save-btn"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Description Dialog */}
          {descriptionDialog && (
            <div className="dialog-overlay">
              <div className="dialog">
                <div className="dialog-header">
                  <h3>{descriptionDialog.text}</h3>
                  <button onClick={() => setDescriptionDialog(null)} className="close-btn">
                    <X size={20} />
                  </button>
                </div>
                <div className="dialog-content">
                  <p>{descriptionDialog.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Zoom Controls */}
          <div className="zoom-controls">
            <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">-</button>
            <span className="zoom-level">{Math.round(zoom * 100)}%</span>
            <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
            <button className="zoom-btn reset" onClick={handleZoomReset} title="Reset View">⌂</button>
          </div>
        </div>
      ) : (
        <div className="json-editor">
          <div className="json-actions">
            <button 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = handleFileUpload;
                input.click();
              }}
              className="import-btn"
            >
              <Upload size={16} /> Import JSON File
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="json-textarea"
            placeholder="Paste your JSON data here..."
          />
          <button 
            onClick={importFromJson}
            className="import-btn"
          >
            <Save size={16} /> Apply JSON
          </button>
        </div>
      )}

      <style jsx>{`
        .mindmap-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .mindmap-maker.dark {
          background: #1f2937;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          gap: 12px;
        }
        
        .dark .toolbar {
          background: #374151;
          border-bottom-color: #4b5563;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        
        .dark .toolbar h2 {
          color: #f9fafb;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border-color: #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .dark .tabs {
          background: #374151;
          border-bottom-color: #4b5563;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
          font-size: 14px;
        }
        
        .dark .tab {
          color: #9ca3af;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .mindmap-container {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #f8fafc;
        }

        .dark .mindmap-container {
          background: #1f2937;
        }

        .top-toolbar {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          border-radius: 25px;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
        }

        .dark .top-toolbar {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
        }

        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toolbar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .dark .toolbar-btn {
          color: #9ca3af;
        }

        .toolbar-btn.active {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .toolbar-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .canvas {
          cursor: grab;
          width: 100%;
          height: 100%;
        }

        .canvas:active {
          cursor: grabbing;
        }

        .node-group {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .node-group:hover rect {
          filter: url(#glow);
        }

        .node-group.dragging {
          opacity: 0.9;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3));
        }

        .connection-line {
          transition: all 0.1s ease;
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        /* Floating Action Buttons */
        .floating-actions {
          position: absolute;
          top: 70px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1001;
        }

        .action-btn {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s ease;
          color: white;
          font-weight: bold;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .edit-btn {
          background: #3b82f6;
        }

        .image-btn {
          background: #8b5cf6;
        }

        .desc-btn {
          background: #f59e0b;
        }

        .delete-btn {
          background: #ef4444;
        }

        .edit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .edit-box {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-width: 400px;
          max-width: 500px;
          overflow: hidden;
          background: white;
        }

        .dark .edit-box {
          background: #374151;
        }

        .edit-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark .edit-tabs {
          border-bottom-color: #4b5563;
        }

        .edit-tab {
          flex: 1;
          padding: 12px 16px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          color: #64748b;
        }

        .dark .edit-tab {
          color: #9ca3af;
        }

        .edit-tab.active {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .edit-content {
          padding: 20px;
        }

        .edit-box input,
        .edit-box textarea {
          width: 100%;
          font-size: 16px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          outline: none;
          resize: none;
          box-sizing: border-box;
          background: white;
          color: #1f2937;
        }

        .dark .edit-box input,
        .dark .edit-box textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .edit-box input:focus,
        .edit-box textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .input-with-counter {
          position: relative;
        }

        .char-counter {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          color: #64748b;
          background: rgba(255, 255, 255, 0.9);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dark .char-counter {
          color: #9ca3af;
          background: rgba(55, 65, 81, 0.9);
        }

        .image-url-input {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .image-preview {
          text-align: center;
          padding: 12px;
          border: 1px dashed #e2e8f0;
          border-radius: 6px;
        }

        .dark .image-preview {
          border-color: #4b5563;
        }

        .image-preview img {
          max-width: 100%;
          max-height: 150px;
          border-radius: 4px;
        }

        .image-preview small {
          display: block;
          margin-top: 8px;
          color: #64748b;
          font-size: 12px;
        }

        .dark .image-preview small {
          color: #9ca3af;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .edit-actions {
          border-top-color: #4b5563;
          background: #1f2937;
        }

        .cancel-btn, .save-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          font-size: 14px;
        }

        .cancel-btn {
          background: #f1f5f9;
          color: #64748b;
        }

        .cancel-btn:hover {
          background: #e2e8f0;
        }

        .save-btn {
          background: #3b82f6;
          color: white;
        }

        .save-btn:hover {
          background: #2563eb;
        }

        .dialog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2001;
        }

        .dialog {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-width: 400px;
          max-width: 500px;
          max-height: 80vh;
          overflow: hidden;
          background: white;
        }

        .dark .dialog {
          background: #374151;
        }

        .dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .dialog-header {
          border-bottom-color: #4b5563;
          background: #1f2937;
        }

        .dialog-header h3 {
          margin: 0;
          flex: 1;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .dark .dialog-header h3 {
          color: #e2e8f0;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .dark .close-btn {
          color: #9ca3af;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .dialog-content {
          padding: 20px;
          max-height: 400px;
          overflow-y: auto;
          color: #1f2937;
          line-height: 1.6;
        }

        .dark .dialog-content {
          color: #e2e8f0;
        }

        .url-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
          margin-bottom: 16px;
          box-sizing: border-box;
        }

        .dark .url-input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .dialog-actions {
          display: flex;
          gap: 8px;
          margin-top: 16px;
        }

        .zoom-controls {
          position: absolute;
          bottom: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          border-radius: 25px;
          padding: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          gap: 4px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          z-index: 1000;
        }

        .dark .zoom-controls {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
        }

        .zoom-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .dark .zoom-btn {
          color: #9ca3af;
        }

        .zoom-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .zoom-btn.reset {
          font-size: 16px;
        }

        .zoom-level {
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
          color: #64748b;
        }

        .dark .zoom-level {
          color: #9ca3af;
        }

        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .dark .json-editor {
          background: #374151;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          font-size: 14px;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
          background: white;
          color: #1f2937;
        }
        
        .dark .json-textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default MindMapMaker;