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
        <div className="app-container">
          <div className="mode-selector">
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
            <div className="flowchart-main">
              <button onClick={() => createFlowchart(`New Flowchart ${flowcharts.length + 1}`)}>
                Create New Flowchart
              </button>
              <div className="flowchart-list">
                {flowcharts.map(flowchart => (
                  <div key={flowchart.id} className="flowchart-item">
                    <h3>{flowchart.name}</h3>
                    <p>Created: {new Date(flowchart.createdAt).toLocaleString()}</p>
                    <div className="flowchart-actions">
                      <button onClick={() => {
                        saveToLocalStorage({
                          projects,
                          currentProject: null,
                          flowcharts,
                          currentFlowchart: flowchart
                        });
                        forceUpdate();
                      }}>
                        Open
                      </button>
                      <button onClick={() => deleteFlowchart(flowchart.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default App;