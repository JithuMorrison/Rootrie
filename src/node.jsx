// node.js
import React, { useState } from 'react';

const Node = ({ node, onDoubleClick, isSelected, isConnectionStart, onDrag, scale }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0 });

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({
      y: e.clientY - node.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.stopPropagation();
    const newY = e.clientY - dragStart.y;
    onDrag(node.id, newY);
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      e.stopPropagation();
      setIsDragging(false);
    }
  };

  return (
    <div
      className={`tree-node ${isSelected ? 'selected' : ''} ${isConnectionStart ? 'connection-start' : ''}`}
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`,
        transform: `scale(${1/scale})`,
        transformOrigin: 'center',
        cursor: isDragging ? 'grabbing' : 'grab',
        width: `${200 * scale}px`
      }}
      onDoubleClick={onDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="node-image-container">
        <img src={node.image} alt={node.title} className="node-image" />
      </div>
      <div className="node-content">
        <h3 className="node-title">{node.title}</h3>
        <p className="node-timeline">
            {node.timeline} {getUnitDisplay(node.timelineUnit)}
        </p>
        <p className="node-description">{node.description}</p>
      </div>
    </div>
  );
};

const getUnitDisplay = (unit) => {
  switch(unit) {
    case 'bya': return 'BYA';
    case 'mya': return 'MYA';
    case 'kya': return 'KYA';
    case 'lya': return 'Lakh YA';
    case 'ya': return 'YA';
    default: return '';
  }
};

export default Node;