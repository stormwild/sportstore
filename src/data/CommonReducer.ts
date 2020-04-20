import { SportsStore, SportsStoreAction } from "./Types";
import { Reducer } from "redux";

const CommonReducer = (...reducers: Reducer<SportsStore | undefined, SportsStoreAction>[]): Reducer<SportsStore | undefined, SportsStoreAction> => (state: SportsStore | undefined, action: SportsStoreAction): SportsStore | undefined => {
  for (let i = 0; i < reducers.length; i++) {
    let newStore: SportsStore | undefined = reducers[i](state, action);
    if (newStore !== state) {
      return newStore;
    }
  }
  return state;
}

export default CommonReducer;
