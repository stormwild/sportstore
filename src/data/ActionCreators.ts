import { ActionTypes, SportsStoreAction } from "./Types";
import { RestDataSource } from "./RestDataSource";
import { AxiosResponse } from "axios";

const dataSource = new RestDataSource()

export const loadData = (dataType: string): SportsStoreAction => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType).then((res) => ({ dataType, data: (res as AxiosResponse).data }))
});
