// projectsettings.js
import React, { useState, useEffect } from 'react';

const ProjectSettings = ({ project, onSave, onClose }) => {
  const [settings, setSettings] = useState(project);

  useEffect(() => {
    setSettings(project);
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...settings,
      timelineStart: parseFloat(settings.timelineStart),
      timelineEnd: parseFloat(settings.timelineEnd)
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Project Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Title:</label>
            <input
              type="text"
              name="title"
              value={settings.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Timeline Start:</label>
              <input
                type="number"
                name="timelineStart"
                value={settings.timelineStart}
                onChange={handleChange}
                required
                step="1"
                min="-10000"
                max="0"
              />
            </div>

            <div className="form-group">
              <label>Timeline End:</label>
              <input
                type="number"
                name="timelineEnd"
                value={settings.timelineEnd}
                onChange={handleChange}
                required
                step="1"
                min="-10000"
                max="0"
              />
            </div>

            <div className="form-group">
              <label>Time Unit:</label>
              <select
                name="timelineUnit"
                value={settings.timelineUnit}
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

          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cance
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectSettings;