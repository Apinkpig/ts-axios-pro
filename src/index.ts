import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  // a
  xhr(config)
} 

export default axios
