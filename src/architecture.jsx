import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Save, Plus, Trash2, Layers, GitMerge, 
  Download, Upload, Image as ImageIcon, Copy, 
  Server, Database, Cpu, HardDrive, Network, Cloud, 
  Router, Smartphone, Globe, Shield, Users, Box, Minus, Maximize2
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
  { id: 'custom', name: 'Custom', icon: <Plus size={20} />, color: '#64748b' }
];

const ArchitectureDiagramMaker = ({ 
  architectureDiagram, 
  components = [], 
  connections = [],
  groups = [],
  onUpdateArchitectureDiagram,
  onBack 
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
  const [selectedType, setSelectedType] = useState('service');
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageSource, setImageSource] = useState('file'); // 'file' or 'url'
  const [editingComponent, setEditingComponent] = useState(null);
  const [editText, setEditText] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    setJsonInput(JSON.stringify({ components, connections, groups }, null, 2));
  }, [components, connections, groups]);

  const addComponent = () => {
    if (!newComponent.trim()) return;
    
    const typeConfig = componentTypes.find(t => t.id === selectedType) || componentTypes[0];
    
    const updatedComponents = [
      ...components,
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
      components: updatedComponents
    });
    
    setNewComponent('');
    setImageUrl('');
    setShowImageUpload(false);
  };

  const addGroup = () => {
    if (!newGroupName.trim()) return;
    
    const allSelectedItems = [...selectedComponents, ...selectedGroups];
    if (allSelectedItems.length === 0) return;
    
    // Calculate group dimensions based on selected components and groups
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    selectedComponents.forEach(comp => {
      minX = Math.min(minX, comp.x);
      maxX = Math.max(maxX, comp.x + comp.width);
      minY = Math.min(minY, comp.y);
      maxY = Math.max(maxY, comp.y + comp.height);
    });
    
    selectedGroups.forEach(group => {
      minX = Math.min(minX, group.x);
      maxX = Math.max(maxX, group.x + group.width);
      minY = Math.min(minY, group.y);
      maxY = Math.max(maxY, group.y + group.height);
    });
    
    const padding = 30;
    
    const updatedGroups = [
      ...groups,
      {
        id: Date.now(),
        name: newGroupName,
        componentIds: selectedComponents.map(c => c.id),
        groupIds: selectedGroups.map(g => g.id),
        x: minX - padding,
        y: minY - padding,
        width: (maxX - minX) + padding * 2,
        height: (maxY - minY) + padding * 2,
        color: '#e2e8f0'
      }
    ];
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      groups: updatedGroups
    });
    
    setNewGroupName('');
    setSelectedComponents([]);
    setSelectedGroups([]);
  };

  const addConnection = () => {
    if (!fromComponent || !toComponent) return;
    
    const from = components.find(c => c.id === parseInt(fromComponent));
    const to = components.find(c => c.id === parseInt(toComponent));
    
    if (!from || !to) return;
    
    const updatedConnections = [
      ...connections,
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
      connections: updatedConnections
    });
    
    setNewConnection('');
    setFromComponent('');
    setToComponent('');
  };

  const deleteComponent = (componentId) => {
    const updatedComponents = components.filter(c => c.id !== componentId);
    const updatedConnections = connections.filter(
      conn => !(conn.from === componentId || conn.to === componentId)
    );
    const updatedGroups = groups.map(group => ({
      ...group,
      componentIds: group.componentIds.filter(id => id !== componentId)
    })).filter(group => group.componentIds.length > 0 || group.groupIds.length > 0);
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents,
      connections: updatedConnections,
      groups: updatedGroups
    });
  };

  const deleteConnection = (connectionId) => {
    const updatedConnections = connections.filter(conn => conn.id !== connectionId);
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      connections: updatedConnections
    });
  };

  const deleteGroup = (groupId) => {
    const updatedGroups = groups.filter(g => g.id !== groupId);
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      groups: updatedGroups
    });
  };

  const handleMouseDown = (e, item, isGroup = false) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setDragItem({ ...item, isGroup });
    setDragOffset({
      x: x - item.x,
      y: y - item.y
    });
    
    // If not holding shift, clear selection
    if (!e.shiftKey) {
      setSelectedComponents([]);
      setSelectedGroups([]);
    }
  };

  const handleComponentClick = (e, component) => {
    if (e.shiftKey) {
      setSelectedComponents(prev => {
        const exists = prev.some(c => c.id === component.id);
        return exists 
          ? prev.filter(c => c.id !== component.id)
          : [...prev, component];
      });
    }
  };

  const handleGroupClick = (e, group) => {
    if (e.shiftKey) {
      setSelectedGroups(prev => {
        const exists = prev.some(g => g.id === group.id);
        return exists 
          ? prev.filter(g => g.id !== group.id)
          : [...prev, group];
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!dragItem) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;
    
    if (dragItem.isGroup) {
      // Move group and all its components and nested groups
      const dx = x - dragItem.x;
      const dy = y - dragItem.y;
      
      const updatedComponents = components.map(comp => {
        if (dragItem.componentIds.includes(comp.id)) {
          return { ...comp, x: comp.x + dx, y: comp.y + dy };
        }
        return comp;
      });
      
      const updatedGroups = groups.map(group => {
        if (group.id === dragItem.id) {
          return { ...group, x, y };
        } else if (dragItem.groupIds && dragItem.groupIds.includes(group.id)) {
          return { ...group, x: group.x + dx, y: group.y + dy };
        }
        return group;
      });
      
      onUpdateArchitectureDiagram({
        ...architectureDiagram,
        components: updatedComponents,
        groups: updatedGroups
      });
    } else {
      // Move single component
      const updatedComponents = components.map(comp => 
        comp.id === dragItem.id ? { ...comp, x, y } : comp
      );
      
      onUpdateArchitectureDiagram({
        ...architectureDiagram,
        components: updatedComponents
      });
    }
  };

  const handleMouseUp = () => {
    setDragItem(null);
  };

  useEffect(() => {
    if (dragItem) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, handleMouseMove]);

  const startEditing = (component) => {
    setEditingComponent(component.id);
    setEditText(component.name);
  };

  const saveEditing = () => {
    if (!editingComponent || !editText.trim()) return;
    
    const updatedComponents = components.map(comp => 
      comp.id === editingComponent ? { ...comp, name: editText } : comp
    );
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents
    });
    
    setEditingComponent(null);
    setEditText('');
  };

  const exportToJson = () => {
    const data = { components, connections, groups };
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

  const exportToImage = () => {
    // Since html2canvas is not available, we'll create a download link with SVG content
    const data = { components, connections, groups };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${architectureDiagram.name || 'architecture-diagram'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          left: `${component.x}px`,
          top: `${component.y}px`,
          width: `${component.width}px`,
          height: `${component.height}px`,
          cursor: dragItem?.id === component.id ? 'grabbing' : 'grab',
          outline: isSelected ? '3px dashed #3b82f6' : 'none',
          outlineOffset: '2px',
          zIndex: 10
        }}
        onMouseDown={(e) => handleMouseDown(e, component)}
        onClick={(e) => handleComponentClick(e, component)}
        onDoubleClick={() => startEditing(component)}
      >
        <div className="component-image-container">
          {component.imageUrl ? (
            <img 
              src={component.imageUrl} 
              alt={component.name}
              className="component-image"
            />
          ) : (
            <div 
              className="component-icon"
              style={{ color: component.color || typeConfig.color }}
            >
              {React.cloneElement(typeConfig.icon, { size: 48 })}
            </div>
          )}
        </div>
        
        <div 
          className="component-text"
          style={{ backgroundColor: component.color || typeConfig.color }}
        >
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={saveEditing}
              onKeyPress={(e) => e.key === 'Enter' && saveEditing()}
              autoFocus
              className="component-edit-input"
            />
          ) : (
            <>
              <div className="component-name">{component.name}</div>
              <div className="component-type">{typeConfig.name}</div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderGroup = (group) => {
    const groupComponents = components.filter(c => group.componentIds.includes(c.id));
    const nestedGroups = groups.filter(g => group.groupIds && group.groupIds.includes(g.id));
    
    if (groupComponents.length === 0 && nestedGroups.length === 0) return null;

    const isSelected = selectedGroups.some(g => g.id === group.id);

    return (
      <div 
        key={group.id}
        className="group"
        style={{
          left: `${group.x}px`,
          top: `${group.y}px`,
          width: `${group.width}px`,
          height: `${group.height}px`,
          backgroundColor: group.color,
          cursor: dragItem?.id === group.id ? 'grabbing' : 'grab',
          outline: isSelected ? '3px dashed #8b5cf6' : 'none',
          outlineOffset: '2px',
          zIndex: 5
        }}
        onMouseDown={(e) => handleMouseDown(e, group, true)}
        onClick={(e) => handleGroupClick(e, group)}
      >
        <div className="group-header">
          {group.name}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              deleteGroup(group.id);
            }}
            className="group-delete-btn"
          >
            <Trash2 size={14} />
          </button>
        </div>
        <div className="group-caption">
          {groupComponents.length} components{nestedGroups.length > 0 && `, ${nestedGroups.length} groups`}
        </div>
      </div>
    );
  };

  const renderConnection = (connection) => {
    const from = components.find(c => c.id === connection.from);
    const to = components.find(c => c.id === connection.to);
    
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
      <svg key={connection.id} className="connection">
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
    <div className="architecture-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{architectureDiagram.name}</h2>
        <div className="spacer"></div>
        <div className="export-buttons">
          <button onClick={exportToImage} className="export-btn">
            <ImageIcon size={16} /> Export Image
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
              a.download = `${architectureDiagram.name || 'architecture-diagram'}.json`;
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
          Diagram Editor
        </button>
        <button 
          className={`tab ${activeTab === 'json' ? 'active' : ''}`}
          onClick={() => setActiveTab('json')}
        >
          JSON Editor
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div className="diagram-container">
          <div className="diagram-sidebar">
            <div className="sidebar-section">
              <h3>Components</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newComponent}
                  onChange={(e) => setNewComponent(e.target.value)}
                  placeholder="Component name"
                  onKeyPress={(e) => e.key === 'Enter' && addComponent()}
                />
              </div>
              
              <div className="form-group">
                <label>Component Type</label>
                <div className="component-type-grid">
                  {componentTypes.map(type => (
                    <button
                      key={type.id}
                      className={`type-btn ${selectedType === type.id ? 'active' : ''}`}
                      onClick={() => setSelectedType(type.id)}
                      style={{ backgroundColor: type.color }}
                      title={type.name}
                    >
                      {type.icon}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <button 
                  onClick={() => setShowImageUpload(!showImageUpload)}
                  className="image-upload-btn"
                >
                  <ImageIcon size={16} /> {imageUrl ? 'Change Image' : 'Add Image (Optional)'}
                </button>
                
                {showImageUpload && (
                  <div className="image-upload-container">
                    <div className="image-source-tabs">
                      <button
                        className={`source-tab ${imageSource === 'file' ? 'active' : ''}`}
                        onClick={() => setImageSource('file')}
                      >
                        Upload File
                      </button>
                      <button
                        className={`source-tab ${imageSource === 'url' ? 'active' : ''}`}
                        onClick={() => setImageSource('url')}
                      >
                        URL
                      </button>
                    </div>
                    
                    {imageSource === 'file' ? (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="image-upload-input"
                      />
                    ) : (
                      <input
                        type="text"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                        placeholder="Enter image URL"
                        className="image-url-input"
                      />
                    )}
                    
                    {imageUrl && (
                      <div className="image-preview">
                        <img src={imageUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '60px' }} />
                        <button 
                          onClick={() => setImageUrl('')}
                          className="remove-image-btn"
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
                className="add-btn"
              >
                <Plus size={16} /> Add Component
              </button>
              
              <div className="component-list">
                {components.map(component => (
                  <div key={component.id} className="list-item">
                    <div className="item-name">{component.name}</div>
                    <button 
                      onClick={() => deleteComponent(component.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Groups</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Group name"
                  onKeyPress={(e) => e.key === 'Enter' && addGroup()}
                />
              </div>
              
              <button 
                onClick={addGroup}
                disabled={!newGroupName.trim() || (selectedComponents.length === 0 && selectedGroups.length === 0)}
                className="add-btn"
              >
                <Box size={16} /> Create Group
              </button>
              
              <div className="selected-info">
                {(selectedComponents.length > 0 || selectedGroups.length > 0) && (
                  <>
                    <div className="selected-count">
                      {selectedComponents.length} component(s), {selectedGroups.length} group(s) selected
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedComponents([]);
                        setSelectedGroups([]);
                      }}
                      className="clear-selection-btn"
                    >
                      <Minus size={14} /> Clear
                    </button>
                  </>
                )}
                <div className="selection-hint">
                  Hold Shift + Click to select multiple items
                </div>
              </div>
              
              <div className="group-list">
                {groups.map(group => (
                  <div key={group.id} className="list-item">
                    <div className="item-details">
                      <div className="item-name">{group.name}</div>
                      <div className="item-count">
                        {group.componentIds.length} components
                        {group.groupIds && group.groupIds.length > 0 && `, ${group.groupIds.length} groups`}
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteGroup(group.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Connections</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newConnection}
                  onChange={(e) => setNewConnection(e.target.value)}
                  placeholder="Connection label (optional)"
                  onKeyPress={(e) => e.key === 'Enter' && addConnection()}
                />
              </div>
              
              <div className="form-group">
                <label>From Component</label>
                <select 
                  value={fromComponent || ''}
                  onChange={(e) => setFromComponent(e.target.value)}
                >
                  <option value="">Select component</option>
                  {components.map(component => (
                    <option key={component.id} value={component.id}>{component.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>To Component</label>
                <select 
                  value={toComponent || ''}
                  onChange={(e) => setToComponent(e.target.value)}
                >
                  <option value="">Select component</option>
                  {components.map(component => (
                    <option key={component.id} value={component.id}>{component.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Connection Type</label>
                <select 
                  value={connectionType}
                  onChange={(e) => setConnectionType(e.target.value)}
                >
                  <option value="solid">Solid Line</option>
                  <option value="dashed">Dashed Line</option>
                  <option value="dotted">Dotted Line</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Direction</label>
                <select 
                  value={connectionDirection}
                  onChange={(e) => setConnectionDirection(e.target.value)}
                >
                  <option value="directed">Directed (with arrow)</option>
                  <option value="undirected">Undirected</option>
                </select>
              </div>
              
              <button 
                onClick={addConnection}
                disabled={!fromComponent || !toComponent}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Connection
              </button>
              
              <div className="connection-list">
                {connections.map(conn => {
                  const from = components.find(c => c.id === conn.from);
                  const to = components.find(c => c.id === conn.to);
                  
                  if (!from || !to) return null;
                  
                  return (
                    <div key={conn.id} className="list-item">
                      <div className="item-details">
                        <div className="item-name">
                          {from.name} → {to.name}
                        </div>
                        <div className="item-count">{conn.type}</div>
                        {conn.label && <div className="item-label">{conn.label}</div>}
                      </div>
                      <button 
                        onClick={() => deleteConnection(conn.id)}
                        className="delete-btn"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div 
            className="diagram-canvas" 
            ref={canvasRef}
            style={{ backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          >
            {groups.map(renderGroup)}
            {connections.map(renderConnection)}
            {components.map(renderComponent)}
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
        .architecture-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
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
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #8b5cf6;
          color: white;
          border: 1px solid #8b5cf6;
        }
        
        .export-btn:hover {
          background: #7c3aed;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #8b5cf6;
          border-bottom-color: #8b5cf6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 320px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #8b5cf6;
        }
        
        .component-type-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 8px;
        }
        
        .type-btn {
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          color: white;
          transition: all 0.2s;
        }
        
        .type-btn:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }
        
        .type-btn.active {
          outline: 2px solid #1e293b;
          outline-offset: 2px;
        }
        
        .image-upload-btn {
          width: 100%;
          padding: 8px;
          background: #e2e8f0;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .image-upload-btn:hover {
          background: #cbd5e1;
        }
        
        .image-upload-container {
          margin-top: 8px;
        }
        
        .image-source-tabs {
          display: flex;
          margin-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .source-tab {
          flex: 1;
          padding: 6px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 12px;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .source-tab.active {
          color: #8b5cf6;
          border-bottom-color: #8b5cf6;
        }
        
        .image-upload-input,
        .image-url-input {
          width: 100%;
          margin-bottom: 8px;
        }
        
        .image-preview {
          position: relative;
          margin-top: 8px;
          display: flex;
          justify-content: center;
        }
        
        .remove-image-btn {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #8b5cf6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .add-btn:hover {
          background: #7c3aed;
        }
        
        .add-btn:disabled {
          background: #ddd6fe;
          cursor: not-allowed;
        }
        
        .component-list,
        .connection-list,
        .group-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-count {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .item-label {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          margin-left: 8px;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .selected-info {
          margin-top: 12px;
          padding: 12px;
          background: #f1f5f9;
          border-radius: 6px;
          font-size: 12px;
        }
        
        .selected-count {
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .selection-hint {
          margin-top: 8px;
          color: #64748b;
          font-style: italic;
        }
        
        .clear-selection-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        .clear-selection-btn:hover {
          background: #e2e8f0;
        }
        
        .diagram-canvas {
          flex: 1;
          background: white;
          position: relative;
          overflow: auto;
        }
        
        .component {
          position: absolute;
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          box-sizing: border-box;
          text-align: center;
          font-size: 12px;
          overflow: hidden;
          border: 2px solid #e2e8f0;
        }
        
        .component:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
          transition: all 0.2s ease;
        }
        
        .component-image-container {
          width: 100%;
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f8fafc;
          border-radius: 10px 10px 0 0;
        }
        
        .component-image {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          border-radius: 6px;
        }
        
        .component-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        
        .component-text {
          width: 100%;
          height: 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 6px 8px;
          color: white;
          font-weight: 600;
          border-radius: 0 0 10px 10px;
          position: relative;
        }
        
        .component-name {
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 2px;
          word-break: break-word;
          max-width: 100%;
        }
        
        .component-type {
          font-size: 9px;
          opacity: 0.9;
          font-weight: 500;
        }
        
        .component-edit-input {
          width: 100%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-align: center;
          font-weight: 600;
          outline: none;
          font-size: 11px;
        }
        
        .group {
          position: absolute;
          border-radius: 12px;
          border: 2px dashed #94a3b8;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding-top: 40px;
          box-sizing: border-box;
          background: rgba(226, 232, 240, 0.3);
        }
        
        .group:hover {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          transition: all 0.2s ease;
        }
        
        .group-header {
          position: absolute;
          top: 8px;
          left: 12px;
          right: 12px;
          font-weight: 700;
          font-size: 14px;
          color: #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .group-caption {
          position: absolute;
          bottom: 8px;
          left: 12px;
          font-size: 11px;
          color: #64748b;
          font-style: italic;
        }
        
        .group-delete-btn {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .group-delete-btn:hover {
          background: rgba(239, 68, 68, 0.2);
        }
        
        .connection {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
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
          background: #8b5cf6;
          color: white;
        }
        
        .import-btn:hover {
          background: #7c3aed;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
};

export default ArchitectureDiagramMaker;