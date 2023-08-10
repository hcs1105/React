import React from 'react';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './components/StyledComponent';
import TailwindComponent from './components/TailwindComponent';
import './primary/App.css';

export default function AppStyle() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent />
      <TailwindComponent />
    </>
  );
}