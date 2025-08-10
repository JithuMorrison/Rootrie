import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Layers, GitMerge, Download, Upload, Image, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';

const ArchitectureDiagramMaker = ({ 
  architectureDiagram, 
  components = [], 
  connections = [],
  onUpdateArchitectureDiagram,
  onBack 
}) => {
  const [newComponent, setNewComponent] = useState('');
  const [newConnection, setNewConnection] = useState('');
  const [fromComponent, setFromComponent] = useState('');
  const [toComponent, setToComponent] = useState('');
  const [connectionType, setConnectionType] = useState('association');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    setJsonInput(JSON.stringify({ components, connections }, null, 2));
  }, [components, connections]);

  const addComponent = () => {
    if (!newComponent.trim()) return;
    
    const updatedComponents = [
      ...components,
      {
        id: Date.now(),
        name: newComponent,
        type: 'component',
        x: 50 + Math.random() * 200,
        y: 50 + Math.random() * 200,
        width: 120,
        height: 80,
        color: '#8b5cf6'
      }
    ];
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents
    });
    
    setNewComponent('');
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
        label: newConnection || ''
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
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents,
      connections: updatedConnections
    });
  };

  const deleteConnection = (connectionId) => {
    const updatedConnections = connections.filter(conn => conn.id !== connectionId);
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      connections: updatedConnections
    });
  };

  const handleMouseDown = (e, component) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setDragItem(component);
    setDragOffset({
      x: x - component.x,
      y: y - component.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragItem) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;
    
    const updatedComponents = components.map(comp => 
      comp.id === dragItem.id ? { ...comp, x, y } : comp
    );
    
    onUpdateArchitectureDiagram({
      ...architectureDiagram,
      components: updatedComponents
    });
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

  const exportToJson = () => {
    const data = { components, connections };
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
          components: data.components,
          connections: data.connections
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

  const exportToImage = () => {
    if (!canvasRef.current) return;
    
    html2canvas(canvasRef.current, {
      backgroundColor: '#f8fafc',
      scale: 2
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `${architectureDiagram.name || 'architecture-diagram'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  const renderComponent = (component) => {
    return (
      <div 
        key={component.id}
        className="component"
        style={{
          left: `${component.x}px`,
          top: `${component.y}px`,
          width: `${component.width}px`,
          height: `${component.height}px`,
          backgroundColor: component.color || '#8b5cf6',
          cursor: dragItem?.id === component.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, component)}
      >
        <div className="component-name">{component.name}</div>
        <div className="component-type">{component.type}</div>
      </div>
    );
  };

  const renderConnection = (connection) => {
    const from = components.find(c => c.id === connection.from);
    const to = components.find(c => c.id === connection.to);
    
    if (!from || !to) return null;

    const fromX = from.x + from.width / 2;
    const fromY = from.y + from.height / 2;
    const toX = to.x + to.width / 2;
    const toY = to.y + to.height / 2;

    // Calculate arrow direction
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    const headLength = 10;

    // Style based on connection type
    let lineStyle = {};
    if (connection.type === 'dependency') {
      lineStyle = { strokeDasharray: '5,5', stroke: '#64748b' };
    } else if (connection.type === 'inheritance') {
      lineStyle = { stroke: '#8b5cf6' };
    } else {
      lineStyle = { stroke: '#475569' };
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
        {/* Arrowhead */}
        <polygon
          points={`
            ${toX - headLength * Math.cos(angle - Math.PI / 6)},${toY - headLength * Math.sin(angle - Math.PI / 6)}
            ${toX},${toY}
            ${toX - headLength * Math.cos(angle + Math.PI / 6)},${toY - headLength * Math.sin(angle + Math.PI / 6)}
          `}
          fill={lineStyle.stroke || '#475569'}
        />
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
                  placeholder="New component name"
                  onKeyPress={(e) => e.key === 'Enter' && addComponent()}
                />
                <button onClick={addComponent} className="add-btn">
                  <Plus size={16} /> Add Component
                </button>
              </div>
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
                  <option value="association">Association</option>
                  <option value="dependency">Dependency</option>
                  <option value="inheritance">Inheritance</option>
                </select>
              </div>
              <button 
                onClick={addConnection}
                disabled={!fromComponent || !toComponent}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Connection
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Current Connections</h3>
              <div className="connection-list">
                {connections.map(conn => {
                  const from = components.find(c => c.id === conn.from);
                  const to = components.find(c => c.id === conn.to);
                  
                  if (!from || !to) return null;
                  
                  return (
                    <div key={conn.id} className="list-item">
                      <div className="item-name">
                        {from.name} → {to.name} ({conn.type})
                      </div>
                      {conn.label && <div className="item-label">{conn.label}</div>}
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
          
          <div className="diagram-canvas" ref={canvasRef}>
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
          width: 300px;
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
        .form-group select {
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
        .connection-list {
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
        
        .item-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: auto;
        }
        
        .component {
          position: absolute;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 500;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .component-name {
          font-size: 14px;
          margin-bottom: 4px;
        }
        
        .component-type {
          font-size: 10px;
          opacity: 0.8;
        }
        
        .connection {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
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