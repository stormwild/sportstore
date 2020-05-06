import { createStore, applyMiddleware } from "redux";
import ShopReducer from "./ShopReducer";
import CartReducer from "./CartReducer";
import CommonReducer from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

const SportsStoreDataStore = createStore(CommonReducer(CartReducer, ShopReducer), applyMiddleware(asyncActions));

export default SportsStoreDataStore
