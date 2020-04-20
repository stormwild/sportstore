import React from 'react';
import { Product } from '../data/Types';

const ProductList = ({ products }: { products: Product[] }) => {
  if (products && products.length === 0) {
    return <h5 className='p-2'>No Products</h5>;
  }

  return (
    <>
      {products.map((p) => (
        <div className='card mb-2' key={p.id}>
          <h6 className='card-header'>{p.category}</h6>
          <div className='card-body'>
            <h4 className='card-title'>
              {p.name}
              <span className='badge badge-pill badge-primary float-right'>
                ${p.price.toFixed(2)}
              </span>
            </h4>
            <div className='card-text'>{p.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
