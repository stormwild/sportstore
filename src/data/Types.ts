import { AxiosResponse } from "axios";

export interface Product {
  id: number,
  name: string,
  category: string,
  description: string,
  price: number
}

export const DataTypes = {
  PRODUCTS: "products",
  CATEGORIES: "categories",
  ORDERS: "orders",
};

export const ActionTypes = {
  DATA_LOAD: "data_load",
  CART_ADD: "cart_add",
  CART_UPDATE: "cart_update",
  CART_REMOVE: "cart_delete",
  CART_CLEAR: "cart_clear"
};

export interface DataPayload {
  dataType: string,
  data: Product[] | string[]
}

export interface CartPayload {
  product: Product,
  quantity: number
}

export type Payload = DataPayload | CartPayload

export interface LoadDataAction {
  type: string,
  payload: DataPayload | Promise<DataPayload>
}

export interface CartAction {
  type: string,
  payload: CartPayload
}

export type SportsStore = {
  products: Product[],
  categories: string[],
  cart: CartPayload[],
  cartItems: number,
  cartPrice: number
}

export const initialState = { products: [], categories: [], cart: [], cartItems: 0, cartPrice: 0 }

export type SportsStoreAction = LoadDataAction | CartAction;