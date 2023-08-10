import React, { useState } from 'react';
import Product from './Product';
import { useQueryClient } from '@tanstack/react-query';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();

  return (
    <main>
      <div>
        { showLeftProducts && <Product /> }
        <button type="button" onClick={() => setShowLeftProducts((show) => !show)}>Toggle</button>
      </div>
      <div>
        { showRightProducts && <Product /> }
        <button type="button" onClick={() => setShowRightProducts((show) => !show)}>Toggle</button>
      </div>
      <button type="button" onClick={() => client.invalidateQueries(['products', false])}>정보가 업데이트되었음</button>
    </main>
  );
}