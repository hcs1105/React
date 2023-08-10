import React from 'react';

export default function Product({url, alt, name, price}) {
  // 객체 구조 분해 할당(비구조화 할당)
  return (
    <div>
      <img src={url} alt={alt} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}