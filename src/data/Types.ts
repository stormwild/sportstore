import { string } from "prop-types";

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
  DATA_SET_SORT_PROPERTY: "data_set_sort",
  DATA_SET_PAGESIZE: "data_set_pagesize",
  CART_ADD: "cart_add",
  CART_UPDATE: "cart_update",
  CART_REMOVE: "cart_delete",
  CART_CLEAR: "cart_clear"
};

export interface DataPayload {
  dataType: string,
  data: Product[] | string[]
  total: number,
  params: Object
}

export interface CartPayload {
  product: Product,
  quantity: number
}

export interface PageSizePayload {
  pageSize: number,
  products_total: number
}

export interface SortKeyPayload {
  sortKey: string,
}

export type Payload = DataPayload | CartPayload | PageSizePayload | SortKeyPayload

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

export type PageStore = {
  pageSize: number,
  products_total: number
}

export type SortStore = {
  sortKey: string
}


export interface ParamAction {
  type: string,
  payload: PageSizePayload | SortKeyPayload
}

export const initialState = { products: [], categories: [], cart: [], cartItems: 0, cartPrice: 0 }

export type SportsStoreAction = LoadDataAction | CartAction | ParamAction;