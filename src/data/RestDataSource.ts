import axios, { Method } from 'axios'
import RestUrls from './Urls'

export class RestDataSource {
  SendRequest = (method: Method, url: string) => axios.request({ method, url })
  GetData = (dataType: string) => this.SendRequest("get", RestUrls[dataType])
}
