import React from 'react';
import ProductList from './ProductList';
import { Product } from '../data/Types';
import CategoryNavigation from './CategoryNavigation';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { ProductConnector } from './ProductConnector';
import PaginationControls from './PaginationControls';

const ProductPages = ProductConnector(PaginationControls);

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
          <div className='col-sm-3 mb-3'>
            <CategoryNavigation
              baseUrl='/shop/products'
              categories={categories}
            />
          </div>
          <div className='col-sm-9'>
            <ProductPages />
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
