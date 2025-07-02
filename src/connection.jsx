// connection.js
import React from 'react';

const Connection = ({ from, to }) => {
  // Calculate positions for the connecting line
  const fromX = from.x + 50;
  const fromY = from.y + 50;
  const toX = to.x + 50;
  const toY = to.y + 50;

  // Calculate control points for a curved line
  const midY = (fromY + toY) / 2;
  const controlX1 = fromX + (toX - fromX) * 0.5;
  const controlY1 = midY - 50;
  const controlX2 = fromX + (toX - fromX) * 0.5;
  const controlY2 = midY + 50;

  return (
    <svg className="connection-line">
      <path
        d={`M${fromX} ${fromY} C${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${toX} ${toY}`}
        stroke="#4a7dff"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#4a7dff" />
        </marker>
      </defs>
    </svg>
  );
};

export default Connection;