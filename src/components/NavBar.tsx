import React from 'react';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

type NavBarProps = {
  cartItems: number;
  cartPrice: number;
};

const NavBar = ({ cartItems, cartPrice }: NavBarProps) => {
  return (
    <nav className='navbar navbar-dark bg-dark mb-3'>
      <Link className='navbar-brand' to='/'>
        SPORTS STORE
      </Link>
      <CartSummary {...{ cartItems, cartPrice }} />
    </nav>
  );
};

export default NavBar;
