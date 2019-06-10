import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { url, method = 'get', data = null } = config

  const request = new XMLHttpRequest()


  request.send(data) 
}
