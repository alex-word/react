import axios, { AxiosRequestConfig } from 'axios'
import store from '@/redux'
import { removeToken } from '@/redux/userSlice'
import { Message } from '@/components/message'
const isProduction = process.env.NODE_ENV === 'production' ? true : false
interface Request {
  <P, R>(url: string, data?: P, config?: AxiosRequestConfig): Promise<R>
}

const request = axios.create({
  baseURL: isProduction ? '/admin' : '/api',
  timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const tokens = localStorage.getItem('token')

    if (tokens) {
      try {
        config.headers.token = tokens
      } catch (error) {
      }
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    const { data } = response
    if (data.code !== 200) {
      switch (data.code) {
        case 401:
          Message.error('登录已过期，请重新登录')
          store.dispatch(removeToken())
          break
      }
      return Promise.reject(data)
    }
    return data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject({ msg: '网络不佳,请稍后重试', code: 500 })
  },
)

const get = function (url, params?) {
  return request({
    url,
    params,
    method: 'GET',
  })
} as Request

const post = function<P, R> (url, data?:P, config?):Promise<R> {
  return request({
    url,
    data,
    method: 'POST',
    ...config
  })
} as Request

const put = function (url, data?, config?) {
  return request({
    url,
    data,
    method: 'PUT',
    ...config
  })
} as Request
const deletes = function (url, data?, config?) {
  return request({
    url,
    data,
    method: 'DELETE',
    ...config
  })
} as Request



export { request, get, post, put, deletes }
