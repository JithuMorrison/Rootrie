import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Plus, ArrowLeft, Trash2 } from 'lucide-react';

// Main screen component for domain models
const DomainModelMain = ({ 
  domainModels, 
  onCreateDomainModel, 
  onLoadDomainModel, 
  onDeleteDomainModel 
}) => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  return (
    <div className="domain-model-main">
      <div className="welcome-screen">
        <div className="welcome-icon"><BookOpen size={48} /></div>
        <h2>Domain Model Designer</h2>
        <p>Model business domain concepts and their relationships</p>
        
        <div className="action-buttons">
          <button
            onClick={() => setShowCreateDialog(true)}
            className="primary-btn"
          >
            <Plus size={16} /> New Domain Model
          </button>
        </div>

        {domainModels.length > 0 && (
          <div className="model-list">
            <h3>Your Domain Models</h3>
            {domainModels.map(model => (
              <div 
                key={model.id} 
                className="model-card"
                onClick={() => onLoadDomainModel(model)}
              >
                <div className="model-card-content">
                  <div className="model-card-name">{model.name}</div>
                  <div className="model-card-meta">
                    <span>{new Date(model.createdAt).toLocaleDateString()}</span>
                    <span>{model.entities?.length || 0} entities • {model.relationships?.length || 0} relationships</span>
                  </div>
                </div>
                <div className="model-card-actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLoadDomainModel(model);
                    }}
                    className="open-btn"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm('Delete this domain model?')) {
                        onDeleteDomainModel(model.id);
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

      {showCreateDialog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create New Domain Model</h2>
              <button onClick={() => setShowCreateDialog(false)} className="close-btn">
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Model Name</label>
              <input
                type="text"
                placeholder="e.g., E-Commerce Domain Model"
                id="modelName"
                autoFocus
              />
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
                  const name = document.getElementById('modelName').value;
                  if (name.trim()) {
                    onCreateDomainModel(name);
                    setShowCreateDialog(false);
                  }
                }}
                className="create-btn"
              >
                Create Model
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .domain-model-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
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
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #3B82F6;
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
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .model-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .model-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .model-card {
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
        
        .model-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .model-card-content {
          flex: 1;
        }
        
        .model-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .model-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .model-card-actions {
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
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3B82F6;
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
          background: #3B82F6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563EB;
        }
      `}</style>
    </div>
  );
};

export default DomainModelMain;