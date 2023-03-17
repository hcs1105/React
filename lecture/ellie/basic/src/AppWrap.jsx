import React from 'react';

export default function AppWrap() {
  return (
    <>
      <Navbar style="#ff0">
        <Avartar image="https://avatars.githubusercontent.com/u/8123489?v=4" name="hcs1105" size="200" />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar style="#f00">
        <p style={{'color' : '#fff'}}>네, 반갑습니다.</p>
      </Navbar>
    </>
  );
}

function Navbar({children, style}){
  return (
    <header style={{backgroundColor:style}}>
      {children}
    </header>
  );
}

function Avartar({image, name, size}) {
  return (
    <img src={image} width={size} height={size} alt={name} style={{'borderRadius': '50%'}} />
  );
}