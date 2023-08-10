import React from 'react';
import Product from '../components/Product';

export default function ProductPage() {
  const data = [
    {
      id : 1,
      name : '할라피뇨 체다치즈롤 돈카츠',
      price : 8351,
      url : 'https://product-image.kurly.com/product/image/88b63dbf-8980-4934-a83e-bd55c5063402.jpg',
      alt : '[미식당] 할라피뇨 체다치즈롤 돈카츠 150g * 2입 (소스포함)',
    },
    {
      id : 2,
      name : '오리지널 블렌드 원두',
      price : 7520,
      url : 'https://product-image.kurly.com/product/image/1b1f3a8e-1640-47f0-b3ee-6d5f94292273.jpg',
      alt : '[카페 뎀셀브즈] 오리지널 블렌드 원두 3종'
    },
    {
      id : 3,
      name : '김치 콩비지찌개',
      price : 6375,
      url : 'https://product-image.kurly.com/product/image/dfcf365f-5463-40a9-b772-2a8defe40a3a.jpg',
      alt : '[서울콩비지] 김치 콩비지찌개',
    },
  ];
  return (
    <div>
      {data.map(productItem => 
        <Product 
          key={productItem.id} 
          name={productItem.name} 
          price={productItem.price} 
          url={productItem.url} 
          alt={productItem.alt} 
        />
      )}
    </div>
  );
}