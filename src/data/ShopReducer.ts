import { ActionTypes, SportsStore, LoadDataAction, initialState, SportsStoreAction, DataPayload } from "./Types";
import { Reducer } from "redux";

const ShopReducer: Reducer<SportsStore | undefined, SportsStoreAction> = (state: SportsStore | undefined, action: SportsStoreAction): SportsStore | undefined => {

  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state || initialState,
        [((action as LoadDataAction).payload as DataPayload).dataType]: ((action as LoadDataAction).payload as DataPayload).data
      };
    default:
      return state;
  }
};

export default ShopReducer

