// timeline.js
import React from 'react';

const Timeline = ({ timelineRange, zoom, pan, direction, unit }) => {
  const startYear = direction === 'pastToPresent' ? timelineRange[0] : timelineRange[1];
  const endYear = direction === 'pastToPresent' ? timelineRange[1] : timelineRange[0];
  const totalYears = endYear - startYear;
  
  // Calculate appropriate tick interval based on visible range and zoom level
  const visibleRange = Math.abs(timelineRange[1] - timelineRange[0]);
  let tickInterval = Math.pow(10, Math.floor(Math.log10(visibleRange / 5)));
  
  // Adjust interval for better readability
  if (visibleRange / tickInterval > 10) tickInterval *= 2;
  if (visibleRange / tickInterval > 20) tickInterval *= 2.5;
  if (visibleRange / tickInterval < 5) tickInterval /= 2;

  // Generate ticks
  const ticks = [];
  for (let year = Math.ceil(startYear / tickInterval) * tickInterval; 
       direction === 'pastToPresent' ? year <= endYear : year >= endYear; 
       year += direction === 'pastToPresent' ? tickInterval : -tickInterval) {
    ticks.push(year);
  }

  // Format label based on current unit
  const formatLabel = (year) => {
    const absYear = Math.abs(year);
    let value, suffix;
    
    switch(unit) {
      case 'bya':
        value = absYear / 1000;
        suffix = 'BYA';
        break;
      case 'mya':
        value = absYear;
        suffix = 'MYA';
        break;
      case 'kya':
        value = absYear * 1000;
        suffix = 'KYA';
        break;
      case 'lya':
        value = absYear * 100000;
        suffix = 'Lakh YA';
        break;
      case 'ya':
        value = absYear * 1000000;
        suffix = 'YA';
        break;
      default:
        value = absYear;
        suffix = '';
    }
    
    // Format number appropriately
    if (value >= 1000) {
      return `${(value/1000).toFixed(value % 1000 === 0 ? 0 : 1)}K ${suffix}`;
    }
    return `${value.toFixed(value % 1 === 0 ? 0 : 1)} ${suffix}`;
  };

  return (
    <div 
      className="timeline"
      style={{
        transform: `translateX(${pan.x}px) scaleX(${zoom})`,
        width: `${Math.abs(totalYears) * 10}px`
      }}
    >
      <div className="timeline-line"></div>
      {ticks.map(year => (
        <div 
          key={year}
          className="timeline-tick"
          style={{
            left: `${((year - startYear) / totalYears) * 100}%`
          }}
        >
          <div className="tick-line"></div>
          <div className="tick-label">{formatLabel(year)}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;