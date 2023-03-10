import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x, setCoordX] = useState(0);
  const [y, setCoordY] = useState(0);
  const onPoinerMove = (e) => {
    console.log(e.clientX, e.clientY);
    setCoordX(e.clientX);
    setCoordY(e.clientY);
  }

  return (
    <div className="container" onPointerMove={onPoinerMove}>
      <div className="pointer" style={{transform: `translate(${x}px, ${y}px)`}}></div>
    </div>
  );
}