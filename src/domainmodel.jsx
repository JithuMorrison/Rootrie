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
  X,
  BookOpen,
  Palette,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

const DomainModelMaker = ({ 
  domainModel = { name: 'Sample Domain Model' }, 
  entities = [], 
  relationships = [],
  onUpdateDomainModel = () => {},
  onBack = () => {}
}) => {
  const [newEntityName, setNewEntityName] = useState('');
  const [newRelationship, setNewRelationship] = useState('');
  const [fromEntity, setFromEntity] = useState('');
  const [toEntity, setToEntity] = useState('');
  const [relationshipType, setRelationshipType] = useState('association');
  const [multiplicityFrom, setMultiplicityFrom] = useState('1');
  const [multiplicityTo, setMultiplicityTo] = useState('1');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizingItem, setResizingItem] = useState(null);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const [editingItem, setEditingItem] = useState(null);
  const [editType, setEditType] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [newAttribute, setNewAttribute] = useState({ name: '', type: 'String' });
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Color schemes for entities (expanded with more vibrant options)
  const colorSchemes = [
    { header: '#3B82F6', border: '#2563EB', background: '#EFF6FF' }, // Primary blue
    { header: '#6366F1', border: '#4F46E5', background: '#EEF2FF' }, // Indigo
    { header: '#8B5CF6', border: '#7C3AED', background: '#F5F3FF' }, // Violet
    { header: '#06B6D4', border: '#0891B2', background: '#ECFEFF' }, // Cyan
    { header: '#10B981', border: '#059669', background: '#ECFDF5' }, // Emerald
    { header: '#F59E0B', border: '#D97706', background: '#FFFBEB' }, // Amber
    { header: '#EC4899', border: '#DB2777', background: '#FDF2F8' }, // Pink
    { header: '#64748B', border: '#475569', background: '#F8FAFC' }, // Slate
    { header: '#EF4444', border: '#DC2626', background: '#FEF2F2' }, // Red
    { header: '#F97316', border: '#EA580C', background: '#FFF7ED' }, // Orange
    { header: '#84CC16', border: '#65A30D', background: '#F7FEE7' }, // Lime
    { header: '#14B8A6', border: '#0D9488', background: '#F0FDFA' }, // Teal
  ];

  // Common data types for dropdowns
  const dataTypes = ['String', 'Integer', 'Number', 'Boolean', 'Date', 'DateTime', 'Money', 'Text', 'ID'];
  
  // Multiplicity options
  const multiplicityOptions = ['1', '*', '0..1', '1..*', '0..*'];

  useEffect(() => {
    setJsonInput(JSON.stringify({ entities, relationships }, null, 2));
  }, [entities, relationships]);

  const getRandomColorScheme = () => {
    return colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
  };

  const reassignAllColors = () => {
    const updatedEntities = entities.map(entity => ({
      ...entity,
      colorScheme: getRandomColorScheme()
    }));
    
    onUpdateDomainModel({
      ...domainModel,
      entities: updatedEntities
    });
  };

  const handleZoomIn = () => {
    setZoom(prevZoom => Math.min(prevZoom * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => Math.max(prevZoom / 1.2, 0.3));
  };

  const resetView = () => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const calculateTextWidth = (text, fontSize = '12px', fontFamily = "'SF Mono', monospace") => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${fontSize} ${fontFamily}`;
    return context.measureText(text).width;
  };

  const calculateEntityDimensions = (entity) => {
    const minWidth = 180;
    const padding = 32;
    
    const entityNameWidth = calculateTextWidth(entity.name, '16px', "'Inter', sans-serif") + padding;
    
    let maxAttributeWidth = 0;
    entity.attributes.forEach(attr => {
      const attrText = `${attr.name} : ${attr.type}`;
      const width = calculateTextWidth(attrText) + padding;
      if (width > maxAttributeWidth) maxAttributeWidth = width;
    });
    
    const calculatedWidth = Math.max(minWidth, entityNameWidth, maxAttributeWidth);
    
    const headerHeight = 40;
    const itemHeight = 26;
    const sectionPadding = 6;
    
    const attributesHeight = entity.attributes.length > 0 
      ? (entity.attributes.length * itemHeight) + sectionPadding
      : 0;
    
    const calculatedHeight = headerHeight + attributesHeight + 4;
    
    return {
      width: Math.min(calculatedWidth, 400),
      height: Math.max(calculatedHeight, 50)
    };
  };

  const addEntity = () => {
    if (!newEntityName.trim()) return;
    
    const colorScheme = getRandomColorScheme();
    const dimensions = calculateEntityDimensions({
      name: newEntityName,
      attributes: []
    });
    
    const updatedEntities = [
      ...entities,
      {
        id: Date.now(),
        name: newEntityName,
        attributes: [],
        x: 100 + Math.random() * 300,
        y: 100 + Math.random() * 300,
        width: dimensions.width,
        height: dimensions.height,
        colorScheme
      }
    ];
    
    onUpdateDomainModel({
      ...domainModel,
      entities: updatedEntities
    });
    
    setNewEntityName('');
  };

  const openEntityEditor = (entityId) => {
    const entity = entities.find(e => e.id === entityId);
    if (!entity) return;
    
    setEditingItem(entity);
  };

  const openAttributeEditor = (entityId, index = -1) => {
    const entity = entities.find(e => e.id === entityId);
    if (!entity) return;
    
    setEditType('attribute');
    setEditIndex(index);
    
    if (index >= 0) {
      setNewAttribute({ ...entity.attributes[index] });
    } else {
      setNewAttribute({ name: '', type: 'String' });
    }
  };

  const saveAttribute = () => {
    if (!newAttribute.name.trim()) return;
    
    const updatedEntities = entities.map(entity => {
      if (entity.id === editingItem.id) {
        const newAttributes = [...entity.attributes];
        if (editIndex >= 0) {
          newAttributes[editIndex] = { ...newAttribute };
        } else {
          newAttributes.push({ ...newAttribute });
        }
        
        const updatedEntity = {
          ...entity,
          attributes: newAttributes
        };
        const dimensions = calculateEntityDimensions(updatedEntity);
        
        return {
          ...updatedEntity,
          width: dimensions.width,
          height: dimensions.height
        };
      }
      return entity;
    });
    
    onUpdateDomainModel({
      ...domainModel,
      entities: updatedEntities
    });

    const latestEditingItem = updatedEntities.find(e => e.id === editingItem.id);
    if (latestEditingItem) {
      setEditingItem(latestEditingItem);
    }
    
    closeEditor();
  };

  const closeEditor = () => {
    setEditType('');
    setEditIndex(-1);
  };

  const closeFull = () => {
    setEditingItem(null);
    setEditType('');
    setEditIndex(-1);
  };

  const addRelationship = () => {
    if (!fromEntity || !toEntity) return;
    
    const from = entities.find(e => e.id === parseInt(fromEntity));
    const to = entities.find(e => e.id === parseInt(toEntity));
    
    if (!from || !to) return;
    
    const updatedRelationships = [
      ...relationships,
      {
        id: Date.now(),
        from: from.id,
        to: to.id,
        type: relationshipType,
        label: newRelationship || '',
        multiplicityFrom: multiplicityFrom,
        multiplicityTo: multiplicityTo
      }
    ];
    
    onUpdateDomainModel({
      ...domainModel,
      relationships: updatedRelationships
    });
    
    setNewRelationship('');
    setFromEntity('');
    setToEntity('');
    setMultiplicityFrom('1');
    setMultiplicityTo('1');
  };

  const deleteEntity = (entityId) => {
    const updatedEntities = entities.filter(e => e.id !== entityId);
    const updatedRelationships = relationships.filter(
      rel => !(rel.from === entityId || rel.to === entityId)
    );
    
    onUpdateDomainModel({
      ...domainModel,
      entities: updatedEntities,
      relationships: updatedRelationships
    });
  };

  const deleteAttribute = (entityId, attributeIndex) => {
    const updatedEntities = entities.map(entity => {
      if (entity.id === entityId) {
        const newAttributes = entity.attributes.filter((_, i) => i !== attributeIndex);
        const updatedEntity = {
          ...entity,
          attributes: newAttributes
        };
        const dimensions = calculateEntityDimensions(updatedEntity);
        
        return {
          ...updatedEntity,
          width: dimensions.width,
          height: dimensions.height
        };
      }
      return entity;
    });
    
    onUpdateDomainModel({
      ...domainModel,
      entities: updatedEntities
    });

    const latestEditingItem = updatedEntities.find(e => e.id === entityId);
    if (latestEditingItem) {
      setEditingItem(latestEditingItem);
    }
    
  };

  const deleteRelationship = (relationshipId) => {
    const updatedRelationships = relationships.filter(rel => rel.id !== relationshipId);
    onUpdateDomainModel({
      ...domainModel,
      relationships: updatedRelationships
    });
  };

  const handleCanvasMouseDown = (e) => {
    if (e.target === canvasRef.current && e.button === 0) {
      setIsPanning(true);
      setPanStart({
        x: e.clientX - panOffset.x,
        y: e.clientY - panOffset.y
      });
      e.preventDefault();
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
    }
  };

  const handleCanvasMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseDown = (e, entity, isResize = false) => {
    e.stopPropagation();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    if (isResize) {
      setResizingItem(entity);
      setResizeStart({ x: e.clientX, y: e.clientY });
    } else {
      setDragItem(entity);
      const canvasX = (e.clientX - rect.left - panOffset.x) / zoom;
      const canvasY = (e.clientY - rect.top - panOffset.y) / zoom;
      setDragOffset({
        x: canvasX - entity.x,
        y: canvasY - entity.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragItem) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const canvasX = (e.clientX - rect.left - panOffset.x) / zoom;
      const canvasY = (e.clientY - rect.top - panOffset.y) / zoom;
      
      const x = Math.max(0, canvasX - dragOffset.x);
      const y = Math.max(0, canvasY - dragOffset.y);
      
      const updatedEntities = entities.map(entity => 
        entity.id === dragItem.id ? { ...entity, x, y } : entity
      );
      
      onUpdateDomainModel({
        ...domainModel,
        entities: updatedEntities
      });
    } else if (resizingItem) {
      const dx = e.clientX - resizeStart.x;
      const dy = e.clientY - resizeStart.y;
      
      const updatedEntities = entities.map(entity => {
        if (entity.id === resizingItem.id) {
          const newWidth = Math.max(180, entity.width + dx / zoom);
          const newHeight = Math.max(80, entity.height + dy / zoom);
          return {
            ...entity,
            width: newWidth,
            height: newHeight
          };
        }
        return entity;
      });
      
      onUpdateDomainModel({
        ...domainModel,
        entities: updatedEntities
      });
      
      setResizeStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragItem(null);
    setResizingItem(null);
    setIsPanning(false);
  };

  useEffect(() => {
    if (dragItem || resizingItem || isPanning) {
      document.addEventListener('mousemove', dragItem || resizingItem ? handleMouseMove : handleCanvasMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', dragItem || resizingItem ? handleMouseMove : handleCanvasMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, resizingItem, isPanning, dragOffset, resizeStart, panStart, panOffset, zoom]);

  const calculateCanvasBoundaries = () => {
    if (entities.length === 0) {
      return { minX: 0, maxX: 1000, minY: 0, maxY: 1000 };
    }

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    entities.forEach(entity => {
      minX = Math.min(minX, entity.x);
      maxX = Math.max(maxX, entity.x + entity.width);
      minY = Math.min(minY, entity.y);
      maxY = Math.max(maxY, entity.y + entity.height);
    });

    const padding = 200;
    return {
      minX: Math.min(minX, 0) - padding,
      maxX: Math.max(maxX, 1000) + padding,
      minY: Math.min(minY, 0) - padding,
      maxY: Math.max(maxY, 1000) + padding
    };
  };

  const boundaries = calculateCanvasBoundaries();

  const exportToJson = () => {
    const data = { entities, relationships };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.entities) && Array.isArray(data.relationships)) {
        const updatedEntities = data.entities.map(entity => ({
          ...entity,
          ...calculateEntityDimensions(entity)
        }));

        onUpdateDomainModel({
          ...domainModel,
          entities: updatedEntities,
          relationships: data.relationships
        });
      } else {
        alert('Invalid JSON format. Expected entities and relationships arrays.');
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
    
    // Calculate the exact bounds of all content
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    // Check entities
    entities.forEach(entity => {
      minX = Math.min(minX, entity.x);
      maxX = Math.max(maxX, entity.x + entity.width);
      minY = Math.min(minY, entity.y);
      maxY = Math.max(maxY, entity.y + entity.height);
    });
    
    // Check relationship endpoints
    relationships.forEach(relationship => {
      const from = entities.find(e => e.id === relationship.from);
      const to = entities.find(e => e.id === relationship.to);
      
      if (from && to) {
        const fromCenter = {
          x: from.x + from.width / 2,
          y: from.y + from.height / 2
        };
        const toCenter = {
          x: to.x + to.width / 2,
          y: to.y + to.height / 2
        };
        
        minX = Math.min(minX, fromCenter.x, toCenter.x);
        maxX = Math.max(maxX, fromCenter.x, toCenter.x);
        minY = Math.min(minY, fromCenter.y, toCenter.y);
        maxY = Math.max(maxY, fromCenter.y, toCenter.y);
      }
    });
    
    // If no content exists
    if (minX === Infinity || entities.length === 0) {
      alert('No diagram content to export');
      return;
    }
    
    // Add some padding around the content
    const padding = 40;
    const contentX = Math.max(0, minX - padding);
    const contentY = Math.max(0, minY - padding);
    const contentWidth = (maxX - minX) + padding * 2;
    const contentHeight = (maxY - minY) + padding * 2;
    
    // Store original transform for restoration
    const originalTransform = canvasRef.current.style.transform;
    
    // Create a temporary container for capture
    const tempContainer = document.createElement('div');
    tempContainer.style.width = `${contentWidth}px`;
    tempContainer.style.height = `${contentHeight}px`;
    tempContainer.style.position = 'fixed';
    tempContainer.style.top = '0';
    tempContainer.style.left = '0';
    tempContainer.style.background = '#f8fafc';
    tempContainer.style.zIndex = '-9999';
    tempContainer.style.overflow = 'hidden';
    
    // Clone the canvas content
    const canvasClone = canvasRef.current.cloneNode(true);
    
    // Remove zoom and pan transforms for clean capture
    const canvasContent = canvasClone.querySelector('.canvas-content');
    if (canvasContent) {
      canvasContent.style.transform = 'none';
      canvasContent.style.transformOrigin = '0 0';
    }
    
    canvasClone.style.position = 'absolute';
    canvasClone.style.left = `-${contentX}px`;
    canvasClone.style.top = `-${contentY}px`;
    canvasClone.style.transform = 'none';
    canvasClone.style.width = `${boundaries.maxX - boundaries.minX}px`;
    canvasClone.style.height = `${boundaries.maxY - boundaries.minY}px`;
    canvasClone.style.background = '#f8fafc';
    canvasClone.style.overflow = 'visible';
    
    tempContainer.appendChild(canvasClone);
    document.body.appendChild(tempContainer);
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(tempContainer, {
        backgroundColor: '#f8fafc',
        scale: 2,
        useCORS: true,
        width: contentWidth,
        height: contentHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${domainModel.name || 'domain-model'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Clean up
        document.body.removeChild(tempContainer);
      }).catch(error => {
        console.error('Error capturing image:', error);
        document.body.removeChild(tempContainer);
      });
    });
  };

  const getNearestEdgePoint = (fromRect, toRect) => {
    const fromCenter = {
      x: fromRect.x + fromRect.width / 2,
      y: fromRect.y + fromRect.height / 2
    };
    const toCenter = {
      x: toRect.x + toRect.width / 2,
      y: toRect.y + toRect.height / 2
    };

    const dx = toCenter.x - fromCenter.x;
    const dy = toCenter.y - fromCenter.y;
    
    let fromPoint, toPoint;
    
    if (Math.abs(dx) / fromRect.width > Math.abs(dy) / fromRect.height) {
      const fromX = fromCenter.x + (dx > 0 ? fromRect.width / 2 : -fromRect.width / 2);
      const toX = toCenter.x + (dx > 0 ? -toRect.width / 2 : toRect.width / 2);
      
      fromPoint = { x: fromX, y: fromCenter.y };
      toPoint = { x: toX, y: toCenter.y };
    } else {
      const fromY = fromCenter.y + (dy > 0 ? fromRect.height / 2 : -fromRect.height / 2);
      const toY = toCenter.y + (dy > 0 ? -toRect.height / 2 : toRect.height / 2);
      
      fromPoint = { x: fromCenter.x, y: fromY };
      toPoint = { x: toCenter.x, y: toY };
    }

    return { fromPoint, toPoint };
  };

  const createOrthogonalPath = (from, to) => {
    const distance = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
    
    if (distance < 300) {
      return `M${from.x},${from.y} L${to.x},${to.y}`;
    }
    
    const midX = from.x + (to.x - from.x) * 0.5;
    const midY = from.y + (to.y - from.y) * 0.5;
    
    if (Math.abs(to.x - from.x) > Math.abs(to.y - from.y)) {
      return `M${from.x},${from.y} L${midX},${from.y} L${midX},${to.y} L${to.x},${to.y}`;
    } else {
      return `M${from.x},${from.y} L${from.x},${midY} L${to.x},${midY} L${to.x},${to.y}`;
    }
  };

  const renderEntity = (entity) => {
    const colorScheme = entity.colorScheme || colorSchemes[0];
    
    return (
      <div 
        key={entity.id}
        className="entity-box"
        style={{
          left: `${entity.x}px`,
          top: `${entity.y}px`,
          width: `${entity.width}px`,
          height: `${entity.height}px`,
          cursor: dragItem?.id === entity.id ? 'grabbing' : 'grab',
          borderColor: colorScheme.border,
          backgroundColor: 'white'
        }}
        onMouseDown={(e) => handleMouseDown(e, entity)}
        onDoubleClick={() => openEntityEditor(entity.id)}
      >
        <div 
          className="entity-header"
          style={{
            backgroundColor: colorScheme.header,
            color: 'white'
          }}
        >
          <div className="entity-name">
            {entity.name}
          </div>
        </div>
        
        <div className="entity-content">
          {entity.attributes.length > 0 && (
            <div className="attributes-section">
              {entity.attributes.map((attr, i) => (
                <div 
                  key={i} 
                  className="entity-item"
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    openAttributeEditor(entity.id, i);
                  }}
                >
                  <span className="item-text">
                    {attr.name} : {attr.type}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteAttribute(entity.id, i);
                    }}
                    className="item-delete-btn"
                  >
                    <Trash2 size={10} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div 
          className="resize-handle"
          style={{ backgroundColor: colorScheme.header }}
          onMouseDown={(e) => handleMouseDown(e, entity, true)}
        />
      </div>
    );
  };

  const renderRelationship = (relationship) => {
    const from = entities.find(e => e.id === relationship.from);
    const to = entities.find(e => e.id === relationship.to);
    
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
              default:
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
              <g>
                <text
                  x={fromPoint.x + (toPoint.x - fromPoint.x) * 0.25}
                  y={fromPoint.y + (toPoint.y - fromPoint.y) * 0.25 - 5}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#475569"
                  fontWeight="500"
                >
                  {relationship.multiplicityFrom || '1'}
                </text>
                <text
                  x={fromPoint.x + (toPoint.x - fromPoint.x) * 0.75}
                  y={fromPoint.y + (toPoint.y - fromPoint.y) * 0.75 - 5}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#475569"
                  fontWeight="500"
                >
                  {relationship.multiplicityTo || '1'}
                </text>
              </g>
            </>
          );
        })()}
      </svg>
    );
  };

  const handleCanvasDoubleClick = (e) => {
    if (e.target === canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const canvasX = (e.clientX - rect.left - panOffset.x) / zoom;
      const canvasY = (e.clientY - rect.top - panOffset.y) / zoom;
      
      const entityName = prompt('Enter entity name:');
      if (entityName && entityName.trim()) {
        const colorScheme = getRandomColorScheme();
        const dimensions = calculateEntityDimensions({
          name: entityName.trim(),
          attributes: []
        });
        
        const updatedEntities = [
          ...entities,
          {
            id: Date.now(),
            name: entityName.trim(),
            attributes: [],
            x: canvasX - (dimensions.width / 2),
            y: canvasY - 40,
            width: dimensions.width,
            height: dimensions.height,
            colorScheme
          }
        ];
        
        onUpdateDomainModel({
          ...domainModel,
          entities: updatedEntities
        });
      }
    }
  };

  const handleWheel = (e) => {
    if (activeTab === 'editor' && e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prev => Math.max(0.3, Math.min(3, prev * delta)));
    }
  };

  return (
    <div className="domain-model-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{domainModel.name}</h2>
        <div className="spacer"></div>
        
        {/* Canvas Controls */}
        <div className="canvas-controls">
          <button onClick={reassignAllColors} className="control-btn" title="Randomize Colors">
            <Palette size={16} />
          </button>
          <button onClick={handleZoomOut} className="control-btn" title="Zoom Out">
            <ZoomOut size={16} />
          </button>
          <span className="zoom-indicator">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="control-btn" title="Zoom In">
            <ZoomIn size={16} />
          </button>
          <button onClick={resetView} className="control-btn" title="Reset View">
            <RotateCcw size={16} />
          </button>
        </div>
        
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
              a.download = `${domainModel.name || 'domain-model'}.json`;
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
              <h3>Entities</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newEntityName}
                  onChange={(e) => setNewEntityName(e.target.value)}
                  placeholder="New entity name"
                  onKeyPress={(e) => e.key === 'Enter' && addEntity()}
                />
                <button onClick={addEntity} className="add-btn">
                  <Plus size={16} /> Add Entity
                </button>
              </div>
              <div className="entity-list">
                {entities.map(entity => (
                  <div key={entity.id} className="list-item">
                    <div className="item-name">{entity.name}</div>
                    <button 
                      onClick={() => deleteEntity(entity.id)}
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
                <label>From Entity</label>
                <select 
                  value={fromEntity || ''}
                  onChange={(e) => setFromEntity(e.target.value)}
                >
                  <option value="">Select entity</option>
                  {entities.map(entity => (
                    <option key={entity.id} value={entity.id}>{entity.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>To Entity</label>
                <select 
                  value={toEntity || ''}
                  onChange={(e) => setToEntity(e.target.value)}
                >
                  <option value="">Select entity</option>
                  {entities.map(entity => (
                    <option key={entity.id} value={entity.id}>{entity.name}</option>
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
                  <option value="realization">Realization</option>
                  <option value="dependency">Dependency</option>
                  <option value="aggregation">Aggregation</option>
                  <option value="composition">Composition</option>
                </select>
              </div>
              <div className="form-group">
                <label>Multiplicity (From)</label>
                <select 
                  value={multiplicityFrom}
                  onChange={(e) => setMultiplicityFrom(e.target.value)}
                >
                  {multiplicityOptions.map(mult => (
                    <option key={mult} value={mult}>{mult}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Multiplicity (To)</label>
                <select 
                  value={multiplicityTo}
                  onChange={(e) => setMultiplicityTo(e.target.value)}
                >
                  {multiplicityOptions.map(mult => (
                    <option key={mult} value={mult}>{mult}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={addRelationship}
                disabled={!fromEntity || !toEntity}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Relationship
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Current Relationships</h3>
              <div className="relationship-list">
                {relationships.map(rel => {
                  const from = entities.find(e => e.id === rel.from);
                  const to = entities.find(e => e.id === rel.to);
                  
                  if (!from || !to) return null;
                  
                  return (
                    <div key={rel.id} className="list-item">
                      <div className="item-name">
                        {from.name} → {to.name}
                        <div className="item-type">({rel.type})</div>
                        {(rel.multiplicityFrom !== '1' || rel.multiplicityTo !== '1') && (
                          <div className="item-multiplicity">
                            {rel.multiplicityFrom} to {rel.multiplicityTo}
                          </div>
                        )}
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

            <div className="sidebar-section">
              <h3>Domain Model Guide</h3>
              <div className="notation-guide">
                <div className="guide-item">
                  <strong>Canvas Controls:</strong>
                  <div>🎨 Randomize all colors</div>
                  <div>🔍 Zoom in/out</div>
                  <div>↺ Reset view</div>
                  <div>🖱️ Drag to pan canvas</div>
                </div>
                <div className="guide-item">
                  <strong>Relationship Types:</strong>
                  <div>Association: Solid line</div>
                  <div>Navigable: Solid line with arrow</div>
                  <div>Inheritance: Solid line with triangle</div>
                  <div>Realization: Dashed line with triangle</div>
                  <div>Dependency: Dashed line with arrow</div>
                  <div>Aggregation: Line with empty diamond</div>
                  <div>Composition: Line with filled diamond</div>
                </div>
                <div className="guide-item">
                  <strong>Multiplicity:</strong>
                  <div>1: Exactly one</div>
                  <div>*: Zero or more</div>
                  <div>0..1: Zero or one</div>
                  <div>1..*: One or more</div>
                  <div>0..*: Zero or more</div>
                </div>
                <div className="guide-item">
                  <strong>Quick Tips:</strong>
                  <div>• Double-click canvas to add entity</div>
                  <div>• Double-click entity to edit</div>
                  <div>• Drag to move entities</div>
                  <div>• Drag resize handle to resize</div>
                  <div>• Use mouse wheel to zoom</div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="diagram-canvas-container"
            style={{
              position: 'relative',
              flex: 1,
              overflow: 'auto',
              background: 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}
          >
            <div 
              className="diagram-canvas" 
              ref={canvasRef}
              onDoubleClick={handleCanvasDoubleClick}
              onMouseDown={handleCanvasMouseDown}
              onWheel={handleWheel}
              style={{
                width: `${boundaries.maxX - boundaries.minX}px`,
                height: `${boundaries.maxY - boundaries.minY}px`,
                position: 'relative',
                cursor: isPanning ? 'grabbing' : 'grab'
              }}
            >
              <div 
                className="canvas-content"
                style={{
                  transform: `scale(${zoom}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                  transformOrigin: '0 0',
                  width: '100%',
                  height: '100%',
                  position: 'relative'
                }}
              >
                {relationships.map(renderRelationship)}
                {entities.map(renderEntity)}
              </div>
            </div>
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

      {/* Entity Editor Modal */}
      {editingItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit Entity: {editingItem.name}</h3>
              <button onClick={closeFull} className="modal-close-btn">
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="edit-sections-container">
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
                      <div 
                        key={i} 
                        className="item-row"
                        onClick={() => openAttributeEditor(editingItem.id, i)}
                      >
                        <div className="item-text">
                          {attr.name} : {attr.type}
                        </div>
                        <div className="item-actions">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteAttribute(editingItem.id, i);
                            }}
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
              </div>
            </div>
            
            <div className="modal-footer">
              <button onClick={closeFull} className="modal-cancel-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attribute Editor Modal */}
      {(editingItem && editType) && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>
                {editType === 'attribute' ? 
                  (editIndex >= 0 ? 'Edit Attribute' : 'Add Attribute') : ''}
              </h3>
              <button onClick={closeEditor} className="modal-close-btn">
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              {editType === 'attribute' && (
                <>
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
              )}
            </div>
            
            <div className="modal-footer">
              <button onClick={closeEditor} className="modal-cancel-btn">
                Cancel
              </button>
              <button 
                onClick={saveAttribute}
                disabled={!newAttribute.name}
                className="modal-save-btn"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .domain-model-maker {
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
        
        .canvas-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 16px;
          padding: 8px;
          background: #f1f5f9;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .control-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-indicator {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          min-width: 40px;
          text-align: center;
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
          background: #3B82F6;
          color: white;
          border: 1px solid #3B82F6;
        }
        
        .export-btn:hover {
          background: #2563EB;
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
          color: #3B82F6;
          border-bottom-color: #3B82F6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 280px;
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
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #3B82F6;
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
          background: #2563EB;
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
        
        .entity-list,
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
        
        .item-multiplicity {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 1px;
          font-style: italic;
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
        
        .diagram-canvas-container {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: auto;
        }
        
        .diagram-canvas {
          position: relative;
          cursor: grab;
        }
        
        .diagram-canvas:active {
          cursor: grabbing;
        }
        
        .canvas-content {
          position: relative;
          background: 
            radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        .entity-box {
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
        
        .entity-box:hover {
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
        }
        
        .entity-header {
          padding: 12px 16px;
          text-align: center;
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .entity-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .entity-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0px 0;
        }
        
        .attributes-section {
          display: flex;
          flex-direction: column;
        }
        
        .entity-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 8px;
          padding-right: 0px;
          margin-bottom: 2px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 22px;
        }
        
        .entity-item:hover {
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
        
        .item-delete-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          opacity: 0;
          padding: 4px;
          padding-left: 0;
          border-radius: 3px;
          margin-left: 8px;
          transition: all 0.15s;
        }
        
        .entity-item:hover .item-delete-btn {
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
        
        .entity-box:hover .resize-handle {
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
          background: #3B82F6;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #2563EB;
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
          border-color: #3B82F6;
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
          width: 600px;
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
        
        .edit-sections-container {
          display: flex;
          gap: 24px;
        }
        
        .edit-sections-container > .edit-section {
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
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #2563EB;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Entity Editor Modal Styles */
        .edit-section {
          margin-top: 0;
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
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #2563EB;
        }
        
        .items-list {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
        }
        
        .item-row:hover {
          background: #f8fafc;
        }
        
        .item-row:last-child {
          border-bottom: none;
        }
        
        .item-actions {
          display: flex;
          gap: 8px;
        }
        
        .empty-message {
          padding: 16px;
          text-align: center;
          color: #9ca3af;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default DomainModelMaker;