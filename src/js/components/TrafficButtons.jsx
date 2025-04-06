import React from 'react';

const TrafficButtons = ({ cycleColors, togglePurple, showPurple }) => (
  <div className="buttons mt-3">
    <button className="btn btn-primary me-2" onClick={cycleColors}>
      Alternar color
    </button>
    <button
      className={`btn ${showPurple ? 'btn-secondary' : 'btn-primary'}`}
      onClick={togglePurple}
    >
      {showPurple ? 'Quitar púrpura' : 'Añadir púrpura'}
    </button>
  </div>
);

export default TrafficButtons;
