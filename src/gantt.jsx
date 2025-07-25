import React, { useState, useMemo } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Calendar, GanttChart, Edit2 } from 'lucide-react';

const GanttChartMaker = ({ ganttChart, tasks, onUpdateGanttChart, onBack }) => {
  const [newTask, setNewTask] = useState({
    name: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    progress: 0,
    dependencies: []
  });

  const [editingTask, setEditingTask] = useState(null);

  // Calculate timeline boundaries
  const timelineBounds = useMemo(() => {
    if (tasks.length === 0) {
      const today = new Date();
      const nextMonth = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
      return {
        startDate: today,
        endDate: nextMonth,
        totalDays: 30
      };
    }

    const dates = tasks.flatMap(task => [new Date(task.startDate), new Date(task.endDate)]);
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));
    
    // Add some padding
    const paddingDays = 7;
    const startDate = new Date(minDate.getTime() - paddingDays * 24 * 60 * 60 * 1000);
    const endDate = new Date(maxDate.getTime() + paddingDays * 24 * 60 * 60 * 1000);
    
    const totalDays = Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000));

    return { startDate, endDate, totalDays };
  }, [tasks]);

  // Generate timeline scale
  const timelineScale = useMemo(() => {
    const scale = [];
    const { startDate, totalDays } = timelineBounds;
    
    for (let i = 0; i <= totalDays; i += 7) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      scale.push({
        date,
        position: (i / totalDays) * 100,
        label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      });
    }
    
    return scale;
  }, [timelineBounds]);

  const calculatePosition = (dateString) => {
    const date = new Date(dateString);
    const { startDate, totalDays } = timelineBounds;
    const daysDiff = Math.max(0, (date - startDate) / (24 * 60 * 60 * 1000));
    return Math.min(100, (daysDiff / totalDays) * 100);
  };

  const calculateDuration = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const { totalDays } = timelineBounds;
    const durationDays = Math.max(1, (endDate - startDate) / (24 * 60 * 60 * 1000));
    return Math.min(100, (durationDays / totalDays) * 100);
  };

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

  const startEditingTask = (task) => {
    setEditingTask({ ...task });
  };

  const saveEditingTask = () => {
    if (editingTask) {
      updateTask(editingTask.id, editingTask);
      setEditingTask(null);
    }
  };

  const cancelEditingTask = () => {
    setEditingTask(null);
  };

  const addDependency = (taskId, dependencyId) => {
    if (taskId === dependencyId) return;
    
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

  const getTaskById = (id) => tasks.find(task => task.id === id);

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
          <div className="sidebar-header">Tasks ({tasks.length})</div>
          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-info">
                  <div className="task-name">{task.name}</div>
                  <div className="task-dates">
                    {new Date(task.startDate).toLocaleDateString()} - {new Date(task.endDate).toLocaleDateString()}
                  </div>
                  <div className="task-progress-text">{task.progress}% complete</div>
                  {task.dependencies.length > 0 && (
                    <div className="task-dependencies">
                      Dependencies: {task.dependencies.map(depId => getTaskById(depId)?.name).filter(Boolean).join(', ')}
                    </div>
                  )}
                </div>
                <div className="task-actions">
                  <button 
                    onClick={() => startEditingTask(task)}
                    className="edit-btn"
                    title="Edit task"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="delete-btn"
                    title="Delete task"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
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
          <div className="timeline-header">
            <div className="timeline-title">Timeline</div>
            <div className="timeline-scale">
              {timelineScale.map((point, index) => (
                <div 
                  key={index} 
                  className="scale-point" 
                  style={{ left: `${point.position}%` }}
                >
                  <div className="scale-line"></div>
                  <div className="scale-label">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-content">
            {tasks.map((task, index) => {
              const position = calculatePosition(task.startDate);
              const duration = calculateDuration(task.startDate, task.endDate);
              
              return (
                <div key={task.id} className="timeline-row">
                  <div className="timeline-task">
                    <div 
                      className="task-bar" 
                      style={{
                        left: `${position}%`,
                        width: `${duration}%`,
                        background: `linear-gradient(to right, #3b82f6 ${task.progress}%, #e0e7ff ${task.progress}%)`
                      }}
                      title={`${task.name}: ${task.progress}% complete`}
                    >
                      <div className="task-progress">{task.progress}%</div>
                      <div className="task-label">{task.name}</div>
                    </div>
                    
                    {/* Render dependency arrows */}
                    {task.dependencies.map(depId => {
                      const depTask = getTaskById(depId);
                      if (!depTask) return null;
                      
                      const depIndex = tasks.findIndex(t => t.id === depId);
                      const depPosition = calculatePosition(depTask.endDate);
                      const depDuration = calculateDuration(depTask.startDate, depTask.endDate);
                      
                      return (
                        <svg 
                          key={`dep-${depId}`}
                          className="dependency-arrow"
                          style={{
                            position: 'absolute',
                            left: `${depPosition + depDuration}%`,
                            top: `${(depIndex - index) * 44 - 12}px`,
                            width: `${Math.abs(position - (depPosition + depDuration))}%`,
                            height: `${Math.abs((index - depIndex) * 44) + 24}px`,
                            pointerEvents: 'none',
                            zIndex: 1
                          }}
                        >
                          <defs>
                            <marker
                              id={`arrowhead-${task.id}-${depId}`}
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="#64748b"
                              />
                            </marker>
                          </defs>
                          <path
                            d={`M 0 ${depIndex < index ? 0 : Math.abs((index - depIndex) * 44)} 
                                L ${Math.abs(position - (depPosition + depDuration)) * 0.5} ${depIndex < index ? 0 : Math.abs((index - depIndex) * 44)} 
                                L ${Math.abs(position - (depPosition + depDuration)) * 0.5} ${depIndex < index ? Math.abs((index - depIndex) * 44) : 0} 
                                L ${Math.abs(position - (depPosition + depDuration))} ${depIndex < index ? Math.abs((index - depIndex) * 44) : 0}`}
                            stroke="#64748b"
                            strokeWidth="2"
                            fill="none"
                            markerEnd={`url(#arrowhead-${task.id}-${depId})`}
                          />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {/* Today line */}
            <div 
              className="today-line"
              style={{ left: `${calculatePosition(new Date().toISOString().split('T')[0])}%` }}
            >
              <div className="today-label">Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Task</h3>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                value={editingTask.name}
                onChange={(e) => setEditingTask({...editingTask, name: e.target.value})}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={editingTask.startDate}
                  onChange={(e) => setEditingTask({...editingTask, startDate: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={editingTask.endDate}
                  onChange={(e) => setEditingTask({...editingTask, endDate: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Progress (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={editingTask.progress}
                onChange={(e) => setEditingTask({...editingTask, progress: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Dependencies</label>
              <div className="dependency-list">
                {tasks.filter(t => t.id !== editingTask.id).map(task => (
                  <label key={task.id} className="dependency-item">
                    <input
                      type="checkbox"
                      checked={editingTask.dependencies.includes(task.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setEditingTask({
                            ...editingTask,
                            dependencies: [...editingTask.dependencies, task.id]
                          });
                        } else {
                          setEditingTask({
                            ...editingTask,
                            dependencies: editingTask.dependencies.filter(id => id !== task.id)
                          });
                        }
                      }}
                    />
                    {task.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button onClick={cancelEditingTask} className="cancel-btn">Cancel</button>
              <button onClick={saveEditingTask} className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      )}

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
          width: 350px;
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
          align-items: flex-start;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
          gap: 12px;
        }
        
        .task-item:hover {
          background: #f8fafc;
        }
        
        .task-info {
          flex: 1;
        }
        
        .task-name {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        
        .task-dates {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 2px;
        }
        
        .task-progress-text {
          font-size: 12px;
          color: #3b82f6;
          font-weight: 500;
          margin-bottom: 2px;
        }
        
        .task-dependencies {
          font-size: 11px;
          color: #64748b;
          font-style: italic;
        }
        
        .task-actions {
          display: flex;
          gap: 4px;
        }
        
        .edit-btn, .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .edit-btn {
          background: #dbeafe;
          color: #3b82f6;
        }
        
        .edit-btn:hover {
          background: #bfdbfe;
        }
        
        .delete-btn {
          background: #fee2e2;
          color: #ef4444;
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
          box-sizing: border-box;
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
          position: relative;
        }
        
        .timeline-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }
        
        .timeline-scale {
          position: relative;
          height: 40px;
        }
        
        .scale-point {
          position: absolute;
          transform: translateX(-50%);
        }
        
        .scale-line {
          width: 1px;
          height: 16px;
          background: #d1d5db;
          margin: 0 auto 4px;
        }
        
        .scale-label {
          font-size: 11px;
          color: #64748b;
          text-align: center;
          white-space: nowrap;
        }
        
        .timeline-content {
          flex: 1;
          padding: 16px;
          position: relative;
          min-height: 400px;
          background: repeating-linear-gradient(
            to right,
            #f8fafc,
            #f8fafc 1px,
            white 1px,
            white 50px
          );
        }
        
        .timeline-row {
          height: 44px;
          margin-bottom: 4px;
          position: relative;
        }
        
        .timeline-task {
          height: 36px;
          position: relative;
        }
        
        .task-bar {
          position: absolute;
          height: 28px;
          top: 4px;
          border-radius: 4px;
          border: 1px solid #bfdbfe;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.2s;
          overflow: hidden;
        }
        
        .task-bar:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }
        
        .task-progress {
          position: absolute;
          right: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          color: #1e40af;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.9);
          padding: 1px 3px;
          border-radius: 2px;
        }
        
        .task-label {
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          color: #1e40af;
          font-weight: 500;
          max-width: calc(100% - 40px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dependency-arrow {
          pointer-events: none;
        }
        
        .today-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ef4444;
          z-index: 10;
        }
        
        .today-label {
          position: absolute;
          top: -8px;
          left: 4px;
          font-size: 10px;
          color: #ef4444;
          font-weight: 600;
          background: white;
          padding: 2px 4px;
          border-radius: 2px;
          white-space: nowrap;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal {
          background: white;
          border-radius: 8px;
          padding: 24px;
          width: 500px;
          max-width: 90vw;
          max-height: 80vh;
          overflow: auto;
        }
        
        .modal h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #1e293b;
        }
        
        .dependency-list {
          max-height: 120px;
          overflow: auto;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 8px;
        }
        
        .dependency-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 0;
          font-size: 14px;
          cursor: pointer;
        }
        
        .dependency-item input {
          width: auto;
        }
        
        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;
        }
        
        .cancel-btn {
          padding: 8px 16px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .cancel-btn:hover {
          background: #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default GanttChartMaker;