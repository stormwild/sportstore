import { ActionTypes, SportsStore, LoadDataAction, initialState, SportsStoreAction, DataPayload, PageStore, SortStore, PageSizePayload, SortKeyPayload } from "./Types";
import { Reducer } from "redux";

const ShopReducer: Reducer<SportsStore | PageStore | SortStore | undefined, SportsStoreAction> = (state: SportsStore | PageStore | SortStore | undefined, action: SportsStoreAction): SportsStore | PageStore | SortStore | undefined => {

  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state || initialState,
        [((action as LoadDataAction).payload as DataPayload).dataType]: ((action as LoadDataAction).payload as DataPayload).data,
        [`${(action.payload as DataPayload).dataType}_total`]: (action.payload as DataPayload).total,
        [`${(action.payload as DataPayload).dataType}_params`]: (action.payload as DataPayload).params
      } as SportsStore;
    case ActionTypes.DATA_SET_PAGESIZE:
      return { ...state, ...(action.payload as PageSizePayload) }
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return { ...state, sortKey: (action.payload as SortKeyPayload).sortKey }
    default:
      return state;
  }
};

export default ShopReducer

