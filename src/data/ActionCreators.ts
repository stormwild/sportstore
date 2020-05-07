import { ActionTypes, SportsStoreAction } from "./Types";
import { RestDataSource } from "./RestDataSource";
import { AxiosResponse } from "axios";

const dataSource = new RestDataSource()

export const loadData = (dataType: string, params: Object): SportsStoreAction => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType, params).then((res) => ({
    dataType,
    data: (res as AxiosResponse).data,
    total: Number(res.headers["x-total-count"]),
    params
  }))
});

export const setPageSize = (newSize: number) =>
  ({ type: ActionTypes.DATA_SET_PAGESIZE, payload: newSize });

export const setSortKey = (newProp: string) =>
  ({ type: ActionTypes.DATA_SET_SORT_PROPERTY, payload: newProp });
