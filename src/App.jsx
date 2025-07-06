import React, { useReducer } from 'react';
import EvolutionChartMain from './treecanvas';
import EvolutionChartMaker from './timeline';

const getStoredData = () => {
  const savedData = localStorage.getItem('evolutionChartData');
  if (!savedData) return { projects: [], currentProject: null };

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
        : null
    };
  } catch (e) {
    console.error('Failed to parse localStorage data:', e);
    return { projects: [], currentProject: null };
  }
};

const saveToLocalStorage = (projects, currentProject) => {
  localStorage.setItem(
    'evolutionChartData',
    JSON.stringify({ 
      projects: projects.map(p => ({
        ...p,
        // Ensure we save the full project data including nodes/connections when it's the current project
        nodes: currentProject?.id === p.id ? currentProject.nodes : p.nodes || [],
        connections: currentProject?.id === p.id ? currentProject.connections : p.connections || [],
        zoom: currentProject?.id === p.id ? currentProject.zoom : p.zoom || 1,
        pan: currentProject?.id === p.id ? currentProject.pan : p.pan || { x: 0, y: 0 }
      })),
      currentProject 
    })
  );
};

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const { projects, currentProject } = getStoredData();

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
    saveToLocalStorage([...projects, newProject], newProject);
    forceUpdate();
  };

  const deleteProject = (projectId) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    const isCurrent = currentProject?.id === projectId;
    saveToLocalStorage(updatedProjects, isCurrent ? null : currentProject);
    forceUpdate();
  };

  const updateProject = (updatedProject) => {
    saveToLocalStorage(
      projects.map(p => p.id === updatedProject.id ? {
        ...p,
        nodes: updatedProject.nodes,
        connections: updatedProject.connections,
        zoom: updatedProject.zoom,
        pan: updatedProject.pan
      } : p),
      updatedProject
    );
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
          onBack={() => {
            saveToLocalStorage(projects, null);
            forceUpdate();
          }}
        />
      ) : (
        <EvolutionChartMain
          projects={projects}
          onCreateProject={createProject}
          onLoadProject={(project) => {
            saveToLocalStorage(projects, project);
            forceUpdate();
          }}
          onDeleteProject={deleteProject}
        />
      )}
    </>
  );
};

export default App;