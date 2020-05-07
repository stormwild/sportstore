import { SportsStore, SportsStoreAction, PageStore, SortStore } from "./Types";
import { Reducer } from "redux";

const CommonReducer = (...reducers: Reducer<SportsStore | PageStore | SortStore | undefined, SportsStoreAction>[]): Reducer<SportsStore | PageStore | SortStore | undefined, SportsStoreAction> => (state: SportsStore | PageStore | SortStore | undefined, action: SportsStoreAction): SportsStore | PageStore | SortStore | undefined => {
  for (let i = 0; i < reducers.length; i++) {
    let newStore: SportsStore | PageStore | SortStore | undefined = reducers[i](state, action);
    if (newStore !== state) {
      return newStore;
    }
  }
  return state;
}

export default CommonReducer;
