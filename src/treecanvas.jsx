import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const EvolutionChartMain = ({ projects, onCreateProject, onLoadProject, onDeleteProject }) => {
  const [showProjectDialog, setShowProjectDialog] = useState(false);

  return (
    <div className="evolution-chart-main">
      <div className="welcome-screen">
        <div className="welcome-icon">🧬</div>
        <h2>Welcome to Evolution Chart Maker</h2>
        <p>Create beautiful evolutionary trees and classification charts</p>
        
        {projects.length > 0 && (
          <div className="project-list">
            <h3>Your Projects</h3>
            {projects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => onLoadProject(project)}
              >
                <div className="project-card-name">{project.name}</div>
                <div className="project-card-meta">
                  {new Date(project.createdAt).toLocaleDateString()} • 
                  {project.nodes?.length || 0} nodes
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteProject(project.id);
                  }}
                  className="delete-project-btn"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
        
        <button
          onClick={() => setShowProjectDialog(true)}
          className="create-project-btn"
        >
          <Plus size={16} /> Create New Project
        </button>
      </div>

      {/* Project Creation Dialog */}
      {showProjectDialog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create New Project</h2>
              <button onClick={() => setShowProjectDialog(false)} className="close-btn">
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                placeholder="e.g., Mammalian Evolution"
                id="projectName"
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

            <button
              onClick={() => {
                const name = document.getElementById('projectName').value;
                const start = parseFloat(document.getElementById('timelineStart').value);
                const end = parseFloat(document.getElementById('timelineEnd').value);
                const timeUnit = document.getElementById('timeUnit').value;
                if (name.trim() && start > end) {
                  onCreateProject(name, start, end, timeUnit);
                  setShowProjectDialog(false);
                }
              }}
              className="create-btn"
            >
              Create Project
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .evolution-chart-main {
          width: 100vw;
          height: 100vh;
          background: #4a90a4;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: white;
          text-align: center;
          padding: 20px;
        }
        
        .welcome-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        
        .welcome-screen h2 {
          font-size: 32px;
          margin-bottom: 16px;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .project-list {
          width: 100%;
          max-width: 500px;
          margin-bottom: 20px;
        }
        
        .project-card {
          position: relative;
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
        }
        
        .project-card:hover {
          background: rgba(255,255,255,0.25);
        }
        
        .project-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .project-card-meta {
          font-size: 14px;
          opacity: 0.8;
        }
        
        .delete-project-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .delete-project-btn:hover {
          background: rgba(255,255,255,0.3);
        }
        
        .create-project-btn {
          background: rgba(255,255,255,0.2);
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
          padding: 15px 30px;
          border-radius: 12px;
          font-size: 16px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .create-project-btn:hover {
          background: rgba(255,255,255,0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 400px;
          max-height: 80vh;
          overflow: auto;
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
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-size: 24px;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #4a5568;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
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
        
        .create-btn {
          background: #48bb78;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          font-weight: 600;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
      `}</style>
    </div>
  );
};

export default EvolutionChartMain;