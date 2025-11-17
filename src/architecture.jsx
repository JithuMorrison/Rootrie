import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ArrowLeft, Save, Plus, Trash2, Layers, GitMerge, 
  Download, Upload, Image as ImageIcon, Copy, 
  Server, Database, Cpu, HardDrive, Network, Cloud, 
  Router, Smartphone, Globe, Shield, Users, Box, Minus, Maximize2, ZoomIn, ZoomOut, AppWindow, Zap,
  RefreshCcw
} from 'lucide-react';

// Predefined component types with icons and shapes
const componentTypes = [
  { id: 'service', name: 'Service', icon: <Server size={20} />, color: '#6366f1' },
  { id: 'database', name: 'Database', icon: <Database size={20} />, color: '#10b981' },
  { id: 'compute', name: 'Compute', icon: <Cpu size={20} />, color: '#f59e0b' },
  { id: 'storage', name: 'Storage', icon: <HardDrive size={20} />, color: '#8b5cf6' },
  { id: 'network', name: 'Network', icon: <Network size={20} />, color: '#3b82f6' },
  { id: 'cloud', name: 'Cloud', icon: <Cloud size={20} />, color: '#ec4899' },
  { id: 'router', name: 'Router', icon: <Router size={20} />, color: '#14b8a6' },
  { id: 'user', name: 'User', icon: <Users size={20} />, color: '#84cc16' },
  { id: 'device', name: 'Device', icon: <Smartphone size={20} />, color: '#f97316' },
  { id: 'internet', name: 'Internet', icon: <Globe size={20} />, color: '#06b6d4' },
  { id: 'security', name: 'Security', icon: <Shield size={20} />, color: '#ef4444' },
  { id: 'module', name: 'Module', icon: <Box size={20} />, color: '#0ea5e9' },
  { id: 'application', name: 'Application', icon: <AppWindow size={20} />, color: '#9333ea' },
  { id: 'layer', name: 'Layer', icon: <Layers size={20} />, color: '#facc15' },
  { id: 'gateway', name: 'Gateway', icon: <Zap size={20} />, color: '#22d3ee' },
  { id: 'custom', name: 'Custom', icon: <Plus size={20} />, color: '#64748b' }
];

const ArchitectureDiagramMaker = ({ 
  architectureDiagram = { name: 'Architecture Diagram', components: [], connections: [], groups: [] }, 
  components = [], 
  connections = [],
  groups = [],
  onUpdateArchitectureDiagram = () => {},
  onBack = () => {}
}) => {
  const [newComponent, setNewComponent] = useState('');
  const [newConnection, setNewConnection] = useState('');
  const [fromComponent, setFromComponent] = useState('');
  const [toComponent, setToComponent] = useState('');
  const [connectionType, setConnectionType] = useState('solid');
  const [connectionDirection, setConnectionDirection] = useState('directed');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [initialPositions, setInitialPositions] = useState({});
  const [selectedType, setSelectedType] = useState('service');
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageSource, setImageSource] = useState('file');
  const [editingComponent, setEditingComponent] = useState(null);
  const [editText, setEditText] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [canvasSize, setCanvasSize] = useState({ width: 2000, height: 2000 });
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);

  // Ensure we have the data from props or defaults
  const currentComponents = components.length > 0 ? components : architectureDiagram.components || [];
  const currentConnections = connections.length > 0 ? connections : architectureDiagram.connections || [];
  const currentGroups = groups.length > 0 ? groups : architectureDiagram.groups || [];

  useEffect(() => {
    setJsonInput(JSON.stringify({ 
      components: currentComponents, 
      connections: currentConnections, 
      groups: currentGroups 
    }, null, 2));
  }, [currentComponents, currentConnections, currentGroups]);

  // Update canvas size based on content
  useEffect(() => {
    if (currentComponents.length === 0 && currentGroups.length === 0) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    // Check components
    currentComponents.forEach(comp => {
      minX = Math.min(minX, comp.x);
      maxX = Math.max(maxX, comp.x + comp.width);
      minY = Math.min(minY, comp.y);
      maxY = Math.max(maxY, comp.y + comp.height);
    });

    // Check groups
    currentGroups.forEach(group => {
      minX = Math.min(minX, group.x);
      maxX = Math.max(maxX, group.x + group.width);
      minY = Math.min(minY, group.y);
      maxY = Math.max(maxY, group.y + group.height);
    });

    // Add padding
    const padding = 200;
    const newWidth = Math.max(2000, maxX - minX + padding * 2);
    const newHeight = Math.max(2000, maxY - minY + padding * 2);

    setCanvasSize({
      width: newWidth,
      height: newHeight
    });
  }, [currentComponents, currentGroups]);

  // Calculate group nesting depth for proper z-index
  const getGroupDepth = (groupId, visited = new Set()) => {
    if (visited.has(groupId)) return 0; // Prevent infinite loops
    visited.add(groupId);
    
    let maxDepth = 0;
    currentGroups.forEach(group => {
      if (group.groupIds && group.groupIds.includes(groupId)) {
        maxDepth = Math.max(maxDepth, getGroupDepth(group.id, visited) + 1);
      }
    });
    return maxDepth;
  };

  // Sort groups by depth (deepest first for rendering order)
  const getSortedGroups = () => {
    return [...currentGroups].sort((a, b) => {
      const depthA = getGroupDepth(a.id);
      const depthB = getGroupDepth(b.id);
      return depthB - depthA; // Render deepest groups first
    });
  };

  const addComponent = () => {
    if (!newComponent.trim()) return;
    
    const typeConfig = componentTypes.find(t => t.id === selectedType) || componentTypes[0];
    
    const updatedComponents = [
      ...currentComponents,
      {
        id: Date.now(),
        name: newComponent,
        type: selectedType,
        x: 50 + Math.random() * 200,
        y: 50 + Math.random() * 200,
        width: 120,
        height: 120,
        color: typeConfig.color,
        imageUrl: imageUrl
      }
    ];
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents,
      connections: currentConnections,
      groups: currentGroups
    });
    
    setNewComponent('');
    setImageUrl('');
    setShowImageUpload(false);
  };

  const addGroup = () => {
    if (!newGroupName.trim()) return;
    
    if (selectedComponents.length === 0 && selectedGroups.length === 0) {
      alert('Please select at least one component or group to create a group.');
      return;
    }
    
    // Calculate group dimensions based on selected components and groups
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    // Include selected components in bounds calculation
    selectedComponents.forEach(comp => {
      minX = Math.min(minX, comp.x);
      maxX = Math.max(maxX, comp.x + comp.width);
      minY = Math.min(minY, comp.y);
      maxY = Math.max(maxY, comp.y + comp.height);
    });
    
    // Include selected groups in bounds calculation
    selectedGroups.forEach(group => {
      minX = Math.min(minX, group.x);
      maxX = Math.max(maxX, group.x + group.width);
      minY = Math.min(minY, group.y);
      maxY = Math.max(maxY, group.y + group.height);
    });
    
    // If no valid bounds, set default position
    if (minX === Infinity) {
      minX = 100;
      maxX = 300;
      minY = 100;
      maxY = 200;
    }
    
    const padding = 40;
    
    const newGroup = {
      id: Date.now(),
      name: newGroupName,
      componentIds: selectedComponents.map(c => c.id),
      groupIds: selectedGroups.map(g => g.id),
      x: minX - padding,
      y: minY - padding,
      width: Math.max(200, (maxX - minX) + padding * 2),
      height: Math.max(150, (maxY - minY) + padding * 2),
      color: '#e2e8f0'
    };
    
    const updatedGroups = [...currentGroups, newGroup];
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: currentComponents,
      connections: currentConnections,
      groups: updatedGroups
    });
    
    setNewGroupName('');
    setSelectedComponents([]);
    setSelectedGroups([]);
  };

  const addConnection = () => {
    if (!fromComponent || !toComponent) return;
    
    const from = currentComponents.find(c => c.id === parseInt(fromComponent));
    const to = currentComponents.find(c => c.id === parseInt(toComponent));
    
    if (!from || !to) return;
    
    const updatedConnections = [
      ...currentConnections,
      {
        id: Date.now(),
        from: from.id,
        to: to.id,
        type: connectionType,
        direction: connectionDirection,
        label: newConnection || '',
        color: '#64748b'
      }
    ];
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: currentComponents,
      connections: updatedConnections,
      groups: currentGroups
    });
    
    setNewConnection('');
    setFromComponent('');
    setToComponent('');
  };

  const deleteComponent = (componentId) => {
    const updatedComponents = currentComponents.filter(c => c.id !== componentId);
    const updatedConnections = currentConnections.filter(
      conn => !(conn.from === componentId || conn.to === componentId)
    );
    const updatedGroups = currentGroups.map(group => ({
      ...group,
      componentIds: group.componentIds.filter(id => id !== componentId)
    })).filter(group => group.componentIds.length > 0 || (group.groupIds && group.groupIds.length > 0));
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents,
      connections: updatedConnections,
      groups: updatedGroups
    });
  };

  const deleteConnection = (connectionId) => {
    const updatedConnections = currentConnections.filter(conn => conn.id !== connectionId);
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: currentComponents,
      connections: updatedConnections,
      groups: currentGroups
    });
  };

  const deleteGroup = (groupId) => {
    const updatedGroups = currentGroups.filter(g => g.id !== groupId);
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: currentComponents,
      connections: currentConnections,
      groups: updatedGroups
    });
  };

  const handleMouseDown = (e, item, isGroup = false) => {
    e.preventDefault();
    e.stopPropagation();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoomLevel;
    const y = (e.clientY - rect.top) / zoomLevel;
    
    setDragItem({ ...item, isGroup });
    setDragOffset({
      x: x - item.x,
      y: y - item.y
    });

    // Store initial positions for group dragging
    if (isGroup) {
      const positions = {};
      
      // Store initial positions of all components in the group
      if (item.componentIds) {
        item.componentIds.forEach(compId => {
          const comp = currentComponents.find(c => c.id === compId);
          if (comp) {
            positions[`component_${compId}`] = { x: comp.x, y: comp.y };
          }
        });
      }
      
      // Store initial positions of all nested groups
      if (item.groupIds) {
        item.groupIds.forEach(groupId => {
          const group = currentGroups.find(g => g.id === groupId);
          if (group) {
            positions[`group_${groupId}`] = { x: group.x, y: group.y };
          }
        });
      }
      
      setInitialPositions(positions);
    }
  };

  const handleComponentClick = (e, component) => {
    e.stopPropagation();
    if (e.shiftKey) {
      setSelectedComponents(prev => {
        const exists = prev.some(c => c.id === component.id);
        return exists 
          ? prev.filter(c => c.id !== component.id)
          : [...prev, component];
      });
    } else {
      setSelectedComponents([component]);
      setSelectedGroups([]);
    }
  };

  const handleGroupClick = (e, group) => {
    e.stopPropagation();
    if (e.shiftKey) {
      setSelectedGroups(prev => {
        const exists = prev.some(g => g.id === group.id);
        return exists 
          ? prev.filter(g => g.id !== group.id)
          : [...prev, group];
      });
    } else {
      setSelectedGroups([group]);
      setSelectedComponents([]);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (!dragItem) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, (e.clientX - rect.left) / zoomLevel - dragOffset.x);
    const y = Math.max(0, (e.clientY - rect.top) / zoomLevel - dragOffset.y);
    
    if (dragItem.isGroup) {
      // Calculate the delta from the original position
      const dx = x - dragItem.x;
      const dy = y - dragItem.y;
      
      // Move all components in the group by the same delta
      const updatedComponents = currentComponents.map(comp => {
        if (dragItem.componentIds && dragItem.componentIds.includes(comp.id)) {
          const initialPos = initialPositions[`component_${comp.id}`];
          if (initialPos) {
            return { 
              ...comp, 
              x: Math.max(0, initialPos.x + dx), 
              y: Math.max(0, initialPos.y + dy) 
            };
          }
        }
        return comp;
      });
      
      // Move all nested groups by the same delta
      const updatedGroups = currentGroups.map(group => {
        if (group.id === dragItem.id) {
          return { ...group, x: Math.max(0, x), y: Math.max(0, y) };
        } else if (dragItem.groupIds && dragItem.groupIds.includes(group.id)) {
          const initialPos = initialPositions[`group_${group.id}`];
          if (initialPos) {
            return { 
              ...group, 
              x: Math.max(0, initialPos.x + dx), 
              y: Math.max(0, initialPos.y + dy) 
            };
          }
        }
        return group;
      });
      
      onUpdateArchitectureDiagram({
        ...architectureDiagram,
        components: updatedComponents,
        connections: currentConnections,
        groups: updatedGroups
      });
    } else {
      // Move single component
      const updatedComponents = currentComponents.map(comp => 
        comp.id === dragItem.id ? { ...comp, x: Math.max(0, x), y: Math.max(0, y) } : comp
      );
      
      onUpdateArchitectureDiagram({
        ...architectureDiagram,
        components: updatedComponents,
        connections: currentConnections,
        groups: currentGroups
      });
    }
  }, [dragItem, dragOffset, initialPositions, currentComponents, currentConnections, currentGroups, architectureDiagram, onUpdateArchitectureDiagram, zoomLevel]);

  const handleMouseUp = useCallback(() => {
    setDragItem(null);
    setInitialPositions({});
  }, []);

  useEffect(() => {
    if (dragItem) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, handleMouseMove, handleMouseUp]);

  const startEditing = (component) => {
    setEditingComponent(component.id);
    setEditText(component.name);
  };

  const saveEditing = () => {
    if (!editingComponent || !editText.trim()) return;
    
    const updatedComponents = currentComponents.map(comp => 
      comp.id === editingComponent ? { ...comp, name: editText } : comp
    );
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents,
      connections: currentConnections,
      groups: currentGroups
    });
    
    setEditingComponent(null);
    setEditText('');
  };

  const handleCanvasClick = (e) => {
    if (e.target === canvasRef.current) {
      setSelectedComponents([]);
      setSelectedGroups([]);
    }
  };

  const exportToJson = () => {
    const data = { 
      components: currentComponents, 
      connections: currentConnections, 
      groups: currentGroups 
    };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.components) && Array.isArray(data.connections)) {
        onUpdateArchitectureDiagram({
          ...architectureDiagram,
          components: data.components || [],
          connections: data.connections || [],
          groups: data.groups || []
        });
      } else {
        alert('Invalid JSON format. Expected components and connections arrays.');
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(2, prev + 0.1));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(0.5, prev - 0.1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const exportToImage = async () => {
    if (!canvasRef.current) return;
    
    setIsExporting(true);
    
    try {
      // Calculate the exact bounds of all content
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      
      // Check components
      currentComponents.forEach(comp => {
        minX = Math.min(minX, comp.x);
        maxX = Math.max(maxX, comp.x + comp.width);
        minY = Math.min(minY, comp.y);
        maxY = Math.max(maxY, comp.y + comp.height);
      });
      
      // Check groups
      currentGroups.forEach(group => {
        minX = Math.min(minX, group.x);
        maxX = Math.max(maxX, group.x + group.width);
        minY = Math.min(minY, group.y);
        maxY = Math.max(maxY, group.y + group.height);
      });
      
      // Check connection endpoints
      currentConnections.forEach(conn => {
        const from = currentComponents.find(c => c.id === conn.from);
        const to = currentComponents.find(c => c.id === conn.to);
        
        if (from && to) {
          const { fromX, fromY, toX, toY } = getConnectionPath(from, to);
          minX = Math.min(minX, fromX, toX);
          maxX = Math.max(maxX, fromX, toX);
          minY = Math.min(minY, fromY, toY);
          maxY = Math.max(maxY, fromY, toY);
        }
      });
      
      // If no content exists
      if (minX === Infinity || currentComponents.length === 0) {
        alert('No diagram content to export');
        setIsExporting(false);
        return;
      }
      
      // Add some padding around the content
      const padding = 40;
      const contentX = Math.max(0, minX - padding);
      const contentY = Math.max(0, minY - padding);
      const contentWidth = (maxX - minX) + padding * 2;
      const contentHeight = (maxY - minY) + padding * 2;
      
      // Create a temporary container for capture
      const tempContainer = document.createElement('div');
      tempContainer.style.width = `${contentWidth}px`;
      tempContainer.style.height = `${contentHeight}px`;
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '0';
      tempContainer.style.left = '0';
      tempContainer.style.background = 'white';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.zIndex = '-1'; // Hide it but keep it accessible
      
      // Clone the canvas content
      const canvasClone = canvasRef.current.cloneNode(true);
      canvasClone.style.position = 'absolute';
      canvasClone.style.left = `-${contentX}px`;
      canvasClone.style.top = `-${contentY}px`;
      canvasClone.style.transform = 'none';
      canvasClone.style.width = `${canvasSize.width}px`;
      canvasClone.style.height = `${canvasSize.height}px`;
      
      tempContainer.appendChild(canvasClone);
      document.body.appendChild(tempContainer);
      
      // Dynamically import html2canvas
      const html2canvas = await import('html2canvas');
      
      const canvas = await html2canvas.default(tempContainer, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        width: contentWidth,
        height: contentHeight,
        scrollX: 0,
        scrollY: 0
      });
      
      const link = document.createElement('a');
      link.download = `${architectureDiagram.name || 'architecture-diagram'}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      
      // Clean up
      document.body.removeChild(tempContainer);
      
    } catch (error) {
      console.error('Error exporting image:', error);
      alert('Error exporting image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const getConnectionPath = (from, to) => {
    const fromCenterX = from.x + from.width / 2;
    const fromCenterY = from.y + from.height / 2;
    const toCenterX = to.x + to.width / 2;
    const toCenterY = to.y + to.height / 2;

    // Calculate connection points on the edges of components
    const dx = toCenterX - fromCenterX;
    const dy = toCenterY - fromCenterY;
    
    // From component edge
    let fromX, fromY;
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal connection
      fromX = dx > 0 ? from.x + from.width : from.x;
      fromY = fromCenterY;
    } else {
      // Vertical connection
      fromX = fromCenterX;
      fromY = dy > 0 ? from.y + from.height : from.y;
    }
    
    // To component edge
    let toX, toY;
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal connection
      toX = dx > 0 ? to.x : to.x + to.width;
      toY = toCenterY;
    } else {
      // Vertical connection
      toX = toCenterX;
      toY = dy > 0 ? to.y : to.y + to.height;
    }

    return { fromX, fromY, toX, toY };
  };

  const renderComponent = (component) => {
    const typeConfig = componentTypes.find(t => t.id === component.type) || componentTypes[0];
    const isSelected = selectedComponents.some(c => c.id === component.id);
    const isEditing = editingComponent === component.id;

    return (
      <div 
        key={component.id}
        className="component"
        style={{
          position: 'absolute',
          left: `${component.x}px`,
          top: `${component.y}px`,
          width: `${component.width}px`,
          height: `${component.height}px`,
          cursor: dragItem?.id === component.id ? 'grabbing' : 'grab',
          outline: isSelected ? '3px dashed #3b82f6' : 'none',
          outlineOffset: '2px',
          zIndex: 50, // Higher than all groups
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '2px solid #e2e8f0',
          overflow: 'hidden',
          textAlign: 'center',
          fontSize: '12px'
        }}
        onMouseDown={(e) => handleMouseDown(e, component)}
        onClick={(e) => handleComponentClick(e, component)}
        onDoubleClick={() => startEditing(component)}
      >
        <div style={{
          width: '100%',
          height: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#f8fafc',
          borderRadius: '10px 10px 0 0'
        }}>
          {component.imageUrl ? (
            <img 
              src={component.imageUrl} 
              alt={component.name}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '6px'
              }}
            />
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              color: component.color || typeConfig.color
            }}>
              {React.cloneElement(typeConfig.icon, { size: 48 })}
            </div>
          )}
        </div>
        
        <div style={{
          width: '100%',
          height: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px 0px',
          color: 'white',
          fontWeight: '600',
          borderRadius: '0 0 10px 10px',
          backgroundColor: component.color || typeConfig.color
        }}>
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={saveEditing}
              onKeyPress={(e) => e.key === 'Enter' && saveEditing()}
              autoFocus
              style={{
                width: '100%',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                textAlign: 'center',
                fontWeight: '600',
                outline: 'none',
                fontSize: '11px'
              }}
            />
          ) : (
            <>
              <div style={{
                fontSize: '11px',
                fontWeight: '600',
                lineHeight: '1.2',
                marginBottom: '2px',
                wordBreak: 'break-word',
                maxWidth: '100%'
              }}>
                {component.name}
              </div>
              <div style={{
                fontSize: '9px',
                opacity: '0.9',
                fontWeight: '500'
              }}>
                {typeConfig.name}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderGroup = (group) => {
    if (!group.componentIds && !group.groupIds) return null;
    
    const groupComponents = currentComponents.filter(c => 
      group.componentIds && group.componentIds.includes(c.id)
    );
    const nestedGroups = currentGroups.filter(g => 
      group.groupIds && group.groupIds.includes(g.id)
    );
    
    const isSelected = selectedGroups.some(g => g.id === group.id);
    const depth = getGroupDepth(group.id);
    // Calculate z-index: deeper groups have higher z-index to stay clickable
    // Base z-index starts at 10, increases by 5 for each depth level
    const zIndex = 10 + (depth * 5);

    return (
      <div 
        key={group.id}
        className="group"
        style={{
          position: 'absolute',
          left: `${group.x}px`,
          top: `${group.y}px`,
          width: `${group.width}px`,
          height: `${group.height}px`,
          backgroundColor: 'rgba(226, 232, 240, 0.3)',
          border: '2px dashed #94a3b8',
          borderRadius: '12px',
          cursor: dragItem?.id === group.id ? 'grabbing' : 'grab',
          outline: isSelected ? '3px dashed #8b5cf6' : 'none',
          outlineOffset: '2px',
          zIndex: zIndex, // Dynamic z-index based on nesting depth
          paddingTop: '40px',
          boxSizing: 'border-box',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          // Ensure pointer events work properly
          pointerEvents: 'auto'
        }}
        onMouseDown={(e) => handleMouseDown(e, group, true)}
        onClick={(e) => handleGroupClick(e, group)}
      >
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '12px',
          right: '12px',
          fontWeight: '700',
          fontSize: '14px',
          color: '#1e293b',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // Ensure the header is clickable
          pointerEvents: 'auto',
          zIndex: zIndex + 1
        }}>
          <span style={{ 
            flex: 1, 
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap' 
          }}>
            {group.name}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              deleteGroup(group.id);
            }}
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: zIndex + 2 // Ensure delete button is always on top
            }}
          >
            <Trash2 size={14} />
          </button>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '12px',
          fontSize: '11px',
          color: '#64748b',
          fontStyle: 'italic',
          pointerEvents: 'none' // Don't interfere with group clicking
        }}>
          {groupComponents.length} component{groupComponents.length !== 1 ? 's' : ''}
          {nestedGroups.length > 0 && `, ${nestedGroups.length} group${nestedGroups.length !== 1 ? 's' : ''}`}
        </div>
      </div>
    );
  };

  const renderConnection = (connection) => {
    const from = currentComponents.find(c => c.id === connection.from);
    const to = currentComponents.find(c => c.id === connection.to);
    
    if (!from || !to) return null;

    const { fromX, fromY, toX, toY } = getConnectionPath(from, to);

    // Calculate arrow direction
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    const headLength = 10;

    // Style based on connection type
    let lineStyle = {};
    if (connection.type === 'dashed') {
      lineStyle = { strokeDasharray: '5,5', stroke: connection.color || '#64748b' };
    } else if (connection.type === 'dotted') {
      lineStyle = { strokeDasharray: '2,2', stroke: connection.color || '#64748b' };
    } else {
      lineStyle = { stroke: connection.color || '#64748b' };
    }

    return (
      <svg 
        key={connection.id} 
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 49 // Behind everything
        }}
      >
        <line
          x1={fromX}
          y1={fromY}
          x2={toX}
          y2={toY}
          strokeWidth="2"
          {...lineStyle}
        />
        {/* Arrowhead - only if directed */}
        {connection.direction === 'directed' && (
          <polygon
            points={`
              ${toX - headLength * Math.cos(angle - Math.PI / 6)},${toY - headLength * Math.sin(angle - Math.PI / 6)}
              ${toX},${toY}
              ${toX - headLength * Math.cos(angle + Math.PI / 6)},${toY - headLength * Math.sin(angle + Math.PI / 6)}
            `}
            fill={lineStyle.stroke || '#64748b'}
          />
        )}
        {/* Connection label */}
        {connection.label && (
          <text
            x={(fromX + toX) / 2}
            y={(fromY + toY) / 2 - 10}
            textAnchor="middle"
            fontSize="12"
            fill={lineStyle.stroke || '#475569'}
          >
            {connection.label}
          </text>
        )}
      </svg>
    );
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f8fafc',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        background: 'white',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <button 
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            background: '#f1f5f9',
            color: '#64748b',
            border: '1px solid #e2e8f0'
          }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 style={{
          margin: '0 16px',
          fontSize: '20px',
          color: '#1e293b'
        }}>
          {architectureDiagram.name}
        </h2>
        <div style={{ flex: 1 }}></div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {/* Zoom controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginRight: '16px',
            background: '#f1f5f9',
            borderRadius: '6px',
            padding: '4px'
          }}>
            <button 
              onClick={zoomOut}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: '#64748b'
              }}
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <div style={{
              minWidth: '60px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {Math.round(zoomLevel * 100)}%
            </div>
            <button 
              onClick={zoomIn}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: '#64748b'
              }}
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button 
              onClick={resetZoom}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: '#64748b',
                marginLeft: '4px'
              }}
              title="Reset Zoom"
            >
              <Maximize2 size={16} />
            </button>
          </div>
          
          <button 
            onClick={exportToImage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: '#8b5cf6',
              color: 'white',
              border: '1px solid #8b5cf6'
            }}
          >
            {isExporting ? (
              <>
                <RefreshCcw size={16} />
                Exporting...
              </>
            ) : (
              <>
                <ImageIcon size={16} /> Export Image
              </>
            )}
          </button>
          <button 
            onClick={copyToClipboard}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: '#8b5cf6',
              color: 'white',
              border: '1px solid #8b5cf6'
            }}
          >
            <Copy size={16} /> Copy JSON
          </button>
          <button 
            onClick={() => {
              const blob = new Blob([exportToJson()], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${architectureDiagram.name || 'architecture-diagram'}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: '#8b5cf6',
              color: 'white',
              border: '1px solid #8b5cf6'
            }}
          >
            <Download size={16} /> Export JSON
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e2e8f0',
        background: 'white'
      }}>
        <button 
          style={{
            padding: '12px 24px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            color: activeTab === 'editor' ? '#8b5cf6' : '#64748b',
            borderBottom: activeTab === 'editor' ? '2px solid #8b5cf6' : '2px solid transparent'
          }}
          onClick={() => setActiveTab('editor')}
        >
          Diagram Editor
        </button>
        <button 
          style={{
            padding: '12px 24px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            color: activeTab === 'json' ? '#8b5cf6' : '#64748b',
            borderBottom: activeTab === 'json' ? '2px solid #8b5cf6' : '2px solid transparent'
          }}
          onClick={() => setActiveTab('json')}
        >
          JSON Editor
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar */}
          <div style={{
            width: '320px',
            background: 'white',
            borderRight: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
          }}>
            {/* Components Section */}
            <div style={{
              padding: '16px',
              borderBottom: '1px solid #f1f5f9'
            }}>
              <h3 style={{
                marginTop: '0',
                marginBottom: '12px',
                fontSize: '16px',
                color: '#1e293b'
              }}>Components</h3>
              
              <div style={{ marginBottom: '12px' }}>
                <input
                  type="text"
                  value={newComponent}
                  onChange={(e) => setNewComponent(e.target.value)}
                  placeholder="Component name"
                  onKeyPress={(e) => e.key === 'Enter' && addComponent()}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#64748b'
                }}>Component Type</label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  marginTop: '8px'
                }}>
                  {componentTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      title={type.name}
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        color: 'white',
                        transition: 'all 0.2s',
                        backgroundColor: type.color,
                        outline: selectedType === type.id ? '2px solid #1e293b' : 'none',
                        outlineOffset: '2px'
                      }}
                    >
                      {type.icon}
                    </button>
                  ))}
                </div>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <button 
                  onClick={() => setShowImageUpload(!showImageUpload)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    background: '#e2e8f0',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '14px'
                  }}
                >
                  <ImageIcon size={16} /> {imageUrl ? 'Change Image' : 'Add Image (Optional)'}
                </button>
                
                {showImageUpload && (
                  <div style={{ marginTop: '8px' }}>
                    <div style={{
                      display: 'flex',
                      marginBottom: '8px',
                      borderBottom: '1px solid #e2e8f0'
                    }}>
                      <button
                        onClick={() => setImageSource('file')}
                        style={{
                          flex: 1,
                          padding: '6px',
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                          fontSize: '12px',
                          color: imageSource === 'file' ? '#8b5cf6' : '#64748b',
                          borderBottom: imageSource === 'file' ? '2px solid #8b5cf6' : '2px solid transparent'
                        }}
                      >
                        Upload File
                      </button>
                      <button
                        onClick={() => setImageSource('url')}
                        style={{
                          flex: 1,
                          padding: '6px',
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                          fontSize: '12px',
                          color: imageSource === 'url' ? '#8b5cf6' : '#64748b',
                          borderBottom: imageSource === 'url' ? '2px solid #8b5cf6' : '2px solid transparent'
                        }}
                      >
                        URL
                      </button>
                    </div>
                    
                    {imageSource === 'file' ? (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{
                          width: '100%',
                          marginBottom: '8px'
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                        placeholder="Enter image URL"
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '14px',
                          marginBottom: '8px'
                        }}
                      />
                    )}
                    
                    {imageUrl && (
                      <div style={{
                        position: 'relative',
                        marginTop: '8px',
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <img 
                          src={imageUrl} 
                          alt="Preview" 
                          style={{ 
                            maxWidth: '100%', 
                            maxHeight: '60px',
                            borderRadius: '4px'
                          }} 
                        />
                        <button 
                          onClick={() => setImageUrl('')}
                          style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#fee2e2',
                            color: '#ef4444',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <button 
                onClick={addComponent}
                disabled={!newComponent.trim()}
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  background: !newComponent.trim() ? '#ddd6fe' : '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: !newComponent.trim() ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '8px'
                }}
              >
                <Plus size={16} /> Add Component
              </button>
              
              <div style={{
                maxHeight: '200px',
                overflowY: 'auto',
                marginTop: '12px'
              }}>
                {currentComponents.map(component => (
                  <div 
                    key={component.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {component.name}
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteComponent(component.id)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fee2e2',
                        color: '#ef4444',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '8px'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Groups Section */}
            <div style={{
              padding: '16px',
              borderBottom: '1px solid #f1f5f9'
            }}>
              <h3 style={{
                marginTop: '0',
                marginBottom: '12px',
                fontSize: '16px',
                color: '#1e293b'
              }}>Groups</h3>
              
              <div style={{ marginBottom: '12px' }}>
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Group name"
                  onKeyPress={(e) => e.key === 'Enter' && addGroup()}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <button 
                onClick={addGroup}
                disabled={!newGroupName.trim() || (selectedComponents.length === 0 && selectedGroups.length === 0)}
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  background: (!newGroupName.trim() || (selectedComponents.length === 0 && selectedGroups.length === 0)) ? '#ddd6fe' : '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: (!newGroupName.trim() || (selectedComponents.length === 0 && selectedGroups.length === 0)) ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Box size={16} /> Create Group
              </button>
              
              <div style={{
                marginTop: '12px',
                padding: '12px',
                background: '#f1f5f9',
                borderRadius: '6px',
                fontSize: '12px'
              }}>
                {(selectedComponents.length > 0 || selectedGroups.length > 0) ? (
                  <>
                    <div style={{ marginBottom: '8px', fontWeight: '500' }}>
                      {selectedComponents.length} component(s), {selectedGroups.length} group(s) selected
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedComponents([]);
                        setSelectedGroups([]);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer',
                        fontSize: '12px',
                        padding: '4px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      <Minus size={14} /> Clear Selection
                    </button>
                  </>
                ) : (
                  <div>No items selected</div>
                )}
                <div style={{
                  marginTop: '8px',
                  color: '#64748b',
                  fontStyle: 'italic'
                }}>
                  Hold Shift + Click to select multiple items
                </div>
              </div>
              
              <div style={{
                maxHeight: '200px',
                overflowY: 'auto',
                marginTop: '12px'
              }}>
                {currentGroups.map(group => (
                  <div 
                    key={group.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {group.name}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#64748b',
                        marginTop: '2px'
                      }}>
                        {group.componentIds ? group.componentIds.length : 0} components
                        {group.groupIds && group.groupIds.length > 0 && `, ${group.groupIds.length} groups`}
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteGroup(group.id)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fee2e2',
                        color: '#ef4444',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '8px'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Connections Section */}
            <div style={{
              padding: '16px',
              borderBottom: '1px solid #f1f5f9'
            }}>
              <h3 style={{
                marginTop: '0',
                marginBottom: '12px',
                fontSize: '16px',
                color: '#1e293b'
              }}>Connections</h3>
              
              <div style={{ marginBottom: '12px' }}>
                <input
                  type="text"
                  value={newConnection}
                  onChange={(e) => setNewConnection(e.target.value)}
                  placeholder="Connection label (optional)"
                  onKeyPress={(e) => e.key === 'Enter' && addConnection()}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#64748b'
                }}>From Component</label>
                <select 
                  value={fromComponent || ''}
                  onChange={(e) => setFromComponent(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">Select component</option>
                  {currentComponents.map(component => (
                    <option key={component.id} value={component.id}>{component.name}</option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#64748b'
                }}>To Component</label>
                <select 
                  value={toComponent || ''}
                  onChange={(e) => setToComponent(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">Select component</option>
                  {currentComponents.map(component => (
                    <option key={component.id} value={component.id}>{component.name}</option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#64748b'
                }}>Connection Type</label>
                <select 
                  value={connectionType}
                  onChange={(e) => setConnectionType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="solid">Solid Line</option>
                  <option value="dashed">Dashed Line</option>
                  <option value="dotted">Dotted Line</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#64748b'
                }}>Direction</label>
                <select 
                  value={connectionDirection}
                  onChange={(e) => setConnectionDirection(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="directed">Directed (with arrow)</option>
                  <option value="undirected">Undirected</option>
                </select>
              </div>
              
              <button 
                onClick={addConnection}
                disabled={!fromComponent || !toComponent}
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  background: (!fromComponent || !toComponent) ? '#ddd6fe' : '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: (!fromComponent || !toComponent) ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <GitMerge size={16} /> Add Connection
              </button>
              
              <div style={{
                maxHeight: '200px',
                overflowY: 'auto',
                marginTop: '12px'
              }}>
                {currentConnections.map(conn => {
                  const from = currentComponents.find(c => c.id === conn.from);
                  const to = currentComponents.find(c => c.id === conn.to);
                  
                  if (!from || !to) return null;
                  
                  return (
                    <div 
                      key={conn.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {from.name} → {to.name}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#64748b',
                          marginTop: '2px'
                        }}>
                          {conn.type}
                        </div>
                        {conn.label && (
                          <div style={{
                            fontSize: '12px',
                            color: '#64748b',
                            marginTop: '2px'
                          }}
                        >
                          {conn.label}
                        </div>
                        )}
                      </div>
                      <button 
                        onClick={() => deleteConnection(conn.id)}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#fee2e2',
                          color: '#ef4444',
                          border: 'none',
                          cursor: 'pointer',
                          marginLeft: '8px'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Canvas */}
          <div 
            ref={canvasContainerRef}
            style={{
              flex: 1,
              overflow: 'auto',
              position: 'relative',
              background: '#f8fafc'
            }}
          >
            <div 
              ref={canvasRef}
              onClick={handleCanvasClick}
              style={{
                position: 'absolute',
                width: `${canvasSize.width}px`,
                height: `${canvasSize.height}px`,
                background: 'white',
                backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
                backgroundSize: `${20}px ${20}px`,
                transform: `scale(${zoomLevel})`,
                transformOrigin: '0 0'
              }}
            >
              {/* Render groups first (behind components) */}
              {currentGroups.map(renderGroup)}
              
              {/* Render connections */}
              {currentConnections.map(renderConnection)}
              
              {/* Render components last (on top) */}
              {currentComponents.map(renderComponent)}
            </div>
          </div>
        </div>
      ) : (
        /* JSON Editor */
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '16px',
          background: 'white'
        }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '12px'
          }}>
            <button 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = handleFileUpload;
                input.click();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: '500',
                cursor: 'pointer',
                border: 'none',
                background: '#8b5cf6',
                color: 'white'
              }}
            >
              <Upload size={16} /> Import JSON File
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '14px',
              resize: 'none',
              marginBottom: '12px'
            }}
          />
          <button 
            onClick={importFromJson}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              border: 'none',
              background: '#8b5cf6',
              color: 'white',
              alignSelf: 'flex-start'
            }}
          >
            <Save size={16} /> Apply JSON
          </button>
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagramMaker;