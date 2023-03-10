import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  /*
  const [x, setCoordX] = useState(0);
  const [y, setCoordY] = useState(0);
  */
  const [position, setPosition] = useState({x:0, y:0});
  const onPoinerMove = (e) => {
    console.log(e.clientX, e.clientY);
    /*
    setCoordX(e.clientX);
    setCoordY(e.clientY);
    */
    // setPosition({x:e.clientX, y:e.clientY});
    // 만약 수평으로만 이동이 가능하려면
    setPosition(prev => ({x:e.clientX, y:prev.y}));
  }

  return (
    <div className="container" onPointerMove={onPoinerMove}>
      {/* <div className="pointer" style={{transform: `translate(${x}px, ${y}px)`}}></div> */}
      <div className="pointer" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
    </div>
  );
}