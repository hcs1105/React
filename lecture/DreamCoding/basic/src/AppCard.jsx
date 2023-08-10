import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        <h2>첫 번째 카드</h2>
      </Card> 
      <Card>
        <h2>두 번째 카드</h2>
        <p>설명하기</p>
      </Card> 
    </>
  );
}

function Card({children}) {
  return (
    <div style={{
      'maxWidth':'200px', 
      'maxHeight':'200px', 
      'padding':'1rem',
      'margin':'1rem', 
      'borderRadius':'20px',
      'backgroundColor':'#000',
      'textAlign':'center', 
      'color':'#fff'
    }}>
      {children}
    </div>
  );
}