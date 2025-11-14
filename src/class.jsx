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
  X,
  ZoomIn,
  ZoomOut,
  Palette,
  Code,
  FileText,
  RefreshCw
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
  const [classType, setClassType] = useState('class'); // 'class', 'abstract', 'interface'
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizingItem, setResizingItem] = useState(null);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const [editingItem, setEditingItem] = useState(null);
  const [editType, setEditType] = useState(''); // 'attribute' or 'method'
  const [editIndex, setEditIndex] = useState(-1); // -1 for new item
  const [newAttribute, setNewAttribute] = useState({ visibility: '+', name: '', type: 'String', defaultValue: '' });
  const [newMethod, setNewMethod] = useState({ visibility: '+', name: '', returnType: 'void', isAbstract: false });
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [generatedCode, setGeneratedCode] = useState('');
  const canvasRef = useRef(null);
  const codeDisplayRef = useRef(null);
  const [isMouseOverCanvas, setIsMouseOverCanvas] = useState(false);

  // Color schemes for classes (pink theme with variations)
  const colorSchemes = [
    { header: '#EC4899', border: '#BE185D', background: '#FDF2F8' }, // Primary pink
    { header: '#DB2777', border: '#9D174D', background: '#FCE7F3' }, // Darker pink
    { header: '#F472B6', border: '#EC4899', background: '#FDF2F8' }, // Lighter pink
    { header: '#F43F5E', border: '#E11D48', background: '#FFF1F2' }, // Rose
    { header: '#F97316', border: '#EA580C', background: '#FFEDD5' }, // Orange
    { header: '#8B5CF6', border: '#7C3AED', background: '#F5F3FF' }, // Violet
    { header: '#3B82F6', border: '#2563EB', background: '#EFF6FF' }, // Blue
    { header: '#10B981', border: '#059669', background: '#ECFDF5' }, // Green
    { header: '#EF4444', border: '#DC2626', background: '#FEF2F2' }, // Red
    { header: '#8B5A2B', border: '#A16207', background: '#FFFBEB' }, // Brown
    { header: '#6B7280', border: '#4B5563', background: '#F9FAFB' }, // Gray
    { header: '#14B8A6', border: '#0D9488', background: '#F0FDFA' }, // Teal
  ];

  // Common data types for dropdowns
  const dataTypes = ['String', 'int', 'float', 'double', 'boolean', 'void', 'char', 'long', 'short', 'byte'];
  const visibilityOptions = [
    { value: '+', label: 'Public (+)' },
    { value: '-', label: 'Private (-)' },
    { value: '#', label: 'Protected (#)' },
    { value: '~', label: 'Package (~)' }
  ];

  const javaTypeMapping = {
    'String': 'String',
    'int': 'int',
    'float': 'float',
    'double': 'double',
    'boolean': 'boolean',
    'void': 'void',
    'char': 'char',
    'long': 'long',
    'short': 'short',
    'byte': 'byte'
  };

  useEffect(() => {
    setJsonInput(JSON.stringify({ classes, relationships }, null, 2));
  }, [classes, relationships]);

  const getRandomColorScheme = () => {
    return colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
  };

  const randomizeAllColors = () => {
    const updatedClasses = classes.map(cls => ({
      ...cls,
      colorScheme: getRandomColorScheme()
    }));
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.2, 0.3));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
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
    
    // Calculate width based on class name (consider stereotype for interfaces)
    const nameToMeasure = cls.classType === 'interface' ? `<<interface>> ${cls.name}` : cls.name;
    const classNameWidth = calculateTextWidth(nameToMeasure, '16px', "'Inter', sans-serif") + padding;
    
    // Calculate width based on attributes
    let maxAttributeWidth = 0;
    (cls.attributes || []).forEach(attr => {
      const attrText = `${attr.visibility} ${attr.name} : ${attr.type}`;
      const width = calculateTextWidth(attrText) + padding;
      if (width > maxAttributeWidth) maxAttributeWidth = width;
    });
    
    // Calculate width based on methods
    let maxMethodWidth = 0;
    (cls.methods || []).forEach(method => {
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
    
    // Calculate height based on content with tighter spacing
    const headerHeight = cls.classType === 'interface' ? 50 : 40; // Extra height for stereotype
    const itemHeight = 26;
    const sectionPadding = 6;
    const dividerHeight = 1;
    
    // Calculate attributes height
    const attributesHeight = (cls.attributes || []).length > 0 
      ? ((cls.attributes || []).length * itemHeight) + sectionPadding * 2
      : 0;
      
    // Calculate methods height
    const methodsHeight = (cls.methods || []).length > 0
      ? ((cls.methods || []).length * itemHeight) + sectionPadding * 2
      : 0;
    
    // Add divider height only if both sections exist
    const dividerSpace = ((cls.attributes || []).length > 0 && (cls.methods || []).length > 0) ? dividerHeight : 0;
    
    const calculatedHeight = headerHeight + attributesHeight + methodsHeight + dividerSpace;
    
    return {
      width: Math.min(calculatedWidth, 400),
      height: Math.max(calculatedHeight, 60)
    };
  };

  const addClass = () => {
    if (!newClassName.trim()) return;
    
    const colorScheme = getRandomColorScheme();
    const newClass = {
      id: Date.now(),
      name: newClassName,
      classType: classType,
      attributes: [],
      methods: [],
      x: 50 + Math.random() * 200,
      y: 50 + Math.random() * 200,
      colorScheme
    };
    
    const dimensions = calculateClassDimensions(newClass);
    
    const updatedClasses = [
      ...classes,
      {
        ...newClass,
        width: dimensions.width,
        height: dimensions.height
      }
    ];
    
    onUpdateClassDiagram({
      ...classDiagram,
      classes: updatedClasses
    });
    
    setNewClassName('');
    setClassType('class');
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
      setNewMethod({ 
        visibility: '+', 
        name: '', 
        returnType: 'void',
        isAbstract: cls.classType === 'abstract' || cls.classType === 'interface'
      });
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

    const latestEditingItem = updatedClasses.find(c => c.id === editingItem.id);
    if (latestEditingItem) {
      setEditingItem(latestEditingItem);
    }
    
    closeEditor();
  };

  const saveMethod = () => {
    if (!newMethod.name.trim()) return;
    
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

    const latestEditingItem = updatedClasses.find(c => c.id === editingItem.id);
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

    const latestEditingItem = updatedClasses.find(e => e.id === classId);
    if (latestEditingItem) {
      setEditingItem(latestEditingItem);
    }
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

    const latestEditingItem = updatedClasses.find(e => e.id === classId);
    if (latestEditingItem) {
      setEditingItem(latestEditingItem);
    }
  };

  const deleteRelationship = (relationshipId) => {
    const updatedRelationships = relationships.filter(rel => rel.id !== relationshipId);
    onUpdateClassDiagram({
      ...classDiagram,
      relationships: updatedRelationships
    });
  };

  const handleMouseDown = (e, cls = null, isResize = false) => {
    e.stopPropagation();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    if (cls) {
      if (isResize) {
        setResizingItem(cls);
        setResizeStart({ x: e.clientX, y: e.clientY });
      } else {
        setDragItem(cls);
        setDragOffset({
          x: (e.clientX - rect.left) / zoom - panOffset.x - cls.x,
          y: (e.clientY - rect.top) / zoom - panOffset.y - cls.y
        });
      }
    } else {
      setIsPanning(true);
      setPanStart({
        x: e.clientX - panOffset.x,
        y: e.clientY - panOffset.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragItem) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = Math.max(0, (e.clientX - rect.left) / zoom - panOffset.x - dragOffset.x);
      const y = Math.max(0, (e.clientY - rect.top) / zoom - panOffset.y - dragOffset.y);
      
      const updatedClasses = classes.map(cls => 
        cls.id === dragItem.id ? { ...cls, x, y } : cls
      );
      
      onUpdateClassDiagram({
        ...classDiagram,
        classes: updatedClasses
      });
    } else if (resizingItem) {
      const dx = (e.clientX - resizeStart.x) / zoom;
      const dy = (e.clientY - resizeStart.y) / zoom;
      
      const updatedClasses = classes.map(cls => {
        if (cls.id === resizingItem.id) {
          const newWidth = Math.max(180, cls.width + dx);
          const newHeight = Math.max(90, cls.height + dy);
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
    } else if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setDragItem(null);
    setResizingItem(null);
    setIsPanning(false);
  };

  const handleWheel = (e) => {
    if (e.ctrlKey || !isMouseOverCanvas) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prev => Math.max(0.3, Math.min(3, prev * delta)));
    }
  };

  useEffect(() => {
    if (dragItem || resizingItem || isPanning) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, resizingItem, isPanning, dragOffset, resizeStart, panStart, zoom, panOffset]);

  const calculateCanvasBoundaries = () => {
    if (classes.length === 0) {
      return { minX: 0, maxX: 1000, minY: 0, maxY: 1000 };
    }

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    classes.forEach(cls => {
      minX = Math.min(minX, cls.x);
      maxX = Math.max(maxX, cls.x + cls.width);
      minY = Math.min(minY, cls.y);
      maxY = Math.max(maxY, cls.y + cls.height);
    });

    const padding = 200;
    return {
      minX: Math.min(minX, 0) - padding,
      maxX: Math.max(maxX, 1000) + padding,
      minY: Math.min(minY, 0) - padding,
      maxY: Math.max(maxY, 1000) + padding
    };
  };

  const generateJavaCode = () => {
  let code = `// Generated Java Code from Class Diagram\n// ${classDiagram.name || 'Untitled Diagram'}\n\n`;

  // FIX: Store ALL parents instead of one
  const inheritanceMap = {};
  relationships
    .filter(rel => rel.type === "inheritance" || rel.type === "realization")
    .forEach(rel => {
      if (!inheritanceMap[rel.from]) inheritanceMap[rel.from] = [];
      inheritanceMap[rel.from].push(rel.to);
    });

  classes.forEach(cls => {
    const parentIds = inheritanceMap[cls.id] || [];

    let parentClass = null;
    let parentInterfaces = [];

    // Separate class vs interfaces
    parentIds.forEach(pid => {
      const p = classes.find(c => c.id === pid);
      if (!p) return;

      if (p.classType === "class" || p.classType === "abstract") {
        parentClass = p;   // Only ONE allowed
      } else if (p.classType === "interface") {
        parentInterfaces.push(p.name); // MANY allowed
      }
    });

    // ───────────────────────────────────
    // INTERFACE
    // ───────────────────────────────────
    if (cls.classType === "interface") {
      code += `public interface ${cls.name}`;
      if (parentInterfaces.length > 0) {
        code += ` extends ${parentInterfaces.join(", ")}`;
      }
      code += " {\n\n";

      if (cls.methods?.length > 0) {
        cls.methods.forEach(method => {
          const javaReturn = javaTypeMapping[method.returnType] || method.returnType;
          const name = method.name.includes("(") ? method.name : `${method.name}()`;
          code += `    ${javaReturn} ${name};\n\n`;
        });
      }

      code += "}\n\n";
      return;
    }

    // ───────────────────────────────────
    // CLASS / ABSTRACT CLASS
    // ───────────────────────────────────
    if (cls.classType === "abstract") {
      code += `public abstract class ${cls.name}`;
    } else {
      code += `public class ${cls.name}`;
    }

    if (parentClass) code += ` extends ${parentClass.name}`;
    if (parentInterfaces.length > 0) code += ` implements ${parentInterfaces.join(", ")}`;

    code += " {\n\n";

    // 🎯 Attributes
    if (cls.attributes?.length > 0) {
      cls.attributes.forEach(attr => {
        const javaType = javaTypeMapping[attr.type] || attr.type;
        const vis = getJavaVisibility(attr.visibility);
        const defaultVal = attr.defaultValue
          ? formatDefaultValue(attr.defaultValue, javaType)
          : getDefaultValue(javaType);

        code += `    ${vis} ${javaType} ${attr.name}${attr.defaultValue ? ` = ${defaultVal}` : ""};\n`;
      });
      code += "\n";
    }

    // 🎯 Default Constructor
    code += `    public ${cls.name}() {\n`;
    (cls.attributes || []).forEach(attr => {
      if (attr.defaultValue) {
        const javaType = javaTypeMapping[attr.type] || attr.type;
        const def = formatDefaultValue(attr.defaultValue, javaType);
        code += `        this.${attr.name} = ${def};\n`;
      }
    });
    code += `    }\n\n`;

    // 🎯 Parameterized Constructor
    if (cls.attributes?.length > 0) {
      const params = cls.attributes
        .map(attr => `${javaTypeMapping[attr.type] || attr.type} ${attr.name}`)
        .join(", ");

      code += `    public ${cls.name}(${params}) {\n`;
      cls.attributes.forEach(attr => {
        code += `        this.${attr.name} = ${attr.name};\n`;
      });
      code += "    }\n\n";
    }

    // 🎯 Methods
    if (cls.methods?.length > 0) {
      cls.methods.forEach(method => {
        const javaReturn = javaTypeMapping[method.returnType] || method.returnType;
        const vis = getJavaVisibility(method.visibility);
        const name = method.name.includes("(") ? method.name : `${method.name}()`;

        if (method.isAbstract) {
          code += `    ${vis} abstract ${javaReturn} ${name};\n\n`;
        } else {
          code += `    ${vis} ${javaReturn} ${name} {\n`;
          if (javaReturn !== "void") {
            code += `        return ${getDefaultValue(javaReturn)};\n`;
          }
          code += "    }\n\n";
        }
      });
    }
    code += "}\n\n";
  });

  setGeneratedCode(code);
  setActiveTab("code");
};

  const formatDefaultValue = (value, javaType) => {
    if (value.trim() === '') {
      return getDefaultValue(javaType);
    }
    
    if (javaType === 'String' && !value.startsWith('"') && !value.endsWith('"')) {
      return `"${value}"`;
    }
    
    if (javaType === 'char' && value.length === 1 && !value.startsWith("'")) {
      return `'${value}'`;
    }
    
    if (javaType === 'boolean') {
      const lowerValue = value.toLowerCase();
      if (lowerValue === 'true' || lowerValue === 'false') {
        return lowerValue;
      }
    }
    
    return value;
  };

  const getJavaVisibility = (umlVisibility) => {
    switch (umlVisibility) {
      case '+': return 'public';
      case '-': return 'private';
      case '#': return 'protected';
      case '~': return '';
      default: return 'public';
    }
  };

  const getDefaultValue = (javaType) => {
    switch (javaType) {
      case 'int': case 'long': case 'short': case 'byte': return '0';
      case 'float': case 'double': return '0.0';
      case 'boolean': return 'false';
      case 'char': return "'\\0'";
      default: return 'null';
    }
  };

  const getRelationshipDescription = (type) => {
    switch (type) {
      case 'association': return 'has association with';
      case 'navigable': return 'navigates to';
      case 'aggregation': return 'aggregates';
      case 'composition': return 'composes';
      default: return 'relates to';
    }
  };

  const downloadJavaCode = () => {
    if (!generatedCode) return;
    
    const blob = new Blob([generatedCode], { type: 'text/x-java-source' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${classDiagram.name || 'GeneratedClasses'}.java`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyJavaCode = () => {
    if (!generatedCode) return;
    
    navigator.clipboard.writeText(generatedCode)
      .then(() => {
        alert('Java code copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  };

  const highlightJavaCode = (code) => {
    if (!code) return '// Click "Generate Java Code" to generate code from your diagram';
    
    const keywords = [
      'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const',
      'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float',
      'for', 'goto', 'if', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native',
      'new', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
      'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'void', 'volatile', 'while'
    ];
    
    const types = ['String', 'int', 'float', 'double', 'boolean', 'void', 'char', 'long', 'short', 'byte'];
    
    const escapeHtml = (text) => {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    };

    let highlighted = escapeHtml(code);
    
    highlighted = highlighted.replace(
      /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g,
      '<span class="string">$1</span>'
    );
    
    highlighted = highlighted.replace(
      /(\/\/[^\n]*$)/gm,
      '<span class="comment">$1</span>'
    );
    
    highlighted = highlighted.replace(
      /(\/\*[\s\S]*?\*\/)/g,
      '<span class="comment">$1</span>'
    );
    
    highlighted = highlighted.replace(
      /(\b\d+\.?\d*|\.\d+)([fFlL]?)\b(?!([^<]*>)|([^<]*<\/span>))/g,
      '<span class="number">$1$2</span>'
    );
    
    highlighted = highlighted.replace(
      /\b(class|extends|implements|interface)\s+(\w+)\b/g,
      '$1 <span class="class-name">$2</span>'
    );
    
    types.forEach(type => {
      const regex = new RegExp(`\\b${type}\\b(?!([^<]*>)|([^<]*<\\/span>))`, 'g');
      highlighted = highlighted.replace(
        regex,
        `<span class="type">${type}</span>`
      );
    });
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b(?!([^<]*>)|([^<]*<\\/span>))`, 'g');
      highlighted = highlighted.replace(
        regex,
        `<span class="keyword">${keyword}</span>`
      );
    });
    
    return highlighted;
  };

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
        const classo = data.classes.map(cls => ({
          ...cls,
          ...calculateClassDimensions(cls)
        }));

        onUpdateClassDiagram({
          ...classDiagram,
          classes: classo,
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
    
    const originalTransform = canvasRef.current.style.transform;
    canvasRef.current.style.transform = 'scale(1) translate(0px, 0px)';
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(canvasRef.current, {
        backgroundColor: '#f8fafc',
        scale: 2,
        useCORS: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${classDiagram.name || 'class-diagram'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        canvasRef.current.style.transform = originalTransform;
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

  const renderClass = (cls) => {
    const colorScheme = cls.colorScheme || colorSchemes[0];
    const isInterface = cls.classType === 'interface';
    const isAbstract = cls.classType === 'abstract';
    
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
          {isInterface && (
            <div className="stereotype">&lt;&lt;interface&gt;&gt;</div>
          )}
          <div className={`class-name ${isAbstract ? 'italic' : ''}`}>
            {cls.name}
          </div>
        </div>
        
        <div className="class-content">
          {cls.attributes && cls.attributes.length > 0 && (
            <div className="attributes-section">
              {cls.attributes.map((attr, i) => (
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
              ))}
            </div>
          )}
          
          {cls.attributes && cls.methods && cls.attributes.length > 0 && cls.methods.length > 0 && (
            <div className="section-divider" style={{ backgroundColor: colorScheme.border }} />
          )}
          
          {cls.methods && cls.methods.length > 0 && (
            <div className="methods-section">
              {cls.methods.map((method, i) => (
                <div 
                  key={i} 
                  className="class-item"
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    openMethodEditor(cls.id, i);
                  }}
                >
                  <span className={`item-text ${method.isAbstract ? 'italic' : ''}`}>
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
              ))}
            </div>
          )}
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
            </>
          );
        })()}
      </svg>
    );
  };

  const handleCanvasDoubleClick = (e) => {
    if (e.target === canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / zoom - panOffset.x;
      const y = (e.clientY - rect.top) / zoom - panOffset.y;
      
      const className = prompt('Enter class name:');
      if (className && className.trim()) {
        const colorScheme = getRandomColorScheme();
        const newClass = {
          id: Date.now(),
          name: className.trim(),
          classType: 'class',
          attributes: [],
          methods: [],
          x: x - 90,
          y: y - 40,
          colorScheme
        };
        
        const dimensions = calculateClassDimensions(newClass);
        
        const updatedClasses = [
          ...classes,
          {
            ...newClass,
            width: dimensions.width,
            height: dimensions.height
          }
        ];
        
        onUpdateClassDiagram({
          ...classDiagram,
          classes: updatedClasses
        });
      }
    }
  };

  const boundaries = calculateCanvasBoundaries();

  return (
    <div className="class-diagram-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{classDiagram.name}</h2>
        <div className="spacer"></div>
        <div className="toolbar-controls">
          <div className="zoom-controls">
            <button onClick={handleZoomOut} className="zoom-btn">
              <ZoomOut size={16} />
            </button>
            <span className="zoom-level">{Math.round(zoom * 100)}%</span>
            <button onClick={handleZoomIn} className="zoom-btn">
              <ZoomIn size={16} />
            </button>
            <button onClick={handleResetZoom} className="zoom-btn reset">
              Reset
            </button>
          </div>
          <button onClick={randomizeAllColors} className="color-btn">
            <Palette size={16} /> Randomize Colors
          </button>
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
        <button 
          className={`tab ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          Java Code
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
                <select
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  style={{ marginTop: '8px' }}
                >
                  <option value="class">Class</option>
                  <option value="abstract">Abstract Class</option>
                  <option value="interface">Interface</option>
                </select>
                <button onClick={addClass} className="add-btn">
                  <Plus size={16} /> Add {classType === 'interface' ? 'Interface' : classType === 'abstract' ? 'Abstract Class' : 'Class'}
                </button>
              </div>
              <div className="class-list">
                {classes.map(cls => (
                  <div key={cls.id} className="list-item">
                    <div className="item-name">
                      {cls.name}
                      {cls.classType === 'interface' && <span className="class-type-badge">Interface</span>}
                      {cls.classType === 'abstract' && <span className="class-type-badge">Abstract</span>}
                    </div>
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
                  <strong>Class Types:</strong>
                  <div>Regular Class</div>
                  <div><em>Abstract Class</em> (italic)</div>
                  <div>&lt;&lt;interface&gt;&gt;</div>
                </div>
                <div className="guide-item">
                  <strong>Quick Tips:</strong>
                  <div>• Double-click canvas to add class</div>
                  <div>• Double-click class to edit</div>
                  <div>• Drag to move classes</div>
                  <div>• Drag resize handle to resize</div>
                  <div>• Mouse wheel + Ctrl to zoom</div>
                  <div>• Drag empty space to pan</div>
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
              onMouseEnter={() => setIsMouseOverCanvas(true)}
              onMouseLeave={() => setIsMouseOverCanvas(false)}
              onDoubleClick={handleCanvasDoubleClick}
              onMouseDown={(e) => handleMouseDown(e)}
              onWheel={handleWheel}
              style={{
                width: `${boundaries.maxX - boundaries.minX}px`,
                height: `${boundaries.maxY - boundaries.minY}px`,
                position: 'relative',
                cursor: isPanning ? 'grabbing' : 'grab'
              }}
            >
              <div 
                className="diagram-content"
                style={{
                  transform: `scale(${zoom}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                  transformOrigin: '0 0',
                  width: '100%',
                  height: '100%',
                  position: 'relative'
                }}
              >
                {relationships.map(renderRelationship)}
                {classes.map(renderClass)}
              </div>
            </div>
          </div>
        </div>
      ) : activeTab === 'json' ? (
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
      ) : (
        <div className="code-editor">
          <div className="code-actions">
            <button onClick={generateJavaCode} className="generate-code-btn">
              <Code size={16} /> Generate Java Code
            </button>
            <button onClick={copyJavaCode} className="copy-code-btn">
              <Copy size={16} /> Copy Code
            </button>
            <button onClick={downloadJavaCode} className="download-code-btn">
              <Download size={16} /> Download Java File
            </button>
          </div>
          <div 
            ref={codeDisplayRef}
            className="code-display"
          >
            <pre>
              <code 
                dangerouslySetInnerHTML={{ 
                  __html: highlightJavaCode(generatedCode) 
                }} 
              />
            </pre>
          </div>
        </div>
      )}

      {/* Class Editor Modal */}
      {editingItem && !editType && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit {editingItem.classType === 'interface' ? 'Interface' : editingItem.classType === 'abstract' ? 'Abstract Class' : 'Class'}: {editingItem.name}</h3>
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
                    {editingItem.attributes && editingItem.attributes.map((attr, i) => (
                      <div 
                        key={i} 
                        className="item-row"
                        onClick={() => openAttributeEditor(editingItem.id, i)}
                      >
                        <div className="item-text">
                          {attr.visibility} {attr.name} : {attr.type}
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
                    {(!editingItem.attributes || editingItem.attributes.length === 0) && (
                      <div className="empty-message">No attributes defined</div>
                    )}
                  </div>
                </div>
                
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
                    {editingItem.methods && editingItem.methods.map((method, i) => (
                      <div 
                        key={i} 
                        className="item-row"
                        onClick={() => openMethodEditor(editingItem.id, i)}
                      >
                        <div className={`item-text ${method.isAbstract ? 'italic' : ''}`}>
                          {method.visibility} {method.name} : {method.returnType}
                          {method.isAbstract && <span className="abstract-badge">abstract</span>}
                        </div>
                        <div className="item-actions">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteMethod(editingItem.id, i);
                            }}
                            className="delete-btn"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                    {(!editingItem.methods || editingItem.methods.length === 0) && (
                      <div className="empty-message">No methods defined</div>
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
                  <div className="form-group">
                    <label>Default Value (for code generation)</label>
                    <input
                      type="text"
                      value={newAttribute.defaultValue || ''}
                      onChange={(e) => setNewAttribute({...newAttribute, defaultValue: e.target.value})}
                      placeholder="Optional default value (e.g., 0, null, 'default')"
                    />
                    <div className="help-text">
                      This value will be used in code generation but won't be shown in the diagram
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
                  {(editingItem.classType === 'abstract' || editingItem.classType === 'interface') && (
                    <div className="form-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={newMethod.isAbstract || false}
                          onChange={(e) => setNewMethod({...newMethod, isAbstract: e.target.checked})}
                        />
                        <span>Abstract Method</span>
                      </label>
                    </div>
                  )}
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
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .generate-code-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #10B981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .generate-code-btn:hover {
          background: #059669;
        }

        .code-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          background: white;
          min-height: 0;
          overflow: hidden;
        }
        
        .code-actions {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
          flex-shrink: 0;
        }
        
        .copy-code-btn, .download-code-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background-color 0.2s;
        }
        
        .copy-code-btn {
          background: #3B82F6;
          color: white;
        }
        
        .copy-code-btn:hover {
          background: #2563EB;
        }
        
        .download-code-btn {
          background: #8B5CF6;
          color: white;
        }
        
        .download-code-btn:hover {
          background: #7C3AED;
        }
        
        .code-display {
          flex: 1;
          margin: 0;
          padding: 20px;
          background: #1e293b;
          color: #e2e8f0;
          overflow: auto;
          font-family: 'Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        .code-display pre {
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
        }
        
        .code-display code {
          font-family: inherit;
        }
        
        .code-display .comment {
          color: #94a3b8;
          font-style: italic;
        }
        
        .code-display .keyword {
          color: #f472b6;
          font-weight: bold;
        }
        
        .code-display .type {
          color: #60a5fa;
          font-weight: 500;
        }
        
        .code-display .string {
          color: #34d399;
        }
        
        .code-display .number {
          color: #fbbf24;
        }
        
        .code-display .class-name {
          color: #f59e0b;
          font-weight: bold;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px;
          background: #f1f5f9;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .zoom-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-btn.reset {
          width: auto;
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .zoom-level {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }
        
        .color-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #8B5CF6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .color-btn:hover {
          background: #7C3AED;
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
          background: #EC4899;
          color: white;
          border: 1px solid #EC4899;
        }
        
        .export-btn:hover {
          background: #DB2777;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
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
          color: #EC4899;
          border-bottom-color: #EC4899;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }
        
        .diagram-sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          overflow-x: hidden;
          flex-shrink: 0;
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
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        
        .checkbox-label input[type="checkbox"] {
          width: auto;
          cursor: pointer;
        }
        
        .checkbox-label span {
          font-size: 14px;
          color: #1e293b;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #EC4899;
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
          background: #DB2777;
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
        
        .class-type-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 10px;
          border-radius: 4px;
          font-weight: 500;
        }
        
        .abstract-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          background: #fef3c7;
          color: #92400e;
          font-size: 10px;
          border-radius: 4px;
          font-weight: 500;
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
          flex-shrink: 0;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-container {
          position: relative;
          flex: 1;
          overflow: auto;
          min-width: 0;
        }
        
        .diagram-canvas {
          position: relative;
          cursor: grab;
        }
        
        .diagram-canvas:active {
          cursor: grabbing;
        }
        
        .diagram-content {
          position: absolute;
          top: 0;
          left: 0;
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
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .stereotype {
          font-size: 11px;
          font-weight: 400;
          margin-bottom: 4px;
          opacity: 0.9;
        }
        
        .class-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .class-name.italic {
          font-style: italic;
        }
        
        .class-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .attributes-section, .methods-section {
          display: flex;
          flex-direction: column;
          padding: 3px 0;
        }
        
        .section-divider {
          height: 1px;
          margin: 0 16px;
        }
        
        .class-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 16px;
          margin-bottom: 1px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 18px;
        }
        
        .class-item:hover {
          background: rgba(236, 72, 153, 0.1);
        }
        
        .item-text {
          flex: 1;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 12px;
          color: #374151;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-text.italic {
          font-style: italic;
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
          min-height: 0;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-shrink: 0;
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
          background: #EC4899;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #DB2777;
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
          overflow: auto;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .help-text {
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
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
          flex-shrink: 0;
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
          min-height: 0;
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
          flex-shrink: 0;
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
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #DB2777;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Class Editor Modal Styles */
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
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #DB2777;
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

export default ClassDiagramMaker;