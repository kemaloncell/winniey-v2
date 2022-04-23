import axios from 'axios'
import RequestAuthorizationInterceptor from './interceptors/requestAuthorizationInterceptor'
class BaseService {
  constructor(url) {
    const nodeEnv = process.env.NODE_ENV

    const base = nodeEnv !== 'development' ? 'https://winniey-backend.herokuapp.com/api' : 'http://localhost:3008/api'

    this.http = axios.create({
      baseURL: `${base}/${url}`,
      withCredentials: true,
    })

    this.authorizationInterceptorId = this.http.interceptors.request.use(
      RequestAuthorizationInterceptor,
    )
  }

  async get(url, params) {
    return this.http.get(url, {
      params,
    })
  }

  async post(url, data, config) {
    return this.http.post(url, data, config)
  }

  async postLoginData(url, data) {
    return this.http.post(url, data)
  }

  async put(url, data, config) {
    return this.http.put(url, data, config)
  }

  async delete(url, config) {
    return this.http.delete(url, config)
  }

  async patch(url, config) {
    return this.http.patch(url, config)
  }

  async download(url) {
    return this.http.get(url, {
      responseType: 'arraybuffer',
    })
  }

  async downloadPost(url, data = {}) {
    return this.http.post(url, data, {
      responseType: 'arraybuffer',
    })
  }
}

export { BaseService }
