import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-area">
        <span className="counter-number">{count}</span>
        <button className="counter-button" onClick={() => {
          setCount((prev) => prev + 1);
        }}>Add +</button>
      </div>
    </div>
  );
} 