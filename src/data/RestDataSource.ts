import axios, { Method } from 'axios'
import RestUrls from './Urls'

export class RestDataSource {
  SendRequest = (method: Method, url: string, params: Object) => axios.request({ method, url, params })
  GetData = async (dataType: string, params: Object = {}) => this.SendRequest("get", RestUrls[dataType], params)
}
