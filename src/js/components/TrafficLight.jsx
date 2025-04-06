import React, { useState } from 'react';
import Light from './Light';
import TrafficButtons from './TrafficButtons';

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);
  const baseColors = ['red', 'yellow', 'green'];

  const cycleColors = () => {
    const index = baseColors.indexOf(color);
    const nextIndex = index === -1 ? 0 : (index + 1) % baseColors.length;
    setColor(baseColors[nextIndex]);
  };

  const togglePurple = () => setShowPurple(prev => !prev);

  return (
    <div className="traffic-light-container">
      {/* "Palo" encima del semáforo */}
      <div className="pole"></div>
      <div className="traffic-light">
        {baseColors.map(c => (
          <Light key={c} color={c} active={color === c} onClick={setColor} />
        ))}
        {showPurple && (
          <Light color="purple" active={color === "purple"} onClick={setColor} />
        )}
      </div>
      <TrafficButtons cycleColors={cycleColors} togglePurple={togglePurple} showPurple={showPurple} />
    </div>
  );
};

export default TrafficLight;
