import { ActionTypes, CartAction, SportsStore, initialState, SportsStoreAction, PageStore, SortStore } from "./Types";
import { Reducer } from "redux";

const addCart = (state: SportsStore, action: CartAction): SportsStore => {
  const p = action.payload.product;
  const q = action.payload.quantity;
  let existing = state.cart.find(item => item.product.id === p.id);
  if (existing) {
    existing.quantity += q;
  } else {
    state.cart = [...state.cart, action.payload];
  }
  state.cartItems += q;
  state.cartPrice += p.price * q;
  return state;
}

const updateCart = (state: SportsStore, action: CartAction): SportsStore => {
  state.cart = state.cart.map(item => {
    if (item.product.id === action.payload.product.id) {
      const diff = action.payload.quantity - item.quantity;
      state.cartItems += diff;
      state.cartPrice += (item.product.price * diff);
      return action.payload;
    } else {
      return item;
    }
  });
  return state;
}

const removeCart = (state: SportsStore, action: CartAction): SportsStore => {
  let selection = state.cart.find(item => item.product.id === action.payload.product.id);
  if (selection) {
    state.cartItems -= selection.quantity;
    state.cartPrice -= selection.quantity * selection.product.price;
    state.cart = state.cart.filter(item => item !== selection);
  }
  return state;
}


const CartReducer: Reducer<SportsStore | PageStore | SortStore | undefined, SportsStoreAction> = (state: SportsStore | PageStore | SortStore | undefined, action: SportsStoreAction): SportsStore | PageStore | SortStore | undefined => {
  let newStore: SportsStore | PageStore | SortStore = { cart: [], cartItems: 0, cartPrice: 0, ...state || initialState }
  switch (action.type) {
    case ActionTypes.CART_ADD:
      return addCart(newStore as SportsStore, action as CartAction)
    case ActionTypes.CART_UPDATE:
      return updateCart(newStore as SportsStore, action as CartAction)
    case ActionTypes.CART_REMOVE:
      return removeCart(newStore as SportsStore, action as CartAction);
    case ActionTypes.CART_CLEAR:
      return { ...state || initialState, cart: [], cartItems: 0, cartPrice: 0 }
    default:
      return state || initialState;
  }
}

export default CartReducer

