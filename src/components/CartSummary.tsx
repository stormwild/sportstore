import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CartSummary = ({
  cartItems,
  cartPrice,
}: {
  cartItems: number;
  cartPrice: number;
}) => {
  const getSummary = () => {
    if (cartItems > 0) {
      return (
        <span>
          {cartItems} items(s), ${cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart: (empty) </span>;
    }
  };

  const getLinkClasses = () => {
    return `btn btn-sm bg-dark text-white ${cartItems === 0 ? 'disabled' : ''}`;
  };

  return (
    <div className='navbar-text float-right'>
      <small>
        {getSummary()}
        <Link className={getLinkClasses()} to='/shop/cart'>
          <i className='fa fa-shopping-cart'></i>
        </Link>
      </small>
    </div>
  );
};

CartSummary.propTypes = {
  cartItems: PropTypes.number.isRequired,
  cartPrice: PropTypes.number.isRequired,
};

export default CartSummary;
