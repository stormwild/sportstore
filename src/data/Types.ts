
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
  ORDERS: "orders"
};

export const ActionTypes = {
  DATA_LOAD: "data_load"
};

export interface LoadDataAction {
  type: string,
  payload:
  {
    dataType: string,
    data: any
  }
}

export type Action = LoadDataAction;