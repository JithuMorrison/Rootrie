import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Save, Plus, Trash2, BookOpen, GitMerge, Download, Upload, Image, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';

const ClassDiagramMaker = ({ 
  classDiagram, 
  classes = [], 
  relationships = [],
  onUpdateClassDiagram,
  onBack 
}) => {
  const [newClassName, setNewClassName] = useState('');
  const [newAttribute, setNewAttribute] = useState('');
  const [newMethod, setNewMethod] = useState('');
  const [newRelationship, setNewRelationship] = useState('');
  const [fromClass, setFromClass] = useState('');
  const [toClass, setToClass] = useState('');
  const [relationshipType, setRelationshipType] = useState('association');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    setJsonInput(JSON.stringify({ classes, relationships }, null, 2));
  }, [classes, relationships]);

  const addClass = () => {
    if (!newClassName.trim()) return;
    
    const updatedClasses = [
      ...classes,
      {
        id: Date.now(),
        name: newClassName,
        attributes: [],
        methods: [],
        x: 50 + Math.random() * 200,
        y: 50 + Math.random() * 200,
        width: 180,
        height: 120,
        color: '#ec4899'
      }
    ];
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    setNewClassName('');
  };

  const addAttribute = (classId) => {
    if (!newAttribute.trim()) return;
    
    const updatedClasses = classes.map(cls => {
      if (cls.id === classId) {
        return {
          ...cls,
          attributes: [...cls.attributes, newAttribute]
        };
      }
      return cls;
    });
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    setNewAttribute('');
  };

  const addMethod = (classId) => {
    if (!newMethod.trim()) return;
    
    const updatedClasses = classes.map(cls => {
      if (cls.id === classId) {
        return {
          ...cls,
          methods: [...cls.methods, newMethod]
        };
      }
      return cls;
    });
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    setNewMethod('');
  };

  const addRelationship = () => {
    if (!fromClass || !toClass) return;
    
    const from = classes.find(c => c.id === parseInt(fromClass));
    const to = classes.find(c => c.id === parseInt(toClass));
    
    if (!from || !to) return;
    
    const updatedRelationships = [
      ...relationships,
      {
        id: Date.now(),
        from: from.id,
        to: to.id,
        type: relationshipType,
        label: newRelationship || ''
      }
    ];
    
    onUpdateClassDiagram({
      ...classDiagram,
      relationships: updatedRelationships
    });
    
    setNewRelationship('');
    setFromClass('');
    setToClass('');
  };

  const deleteClass = (classId) => {
    const updatedClasses = classes.filter(c => c.id !== classId);
    const updatedRelationships = relationships.filter(
      rel => !(rel.from === classId || rel.to === classId)
    );
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses,
      relationships: updatedRelationships
    });
  };

  const deleteAttribute = (classId, attributeIndex) => {
    const updatedClasses = classes.map(cls => {
      if (cls.id === classId) {
        return {
          ...cls,
          attributes: cls.attributes.filter((_, i) => i !== attributeIndex)
        };
      }
      return cls;
    });
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
  };

  const deleteMethod = (classId, methodIndex) => {
    const updatedClasses = classes.map(cls => {
      if (cls.id === classId) {
        return {
          ...cls,
          methods: cls.methods.filter((_, i) => i !== methodIndex)
        };
      }
      return cls;
    });
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
  };

  const deleteRelationship = (relationshipId) => {
    const updatedRelationships = relationships.filter(rel => rel.id !== relationshipId);
    onUpdateClassDiagram({
      ...classDiagram,
      relationships: updatedRelationships
    });
  };

  const handleMouseDown = (e, cls) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setDragItem(cls);
    setDragOffset({
      x: x - cls.x,
      y: y - cls.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragItem) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;
    
    const updatedClasses = classes.map(cls => 
      cls.id === dragItem.id ? { ...cls, x, y } : cls
    );
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
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
    const data = { classes, relationships };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.classes) && Array.isArray(data.relationships)) {
        onUpdateClassDiagram({
          ...classDiagram,
          classes: data.classes,
          relationships: data.relationships
        });
      } else {
        alert('Invalid JSON format. Expected classes and relationships arrays.');
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
      link.download = `${classDiagram.name || 'class-diagram'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  const renderClass = (cls) => {
    return (
      <div 
        key={cls.id}
        className="class-box"
        style={{
          left: `${cls.x}px`,
          top: `${cls.y}px`,
          width: `${cls.width}px`,
          height: `${cls.height}px`,
          backgroundColor: cls.color || '#ec4899',
          cursor: dragItem?.id === cls.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, cls)}
      >
        <div className="class-header">
          <div className="class-name">{cls.name}</div>
        </div>
        <div className="class-divider"></div>
        <div className="class-attributes">
          {cls.attributes.map((attr, i) => (
            <div key={i} className="class-item">
              <span>{attr}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  deleteAttribute(cls.id, i);
                }}
                className="item-delete-btn"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
          <div className="class-item-input">
            <input
              type="text"
              value={newAttribute}
              onChange={(e) => setNewAttribute(e.target.value)}
              placeholder="New attribute"
              onKeyPress={(e) => e.key === 'Enter' && addAttribute(cls.id)}
            />
          </div>
        </div>
        <div className="class-divider"></div>
        <div className="class-methods">
          {cls.methods.map((method, i) => (
            <div key={i} className="class-item">
              <span>{method}()</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  deleteMethod(cls.id, i);
                }}
                className="item-delete-btn"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
          <div className="class-item-input">
            <input
              type="text"
              value={newMethod}
              onChange={(e) => setNewMethod(e.target.value)}
              placeholder="New method"
              onKeyPress={(e) => e.key === 'Enter' && addMethod(cls.id)}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderRelationship = (relationship) => {
    const from = classes.find(c => c.id === relationship.from);
    const to = classes.find(c => c.id === relationship.to);
    
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

    // Style based on relationship type
    let lineStyle = {};
    if (relationship.type === 'inheritance') {
      lineStyle = { stroke: '#8b5cf6' };
    } else if (relationship.type === 'composition') {
      lineStyle = { stroke: '#ec4899', strokeDasharray: '5,5' };
    } else if (relationship.type === 'aggregation') {
      lineStyle = { stroke: '#10b981' };
    } else {
      lineStyle = { stroke: '#64748b' };
    }

    return (
      <svg key={relationship.id} className="relationship">
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
          fill={lineStyle.stroke || '#64748b'}
        />
        {/* Relationship label */}
        {relationship.label && (
          <text
            x={(fromX + toX) / 2}
            y={(fromY + toY) / 2 - 10}
            textAnchor="middle"
            fontSize="12"
            fill={lineStyle.stroke || '#64748b'}
          >
            {relationship.label}
          </text>
        )}
      </svg>
    );
  };

  return (
    <div className="class-diagram-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{classDiagram.name}</h2>
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
              a.download = `${classDiagram.name || 'class-diagram'}.json`;
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
              <h3>Classes</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="New class name"
                  onKeyPress={(e) => e.key === 'Enter' && addClass()}
                />
                <button onClick={addClass} className="add-btn">
                  <Plus size={16} /> Add Class
                </button>
              </div>
              <div className="class-list">
                {classes.map(cls => (
                  <div key={cls.id} className="list-item">
                    <div className="item-name">{cls.name}</div>
                    <button 
                      onClick={() => deleteClass(cls.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Relationships</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newRelationship}
                  onChange={(e) => setNewRelationship(e.target.value)}
                  placeholder="Relationship label (optional)"
                  onKeyPress={(e) => e.key === 'Enter' && addRelationship()}
                />
              </div>
              <div className="form-group">
                <label>From Class</label>
                <select 
                  value={fromClass || ''}
                  onChange={(e) => setFromClass(e.target.value)}
                >
                  <option value="">Select class</option>
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>To Class</label>
                <select 
                  value={toClass || ''}
                  onChange={(e) => setToClass(e.target.value)}
                >
                  <option value="">Select class</option>
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Relationship Type</label>
                <select 
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                >
                  <option value="association">Association</option>
                  <option value="inheritance">Inheritance</option>
                  <option value="composition">Composition</option>
                  <option value="aggregation">Aggregation</option>
                </select>
              </div>
              <button 
                onClick={addRelationship}
                disabled={!fromClass || !toClass}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Relationship
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Current Relationships</h3>
              <div className="relationship-list">
                {relationships.map(rel => {
                  const from = classes.find(c => c.id === rel.from);
                  const to = classes.find(c => c.id === rel.to);
                  
                  if (!from || !to) return null;
                  
                  return (
                    <div key={rel.id} className="list-item">
                      <div className="item-name">
                        {from.name} → {to.name} ({rel.type})
                      </div>
                      {rel.label && <div className="item-label">{rel.label}</div>}
                      <button 
                        onClick={() => deleteRelationship(rel.id)}
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
            {relationships.map(renderRelationship)}
            {classes.map(renderClass)}
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
        .class-diagram-maker {
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
          background: #ec4899;
          color: white;
          border: 1px solid #ec4899;
        }
        
        .export-btn:hover {
          background: #db2777;
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
          color: #ec4899;
          border-bottom-color: #ec4899;
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
          border-color: #ec4899;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #ec4899;
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
          background: #db2777;
        }
        
        .add-btn:disabled {
          background: #fbcfe8;
          cursor: not-allowed;
        }
        
        .class-list,
        .relationship-list {
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
        
        .class-box {
          position: absolute;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          color: white;
          font-weight: 500;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .class-header {
          padding: 8px;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .class-name {
          font-weight: 600;
        }
        
        .class-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .class-attributes,
        .class-methods {
          flex: 1;
          padding: 4px;
          overflow-y: auto;
        }
        
        .class-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px;
          font-size: 12px;
        }
        
        .class-item-input {
          padding: 4px;
        }
        
        .class-item-input input {
          width: 100%;
          padding: 4px;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          color: white;
        }
        
        .class-item-input input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .item-delete-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.7;
        }
        
        .item-delete-btn:hover {
          opacity: 1;
        }
        
        .relationship {
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
          background: #ec4899;
          color: white;
        }
        
        .import-btn:hover {
          background: #db2777;
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

export default ClassDiagramMaker;