import { ActionTypes, Action } from "./Types";
import { Reducer } from "react";

const ShopReducer: Reducer<object, any> = (storeData: object, action: any) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data
      };
    default:
      return storeData || {};
  }
};

export default ShopReducer

