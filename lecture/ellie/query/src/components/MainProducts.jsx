import React, { useState } from 'react';
import Product from './Product';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

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
    </main>
  );
}