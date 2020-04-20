import { createStore, Reducer } from "redux";
import ShopReducer from "./ShopReducer";

const SportsStoreDataStore = createStore(ShopReducer as Reducer);

export default SportsStoreDataStore
