import React, { useState } from 'react';

export default function Form() {
  // number
  const [number, setNumber] = useState(0);

  // string
  const [name, setName] = useState('');

  //boolean
  const [isChecked, setIschecked] = useState(false);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => {setNumber(e.target.value);}}/>
      <input type="text" value={name} onChange={e => {setName(e.target.value);}} />
      <div>
        <input type="checkbox" defaultChecked={isChecked} onChange={(e) => {setIschecked(e.target.checked);}} />
        {isChecked ? <span>체크됨.</span> : <span>체크 안 됨.</span>}
      </div>
    </div>
  );
}