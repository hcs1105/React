import React, { useState } from 'react';

export default function Counter({total, onClick}) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-area">
        <p className="counter-number">
          {count} / <span className="total-counter">{total}</span>
        </p>
        <button className="counter-button" onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}>Add +</button>
      </div>
    </div>
  );
} 