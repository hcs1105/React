import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };
  
  return (
    <>
      <div>Videos</div>
      <form onSubmit={handSubmit}>
        <input type="text" id="" placeholder="Enter Video id" value={text || ''} onChange={handleChange} />
      </form>
    </>
  );
}