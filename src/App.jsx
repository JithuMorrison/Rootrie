import React, { useReducer, useState } from 'react';
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

// Diagram type constants for better maintainability
const DIAGRAM_TYPES = {
  PROJECT: 'projects',
  FLOWCHART: 'flowcharts',
  GANTT: 'gantt',
  USE_CASE: 'usecase',
  SEQUENCE: 'sequence'
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
  currentSequenceDiagram: null
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

const saveToLocalStorage = (data) => {
  localStorage.setItem('evolutionChartData', JSON.stringify(data));
};

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const { 
    projects, 
    currentProject, 
    flowcharts, 
    currentFlowchart,
    ganttCharts,
    currentGanttChart,
    useCaseDiagrams,
    currentUseCaseDiagram,
    sequenceDiagrams,
    currentSequenceDiagram
  } = getStoredData();
  const [activeTab, setActiveTab] = useState(DIAGRAM_TYPES.PROJECT);
  const [jsonInput, setJsonInput] = useState('');

  // Generic diagram creation function
  const createDiagram = (type, name, extraData = {}) => {
    const baseDiagram = {
      id: Date.now(),
      name,
      createdAt: new Date().toISOString(),
      ...extraData
    };

    const updateMap = {
      [DIAGRAM_TYPES.PROJECT]: {
        projects: [...projects, baseDiagram],
        currentProject: baseDiagram
      },
      [DIAGRAM_TYPES.FLOWCHART]: {
        flowcharts: [...flowcharts, baseDiagram],
        currentFlowchart: baseDiagram
      },
      [DIAGRAM_TYPES.GANTT]: {
        ganttCharts: [...ganttCharts, baseDiagram],
        currentGanttChart: baseDiagram
      },
      [DIAGRAM_TYPES.USE_CASE]: {
        useCaseDiagrams: [...useCaseDiagrams, baseDiagram],
        currentUseCaseDiagram: baseDiagram
      },
      [DIAGRAM_TYPES.SEQUENCE]: {
        sequenceDiagrams: [...sequenceDiagrams, baseDiagram],
        currentSequenceDiagram: baseDiagram
      }
    };

    saveToLocalStorage({
      ...getInitialData(),
      ...updateMap[type]
    });
    forceUpdate();
  };

  // Generic diagram deletion function
  const deleteDiagram = (type, id) => {
    const updateMap = {
      [DIAGRAM_TYPES.PROJECT]: {
        projects: projects.filter(p => p.id !== id),
        currentProject: currentProject?.id === id ? null : currentProject
      },
      [DIAGRAM_TYPES.FLOWCHART]: {
        flowcharts: flowcharts.filter(f => f.id !== id),
        currentFlowchart: currentFlowchart?.id === id ? null : currentFlowchart
      },
      [DIAGRAM_TYPES.GANTT]: {
        ganttCharts: ganttCharts.filter(g => g.id !== id),
        currentGanttChart: currentGanttChart?.id === id ? null : currentGanttChart
      },
      [DIAGRAM_TYPES.USE_CASE]: {
        useCaseDiagrams: useCaseDiagrams.filter(d => d.id !== id),
        currentUseCaseDiagram: currentUseCaseDiagram?.id === id ? null : currentUseCaseDiagram
      },
      [DIAGRAM_TYPES.SEQUENCE]: {
        sequenceDiagrams: sequenceDiagrams.filter(d => d.id !== id),
        currentSequenceDiagram: currentSequenceDiagram?.id === id ? null : currentSequenceDiagram
      }
    };

    saveToLocalStorage({
      ...getStoredData(),
      ...updateMap[type]
    });
    forceUpdate();
  };

  // Generic diagram update function
  const updateDiagram = (type, updatedDiagram) => {
    const updateMap = {
      [DIAGRAM_TYPES.PROJECT]: {
        projects: projects.map(p => p.id === updatedDiagram.id ? updatedDiagram : p),
        currentProject: updatedDiagram
      },
      [DIAGRAM_TYPES.FLOWCHART]: {
        flowcharts: flowcharts.map(f => f.id === updatedDiagram.id ? updatedDiagram : f),
        currentFlowchart: updatedDiagram
      },
      [DIAGRAM_TYPES.GANTT]: {
        ganttCharts: ganttCharts.map(g => g.id === updatedDiagram.id ? updatedDiagram : g),
        currentGanttChart: updatedDiagram
      },
      [DIAGRAM_TYPES.USE_CASE]: {
        useCaseDiagrams: useCaseDiagrams.map(d => d.id === updatedDiagram.id ? updatedDiagram : d),
        currentUseCaseDiagram: updatedDiagram
      },
      [DIAGRAM_TYPES.SEQUENCE]: {
        sequenceDiagrams: sequenceDiagrams.map(d => d.id === updatedDiagram.id ? updatedDiagram : d),
        currentSequenceDiagram: updatedDiagram
      }
    };

    saveToLocalStorage({
      ...getStoredData(),
      ...updateMap[type]
    });
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

  // Specific diagram deletion functions
  const deleteProject = (id) => deleteDiagram(DIAGRAM_TYPES.PROJECT, id);
  const deleteFlowchart = (id) => deleteDiagram(DIAGRAM_TYPES.FLOWCHART, id);
  const deleteGanttChart = (id) => deleteDiagram(DIAGRAM_TYPES.GANTT, id);
  const deleteUseCaseDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.USE_CASE, id);
  const deleteSequenceDiagram = (id) => deleteDiagram(DIAGRAM_TYPES.SEQUENCE, id);

  // Specific diagram update functions
  const updateProject = (project) => updateDiagram(DIAGRAM_TYPES.PROJECT, project);
  const updateFlowchart = (flowchart) => updateDiagram(DIAGRAM_TYPES.FLOWCHART, flowchart);
  const updateGanttChart = (ganttChart) => updateDiagram(DIAGRAM_TYPES.GANTT, ganttChart);
  const updateUseCaseDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.USE_CASE, diagram);
  const updateSequenceDiagram = (diagram) => updateDiagram(DIAGRAM_TYPES.SEQUENCE, diagram);

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
    saveToLocalStorage({
      ...getStoredData(),
      currentProject: null,
      currentFlowchart: null,
      currentGanttChart: null,
      currentUseCaseDiagram: null,
      currentSequenceDiagram: null
    });
    forceUpdate();
  };

  const loadDiagram = (type, diagram) => {
    const updateMap = {
      [DIAGRAM_TYPES.PROJECT]: { currentProject: diagram },
      [DIAGRAM_TYPES.FLOWCHART]: { currentFlowchart: diagram },
      [DIAGRAM_TYPES.GANTT]: { currentGanttChart: diagram },
      [DIAGRAM_TYPES.USE_CASE]: { currentUseCaseDiagram: diagram },
      [DIAGRAM_TYPES.SEQUENCE]: { currentSequenceDiagram: diagram }
    };

    saveToLocalStorage({
      ...getStoredData(),
      ...updateMap[type],
      currentProject: null,
      currentFlowchart: null,
      currentGanttChart: null,
      currentUseCaseDiagram: null,
      currentSequenceDiagram: null,
      ...updateMap[type] // This will override the null with the correct diagram
    });
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
      marginBottom: '25px'
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
      backdropFilter: 'blur(10px)'
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
          projects={projects}
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
          flowcharts={flowcharts}
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
          ganttCharts={ganttCharts}
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
          useCaseDiagrams={useCaseDiagrams}
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
          sequenceDiagrams={sequenceDiagrams}
          onCreateSequenceDiagram={createSequenceDiagram}
          onLoadSequenceDiagram={(diagram) => loadDiagram(DIAGRAM_TYPES.SEQUENCE, diagram)}
          onDeleteSequenceDiagram={deleteSequenceDiagram}
        />
      )
    }
  ];

  return (
    <div style={styles.appContainer}>
      <div style={styles.mainCard}>
        {currentProject ? (
          <EvolutionChartMaker
            project={currentProject}
            nodes={currentProject.nodes || []}
            connections={currentProject.connections || []}
            onUpdateProject={updateProject}
            onBack={handleBack}
          />
        ) : currentFlowchart ? (
          <FlowchartMaker
            flowchart={currentFlowchart}
            nodes={currentFlowchart.nodes || []}
            edges={currentFlowchart.edges || []}
            jsonInput={jsonInput}
            onJsonInputChange={setJsonInput}
            onImportJson={importFlowchartFromJson}
            onUpdateFlowchart={updateFlowchart}
            onBack={handleBack}
          />
        ) : currentGanttChart ? (
          <GanttChartMaker
            ganttChart={currentGanttChart}
            tasks={currentGanttChart.tasks || []}
            onUpdateGanttChart={updateGanttChart}
            onBack={handleBack}
          />
        ) : currentUseCaseDiagram ? (
          <UseCaseDiagramMaker
            useCaseDiagram={currentUseCaseDiagram}
            actors={currentUseCaseDiagram.actors || []}
            useCases={currentUseCaseDiagram.useCases || []}
            relationships={currentUseCaseDiagram.relationships || []}
            onUpdateUseCaseDiagram={updateUseCaseDiagram}
            onBack={handleBack}
          />
        ) : currentSequenceDiagram ? (
          <SequenceDiagramMaker
            sequenceDiagram={currentSequenceDiagram}
            participants={currentSequenceDiagram.participants || []}
            messages={currentSequenceDiagram.messages || []}
            onUpdateSequenceDiagram={updateSequenceDiagram}
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