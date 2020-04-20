import { ActionTypes, Action } from "./Types";
import getData from "./data";

const data: {
  [key: string]: any
} = getData()

export const loadData = (type: string): Action => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: type,
    data: data[type]
  }
});
