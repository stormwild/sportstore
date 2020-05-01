import React from 'react';
import { Link } from 'react-router-dom';
import CartDetailsRows from './CartDetailsRows';
import { CartPayload } from '../data/Types';
import CartSummary from './CartSummary';

type CartDetailsType = {
  cartItems: number;
  cart: CartPayload[];
  cartPrice: number;
  updateCartQuantity: Function;
  removeFromCart: Function;
};

const CartDetails = ({
  cartItems,
  cart,
  cartPrice,
  updateCartQuantity,
  removeFromCart,
}: CartDetailsType) => {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='navbar-brand'>SPORTS STORE</div>
        <CartSummary {...{ cartItems, cartPrice }} />
      </nav>
      <div className='m-3'>
        <h2 className='text-center'>Your Cart</h2>
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Product</th>
                <th className='text-right'>Price</th>
                <th className='text-right'>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <CartDetailsRows
                cart={cart}
                cartPrice={cartPrice}
                updateQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
              />
            </tbody>
          </table>
        </div>
        <div className='text-center'>
          <Link className='btn btn-primary m-1' to='/shop'>
            Continue Shopping
          </Link>
          <Link
            className={`btn btn-secondary m-1 ${
              cartItems === 0 ? 'disabled' : ''
            }`}
            to='/shop/checkout'
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
