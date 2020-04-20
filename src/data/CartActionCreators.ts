import { ActionTypes, Product } from "./Types";

export const addToCart = (product: Product, quantity: number) => ({
  type: ActionTypes.CART_ADD,
  payload: {
    product,
    quantity: quantity || 1
  }
});

export const updateCartQuantity = (product: Product, quantity: number) => ({
  type: ActionTypes.CART_UPDATE,
  payload: { product, quantity }
})

export const removeFromCart = (product: Product) => ({
  type: ActionTypes.CART_REMOVE,
  payload: product
})

export const clearCart = () => ({
  type: ActionTypes.CART_CLEAR
})