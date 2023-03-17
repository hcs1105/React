import React from 'react';
import Avartar from './Avartar';

export default function Profile({image, name, job, newIcon}){
  return (
    <div className="profile-area">
      <Avartar image={image} newIcon={newIcon} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}

/* 동일한 표현 방식
export default function Profile(props){
  return (
    <div className="profile-area">
      <img src={props.image} className="profile-img" alt="한창수" />
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
}
*/