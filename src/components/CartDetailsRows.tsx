import React from 'react';
import PropTypes from 'prop-types';
import { Product, CartPayload } from '../data/Types';

type CartDetailsRowsType = {
  cart: CartPayload[];
  cartPrice: number;
  updateQuantity: Function;
  removeFromCart: Function;
};

const CartDetailsRows = ({
  cart,
  cartPrice,
  updateQuantity,
  removeFromCart,
}: CartDetailsRowsType) => {
  const handleChange = (
    product: Product,
    event: React.FormEvent<HTMLInputElement>
  ) => updateQuantity(product, event.currentTarget.value);

  if (!cart || cart.length === 0) {
    return (
      <tr>
        <td colSpan={5}>Your cart is empty</td>
      </tr>
    );
  }

  return (
    <>
      {cart.map((item: CartPayload) => (
        <tr key={item.product.id}>
          <td>
            <input
              type='number'
              value={item.quantity}
              onChange={(ev) => handleChange(item.product, ev)}
            />
          </td>
          <td>{item.product.name}</td>
          <td>${item.product.price.toFixed(2)}</td>
          <td>${(item.quantity * item.product.price).toFixed(2)}</td>
          <td>
            <button
              className='btn btn-sm btn-danger'
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
      <tr>
        <th colSpan={3} className='text-right'>
          Total:
        </th>
        <th colSpan={2}>${cartPrice.toFixed(2)}</th>
      </tr>
    </>
  );
};

CartDetailsRows.propTypes = {
  cart: PropTypes.array.isRequired,
  cartPrice: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartDetailsRows;
