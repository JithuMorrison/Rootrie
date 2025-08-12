import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  Trash2, 
  GitMerge, 
  Download, 
  Upload, 
  Image, 
  Copy,
  ChevronDown,
  ChevronRight,
  X
} from 'lucide-react';

const ClassDiagramMaker = ({ 
  classDiagram, 
  classes = [], 
  relationships = [],
  onUpdateClassDiagram,
  onBack
}) => {
  const [newClassName, setNewClassName] = useState('');
  const [newRelationship, setNewRelationship] = useState('');
  const [fromClass, setFromClass] = useState('');
  const [toClass, setToClass] = useState('');
  const [relationshipType, setRelationshipType] = useState('association');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizingItem, setResizingItem] = useState(null);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const [editingItem, setEditingItem] = useState(null);
  const [editType, setEditType] = useState(''); // 'attribute' or 'method'
  const [editIndex, setEditIndex] = useState(-1); // -1 for new item
  const [newAttribute, setNewAttribute] = useState({ visibility: '+', name: '', type: 'String' });
  const [newMethod, setNewMethod] = useState({ visibility: '+', name: '', returnType: 'void' });
  const canvasRef = useRef(null);

  // Beautiful color schemes for class headers and borders
  const colorSchemes = [
    { header: '#3B82F6', border: '#1D4ED8', background: '#EFF6FF' }, // Blue
    { header: '#10B981', border: '#047857', background: '#ECFDF5' }, // Green
    { header: '#F59E0B', border: '#B45309', background: '#FFFBEB' }, // Amber
    { header: '#EF4444', border: '#B91C1C', background: '#FEF2F2' }, // Red
    { header: '#8B5CF6', border: '#6D28D9', background: '#F5F3FF' }, // Violet
    { header: '#EC4899', border: '#BE185D', background: '#FDF2F8' }, // Pink
    { header: '#14B8A6', border: '#0D9488', background: '#F0FDFA' }, // Teal
    { header: '#F97316', border: '#C2410C', background: '#FFF7ED' }, // Orange
  ];

  // Common data types for dropdowns
  const dataTypes = ['String', 'int', 'float', 'double', 'boolean', 'void', 'char', 'long', 'short', 'byte'];
  const visibilityOptions = [
    { value: '+', label: 'Public (+)' },
    { value: '-', label: 'Private (-)' },
    { value: '#', label: 'Protected (#)' },
    { value: '~', label: 'Package (~)' }
  ];

  useEffect(() => {
    setJsonInput(JSON.stringify({ classes, relationships }, null, 2));
  }, [classes, relationships]);

  const getRandomColorScheme = () => {
    return colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
  };

  const calculateTextWidth = (text, fontSize = '12px', fontFamily = "'SF Mono', monospace") => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${fontSize} ${fontFamily}`;
    return context.measureText(text).width;
  };

  const calculateClassDimensions = (cls) => {
    // Calculate required width based on content
    const minWidth = 180;
    const padding = 32; // 16px on each side
    const charWidth = 8; // Approximate width per character
    
    // Calculate width based on class name
    const classNameWidth = calculateTextWidth(cls.name, '16px', "'Inter', sans-serif") + padding;
    
    // Calculate width based on attributes
    let maxAttributeWidth = 0;
    cls.attributes.forEach(attr => {
      const attrText = `${attr.visibility} ${attr.name} : ${attr.type}`;
      const width = calculateTextWidth(attrText) + padding;
      if (width > maxAttributeWidth) maxAttributeWidth = width;
    });
    
    // Calculate width based on methods
    let maxMethodWidth = 0;
    cls.methods.forEach(method => {
      const methodText = `${method.visibility} ${method.name} : ${method.returnType}`;
      const width = calculateTextWidth(methodText) + padding;
      if (width > maxMethodWidth) maxMethodWidth = width;
    });
    
    // Determine the maximum width needed
    const calculatedWidth = Math.max(
      minWidth, 
      classNameWidth, 
      maxAttributeWidth, 
      maxMethodWidth
    );
    
    // Calculate height based on content
    const headerHeight = 40;
    const sectionTitleHeight = 28;
    const itemHeight = 22;
    const sectionPadding = 12;
    
    const attributesHeight = cls.attributes.length > 0 
      ? sectionTitleHeight + (cls.attributes.length * itemHeight) + sectionPadding
      : sectionTitleHeight + 24 + sectionPadding; // Empty section height
      
    const methodsHeight = cls.methods.length > 0
      ? sectionTitleHeight + (cls.methods.length * itemHeight) + sectionPadding
      : sectionTitleHeight + 24 + sectionPadding; // Empty section height
    
    const calculatedHeight = headerHeight + attributesHeight + methodsHeight;
    
    return {
      width: Math.min(calculatedWidth, 400), // Cap at 400px to prevent too wide
      height: calculatedHeight
    };
  };

  const addClass = () => {
    if (!newClassName.trim()) return;
    
    const colorScheme = getRandomColorScheme();
    const dimensions = calculateClassDimensions({
      name: newClassName,
      attributes: [],
      methods: []
    });
    
    const updatedClasses = [
      ...classes,
      {
        id: Date.now(),
        name: newClassName,
        attributes: [],
        methods: [],
        x: 50 + Math.random() * 200,
        y: 50 + Math.random() * 200,
        width: dimensions.width,
        height: dimensions.height,
        colorScheme
      }
    ];
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    setNewClassName('');
  };

  const openClassEditor = (classId) => {
    const cls = classes.find(c => c.id === classId);
    if (!cls) return;
    
    setEditingItem(cls);
  };

  const openAttributeEditor = (classId, index = -1) => {
    const cls = classes.find(c => c.id === classId);
    if (!cls) return;
    
    setEditType('attribute');
    setEditIndex(index);
    
    if (index >= 0) {
      setNewAttribute({ ...cls.attributes[index] });
    } else {
      setNewAttribute({ visibility: '+', name: '', type: 'String' });
    }
  };

  const openMethodEditor = (classId, index = -1) => {
    const cls = classes.find(c => c.id === classId);
    if (!cls) return;
    
    setEditType('method');
    setEditIndex(index);
    
    if (index >= 0) {
      setNewMethod({ ...cls.methods[index] });
    } else {
      setNewMethod({ visibility: '+', name: '', returnType: 'void' });
    }
  };

  const saveAttribute = () => {
    if (!newAttribute.name.trim()) return;
    
    const updatedClasses = classes.map(cls => {
      if (cls.id === editingItem.id) {
        const newAttributes = [...cls.attributes];
        if (editIndex >= 0) {
          newAttributes[editIndex] = { ...newAttribute };
        } else {
          newAttributes.push({ ...newAttribute });
        }
        
        // Recalculate dimensions after adding attribute
        const updatedClass = {
          ...cls,
          attributes: newAttributes
        };
        const dimensions = calculateClassDimensions(updatedClass);
        
        return {
          ...updatedClass,
          width: dimensions.width,
          height: dimensions.height
        };
      }
      return cls;
    });
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    closeEditor();
  };

  const saveMethod = () => {
    if (!newMethod.name.trim()) return;
    
    // Ensure method name ends with ()
    let methodName = newMethod.name;
    if (!methodName.includes('(')) {
      methodName += '()';
    }
    
    const updatedClasses = classes.map(cls => {
      if (cls.id === editingItem.id) {
        const newMethods = [...cls.methods];
        if (editIndex >= 0) {
          newMethods[editIndex] = { ...newMethod, name: methodName };
        } else {
          newMethods.push({ ...newMethod, name: methodName });
        }
        
        // Recalculate dimensions after adding method
        const updatedClass = {
          ...cls,
          methods: newMethods
        };
        const dimensions = calculateClassDimensions(updatedClass);
        
        return {
          ...updatedClass,
          width: dimensions.width,
          height: dimensions.height
        };
      }
      return cls;
    });
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    closeEditor();
  };

  const closeEditor = () => {
    setEditingItem(null);
    setEditType('');
    setEditIndex(-1);
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
        const newAttributes = cls.attributes.filter((_, i) => i !== attributeIndex);
        const updatedClass = {
          ...cls,
          attributes: newAttributes
        };
        const dimensions = calculateClassDimensions(updatedClass);
        
        return {
          ...updatedClass,
          width: dimensions.width,
          height: dimensions.height
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
        const newMethods = cls.methods.filter((_, i) => i !== methodIndex);
        const updatedClass = {
          ...cls,
          methods: newMethods
        };
        const dimensions = calculateClassDimensions(updatedClass);
        
        return {
          ...updatedClass,
          width: dimensions.width,
          height: dimensions.height
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

  const handleMouseDown = (e, cls, isResize = false) => {
    e.stopPropagation();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    if (isResize) {
      setResizingItem(cls);
      setResizeStart({ x: e.clientX, y: e.clientY });
    } else {
      setDragItem(cls);
      setDragOffset({
        x: e.clientX - rect.left - cls.x,
        y: e.clientY - rect.top - cls.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragItem) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = Math.max(0, e.clientX - rect.left - dragOffset.x);
      const y = Math.max(0, e.clientY - rect.top - dragOffset.y);
      
      const updatedClasses = classes.map(cls => 
        cls.id === dragItem.id ? { ...cls, x, y } : cls
      );
      
      onUpdateClassDiagram({
        ...classDiagram,
        classes: updatedClasses
      });
    } else if (resizingItem) {
      const dx = e.clientX - resizeStart.x;
      const dy = e.clientY - resizeStart.y;
      
      const updatedClasses = classes.map(cls => {
        if (cls.id === resizingItem.id) {
          const newWidth = Math.max(180, cls.width + dx);
          const newHeight = Math.max(120, cls.height + dy);
          return {
            ...cls,
            width: newWidth,
            height: newHeight
          };
        }
        return cls;
      });
      
      onUpdateClassDiagram({
        ...classDiagram,
        classes: updatedClasses
      });
      
      setResizeStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragItem(null);
    setResizingItem(null);
  };

  useEffect(() => {
    if (dragItem || resizingItem) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, resizingItem, dragOffset, resizeStart]);

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
    
    // Create a temporary canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    
    // Set background
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // This is a simplified export - in a real app you'd want to use html2canvas or similar
    const link = document.createElement('a');
    link.download = `${classDiagram.name || 'class-diagram'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Get nearest edge connection point
  const getNearestEdgePoint = (fromRect, toRect) => {
    const fromCenter = {
      x: fromRect.x + fromRect.width / 2,
      y: fromRect.y + fromRect.height / 2
    };
    const toCenter = {
      x: toRect.x + toRect.width / 2,
      y: toRect.y + toRect.height / 2
    };

    // Calculate which edge of 'from' rectangle is closest to 'to' rectangle
    const dx = toCenter.x - fromCenter.x;
    const dy = toCenter.y - fromCenter.y;
    
    // Determine the closest edge
    const fromEdge = {
      x: fromCenter.x + (dx > 0 ? fromRect.width / 2 : -fromRect.width / 2),
      y: fromCenter.y + (Math.abs(dx) * fromRect.height / fromRect.width > Math.abs(dy) ? 
          (dy > 0 ? fromRect.height / 2 : -fromRect.height / 2) : 
          (dy > 0 ? fromRect.height / 2 : -fromRect.height / 2) * (fromRect.width / fromRect.height))
    };
    
    const toEdge = {
      x: toCenter.x + (dx < 0 ? toRect.width / 2 : -toRect.width / 2),
      y: toCenter.y + (Math.abs(dx) * toRect.height / toRect.width > Math.abs(dy) ?
          (dy < 0 ? toRect.height / 2 : -toRect.height / 2) :
          (dy < 0 ? toRect.height / 2 : -toRect.height / 2) * (toRect.width / toRect.height))
    };

    // Adjust to actual edge boundaries
    const fromPoint = {
      x: Math.max(fromRect.x, Math.min(fromRect.x + fromRect.width, 
          Math.abs(dx) > Math.abs(dy) * (fromRect.width / fromRect.height) ? 
          fromCenter.x + (dx > 0 ? fromRect.width / 2 : -fromRect.width / 2) : fromCenter.x)),
      y: Math.max(fromRect.y, Math.min(fromRect.y + fromRect.height,
          Math.abs(dy) > Math.abs(dx) * (fromRect.height / fromRect.width) ?
          fromCenter.y + (dy > 0 ? fromRect.height / 2 : -fromRect.height / 2) : fromCenter.y))
    };
    
    const toPoint = {
      x: Math.max(toRect.x, Math.min(toRect.x + toRect.width,
          Math.abs(dx) > Math.abs(dy) * (toRect.width / toRect.height) ?
          toCenter.x + (dx < 0 ? toRect.width / 2 : -toRect.width / 2) : toCenter.x)),
      y: Math.max(toRect.y, Math.min(toRect.y + toRect.height,
          Math.abs(dy) > Math.abs(dx) * (toRect.height / toRect.width) ?
          toCenter.y + (dy < 0 ? toRect.height / 2 : -toRect.height / 2) : toCenter.y))
    };

    return { fromPoint, toPoint };
  };

  // Create orthogonal routing path for distant classes
  const createOrthogonalPath = (from, to) => {
    const distance = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
    
    if (distance < 300) {
      // Direct line for close classes
      return `M${from.x},${from.y} L${to.x},${to.y}`;
    }
    
    // Orthogonal routing for distant classes
    const midX = from.x + (to.x - from.x) * 0.5;
    const midY = from.y + (to.y - from.y) * 0.5;
    
    // Create 90-degree turns
    if (Math.abs(to.x - from.x) > Math.abs(to.y - from.y)) {
      // Horizontal preference
      return `M${from.x},${from.y} L${midX},${from.y} L${midX},${to.y} L${to.x},${to.y}`;
    } else {
      // Vertical preference
      return `M${from.x},${from.y} L${from.x},${midY} L${to.x},${midY} L${to.x},${to.y}`;
    }
  };

  const renderClass = (cls) => {
    const colorScheme = cls.colorScheme || colorSchemes[0];
    
    return (
      <div 
        key={cls.id}
        className="class-box"
        style={{
          left: `${cls.x}px`,
          top: `${cls.y}px`,
          width: `${cls.width}px`,
          height: `${cls.height}px`,
          cursor: dragItem?.id === cls.id ? 'grabbing' : 'grab',
          borderColor: colorScheme.border,
          backgroundColor: 'white'
        }}
        onMouseDown={(e) => handleMouseDown(e, cls)}
        onDoubleClick={() => openClassEditor(cls.id)}
      >
        <div 
          className="class-header"
          style={{
            backgroundColor: colorScheme.header,
            color: 'white'
          }}
        >
          <div className="class-name">
            {cls.name}
          </div>
        </div>
        
        <div className="class-section attributes-section">
          <div 
            className="section-title"
            style={{
              backgroundColor: colorScheme.background,
              color: colorScheme.header
            }}
          >
            Attributes
          </div>
          <div className="section-content">
            {cls.attributes.length > 0 ? (
              cls.attributes.map((attr, i) => (
                <div 
                  key={i} 
                  className="class-item"
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    openAttributeEditor(cls.id, i);
                  }}
                >
                  <span className="item-text">
                    {attr.visibility} {attr.name} : {attr.type}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteAttribute(cls.id, i);
                    }}
                    className="item-delete-btn"
                  >
                    <Trash2 size={10} />
                  </button>
                </div>
              ))
            ) : (
              <div className="empty-section">No attributes</div>
            )}
          </div>
        </div>
        
        <div className="class-section methods-section">
          <div 
            className="section-title"
            style={{
              backgroundColor: colorScheme.background,
              color: colorScheme.header
            }}
          >
            Methods
          </div>
          <div className="section-content">
            {cls.methods.length > 0 ? (
              cls.methods.map((method, i) => (
                <div 
                  key={i} 
                  className="class-item"
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    openMethodEditor(cls.id, i);
                  }}
                >
                  <span className="item-text">
                    {method.visibility} {method.name} : {method.returnType}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteMethod(cls.id, i);
                    }}
                    className="item-delete-btn"
                  >
                    <Trash2 size={10} />
                  </button>
                </div>
              ))
            ) : (
              <div className="empty-section">No methods</div>
            )}
          </div>
        </div>
        
        <div 
          className="resize-handle"
          style={{ backgroundColor: colorScheme.header }}
          onMouseDown={(e) => handleMouseDown(e, cls, true)}
        />
      </div>
    );
  };

  const renderRelationship = (relationship) => {
    const from = classes.find(c => c.id === relationship.from);
    const to = classes.find(c => c.id === relationship.to);
    
    if (!from || !to) return null;

    const fromRect = { 
      x: from.x, 
      y: from.y, 
      width: from.width, 
      height: from.height 
    };
    const toRect = { 
      x: to.x, 
      y: to.y, 
      width: to.width, 
      height: to.height 
    };

    const { fromPoint, toPoint } = getNearestEdgePoint(fromRect, toRect);
    const path = createOrthogonalPath(fromPoint, toPoint);

    // Calculate label position (midpoint of the path)
    const labelX = (fromPoint.x + toPoint.x) / 2;
    const labelY = (fromPoint.y + toPoint.y) / 2;

    return (
      <svg key={relationship.id} className="relationship-svg" style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <defs>
          <marker id={`arrowhead-${relationship.id}`} markerWidth="10" markerHeight="7" 
           refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
          </marker>
          <marker id={`inheritance-${relationship.id}`} markerWidth="12" markerHeight="10" 
           refX="11" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill="white" stroke="#475569" strokeWidth="1" />
          </marker>
          <marker id={`diamond-${relationship.id}`} markerWidth="12" markerHeight="8" 
           refX="11" refY="4" orient="auto">
            <polygon points="0 4, 6 0, 12 4, 6 8" fill="#475569" />
          </marker>
          <marker id={`diamond-empty-${relationship.id}`} markerWidth="12" markerHeight="8" 
           refX="11" refY="4" orient="auto">
            <polygon points="0 4, 6 0, 12 4, 6 8" fill="white" stroke="#475569" strokeWidth="1" />
          </marker>
        </defs>
        
        {(() => {
          const getLineProps = () => {
            switch (relationship.type) {
              case 'inheritance':
                return {
                  stroke: '#475569',
                  strokeWidth: 2,
                  markerEnd: `url(#inheritance-${relationship.id})`
                };
              case 'realization':
                return {
                  stroke: '#475569',
                  strokeWidth: 2,
                  strokeDasharray: '5,5',
                  markerEnd: `url(#inheritance-${relationship.id})`
                };
              case 'dependency':
                return {
                  stroke: '#475569',
                  strokeWidth: 1,
                  strokeDasharray: '8,4',
                  markerEnd: `url(#arrowhead-${relationship.id})`
                };
              case 'aggregation':
                return {
                  stroke: '#475569',
                  strokeWidth: 2,
                  markerEnd: `url(#diamond-empty-${relationship.id})`
                };
              case 'composition':
                return {
                  stroke: '#475569',
                  strokeWidth: 2,
                  markerEnd: `url(#diamond-${relationship.id})`
                };
              case 'navigable':
                return {
                  stroke: '#475569',
                  strokeWidth: 2,
                  markerEnd: `url(#arrowhead-${relationship.id})`
                };
              default: // association
                return {
                  stroke: '#475569',
                  strokeWidth: 2
                };
            }
          };

          const lineProps = getLineProps();
          
          return (
            <>
              <path
                d={path}
                fill="none"
                {...lineProps}
              />
              {relationship.label && (
                <g>
                  <rect
                    x={labelX - (relationship.label.length * 4)}
                    y={labelY - 8}
                    width={relationship.label.length * 8}
                    height={16}
                    fill="white"
                    stroke="#e2e8f0"
                    rx="2"
                  />
                  <text
                    x={labelX}
                    y={labelY + 4}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#475569"
                    fontWeight="500"
                  >
                    {relationship.label}
                  </text>
                </g>
              )}
            </>
          );
        })()}
      </svg>
    );
  };

  const handleCanvasDoubleClick = (e) => {
    if (e.target === canvasRef.current) {
      // Double click on empty canvas - add a new class
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const className = prompt('Enter class name:');
      if (className && className.trim()) {
        const colorScheme = getRandomColorScheme();
        const dimensions = calculateClassDimensions({
          name: className.trim(),
          attributes: [],
          methods: []
        });
        
        const updatedClasses = [
          ...classes,
          {
            id: Date.now(),
            name: className.trim(),
            attributes: [],
            methods: [],
            x: x - (dimensions.width / 2), // Center the class on click point
            y: y - 40, // Offset to account for header
            width: dimensions.width,
            height: dimensions.height,
            colorScheme
          }
        ];
        
        onUpdateClassDiagram({
          ...classDiagram,
          classes: updatedClasses
        });
      }
    }
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
                  <option value="navigable">Navigable Association</option>
                  <option value="inheritance">Inheritance</option>
                  <option value="realization">Realization/Implementation</option>
                  <option value="dependency">Dependency</option>
                  <option value="aggregation">Aggregation</option>
                  <option value="composition">Composition</option>
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
              <h3>UML Notation Guide</h3>
              <div className="notation-guide">
                <div className="guide-item">
                  <strong>Visibility:</strong>
                  <div>+ Public</div>
                  <div>- Private</div>
                  <div># Protected</div>
                  <div>~ Package</div>
                </div>
                <div className="guide-item">
                  <strong>Attributes:</strong>
                  <div>+name : String</div>
                  <div>-age : int</div>
                </div>
                <div className="guide-item">
                  <strong>Methods:</strong>
                  <div>+getName() : String</div>
                  <div>-calculate() : void</div>
                </div>
                <div className="guide-item">
                  <strong>Quick Tips:</strong>
                  <div>• Double-click canvas to add class</div>
                  <div>• Double-click class to edit</div>
                  <div>• Drag to move classes</div>
                  <div>• Drag resize handle to resize</div>
                </div>
              </div>
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
                        {from.name} → {to.name}
                        <div className="item-type">({rel.type})</div>
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
          
          <div 
            className="diagram-canvas" 
            ref={canvasRef}
            onDoubleClick={handleCanvasDoubleClick}
          >
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

      {/* Class Editor Modal */}
      {editingItem && !editType && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit Class: {editingItem.name}</h3>
              <button onClick={closeEditor} className="modal-close-btn">
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="class-edit-tabs">
                <button 
                  className={`edit-tab ${editType === 'attribute' ? 'active' : ''}`}
                  onClick={() => setEditType('attribute')}
                >
                  Attributes
                </button>
                <button 
                  className={`edit-tab ${editType === 'method' ? 'active' : ''}`}
                  onClick={() => setEditType('method')}
                >
                  Methods
                </button>
              </div>
              
              {editType === 'attribute' ? (
                <div className="edit-section">
                  <div className="section-header">
                    <h4>Attributes</h4>
                    <button 
                      onClick={() => openAttributeEditor(editingItem.id)}
                      className="add-item-btn"
                    >
                      <Plus size={12} /> Add Attribute
                    </button>
                  </div>
                  <div className="items-list">
                    {editingItem.attributes.map((attr, i) => (
                      <div key={i} className="item-row">
                        <div className="item-text">
                          {attr.visibility} {attr.name} : {attr.type}
                        </div>
                        <div className="item-actions">
                          <button 
                            onClick={() => openAttributeEditor(editingItem.id, i)}
                            className="edit-btn"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => deleteAttribute(editingItem.id, i)}
                            className="delete-btn"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                    {editingItem.attributes.length === 0 && (
                      <div className="empty-message">No attributes defined</div>
                    )}
                  </div>
                </div>
              ) : editType === 'method' ? (
                <div className="edit-section">
                  <div className="section-header">
                    <h4>Methods</h4>
                    <button 
                      onClick={() => openMethodEditor(editingItem.id)}
                      className="add-item-btn"
                    >
                      <Plus size={12} /> Add Method
                    </button>
                  </div>
                  <div className="items-list">
                    {editingItem.methods.map((method, i) => (
                      <div key={i} className="item-row">
                        <div className="item-text">
                          {method.visibility} {method.name} : {method.returnType}
                        </div>
                        <div className="item-actions">
                          <button 
                            onClick={() => openMethodEditor(editingItem.id, i)}
                            className="edit-btn"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => deleteMethod(editingItem.id, i)}
                            className="delete-btn"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                    {editingItem.methods.length === 0 && (
                      <div className="empty-message">No methods defined</div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="select-message">
                  <p>Select a section to edit</p>
                </div>
              )}
            </div>
            
            <div className="modal-footer">
              <button onClick={closeEditor} className="modal-cancel-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attribute/Method Editor Modal */}
      {(editingItem && editType) && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>
                {editType === 'attribute' ? 
                  (editIndex >= 0 ? 'Edit Attribute' : 'Add Attribute') : 
                  (editIndex >= 0 ? 'Edit Method' : 'Add Method')}
              </h3>
              <button onClick={closeEditor} className="modal-close-btn">
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              {editType === 'attribute' ? (
                <>
                  <div className="form-group">
                    <label>Visibility</label>
                    <select
                      value={newAttribute.visibility}
                      onChange={(e) => setNewAttribute({...newAttribute, visibility: e.target.value})}
                    >
                      {visibilityOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={newAttribute.name}
                      onChange={(e) => setNewAttribute({...newAttribute, name: e.target.value})}
                      placeholder="Attribute name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Type</label>
                    <div className="type-select">
                      <select
                        value={newAttribute.type}
                        onChange={(e) => setNewAttribute({...newAttribute, type: e.target.value})}
                      >
                        {dataTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        value={!dataTypes.includes(newAttribute.type) ? newAttribute.type : ''}
                        onChange={(e) => setNewAttribute({...newAttribute, type: e.target.value})}
                        placeholder="Or enter custom type"
                        style={{ 
                          display: !dataTypes.includes(newAttribute.type) ? 'block' : 'none',
                          marginTop: '8px'
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>Visibility</label>
                    <select
                      value={newMethod.visibility}
                      onChange={(e) => setNewMethod({...newMethod, visibility: e.target.value})}
                    >
                      {visibilityOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={newMethod.name}
                      onChange={(e) => setNewMethod({...newMethod, name: e.target.value})}
                      placeholder="Method name (include parentheses)"
                    />
                  </div>
                  <div className="form-group">
                    <label>Return Type</label>
                    <div className="type-select">
                      <select
                        value={newMethod.returnType}
                        onChange={(e) => setNewMethod({...newMethod, returnType: e.target.value})}
                      >
                        {dataTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        value={!dataTypes.includes(newMethod.returnType) ? newMethod.returnType : ''}
                        onChange={(e) => setNewMethod({...newMethod, returnType: e.target.value})}
                        placeholder="Or enter custom type"
                        style={{ 
                          display: !dataTypes.includes(newMethod.returnType) ? 'block' : 'none',
                          marginTop: '8px'
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="modal-footer">
              <button onClick={closeEditor} className="modal-cancel-btn">
                Cancel
              </button>
              <button 
                onClick={editType === 'attribute' ? saveAttribute : saveMethod}
                disabled={editType === 'attribute' ? !newAttribute.name : !newMethod.name}
                className="modal-save-btn"
              >
                Save
              </button>
            </div>
          </div>
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
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
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
          color: #3b82f6;
          border-bottom-color: #3b82f6;
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
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #3b82f6;
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
          transition: background-color 0.2s;
        }
        
        .add-btn:hover {
          background: #2563eb;
        }
        
        .add-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .notation-guide {
          font-size: 12px;
          color: #64748b;
        }
        
        .guide-item {
          margin-bottom: 12px;
        }
        
        .guide-item strong {
          display: block;
          color: #374151;
          margin-bottom: 4px;
        }
        
        .guide-item div {
          font-family: 'Fira Code', monospace;
          margin-left: 8px;
          margin-bottom: 2px;
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
        }
        
        .item-type {
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
          transition: background-color 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: linear-gradient(45deg, #f1f5f9 25%, transparent 25%), 
                      linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #f1f5f9 75%), 
                      linear-gradient(-45deg, transparent 75%, #f1f5f9 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          position: relative;
          overflow: auto;
          cursor: crosshair;
        }
        
        .class-box {
          position: absolute;
          background: white;
          border: 2px solid;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          font-size: 13px;
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 2;
          user-select: none;
          transition: box-shadow 0.2s;
        }
        
        .class-box:hover {
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
        }
        
        .class-header {
          padding: 12px 16px;
          text-align: center;
          border-bottom: 2px solid;
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .class-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .class-section {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #e5e7eb;
          flex: 1;
        }
        
        .class-section:last-child {
          border-bottom: none;
        }
        
        .section-title {
          padding: 8px 16px;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #f3f4f6;
        }
        
        .section-content {
          padding: 8px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow: hidden;
        }
        
        .class-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 8px;
          margin-bottom: 2px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 22px;
        }
        
        .class-item:hover {
          background: rgba(59, 130, 246, 0.1);
        }
        
        .item-text {
          flex: 1;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 12px;
          color: #374151;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .empty-section {
          color: #9ca3af;
          font-style: italic;
          font-size: 11px;
          text-align: center;
          padding: 8px;
        }
        
        .item-delete-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          opacity: 0;
          padding: 4px;
          border-radius: 3px;
          margin-left: 8px;
          transition: all 0.15s;
        }
        
        .class-item:hover .item-delete-btn {
          opacity: 0.7;
        }
        
        .item-delete-btn:hover {
          opacity: 1 !important;
          background: #fee2e2;
        }
        
        .resize-handle {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 14px;
          height: 14px;
          cursor: nwse-resize;
          border-radius: 0 0 6px 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        
        .class-box:hover .resize-handle {
          opacity: 1;
        }
        
        .resize-handle::before {
          content: '';
          position: absolute;
          right: 2px;
          bottom: 2px;
          width: 3px;
          height: 3px;
          background: currentColor;
          border-radius: 50%;
        }
        
        .resize-handle::after {
          content: '';
          position: absolute;
          right: 6px;
          bottom: 6px;
          width: 6px;
          height: 1px;
          background: currentColor;
          transform: rotate(45deg);
        }
        
        .relationship-svg {
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
          background: #3b82f6;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #2563eb;
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }
        
        .modal-content {
          background: white;
          border-radius: 12px;
          width: 500px;
          max-width: 90%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transform: scale(1);
          animation: modalAppear 0.2s ease-out;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .modal-header {
          padding: 20px 24px 16px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-header h3 {
          margin: 0;
          color: #1e293b;
          font-size: 18px;
          font-weight: 600;
        }
        
        .modal-close-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.15s;
        }
        
        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }
        
        .modal-footer {
          padding: 16px 24px 24px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid #e2e8f0;
        }
        
        .modal-cancel-btn {
          padding: 10px 20px;
          background: #f1f5f9;
          color: #64748b;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-cancel-btn:hover {
          background: #e2e8f0;
        }
        
        .modal-save-btn {
          padding: 10px 20px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #2563eb;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Class Editor Modal Styles */
        .class-edit-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 16px;
        }
        
        .edit-tab {
          padding: 8px 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }
        
        .edit-tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .edit-section {
          margin-top: 16px;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .section-header h4 {
          margin: 0;
          font-size: 16px;
          color: #1e293b;
        }
        
        .add-item-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #2563eb;
        }
        
        .items-list {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-row:last-child {
          border-bottom: none;
        }
        
        .item-actions {
          display: flex;
          gap: 8px;
        }
        
        .edit-btn {
          padding: 4px 8px;
          background: #e0e7ff;
          color: #3b82f6;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .edit-btn:hover {
          background: #d1dbfa;
        }
        
        .empty-message {
          padding: 16px;
          text-align: center;
          color: #9ca3af;
          font-style: italic;
        }
        
        .select-message {
          padding: 32px;
          text-align: center;
          color: #64748b;
        }
      `}</style>
    </div>
  );
};

export default ClassDiagramMaker;