import React, { useReducer, useState } from 'react';
import EvolutionChartMain from './treecanvas';
import EvolutionChartMaker from './timeline';
import FlowchartMain from './flowchartmain';
import FlowchartMaker from './flowchart';
import GanttChartMain from './ganttchartmain';
import GanttChartMaker from './gantt';
import UseCaseDiagramMain from './usecasemain';

const getStoredData = () => {
  const savedData = localStorage.getItem('evolutionChartData');
  if (!savedData) return { 
    projects: [], 
    currentProject: null, 
    flowcharts: [], 
    currentFlowchart: null,
    ganttCharts: [],
    currentGanttChart: null,
    useCaseDiagrams: [],
    currentUseCaseDiagram: null
  };

  try {
    const parsed = JSON.parse(savedData);
    return {
      projects: parsed.projects || [],
      currentProject: parsed.currentProject || null,
      flowcharts: parsed.flowcharts || [],
      currentFlowchart: parsed.currentFlowchart || null,
      ganttCharts: parsed.ganttCharts || [],
      currentGanttChart: parsed.currentGanttChart || null,
      useCaseDiagrams: parsed.useCaseDiagrams || [],
      currentUseCaseDiagram: parsed.currentUseCaseDiagram
        ? {
            ...parsed.currentUseCaseDiagram,
            actors: parsed.currentUseCaseDiagram.actors || [],
            useCases: parsed.currentUseCaseDiagram.useCases || [],
            relationships: parsed.currentUseCaseDiagram.relationships || [],
            zoom: parsed.currentUseCaseDiagram.zoom || 1,
            pan: parsed.currentUseCaseDiagram.pan || { x: 0, y: 0 }
          }
        : null
    };
  } catch (e) {
    console.error('Failed to parse localStorage data:', e);
    return { 
      projects: [], 
      currentProject: null, 
      flowcharts: [], 
      currentFlowchart: null,
      ganttCharts: [],
      currentGanttChart: null,
      useCaseDiagrams: [],
      currentUseCaseDiagram: null
    };
  }
};

const saveToLocalStorage = (data) => {
  localStorage.setItem(
    'evolutionChartData',
    JSON.stringify(data)
  );
};

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const { 
    projects, 
    currentProject, 
    flowcharts, 
    currentFlowchart,
    ganttCharts,
    currentGanttChart 
  } = getStoredData();
  const [activeTab, setActiveTab] = useState('projects');
  const [jsonInput, setJsonInput] = useState('');

  const createProject = (name, start, end, timeUnit) => {
    const newProject = {
      id: Date.now(),
      name,
      timelineStart: start,
      timelineEnd: end,
      timeUnit,
      createdAt: new Date().toISOString(),
      nodes: [],
      connections: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    };
    saveToLocalStorage({
      projects: [...projects, newProject],
      currentProject: newProject,
      flowcharts,
      currentFlowchart: null,
      ganttCharts,
      currentGanttChart: null
    });
    forceUpdate();
  };

  const createFlowchart = (name) => {
    const newFlowchart = {
      id: Date.now(),
      name,
      createdAt: new Date().toISOString(),
      nodes: [],
      edges: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    };
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts: [...flowcharts, newFlowchart],
      currentFlowchart: newFlowchart,
      ganttCharts,
      currentGanttChart: null
    });
    forceUpdate();
  };

  const createGanttChart = (name) => {
    const newGanttChart = {
      id: Date.now(),
      name,
      createdAt: new Date().toISOString(),
      tasks: [],
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts,
      currentFlowchart: null,
      ganttCharts: [...ganttCharts, newGanttChart],
      currentGanttChart: newGanttChart
    });
    forceUpdate();
  };

  const deleteProject = (projectId) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    const isCurrent = currentProject?.id === projectId;
    saveToLocalStorage({
      projects: updatedProjects,
      currentProject: isCurrent ? null : currentProject,
      flowcharts,
      currentFlowchart,
      ganttCharts,
      currentGanttChart
    });
    forceUpdate();
  };

  const deleteFlowchart = (flowchartId) => {
    const updatedFlowcharts = flowcharts.filter(f => f.id !== flowchartId);
    const isCurrent = currentFlowchart?.id === flowchartId;
    saveToLocalStorage({
      projects,
      currentProject,
      flowcharts: updatedFlowcharts,
      currentFlowchart: isCurrent ? null : currentFlowchart,
      ganttCharts,
      currentGanttChart
    });
    forceUpdate();
  };

  const deleteGanttChart = (ganttChartId) => {
    const updatedGanttCharts = ganttCharts.filter(g => g.id !== ganttChartId);
    const isCurrent = currentGanttChart?.id === ganttChartId;
    saveToLocalStorage({
      projects,
      currentProject,
      flowcharts,
      currentFlowchart,
      ganttCharts: updatedGanttCharts,
      currentGanttChart: isCurrent ? null : currentGanttChart
    });
    forceUpdate();
  };

  const updateProject = (updatedProject) => {
    saveToLocalStorage({
      projects: projects.map(p => p.id === updatedProject.id ? updatedProject : p),
      currentProject: updatedProject,
      flowcharts,
      currentFlowchart: null,
      ganttCharts,
      currentGanttChart: null
    });
    forceUpdate();
  };

  const updateFlowchart = (updatedFlowchart) => {
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts: flowcharts.map(f => f.id === updatedFlowchart.id ? updatedFlowchart : f),
      currentFlowchart: updatedFlowchart,
      ganttCharts,
      currentGanttChart: null
    });
    forceUpdate();
  };

  const updateGanttChart = (updatedGanttChart) => {
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts,
      currentFlowchart: null,
      ganttCharts: ganttCharts.map(g => g.id === updatedGanttChart.id ? updatedGanttChart : g),
      currentGanttChart: updatedGanttChart
    });
    forceUpdate();
  };

  const createUseCaseDiagram = (name) => {
    const newUseCaseDiagram = {
      id: Date.now(),
      name,
      createdAt: new Date().toISOString(),
      actors: [],
      useCases: [],
      relationships: [],
      zoom: 1,
      pan: { x: 0, y: 0 }
    };
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts,
      currentFlowchart: null,
      ganttCharts,
      currentGanttChart: null,
      useCaseDiagrams: [...useCaseDiagrams, newUseCaseDiagram],
      currentUseCaseDiagram: newUseCaseDiagram
    });
    forceUpdate();
  };

  const deleteUseCaseDiagram = (diagramId) => {
    const updatedDiagrams = useCaseDiagrams.filter(d => d.id !== diagramId);
    const isCurrent = currentUseCaseDiagram?.id === diagramId;
    saveToLocalStorage({
      projects,
      currentProject,
      flowcharts,
      currentFlowchart,
      ganttCharts,
      currentGanttChart,
      useCaseDiagrams: updatedDiagrams,
      currentUseCaseDiagram: isCurrent ? null : currentUseCaseDiagram
    });
    forceUpdate();
  };

  const updateUseCaseDiagram = (updatedDiagram) => {
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts,
      currentFlowchart: null,
      ganttCharts,
      currentGanttChart: null,
      useCaseDiagrams: useCaseDiagrams.map(d => d.id === updatedDiagram.id ? updatedDiagram : d),
      currentUseCaseDiagram: updatedDiagram
    });
    forceUpdate();
  };

  const importFlowchartFromJson = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      const newFlowchart = {
        id: Date.now(),
        name: `Imported Flowchart ${new Date().toLocaleString()}`,
        createdAt: new Date().toISOString(),
        nodes: parsed.nodes || [],
        edges: parsed.edges || [],
        zoom: 1,
        pan: { x: 0, y: 0 }
      };
      saveToLocalStorage({
        projects,
        currentProject: null,
        flowcharts: [...flowcharts, newFlowchart],
        currentFlowchart: newFlowchart,
        ganttCharts,
        currentGanttChart: null
      });
      forceUpdate();
      return true;
    } catch (e) {
      console.error('Invalid JSON:', e);
      return false;
    }
  };

  const handleBack = () => {
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts,
      currentFlowchart: null,
      ganttCharts,
      currentGanttChart: null,
      useCaseDiagrams,
      currentUseCaseDiagram: null
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
    tabButtonActive: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 25px rgba(79, 70, 229, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)'
    }
  };

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
        ) : (
          <>
            <div style={styles.header}>
              <h1 style={styles.headerTitle}>Visual Designer Suite</h1>
              <p style={styles.headerSubtitle}>Create stunning evolution charts and interactive flowcharts</p>
            </div>
            
            <div style={styles.modeSelector}>
              <button
                onClick={() => setActiveTab('projects')}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === 'projects' ? styles.tabButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'projects') {
                    e.target.style.background = 'rgba(79, 70, 229, 0.1)';
                    e.target.style.color = '#4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'projects') {
                    e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                📊 Evolution Charts
              </button>
              <button
                onClick={() => setActiveTab('flowcharts')}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === 'flowcharts' ? styles.tabButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'flowcharts') {
                    e.target.style.background = 'rgba(79, 70, 229, 0.1)';
                    e.target.style.color = '#4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'flowcharts') {
                    e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                🔄 Flowcharts
              </button>
              <button
                onClick={() => setActiveTab('gantt')}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === 'gantt' ? styles.tabButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'gantt') {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.color = '#3b82f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'gantt') {
                    e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                📅 Gantt Charts
              </button>
              <button
                onClick={() => setActiveTab('usecase')}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === 'usecase' ? styles.tabButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'usecase') {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.color = '#3b82f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'usecase') {
                    e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                📅 Use Case
              </button>
            </div>

            {activeTab === 'projects' ? (
              <EvolutionChartMain
                projects={projects}
                onCreateProject={createProject}
                onLoadProject={(project) => {
                  saveToLocalStorage({
                    projects,
                    currentProject: project,
                    flowcharts,
                    currentFlowchart: null,
                    ganttCharts,
                    currentGanttChart: null
                  });
                  forceUpdate();
                }}
                onDeleteProject={deleteProject}
              />
            ) : activeTab === 'flowcharts' ? (
              <FlowchartMain
                flowcharts={flowcharts}
                onCreateFlowchart={createFlowchart}
                onLoadFlowchart={(flowchart) => {
                  saveToLocalStorage({
                    projects,
                    currentProject: null,
                    flowcharts,
                    currentFlowchart: flowchart,
                    ganttCharts,
                    currentGanttChart: null
                  });
                  forceUpdate();
                }}
                onDeleteFlowchart={deleteFlowchart}
                onImportFlowchart={importFlowchartFromJson}
              />
            ) : activeTab === 'gantt' ? (
              <GanttChartMain
                ganttCharts={ganttCharts}
                onCreateGanttChart={createGanttChart}
                onLoadGanttChart={(ganttChart) => {
                  saveToLocalStorage({
                    projects,
                    currentProject: null,
                    flowcharts,
                    currentFlowchart: null,
                    ganttCharts,
                    currentGanttChart: ganttChart
                  });
                  forceUpdate();
                }}
                onDeleteGanttChart={deleteGanttChart}
              />
            ): (
              <UseCaseDiagramMain 
                useCaseDiagrams={useCaseDiagrams}
                onCreateUseCaseDiagram={createUseCaseDiagram}
                onLoadUseCaseDiagram={(diagram) => {
                  saveToLocalStorage({
                    projects,
                    currentProject: null,
                    flowcharts,
                    currentFlowchart: null,
                    ganttCharts,
                    currentGanttChart: null,
                    useCaseDiagrams,
                    currentUseCaseDiagram: diagram
                  });
                  forceUpdate();
                }}
                onDeleteUseCaseDiagram={deleteUseCaseDiagram}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;