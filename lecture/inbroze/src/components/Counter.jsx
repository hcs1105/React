import React, { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);
  const updateCount = (arg) => {
    setCount(prev => prev + arg);
  };

  return (
    <div>
      <button type="button" onClick={() => updateCount(1)}>추가하기</button>
      <span>{count}</span>
      <button type="button" onClick={() => updateCount(-1)}>삭제하기</button>
    </div>
  );
}