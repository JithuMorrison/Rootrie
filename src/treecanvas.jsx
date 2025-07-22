import React, { useState } from 'react';
import { Plus, Trash2, ArrowRight } from 'lucide-react';

const EvolutionChartMain = ({ projects, onCreateProject, onLoadProject, onDeleteProject }) => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  return (
    <div className="evolution-chart-main">
      <div className="welcome-screen">
        <div className="welcome-icon">🌿</div>
        <h2>Evolution Chart Maker</h2>
        <p>Visualize evolutionary relationships and timelines</p>
        
        <button
          onClick={() => setShowCreateDialog(true)}
          className="primary-btn"
        >
          <Plus size={16} /> New Project
        </button>

        {projects.length > 0 && (
          <div className="project-list">
            <h3>Your Projects</h3>
            {projects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => onLoadProject(project)}
              >
                <div className="project-card-content">
                  <div className="project-card-name">{project.name}</div>
                  <div className="project-card-meta">
                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    <span>{project.nodes?.length || 0} nodes • {project.connections?.length || 0} connections</span>
                  </div>
                </div>
                <div className="project-card-actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLoadProject(project);
                    }}
                    className="open-btn"
                  >
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm('Delete this project?')) {
                        onDeleteProject(project.id);
                      }
                    }}
                    className="delete-btn"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Creation Dialog */}
      {showCreateDialog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create New Project</h2>
              <button onClick={() => setShowCreateDialog(false)} className="close-btn">
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                placeholder="e.g., Mammalian Evolution"
                id="projectName"
                autoFocus
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Timeline Start</label>
                <input
                  type="number"
                  defaultValue="500"
                  id="timelineStart"
                />
              </div>
              <div className="form-group">
                <label>Timeline End</label>
                <input
                  type="number"
                  defaultValue="0"
                  id="timelineEnd"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Time Unit</label>
              <select id="timeUnit" defaultValue="mya">
                <option value="bya">Billion Years Ago (BYA)</option>
                <option value="mya">Million Years Ago (MYA)</option>
                <option value="kya">Thousand Years Ago (KYA)</option>
                <option value="ya">Years Ago (YA)</option>
              </select>
            </div>

            <div className="modal-footer">
              <button
                onClick={() => setShowCreateDialog(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const name = document.getElementById('projectName').value;
                  const start = parseFloat(document.getElementById('timelineStart').value);
                  const end = parseFloat(document.getElementById('timelineEnd').value);
                  const timeUnit = document.getElementById('timeUnit').value;
                  if (name.trim() && start > end) {
                    onCreateProject(name, start, end, timeUnit);
                    setShowCreateDialog(false);
                  }
                }}
                className="create-btn"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .evolution-chart-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .primary-btn {
          background: white;
          color: #059669;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .project-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .project-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .project-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .project-card-content {
          flex: 1;
        }
        
        .project-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .project-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
        }
        
        .project-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
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
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #059669;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #059669;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #047857;
        }
      `}</style>
    </div>
  );
};

export default EvolutionChartMain;