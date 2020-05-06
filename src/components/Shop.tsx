import React from 'react';
import ProductList from './ProductList';
import { Product } from '../data/Types';
import CategoryNavigation from './CategoryNavigation';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

type ShopPropType = {
  products: Product[];
  categories: string[];
  cartItems: number;
  cartPrice: number;
  addToCart: Function;
  history: string[];
};

const Shop = (props: ShopPropType) => {
  const {
    products,
    categories,
    addToCart,
    cartItems,
    cartPrice,
  }: {
    products: Product[];
    categories: string[];
    addToCart: Function;
    cartItems: number;
    cartPrice: number;
  } = props;

  const handleAddToCart = (product: Product, quantity?: number) => {
    addToCart(product, quantity);
    props.history.push('/shop/cart');
  };

  return (
    <>
      <NavBar {...{ cartItems, cartPrice }} />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3 p-2'>
            <CategoryNavigation
              baseUrl='/shop/products'
              categories={categories}
            />
          </div>
          <div className='col-9 p-2'>
            <ProductList products={products} addToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.number.isRequired,
  cartPrice: PropTypes.number.isRequired,
};

export default Shop;
