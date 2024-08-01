import axios from 'axios'
import store from '@/redux'
import { removeToken } from '@/redux/userSlice'
const isProduction = process.env.NODE_ENV === 'production' ? true : false

const request = axios.create({
  baseURL: isProduction ? '/admin' : '/api',
  
  timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config:any) {
    // 在发送请求之前做些什么
    const tokens = localStorage.getItem('token')
    if (tokens) {
      try {
        const { id, token } = JSON.parse(tokens)
        config.headers = {
          token,
          'user-id': id,
        }
      } catch (error) { }
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
          store.dispatch(removeToken())
          break
      }
      return Promise.reject(data)
    }
    return Promise.resolve(data)
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject({ msg: '网络连接失败', code: 500 })
  },
)


export {request}