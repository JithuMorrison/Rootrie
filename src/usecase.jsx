import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Users, GitMerge } from 'lucide-react';

const UseCaseDiagramMaker = ({ 
  useCaseDiagram, 
  actors = [], 
  useCases = [], 
  relationships = [],
  onUpdateUseCaseDiagram,
  onBack 
}) => {
  const [newActor, setNewActor] = useState('');
  const [newUseCase, setNewUseCase] = useState('');
  const [selectedActor, setSelectedActor] = useState(null);
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [relationshipType, setRelationshipType] = useState('association');

  const addActor = () => {
    if (!newActor.trim()) return;
    
    const updatedActors = [
      ...actors,
      {
        id: Date.now(),
        name: newActor,
        x: 100,
        y: 100
      }
    ];
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      actors: updatedActors
    });
    
    setNewActor('');
  };

  const addUseCase = () => {
    if (!newUseCase.trim()) return;
    
    const updatedUseCases = [
      ...useCases,
      {
        id: Date.now(),
        name: newUseCase,
        x: 300,
        y: 150
      }
    ];
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      useCases: updatedUseCases
    });
    
    setNewUseCase('');
  };

  const deleteActor = (actorId) => {
    const updatedActors = actors.filter(actor => actor.id !== actorId);
    // Also remove any relationships involving this actor
    const updatedRelationships = relationships.filter(
      rel => !(rel.source === actorId || rel.target === actorId)
    );
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      actors: updatedActors,
      relationships: updatedRelationships
    });
  };

  const deleteUseCase = (useCaseId) => {
    const updatedUseCases = useCases.filter(uc => uc.id !== useCaseId);
    // Also remove any relationships involving this use case
    const updatedRelationships = relationships.filter(
      rel => !(rel.source === useCaseId || rel.target === useCaseId)
    );
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      useCases: updatedUseCases,
      relationships: updatedRelationships
    });
  };

  const addRelationship = () => {
    if (!selectedActor || !selectedUseCase) return;
    
    const newRelationship = {
      id: Date.now(),
      source: selectedActor,
      target: selectedUseCase,
      type: relationshipType
    };
    
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      relationships: [...relationships, newRelationship]
    });
    
    setSelectedActor(null);
    setSelectedUseCase(null);
  };

  const deleteRelationship = (relationshipId) => {
    const updatedRelationships = relationships.filter(rel => rel.id !== relationshipId);
    onUpdateUseCaseDiagram({
      ...useCaseDiagram,
      relationships: updatedRelationships
    });
  };

  return (
    <div className="use-case-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{useCaseDiagram.name}</h2>
        <div className="spacer"></div>
        <button 
          onClick={() => onUpdateUseCaseDiagram(useCaseDiagram)} 
          className="save-btn"
        >
          <Save size={16} /> Save
        </button>
      </div>

      <div className="diagram-container">
        <div className="diagram-sidebar">
          <div className="sidebar-section">
            <h3>Actors</h3>
            <div className="form-group">
              <input
                type="text"
                value={newActor}
                onChange={(e) => setNewActor(e.target.value)}
                placeholder="New actor name"
                onKeyPress={(e) => e.key === 'Enter' && addActor()}
              />
              <button onClick={addActor} className="add-btn">
                <Plus size={16} /> Add Actor
              </button>
            </div>
            <div className="actor-list">
              {actors.map(actor => (
                <div key={actor.id} className="actor-item">
                  <div className="actor-name">{actor.name}</div>
                  <button 
                    onClick={() => deleteActor(actor.id)}
                    className="delete-btn"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Use Cases</h3>
            <div className="form-group">
              <input
                type="text"
                value={newUseCase}
                onChange={(e) => setNewUseCase(e.target.value)}
                placeholder="New use case name"
                onKeyPress={(e) => e.key === 'Enter' && addUseCase()}
              />
              <button onClick={addUseCase} className="add-btn">
                <Plus size={16} /> Add Use Case
              </button>
            </div>
            <div className="use-case-list">
              {useCases.map(useCase => (
                <div key={useCase.id} className="use-case-item">
                  <div className="use-case-name">{useCase.name}</div>
                  <button 
                    onClick={() => deleteUseCase(useCase.id)}
                    className="delete-btn"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Relationships</h3>
            <div className="form-group">
              <label>Actor</label>
              <select 
                value={selectedActor || ''}
                onChange={(e) => setSelectedActor(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">Select actor</option>
                {actors.map(actor => (
                  <option key={actor.id} value={actor.id}>{actor.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Use Case</label>
              <select 
                value={selectedUseCase || ''}
                onChange={(e) => setSelectedUseCase(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">Select use case</option>
                {useCases.map(useCase => (
                  <option key={useCase.id} value={useCase.id}>{useCase.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Relationship Type</label>
              <select 
                value={relationshipType}
                onChange={(e) => setRelationshipType(e.target.value)}
              >
                <option value="association">Association</option>
                <option value="include">Include</option>
                <option value="extend">Extend</option>
                <option value="generalization">Generalization</option>
              </select>
            </div>
            <button 
              onClick={addRelationship}
              disabled={!selectedActor || !selectedUseCase}
              className="add-btn"
            >
              <GitMerge size={16} /> Add Relationship
            </button>
          </div>

          <div className="sidebar-section">
            <h3>Current Relationships</h3>
            <div className="relationship-list">
              {relationships.map(rel => {
                const actor = actors.find(a => a.id === rel.source) || 
                             actors.find(a => a.id === rel.target);
                const useCase = useCases.find(uc => uc.id === rel.source) || 
                               useCases.find(uc => uc.id === rel.target);
                
                if (!actor || !useCase) return null;
                
                return (
                  <div key={rel.id} className="relationship-item">
                    <div className="relationship-info">
                      {actor.name} → {useCase.name} ({rel.type})
                    </div>
                    <button 
                      onClick={() => deleteRelationship(rel.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="diagram-canvas">
          {/* This would be where you render the actual diagram visualization */}
          <div className="canvas-placeholder">
            <Users size={48} />
            <p>Diagram visualization area</p>
            <p>Actors: {actors.length}</p>
            <p>Use Cases: {useCases.length}</p>
            <p>Relationships: {relationships.length}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .use-case-maker {
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
          background: #10b981;
          color: white;
          border: 1px solid #10b981;
        }
        
        .save-btn:hover {
          background: #059669;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #10b981;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
        }
        
        .actor-list,
        .use-case-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
        }
        
        .actor-item,
        .use-case-item,
        .relationship-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .actor-name,
        .use-case-name,
        .relationship-info {
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
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .canvas-placeholder {
          text-align: center;
          color: #64748b;
        }
        
        .canvas-placeholder p {
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
};

export default UseCaseDiagramMaker;