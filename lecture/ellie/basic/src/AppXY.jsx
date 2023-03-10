import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  /*
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
  */
  const [position, setPosition] = useState({ x:0, y:0 });
  const onPoinerMove = (e) => {
    console.log(e.clientX, e.clientY);
    /*
    setCoordX(e.clientX);
    setCoordY(e.clientY);
    */
   setPosition({ coordX: e.clientX, coordY:e.clientY})
  }

  return (
    <div className="container" onPointerMove={onPoinerMove}>
      {/* <div className="pointer" style={{transform: `translate(${coordX}px, ${coordY}px)`}}></div> */}
      <div className="pointer" style={{transform: `translate(${position.coordX}px, ${position.coordY}px)`}}></div>
    </div>
  );
}