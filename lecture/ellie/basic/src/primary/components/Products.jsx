import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  }

  /**
   * fetch: 브라우저에서 제공하는 API이며 비동기
   * 상대 경로로 적으면 public 폴더 안에 있는 데이터에 접근
   * setProducts(data) 메소드 → useState([]) 업데이트 → 상태가 변경된 컴포넌트의 함수 호출 -> fetch() 호출 setProducts() 메소드 실행 → useState([]) 업데이트
   * 네트워크의 데이터가 무한 반복되므로 해당 로직은 사용하면 안 됨.

  fetch('data/products.json') 
  .then(res => res.json())
  .then(data => {
    console.log('따뜻한 데이터를 네트워크에서 받아 옴');
    setProducts(data);
  })
  */

  /* cleanUp() 함수 호출 → setProducts(data) 메소드 실행 → useState([]) 업데이트 */
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sales_' : ''}products.json`) 
    .then(res => res.json())
    .then(data => {
      console.log('따뜻한 데이터를 네트워크에서 받아 옴');
      setProducts(data);
    })
    .catch(e => setError('에러가 발생했음'))
    .finally(() => setLoading(false));
    
    return () => { 
      console.log('깨끗하게 청소하는 일들을 합니다.');
    }
  }, [checked]);

  if(loading) {
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