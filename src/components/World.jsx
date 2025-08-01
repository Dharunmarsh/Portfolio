// World.jsx
import React from 'react';
import './world.css'; // Make sure your CSS classes are defined here

const World = () => {
  const stars = Array.from({ length: 7 }, (_, i) => `star-${i + 1}`);

  return (
    <div className="section-banner">
      {stars.map((starId) => (
        <div id={starId} key={starId}>
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default World;
