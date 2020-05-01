import React from 'react';
import { Product } from '../data/Types';

const ProductList = ({
  products,
  addToCart,
}: {
  products: Product[];
  addToCart: Function;
}) => {
  if (products && products.length === 0) {
    return <h5 className='p-2'>No Products</h5>;
  }

  return (
    <div className='row'>
      {products.map((p) => (
        <div key={p.id} className='col-md-6 col-lg-4 mb-3'>
          <div className='card mb-2 h-100'>
            <h6 className='card-header'>{p.category}</h6>
            <div className='card-body'>
              <h4 className='card-title clearfix'>{p.name}</h4>
              <p className='card-text'>{p.description}</p>
              <p className='card-text'>
                <span className='badge badge-pill badge-primary'>
                  ${p.price.toFixed(2)}
                </span>
              </p>
            </div>
            <div className='card-footer'>
              <button
                className='btn btn-success btn-sm float-right'
                onClick={() => addToCart(p, 1)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
