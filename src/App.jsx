import React, { act, useReducer, useState } from 'react';
import EvolutionChartMain from './treecanvas';
import EvolutionChartMaker from './timeline';
import FlowchartMain from './flowchartmain';
import FlowchartMaker from './flowchart';
import GanttChartMain from './ganttchartmain';
import GanttChartMaker from './gantt';
import UseCaseDiagramMain from './usecasemain';
import UseCaseDiagramMaker from './usecase';
import SequenceDiagramMain from './sequencemain';
import SequenceDiagramMaker from './sequence';
import ArchitectureDiagramMain from './architecturemain';
import ArchitectureDiagramMaker from './architecture';
import ClassDiagramMain from './classmain';
import ClassDiagramMaker from './class';
import DomainModelMain from './domainmodelmain';
import DomainModelMaker from './domainmodel';
import MindMapMain from './mindmapmain';
import MindMapMaker from './mindmap';
import ActivityDiagramMain from './activitymain';
import ActivityDiagramMaker from './activity';

// Diagram type constants
const DIAGRAM_TYPES = {
  PROJECT: 'projects',
  FLOWCHART: 'flowcharts',
  GANTT: 'gantt',
  USE_CASE: 'usecase',
  SEQUENCE: 'sequence',
  ARCHITECTURE: 'architecture',
  CLASS: 'class',
  DOMAIN_MODEL: 'domainmodel',
  MIND_MAP: 'mindmap',
  ACTIVITY: 'activity'
};

// Initial data structure
const getInitialData = () => ({
  projects: [],
  currentProject: null,
  flowcharts: [],
  currentFlowchart: null,
  ganttCharts: [],
  currentGanttChart: null,
  useCaseDiagrams: [],
  currentUseCaseDiagram: null,
  sequenceDiagrams: [],
  currentSequenceDiagram: null,
  architectureDiagrams: [],
  currentArchitectureDiagram: null,
  classDiagrams: [],
  currentClassDiagram: null,
  domainModels: [],
  currentDomainModel: null,
  mindMaps: [],
  currentMindMap: null,
  activityDiagrams: [],
  currentActivityDiagram: null
});

const getStoredData = () => {
  const savedData = localStorage.getItem('evolutionChartData');
  if (!savedData) return getInitialData();

  try {
    const parsed = JSON.parse(savedData);
    return {
      ...getInitialData(),
      ...parsed
    };
  } catch (e) {
    console.error('Failed to parse localStorage data:', e);
    return getInitialData();
  }
};

const saveToStorage = (data) => {
  localStorage.setItem('evolutionChartData', JSON.stringify(data));
};

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [activeTab, setActiveTab] = useState(DIAGRAM_TYPES.PROJECT);
  const [jsonInput, setJsonInput] = useState('');

  // Get current data from storage
  const getCurrentData = () => getStoredData();

  // Generic diagram creation function
  const createDiagram = (type, name, extraData = {}) => {
    const currentData = getCurrentData();
    const baseDiagram = {
      id: Date.now(),
      name,
      createdAt: new Date().toISOString(),
      ...extraData
    };

    // Create update object that preserves all existing data
    const updateData = { ...currentData };
    
    // Clear all current selections
    updateData.currentProject = null;
    updateData.currentFlowchart = null;
    updateData.currentGanttChart = null;
    updateData.currentUseCaseDiagram = null;
    updateData.currentSequenceDiagram = null;
    updateData.currentArchitectureDiagram = null;
    updateData.currentClassDiagram = null;
    updateData.currentDomainModel = null;
    updateData.currentMindMap = null;
    updateData.currentActivityDiagram = null;

    // Add new diagram and set as current
    switch (type) {
      case DIAGRAM_TYPES.PROJECT:
        updateData.projects = [...currentData.projects, baseDiagram];
        updateData.currentProject = baseDiagram;
        break;
      case DIAGRAM_TYPES.FLOWCHART:
        updateData.flowcharts = [...currentData.flowcharts, baseDiagram];
        updateData.currentFlowchart = baseDiagram;
        break;
      case DIAGRAM_TYPES.GANTT:
        updateData.ganttCharts = [...currentData.ganttCharts, baseDiagram];
        updateData.currentGanttChart = baseDiagram;
        break;
      case DIAGRAM_TYPES.USE_CASE:
        updateData.useCaseDiagrams = [...currentData.useCaseDiagrams, baseDiagram];
        updateData.currentUseCaseDiagram = baseDiagram;
        break;
      case DIAGRAM_TYPES.SEQUENCE:
        updateData.sequenceDiagrams = [...currentData.sequenceDiagrams, baseDiagram];
        updateData.currentSequenceDiagram = baseDiagram;
        break;
      case DIAGRAM_TYPES.ARCHITECTURE:
        updateData.architectureDiagrams = [...currentData.architectureDiagrams, baseDiagram];
        updateData.currentArchitectureDiagram = baseDiagram;
        break;
      case DIAGRAM_TYPES.CLASS:
        updateData.classDiagrams = [...currentData.classDiagrams, baseDiagram];
        updateData.currentClassDiagram = baseDiagram;
        break;
      case DIAGRAM_TYPES.DOMAIN_MODEL:
        updateData.domainModels = [...currentData.domainModels, baseDiagram];
        updateData.currentDomainModel = baseDiagram;
        break;
      case DIAGRAM_TYPES.MIND_MAP:
        updateData.mindMaps = [...currentData.mindMaps, baseDiagram];
        updateData.currentMindMap = baseDiagram;
        break;
      case DIAGRAM_TYPES.ACTIVITY:
        updateData.activityDiagrams = [...currentData.activityDiagrams, baseDiagram];
        updateData.currentActivityDiagram = baseDiagram;
        break;
    }

    saveToStorage(updateData);
    forceUpdate();
  };

  // Generic diagram deletion function
  const deleteDiagram = (type, id) => {
    const currentData = getCurrentData();
    const updateData = { ...currentData };

    switch (type) {
      case DIAGRAM_TYPES.PROJECT:
        updateData.projects = currentData.projects.filter(p => p.id !== id);
        if (currentData.currentProject?.id === id) {
          updateData.currentProject = null;
        }
        break;
      case DIAGRAM_TYPES.FLOWCHART:
        updateData.flowcharts = currentData.flowcharts.filter(f => f.id !== id);
        if (currentData.currentFlowchart?.id === id) {
          updateData.currentFlowchart = null;
        }
        break;
      case DIAGRAM_TYPES.GANTT:
        updateData.ganttCharts = currentData.ganttCharts.filter(g => g.id !== id);
        if (currentData.currentGanttChart?.id === id) {
          updateData.currentGanttChart = null;
        }
        break;
      case DIAGRAM_TYPES.USE_CASE:
        updateData.useCaseDiagrams = currentData.useCaseDiagrams.filter(d => d.id !== id);
        if (currentData.currentUseCaseDiagram?.id === id) {
          updateData.currentUseCaseDiagram = null;
        }
        break;
      case DIAGRAM_TYPES.SEQUENCE:
        updateData.sequenceDiagrams = currentData.sequenceDiagrams.filter(d => d.id !== id);
        if (currentData.currentSequenceDiagram?.id === id) {
          updateData.currentSequenceDiagram = null;
        }
        break;
      case DIAGRAM_TYPES.ARCHITECTURE:
        updateData.architectureDiagrams = currentData.architectureDiagrams.filter(d => d.id !== id);
        if (currentData.currentArchitectureDiagram?.id === id) {
          updateData.currentArchitectureDiagram = null;
        }
        break;
      case DIAGRAM_TYPES.CLASS:
        updateData.classDiagrams = currentData.classDiagrams.filter(d => d.id !== id);
        if (currentData.currentClassDiagram?.id === id) {
          updateData.currentClassDiagram = null;
        }
        break;
      case DIAGRAM_TYPES.DOMAIN_MODEL:
        updateData.domainModels = currentData.domainModels.filter(d => d.id !== id);
        if (currentData.currentDomainModel?.id === id) {
          updateData.currentDomainModel = null;
        }
        break;
      case DIAGRAM_TYPES.MIND_MAP: // Add this case
        updateData.mindMaps = currentData.mindMaps.filter(m => m.id !== id);
        if (currentData.currentMindMap?.id === id) {
          updateData.currentMindMap = null;
        }
        break;
      case DIAGRAM_TYPES.ACTIVITY:
        updateData.activityDiagrams = currentData.activityDiagrams.filter(d => d.id !== id);
        if (currentData.currentActivityDiagram?.id === id) {
          updateData.currentActivityDiagram = null;
        }
        break;
    }

    saveToStorage(updateData);
    forceUpdate();
  };

  // Generic diagram update function
  const updateDiagram = (type, updatedDiagram) => {
    const currentData = getCurrentData();
    const updateData = { ...currentData };

    switch (type) {
      case DIAGRAM_TYPES.PROJECT:
        updateData.projects = currentData.projects.map(p => 
          p.id === updatedDiagram.id ? updatedDiagram : p
        );
        updateData.currentProject = updatedDiagram;
        break;
      case DIAGRAM_TYPES.FLOWCHART:
        updateData.flowcharts = currentData.flowcharts.map(f => 
          f.id === updatedDiagram.id ? updatedDiagram : f
        );
        updateData.currentFlowchart = updatedDiagram;
        break;
      case DIAGRAM_TYPES.GANTT:
        updateData.ganttCharts = currentData.ganttCharts.map(g => 
          g.id === updatedDiagram.id ? updatedDiagram : g
        );
        updateData.currentGanttChart = updatedDiagram;
        break;
      case DIAGRAM_TYPES.USE_CASE:
        updateData.useCaseDiagrams = currentData.useCaseDiagrams.map(d => 
          d.id === updatedDiagram.id ? updatedDiagram : d
        );
        updateData.currentUseCaseDiagram = updatedDiagram;
        break;
      case DIAGRAM_TYPES.SEQUENCE:
        updateData.sequenceDiagrams = currentData.sequenceDiagrams.map(d => 
          d.id === updatedDiagram.id ? updatedDiagram : d
        );
        updateData.currentSequenceDiagram = updatedDiagram;
        break;
      case DIAGRAM_TYPES.ARCHITECTURE:
        updateData.architectureDiagrams = currentData.architectureDiagrams.map(d => 
          d.id === updatedDiagram.id ? updatedDiagram : d
        );
        updateData.currentArchitectureDiagram = updatedDiagram;
        break;
      case DIAGRAM_TYPES.CLASS:
        updateData.classDiagrams = currentData.classDiagrams.map(d => 
          d.id === updatedDiagram.id ? updatedDiagram : d
        );
        updateData.currentClassDiagram = updatedDiagram;
        break;
      case DIAGRAM_TYPES.DOMAIN_MODEL:
        updateData.domainModels = currentData.domainModels.map(d => 
          d.id === updatedDiagram.id ? updatedDiagram : d
        );
        updateData.currentDomainModel = updatedDiagram;
        break;
      case DIAGRAM_TYPES.MIND_MAP: // Add this case
        updateData.mindMaps = currentData.mindMaps.map(m => 
          m.id === updatedDiagram.id ? updatedDiagram : m
        );
        updateData.currentMindMap = updatedDiagram;
        break;
      case DIAGRAM_TYPES.ACTIVITY:
        updateData.activityDiagrams = currentData.activityDiagrams.map(d => 
          d.id === updatedDiagram.id ? updatedDiagram : d
        );
        updateData.currentActivityDiagram = updatedDiagram;
        break;
    }

    saveToStorage(updateData);
    forceUpdate();
  };

  // Specific diagram creation functions
  const createProject = (name, start, end, timeUnit) => {
    createDiagram(DIAGRAM_TYPES.PROJECT, name, {
      timelineStart: start,
      timelineEnd: end,
      timeUnit,
      nodes: [],
      connections: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createFlowchart = (name) => {
    createDiagram(DIAGRAM_TYPES.FLOWCHART, name, {
      nodes: [],
      edges: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createGanttChart = (name) => {
    createDiagram(DIAGRAM_TYPES.GANTT, name, {
      tasks: [],
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    });
  };

  const createUseCaseDiagram = (name) => {
    createDiagram(DIAGRAM_TYPES.USE_CASE, name, {
      actors: [],
      useCases: [],
      relationships: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createSequenceDiagram = (name) => {
    createDiagram(DIAGRAM_TYPES.SEQUENCE, name, {
      participants: [],
      messages: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createArchitectureDiagram = (name) => {
    createDiagram(DIAGRAM_TYPES.ARCHITECTURE, name, {
      components: [],
      connections: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createClassDiagram = (name) => {
    createDiagram(DIAGRAM_TYPES.CLASS, name, {
      classes: [],
      relationships: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createDomainModel = (name) => {
    createDiagram(DIAGRAM_TYPES.DOMAIN_MODEL, name, {
      entities: [],
      relationships: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createMindMap = (name) => {
    createDiagram(DIAGRAM_TYPES.MIND_MAP, name, {
      nodes: [
        {
          id: 1,
          text: 'Central Idea',
          x: 400,
          y: 300,
          level: 0,
          parentId: null,
          isRoot: true,
          color: '#ff6b6b',
          width: 140,
          height: 40
        }
      ],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  const createActivityDiagram = (name) => {
    createDiagram(DIAGRAM_TYPES.ACTIVITY, name, {
      swimlanes: [
        {
          id: Date.now(),
          name: 'Default Swimlane',
          order: 0
        }
      ],
      nodes: [],
      edges: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    });
  };

  // Specific diagram deletion functions
  const deleteProject = (id) => deleteDiagram(DIAGRAM_TYPES.PROJECT, id);
  const deleteFlowchart = (id) => deleteDiagram(DIAGRAM_TYPES.FLOWCHART, id);
  const deleteGanttChart = (id) => deleteDiagram(DIAGRAM_TYPES.GANTT, id);
  const deleteUseCaseDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.USE_CASE, id);
  const deleteSequenceDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.SEQUENCE, id);
  const deleteArchitectureDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.ARCHITECTURE, id);
  const deleteClassDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.CLASS, id);
  const deleteDomainModel = (id) => deleteDiagram(DIAGRAM_TYPES.DOMAIN_MODEL, id);
  const deleteMindMap = (id) => deleteDiagram(DIAGRAM_TYPES.MIND_MAP, id);
  const deleteActivityDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.ACTIVITY, id);

  // Specific diagram update functions
  const updateProject = (project) => updateDiagram(DIAGRAM_TYPES.PROJECT, project);
  const updateFlowchart = (flowchart) => updateDiagram(DIAGRAM_TYPES.FLOWCHART, flowchart);
  const updateGanttChart = (ganttChart) => updateDiagram(DIAGRAM_TYPES.GANTT, ganttChart);
  const updateUseCaseDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.USE_CASE, diagram);
  const updateSequenceDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.SEQUENCE, diagram);
  const updateArchitectureDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.ARCHITECTURE, diagram);
  const updateClassDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.CLASS, diagram);
  const updateDomainModel = (diagram) => updateDiagram(DIAGRAM_TYPES.DOMAIN_MODEL, diagram);
  const updateMindMap = (mindMap) => updateDiagram(DIAGRAM_TYPES.MIND_MAP, mindMap);
  const updateActivityDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.ACTIVITY, diagram);

  const importFlowchartFromJson = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      createDiagram(DIAGRAM_TYPES.FLOWCHART, `Imported Flowchart ${new Date().toLocaleString()}`, {
        nodes: parsed.nodes || [],
        edges: parsed.edges || [],
        zoom: 1,
        pan: { x: 0, y: 0 }
      });
      return true;
    } catch (e) {
      console.error('Invalid JSON:', e);
      return false;
    }
  };

  const handleBack = () => {
    const currentData = getCurrentData();
    const updateData = {
      ...currentData,
      currentProject: null,
      currentFlowchart: null,
      currentGanttChart: null,
      currentUseCaseDiagram: null,
      currentSequenceDiagram: null,
      currentArchitectureDiagram: null,
      currentClassDiagram: null,
      currentDomainModel: null,
      currentMindMap: null,
      currentActivityDiagram: null
    };
    
    saveToStorage(updateData);
    forceUpdate();
  };

  // Load diagram function
  const loadDiagram = (type, diagram) => {
    const currentData = getCurrentData();
    const updateData = {
      ...currentData,
      currentProject: null,
      currentFlowchart: null,
      currentGanttChart: null,
      currentUseCaseDiagram: null,
      currentSequenceDiagram: null,
      currentArchitectureDiagram: null,
      currentClassDiagram: null,
      currentDomainModel: null,
      currentMindMap: null,
      currentActivityDiagram: null
    };

    // Set the specific current diagram
    switch (type) {
      case DIAGRAM_TYPES.PROJECT:
        updateData.currentProject = diagram;
        break;
      case DIAGRAM_TYPES.FLOWCHART:
        updateData.currentFlowchart = diagram;
        break;
      case DIAGRAM_TYPES.GANTT:
        updateData.currentGanttChart = diagram;
        break;
      case DIAGRAM_TYPES.USE_CASE:
        updateData.currentUseCaseDiagram = diagram;
        break;
      case DIAGRAM_TYPES.SEQUENCE:
        updateData.currentSequenceDiagram = diagram;
        break;
      case DIAGRAM_TYPES.ARCHITECTURE:
        updateData.currentArchitectureDiagram = diagram;
        break;
      case DIAGRAM_TYPES.CLASS:
        updateData.currentClassDiagram = diagram;
        break;
      case DIAGRAM_TYPES.DOMAIN_MODEL:
        updateData.currentDomainModel = diagram;
        break;
      case DIAGRAM_TYPES.MIND_MAP: // Add this case
        updateData.currentMindMap = diagram;
        break;
      case DIAGRAM_TYPES.ACTIVITY:
        updateData.currentActivityDiagram = diagram;
        break;
    }

    saveToStorage(updateData);
    forceUpdate();
  };

  const styles = {
    appContainer: {
      minHeight: '100vh',
      width: '97.3%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    mainCard: {
      maxWidth: '1400px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      overflow: 'hidden',
      minHeight: '85vh'
    },
    header: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
      color: 'white',
      padding: '40px 30px',
      textAlign: 'center',
      position: 'relative'
    },
    headerTitle: {
      fontSize: '36px',
      fontWeight: '800',
      margin: '0 0 12px 0',
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      letterSpacing: '-0.5px'
    },
    headerSubtitle: {
      fontSize: '18px',
      opacity: '0.95',
      margin: '0',
      fontWeight: '400'
    },
    modeSelector: {
      display: 'flex',
      justifyContent: 'center',
      padding: '30px 30px 0 30px',
      gap: '16px',
      marginBottom: '25px',
      flexWrap: 'wrap'
    },
    tabButton: {
      padding: '16px 32px',
      border: '2px solid transparent',
      borderRadius: '50px',
      background: 'rgba(0, 0, 0, 0.05)',
      color: '#64748b',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      outline: 'none',
      position: 'relative',
      backdropFilter: 'blur(10px)',
      marginBottom: '10px'
    },
    tabButtonActive: (color) => ({
      background: `linear-gradient(135deg, ${color} 0%, ${color} 100%)`,
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: `0 8px 25px rgba(${hexToRgb(color)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
      transform: 'translateY(-2px)'
    }),
    tabButtonHover: (color) => ({
      background: `rgba(${hexToRgb(color)}, 0.1)`,
      color: color
    })
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const getTabConfig = () => [
    {
      type: DIAGRAM_TYPES.PROJECT,
      label: '📊 Evolution Charts',
      color: '#4f46e5',
      component: (
        <EvolutionChartMain
          projects={getCurrentData().projects}
          onCreateProject={createProject}
          onLoadProject={(project) => loadDiagram(DIAGRAM_TYPES.PROJECT, project)}
          onDeleteProject={deleteProject}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.FLOWCHART,
      label: '🔄 Flowcharts',
      color: '#7c3aed',
      component: (
        <FlowchartMain
          flowcharts={getCurrentData().flowcharts}
          onCreateFlowchart={createFlowchart}
          onLoadFlowchart={(flowchart) => loadDiagram(DIAGRAM_TYPES.FLOWCHART, flowchart)}
          onDeleteFlowchart={deleteFlowchart}
          onImportFlowchart={importFlowchartFromJson}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.GANTT,
      label: '📅 Gantt Charts',
      color: '#3b82f6',
      component: (
        <GanttChartMain
          ganttCharts={getCurrentData().ganttCharts}
          onCreateGanttChart={createGanttChart}
          onLoadGanttChart={(ganttChart) => loadDiagram(DIAGRAM_TYPES.GANTT, ganttChart)}
          onDeleteGanttChart={deleteGanttChart}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.USE_CASE,
      label: '👥 Use Case',
      color: '#10b981',
      component: (
        <UseCaseDiagramMain 
          useCaseDiagrams={getCurrentData().useCaseDiagrams}
          onCreateUseCaseDiagram={createUseCaseDiagram}
          onLoadUseCaseDiagram={(diagram) => loadDiagram(DIAGRAM_TYPES.USE_CASE, diagram)}
          onDeleteUseCaseDiagram={deleteUseCaseDiagram}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.SEQUENCE,
      label: '↔️ Sequence',
      color: '#06b6d4',
      component: (
        <SequenceDiagramMain 
          sequenceDiagrams={getCurrentData().sequenceDiagrams}
          onCreateSequenceDiagram={createSequenceDiagram}
          onLoadSequenceDiagram={(diagram) => loadDiagram(DIAGRAM_TYPES.SEQUENCE, diagram)}
          onDeleteSequenceDiagram={deleteSequenceDiagram}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.ARCHITECTURE,
      label: '🏛️ Architecture',
      color: '#8b5cf6',
      component: (
        <ArchitectureDiagramMain 
          architectureDiagrams={getCurrentData().architectureDiagrams}
          onCreateArchitectureDiagram={createArchitectureDiagram}
          onLoadArchitectureDiagram={(diagram) => loadDiagram(DIAGRAM_TYPES.ARCHITECTURE, diagram)}
          onDeleteArchitectureDiagram={deleteArchitectureDiagram}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.CLASS,
      label: '📐 Class Diagram',
      color: '#ec4899',
      component: (
        <ClassDiagramMain 
          classDiagrams={getCurrentData().classDiagrams}
          onCreateClassDiagram={createClassDiagram}
          onLoadClassDiagram={(diagram) => loadDiagram(DIAGRAM_TYPES.CLASS, diagram)}
          onDeleteClassDiagram={deleteClassDiagram}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.DOMAIN_MODEL,
      label: '🏢 Domain Model',
      color: '#06b6d4',
      component: (
        <DomainModelMain 
          domainModels={getCurrentData().domainModels}
          onCreateDomainModel={createDomainModel}
          onLoadDomainModel={(diagram) => loadDiagram(DIAGRAM_TYPES.DOMAIN_MODEL, diagram)}
          onDeleteDomainModel={deleteDomainModel}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.MIND_MAP, // Add this tab
      label: '🧠 Mind Maps',
      color: '#10b981',
      component: (
        <MindMapMain
          mindMaps={getCurrentData().mindMaps}
          onCreateMindMap={createMindMap}
          onLoadMindMap={(mindMap) => loadDiagram(DIAGRAM_TYPES.MIND_MAP, mindMap)}
          onDeleteMindMap={deleteMindMap}
        />
      )
    },
    {
      type: DIAGRAM_TYPES.ACTIVITY,
      label: '⚡ Activity Diagram',
      color: '#f59e0b',
      component: (
        <ActivityDiagramMain
          activityDiagrams={getCurrentData().activityDiagrams}
          onCreateActivityDiagram={createActivityDiagram}
          onLoadActivityDiagram={(diagram) => loadDiagram(DIAGRAM_TYPES.ACTIVITY, diagram)}
          onDeleteActivityDiagram={deleteActivityDiagram}
        />
      )
    }
  ];

  // Get current data for rendering
  const currentData = getCurrentData();

  return (
    <div style={styles.appContainer}>
      <div style={styles.mainCard}>
        {currentData.currentProject ? (
          <EvolutionChartMaker
            project={currentData.currentProject}
            nodes={currentData.currentProject.nodes || []}
            connections={currentData.currentProject.connections || []}
            onUpdateProject={updateProject}
            onBack={handleBack}
          />
        ) : currentData.currentFlowchart ? (
          <FlowchartMaker
            flowchart={currentData.currentFlowchart}
            nodes={currentData.currentFlowchart.nodes || []}
            edges={currentData.currentFlowchart.edges || []}
            jsonInput={jsonInput}
            onJsonInputChange={setJsonInput}
            onImportJson={importFlowchartFromJson}
            onUpdateFlowchart={updateFlowchart}
            onBack={handleBack}
          />
        ) : currentData.currentGanttChart ? (
          <GanttChartMaker
            ganttChart={currentData.currentGanttChart}
            tasks={currentData.currentGanttChart.tasks || []}
            onUpdateGanttChart={updateGanttChart}
            onBack={handleBack}
          />
        ) : currentData.currentUseCaseDiagram ? (
          <UseCaseDiagramMaker
            useCaseDiagram={currentData.currentUseCaseDiagram}
            actors={currentData.currentUseCaseDiagram.actors || []}
            useCases={currentData.currentUseCaseDiagram.useCases || []}
            relationships={currentData.currentUseCaseDiagram.relationships || []}
            onUpdateUseCaseDiagram={updateUseCaseDiagram}
            onBack={handleBack}
          />
        ) : currentData.currentSequenceDiagram ? (
          <SequenceDiagramMaker
            sequenceDiagram={currentData.currentSequenceDiagram}
            participants={currentData.currentSequenceDiagram.participants || []}
            messages={currentData.currentSequenceDiagram.messages || []}
            onUpdateSequenceDiagram={updateSequenceDiagram}
            onBack={handleBack}
          />
        ) : currentData.currentArchitectureDiagram ? (
          <ArchitectureDiagramMaker
            architectureDiagram={currentData.currentArchitectureDiagram}
            components={currentData.currentArchitectureDiagram.components || []}
            connections={currentData.currentArchitectureDiagram.connections || []}
            onUpdateArchitectureDiagram={updateArchitectureDiagram}
            onBack={handleBack}
          />
        ) : currentData.currentClassDiagram ? (
          <ClassDiagramMaker
            classDiagram={currentData.currentClassDiagram}
            classes={currentData.currentClassDiagram.classes || []}
            relationships={currentData.currentClassDiagram.relationships || []}
            onUpdateClassDiagram={updateClassDiagram}
            onBack={handleBack}
          />
        ) : currentData.currentDomainModel ? (
          <DomainModelMaker
            domainModel={currentData.currentDomainModel}
            entities={currentData.currentDomainModel.entities || []}
            relationships={currentData.currentDomainModel.relationships || []}
            onUpdateDomainModel={updateDomainModel}
            onBack={handleBack}
          />
        ) : currentData.currentMindMap ? (
          <MindMapMaker
            mindMap={currentData.currentMindMap}
            nodes={currentData.currentMindMap.nodes || []}
            onUpdateMindMap={updateMindMap}
            onBack={handleBack}
          />
        ) : currentData.currentActivityDiagram ? (
          <ActivityDiagramMaker
            activityDiagram={currentData.currentActivityDiagram}
            swimlanes={currentData.currentActivityDiagram.swimlanes || []}
            nodes={currentData.currentActivityDiagram.nodes || []}
            edges={currentData.currentActivityDiagram.edges || []}
            onUpdateActivityDiagram={updateActivityDiagram}
            onBack={handleBack}
          />
        ) : (
          <>
            <div style={styles.header}>
              <h1 style={styles.headerTitle}>Visual Designer Suite</h1>
              <p style={styles.headerSubtitle}>Create stunning diagrams and charts</p>
            </div>
            
            <div style={styles.modeSelector}>
              {getTabConfig().map((tab) => (
                <button
                  key={tab.type}
                  onClick={() => setActiveTab(tab.type)}
                  style={{
                    ...styles.tabButton,
                    ...(activeTab === tab.type ? styles.tabButtonActive(tab.color) : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.type) {
                      e.target.style.background = styles.tabButtonHover(tab.color).background;
                      e.target.style.color = styles.tabButtonHover(tab.color).color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.type) {
                      e.target.style.background = styles.tabButton.background;
                      e.target.style.color = styles.tabButton.color;
                    }
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {getTabConfig().find(tab => tab.type === activeTab)?.component}
          </>
        )}
      </div>
    </div>
  );
};

export default App;