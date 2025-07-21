import React, { useReducer, useState } from 'react';
import EvolutionChartMain from './treecanvas';
import EvolutionChartMaker from './timeline';
import FlowchartMaker from './flowchart'; // You'll need to create this component

const getStoredData = () => {
  const savedData = localStorage.getItem('evolutionChartData');
  if (!savedData) return { projects: [], currentProject: null, flowcharts: [], currentFlowchart: null };

  try {
    const parsed = JSON.parse(savedData);
    return {
      projects: parsed.projects || [],
      currentProject: parsed.currentProject
        ? {
            ...parsed.currentProject,
            nodes: parsed.currentProject.nodes || [],
            connections: parsed.currentProject.connections || [],
            zoom: parsed.currentProject.zoom || 1,
            pan: parsed.currentProject.pan || { x: 0, y: 0 }
          }
        : null,
      flowcharts: parsed.flowcharts || [],
      currentFlowchart: parsed.currentFlowchart
        ? {
            ...parsed.currentFlowchart,
            nodes: parsed.currentFlowchart.nodes || [],
            edges: parsed.currentFlowchart.edges || [],
            zoom: parsed.currentFlowchart.zoom || 1,
            pan: parsed.currentFlowchart.pan || { x: 0, y: 0 }
          }
        : null
    };
  } catch (e) {
    console.error('Failed to parse localStorage data:', e);
    return { projects: [], currentProject: null, flowcharts: [], currentFlowchart: null };
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
  const { projects, currentProject, flowcharts, currentFlowchart } = getStoredData();
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'flowcharts'
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
      currentFlowchart: null
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
      currentFlowchart: newFlowchart
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
      currentFlowchart
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
      currentFlowchart: isCurrent ? null : currentFlowchart
    });
    forceUpdate();
  };

  const updateProject = (updatedProject) => {
    saveToLocalStorage({
      projects: projects.map(p => p.id === updatedProject.id ? updatedProject : p),
      currentProject: updatedProject,
      flowcharts,
      currentFlowchart: null
    });
    forceUpdate();
  };

  const updateFlowchart = (updatedFlowchart) => {
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts: flowcharts.map(f => f.id === updatedFlowchart.id ? updatedFlowchart : f),
      currentFlowchart: updatedFlowchart
    });
    forceUpdate();
  };

  const importFlowchartFromJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
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
        currentFlowchart: newFlowchart
      });
      forceUpdate();
    } catch (e) {
      alert('Invalid JSON: ' + e.message);
    }
  };

  const handleBack = () => {
    saveToLocalStorage({
      projects,
      currentProject: null,
      flowcharts,
      currentFlowchart: null
    });
    forceUpdate();
  };

  const styles = {
    appContainer: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    mainCard: {
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      minHeight: '80vh'
    },
    header: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      padding: '30px',
      textAlign: 'center'
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: '700',
      margin: '0 0 10px 0',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    headerSubtitle: {
      fontSize: '16px',
      opacity: '0.9',
      margin: '0'
    },
    modeSelector: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      borderBottom: '1px solid #e5e7eb',
      gap: '10px'
    },
    tabButton: {
      padding: '12px 24px',
      border: '2px solid #e5e7eb',
      borderRadius: '50px',
      background: 'white',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    tabButtonActive: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      borderColor: '#4f46e5',
      boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
    },
    content: {
      padding: '30px'
    },
    createButton: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
      marginBottom: '30px'
    },
    createButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)'
    },
    itemsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px'
    },
    itemCard: {
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    itemCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      borderColor: '#4f46e5'
    },
    itemTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#1f2937',
      margin: '0 0 8px 0'
    },
    itemMeta: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0 0 16px 0'
    },
    itemActions: {
      display: 'flex',
      gap: '10px'
    },
    actionButton: {
      padding: '8px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      background: 'white'
    },
    openButton: {
      background: '#4f46e5',
      color: 'white',
      borderColor: '#4f46e5'
    },
    deleteButton: {
      color: '#dc2626',
      borderColor: '#fca5a5'
    },
    deleteButtonHover: {
      background: '#dc2626',
      color: 'white'
    },
    emptyState: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#6b7280'
    },
    emptyStateIcon: {
      fontSize: '64px',
      marginBottom: '16px',
      opacity: '0.5'
    },
    emptyStateTitle: {
      fontSize: '20px',
      fontWeight: '600',
      margin: '0 0 8px 0'
    },
    emptyStateText: {
      fontSize: '16px',
      margin: '0'
    }
  };

  return (
    <>
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
      ) : (
        <div style={styles.appContainer}>
          <div style={styles.mainCard}>
            <div style={styles.header}>
              <h1 style={styles.headerTitle}>Visual Designer Suite</h1>
              <p style={styles.headerSubtitle}>Create beautiful evolution charts and flowcharts</p>
            </div>
            <div style={styles.modeSelector}>
              <button
                onClick={() => setActiveTab('projects')}
                className={activeTab === 'projects' ? 'active' : ''}
              >
                Evolution Charts
              </button>
              <button
                onClick={() => setActiveTab('flowcharts')}
                className={activeTab === 'flowcharts' ? 'active' : ''}
              >
                Flowcharts
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
                    currentFlowchart: null
                  });
                  forceUpdate();
                }}
                onDeleteProject={deleteProject}
              />
            ) : (
              <div>
                    <button
                      style={styles.createButton}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                      }}
                      onClick={() => createFlowchart(`New Flowchart ${flowcharts.length + 1}`)}
                    >
                      🚀 Create New Flowchart
                    </button>
                    {flowcharts.length === 0 ? (
                      <div style={styles.emptyState}>
                        <div style={styles.emptyStateIcon}>🔄</div>
                        <h3 style={styles.emptyStateTitle}>No Flowcharts Yet</h3>
                        <p style={styles.emptyStateText}>Create your first flowchart to get started</p>
                      </div>
                    ) : (
                      <div style={styles.itemsList}>
                        {flowcharts.map(flowchart => (
                          <div
                            key={flowchart.id}
                            style={styles.itemCard}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-4px)';
                              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                              e.currentTarget.style.borderColor = '#4f46e5';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                              e.currentTarget.style.borderColor = '#e5e7eb';
                            }}
                          >
                            <h3 style={styles.itemTitle}>{flowchart.name}</h3>
                            <p style={styles.itemMeta}>
                              Created: {new Date(flowchart.createdAt).toLocaleDateString()}<br/>
                              Nodes: {flowchart.nodes?.length || 0} | Edges: {flowchart.edges?.length || 0}
                            </p>
                            <div style={styles.itemActions}>
                              <button
                                style={{...styles.actionButton, ...styles.openButton}}
                                onClick={() => {
                                  saveToMemory({
                                    projects,
                                    currentProject: null,
                                    flowcharts,
                                    currentFlowchart: flowchart
                                  });
                                  forceUpdate();
                                }}
                              >
                                Open
                              </button>
                              <button
                                style={{...styles.actionButton, ...styles.deleteButton}}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#dc2626';
                                  e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = 'white';
                                  e.target.style.color = '#dc2626';
                                }}
                                onClick={() => {
                                  if (confirm('Are you sure you want to delete this flowchart?')) {
                                    deleteFlowchart(flowchart.id);
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;