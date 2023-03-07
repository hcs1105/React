import React from 'react';

export default function Avartar({image, newIcon}) {
  return (
    <div className="avartar-area">
      <img src={image} className="profile-img" alt="한창수" />
      {newIcon && <span className="new-icon">New</span>}
    </div>
  );
}