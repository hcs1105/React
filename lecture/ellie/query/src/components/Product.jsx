import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const {isLoading, error, data:products} = useQuery(['products', checked], async () => { // 캐시를 위한 키를 배열 형태로 첫 번째 파라미터 지정
    console.log('fetching...');
    return fetch(`data/${checked ? 'sales_' : ''}products.json`) 
    .then(res => res.json());
  }, {
    staleTime : 1000 * 60 * 5,
  });
  const handleChange = () => {
    setChecked(prev => !prev);
  }

  if(isLoading) {
    return <p>로딩 중</p>;
  }
  
  if(error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <input type="checkbox" id="checkbbox" checked={checked} onChange={handleChange} />
      <label htmlFor="checkbbox">Show only Hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {checked && <button type="button" onClick={() => setCount(prev => prev + 1)}>{count}</button>}
    </>
  );
} 