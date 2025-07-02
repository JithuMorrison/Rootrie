// nodeeditor.js
import React, { useState, useEffect } from 'react';

const NodeEditor = ({ node, onUpdate, onDelete, onClose, isNewNode = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    timeline: '',
    timelineUnit: 'mya',
    ...node
  });

  useEffect(() => {
    setFormData({
      title: '',
      description: '',
      image: '',
      timeline: '',
      timelineUnit: 'mya',
      ...node
    });
  }, [node]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="node-editor-overlay">
      <div className="node-editor">
        <h2>{isNewNode ? 'Create New Node' : 'Edit Node'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Timeline:</label>
            <div className="timeline-input-group">
              <input
                type="number"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                step="0.1"
              />
              <select
                name="timelineUnit"
                value={formData.timelineUnit}
                onChange={handleChange}
                >
                    <option value="bya">Billion years ago (BYA)</option>
                    <option value="mya">Million years ago (MYA)</option>
                    <option value="kya">Thousand years ago (KYA)</option>
                    <option value="lya">Lakh years ago (Lakh YA)</option>
                    <option value="ya">Years ago (YA)</option>
                </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="editor-buttons">
            {!isNewNode && (
              <button type="button" className="delete-button" onClick={() => onDelete(node.id)}>
                Delete Node
              </button>
            )}
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              {isNewNode ? 'Create Node' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NodeEditor;