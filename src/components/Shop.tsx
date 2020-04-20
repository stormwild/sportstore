import React from 'react';
import ProductList from './ProductList';
import { Product } from '../data/Types';
import CategoryNavigation from './CategoryNavigation';
import CartSummary from './CartSummary';
import PropTypes from 'prop-types';

// type ShopPropType = {
//   products: Product[];
//   categories: string[];
//   cartItems: number;
//   cartPrice: number;
// };

const Shop = (props: any) => {
  const {
    products,
    categories,
    addToCart,
  }: {
    products: Product[];
    categories: string[];
    addToCart: Function;
  } = props;

  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='navbar-brand'>SPORTS STORE</div>
        <CartSummary {...props} />
      </nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3 p-2'>
            <CategoryNavigation
              baseUrl='/shop/products'
              categories={categories}
            />
          </div>
          <div className='col-9 p-2'>
            <ProductList products={products} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Shop;
