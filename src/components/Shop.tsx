import React from 'react';
import ProductList from './ProductList';
import { Product } from '../data/Types';

const Shop = ({ products }: { products: Product[] }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col bg-dark text-white'>
          <div className='navbar-brand'>SPORTS STORE</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-3 p-2'>Category Listing Here</div>
        <div className='col-9 p-2'>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
