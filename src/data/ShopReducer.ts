import { ActionTypes, SportsStore, LoadDataAction, initialState, SportsStoreAction } from "./Types";
import { Reducer } from "redux";

const ShopReducer: Reducer<SportsStore | undefined, SportsStoreAction> = (state: SportsStore | undefined, action: SportsStoreAction): SportsStore | undefined => {

  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state || initialState,
        [(action as LoadDataAction).payload.dataType]: (action as LoadDataAction).payload.data
      };
    default:
      return state;
  }
};

export default ShopReducer

