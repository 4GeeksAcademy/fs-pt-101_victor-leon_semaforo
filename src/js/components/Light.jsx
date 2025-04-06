import React from 'react';

const Light = ({ color, active, onClick }) => (
  <div
    className={`light ${color} ${active ? 'active' : ''}`}
    onClick={() => onClick(color)}
  ></div>
);

export default Light;
