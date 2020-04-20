import React from 'react';
import ProductList from './ProductList';
import { Product } from '../data/Types';
import CategoryNavigation from './CategoryNavigation';

const Shop = ({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col bg-dark text-white'>
          <div className='navbar-brand'>SPORTS STORE</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-3 p-2'>
          <CategoryNavigation
            baseUrl='/shop/products'
            categories={categories}
          />
        </div>
        <div className='col-9 p-2'>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
