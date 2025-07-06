import React, { useState, useEffect } from 'react';
import EvolutionChartMain from './treecanvas';
import EvolutionChartMaker from './timeline';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  // Load from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem('evolutionChartData');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        if (data.projects) {
          setProjects(data.projects);
          if (data.currentProject) {
            // Find the full project data from projects array
            const projectToLoad = data.projects.find(p => p.id === data.currentProject.id);
            if (projectToLoad) {
              setCurrentProject({
                ...projectToLoad,
                nodes: data.currentProject.nodes || [],
                connections: data.currentProject.connections || [],
                zoom: data.currentProject.zoom || 1,
                pan: data.currentProject.pan || { x: 0, y: 0 }
              });
            }
          }
        }
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  // Save to localStorage whenever relevant data changes
  useEffect(() => {
    const data = {
      projects,
      currentProject: currentProject ? {
        id: currentProject.id,
        name: currentProject.name,
        timelineStart: currentProject.timelineStart,
        timelineEnd: currentProject.timelineEnd,
        timeUnit: currentProject.timeUnit,
        createdAt: currentProject.createdAt,
        nodes: currentProject.nodes,
        connections: currentProject.connections,
        zoom: currentProject.zoom,
        pan: currentProject.pan
      } : null
    };
    localStorage.setItem('evolutionChartData', JSON.stringify(data));
  }, [projects, currentProject]);

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
    
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    setCurrentProject(newProject);
  };

  const deleteProject = (projectId) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    
    if (currentProject?.id === projectId) {
      setCurrentProject(null);
    }
  };

  const updateProject = (updatedProject) => {
    setProjects(prevProjects => 
      prevProjects.map(p => p.id === updatedProject.id ? updatedProject : p)
    );
    setCurrentProject(updatedProject);
  };

  return (
    <>
      {currentProject ? (
        <EvolutionChartMaker
          project={currentProject}
          nodes={currentProject.nodes || []}
          connections={currentProject.connections || []}
          onUpdateProject={updateProject}
          onBack={() => setCurrentProject(null)}
        />
      ) : (
        <EvolutionChartMain
          projects={projects}
          onCreateProject={createProject}
          onLoadProject={setCurrentProject}
          onDeleteProject={deleteProject}
        />
      )}
    </>
  );
};

export default App;