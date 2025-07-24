import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Calendar, GanttChart } from 'lucide-react';

const GanttChartMaker = ({ ganttChart, tasks, onUpdateGanttChart, onBack }) => {
  const [newTask, setNewTask] = useState({
    name: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    progress: 0,
    dependencies: []
  });

  const addTask = () => {
    if (!newTask.name.trim()) return;
    
    const updatedTasks = [
      ...tasks,
      {
        id: Date.now(),
        ...newTask,
        progress: Math.min(100, Math.max(0, parseInt(newTask.progress) || 0))
      }
    ];
    
    onUpdateGanttChart({
      ...ganttChart,
      tasks: updatedTasks
    });
    
    setNewTask({
      name: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      progress: 0,
      dependencies: []
    });
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    // Also remove this task from any dependencies
    const cleanedTasks = updatedTasks.map(task => ({
      ...task,
      dependencies: task.dependencies.filter(depId => depId !== taskId)
    }));
    
    onUpdateGanttChart({
      ...ganttChart,
      tasks: cleanedTasks
    });
  };

  const updateTask = (taskId, updates) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    );
    onUpdateGanttChart({
      ...ganttChart,
      tasks: updatedTasks
    });
  };

  const addDependency = (taskId, dependencyId) => {
    if (taskId === dependencyId) return; // Can't depend on itself
    
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          dependencies: [...new Set([...task.dependencies, dependencyId])]
        };
      }
      return task;
    });
    
    onUpdateGanttChart({
      ...ganttChart,
      tasks: updatedTasks
    });
  };

  const removeDependency = (taskId, dependencyId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          dependencies: task.dependencies.filter(id => id !== dependencyId)
        };
      }
      return task;
    });
    
    onUpdateGanttChart({
      ...ganttChart,
      tasks: updatedTasks
    });
  };

  return (
    <div className="gantt-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{ganttChart.name}</h2>
        <div className="spacer"></div>
        <button 
          onClick={() => onUpdateGanttChart(ganttChart)} 
          className="save-btn"
        >
          <Save size={16} /> Save
        </button>
      </div>

      <div className="gantt-container">
        <div className="gantt-sidebar">
          <div className="sidebar-header">Tasks</div>
          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-name">{task.name}</div>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="add-task-form">
            <h3>Add New Task</h3>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                value={newTask.name}
                onChange={(e) => setNewTask({...newTask, name: e.target.value})}
                placeholder="Task description"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={newTask.startDate}
                  onChange={(e) => setNewTask({...newTask, startDate: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={newTask.endDate}
                  onChange={(e) => setNewTask({...newTask, endDate: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Progress (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={newTask.progress}
                onChange={(e) => setNewTask({...newTask, progress: e.target.value})}
              />
            </div>
            <button onClick={addTask} className="add-btn">
              <Plus size={16} /> Add Task
            </button>
          </div>
        </div>
        
        <div className="gantt-timeline">
          {/* This would be where you render the actual Gantt chart visualization */}
          <div className="timeline-header">
            <div className="timeline-title">Timeline</div>
            <div className="timeline-scale">
              {/* Timeline scale would go here */}
            </div>
          </div>
          <div className="timeline-content">
            {tasks.map(task => (
              <div key={task.id} className="timeline-task">
                <div className="task-bar" style={{
                  left: `${calculatePosition(task.startDate)}%`,
                  width: `${calculateDuration(task.startDate, task.endDate)}%`,
                  background: `linear-gradient(to right, #3b82f6 ${task.progress}%, #e0e7ff ${task.progress}%)`
                }}>
                  <div className="task-progress">{task.progress}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gantt-maker {
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
        
        .back-btn, .save-btn {
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
        
        .save-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .save-btn:hover {
          background: #2563eb;
        }
        
        .gantt-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .gantt-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-header {
          padding: 16px;
          font-weight: 600;
          color: #1e293b;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .task-list {
          flex: 1;
          overflow: auto;
          padding: 8px 0;
        }
        
        .task-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .task-item:hover {
          background: #f8fafc;
        }
        
        .task-name {
          flex: 1;
          font-size: 14px;
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
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .add-task-form {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }
        
        .add-task-form h3 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
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
        }
        
        .add-btn:hover {
          background: #2563eb;
        }
        
        .gantt-timeline {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .timeline-header {
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .timeline-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 8px;
        }
        
        .timeline-content {
          flex: 1;
          padding: 16px;
          position: relative;
          min-height: 200px;
          background: repeating-linear-gradient(
            to right,
            #f8fafc,
            #f8fafc 1px,
            white 1px,
            white 50px
          );
        }
        
        .timeline-task {
          height: 36px;
          margin-bottom: 8px;
          position: relative;
        }
        
        .task-bar {
          position: absolute;
          height: 24px;
          top: 6px;
          border-radius: 4px;
          border: 1px solid #bfdbfe;
          box-sizing: border-box;
        }
        
        .task-progress {
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          color: #1e40af;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

// Helper functions for the Gantt chart visualization
function calculatePosition(dateString) {
  // This would calculate the position based on the project timeline
  // For simplicity, we'll just return a mock value
  return 10;
}

function calculateDuration(startDate, endDate) {
  // This would calculate the duration based on the dates
  // For simplicity, we'll just return a mock value
  return 30;
}

export default GanttChartMaker;