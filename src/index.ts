import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  // aaa
  xhr(config)
} 

export default axios
