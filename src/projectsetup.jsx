// projectsetup.js
import React, { useState } from 'react';

const ProjectSetup = ({ onCreate }) => {
  const [projectSettings, setProjectSettings] = useState({
    title: 'New Evolutionary Tree',
    timelineStart: -500,
    timelineEnd: 0,
    timelineUnit: 'mya'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      ...projectSettings,
      timelineStart: parseFloat(projectSettings.timelineStart),
      timelineEnd: parseFloat(projectSettings.timelineEnd)
    });
  };

  return (
    <div className="project-setup">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Title:</label>
          <input
            type="text"
            name="title"
            value={projectSettings.title}
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
              value={projectSettings.timelineStart}
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
              value={projectSettings.timelineEnd}
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
              value={projectSettings.timelineUnit}
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

        <button type="submit" className="create-button">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectSetup;