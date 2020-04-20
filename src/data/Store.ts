import { createStore, Reducer } from "redux";
import ShopReducer from "./ShopReducer";
import CartReducer from "./CartReducer";
import CommonReducer from "./CommonReducer";

const SportsStoreDataStore = createStore(CommonReducer(CartReducer, ShopReducer));

export default SportsStoreDataStore
