import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import store from '@/redux'
import { ResultData } from "@/api/interface";
import { removeToken } from '@/redux/userSlice'
const isProduction = process.env.NODE_ENV === 'production' ? true : false


const config = {
  baseURL: isProduction ? '/admin' : '/api',
  // 设置超时时间
  timeout: 5000,
};

// 创建一个RequestHttp的class类 使用继承service
class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    // 添加请求拦截器
    this.service.interceptors.request.use(
      function (config: any) {
        // 在发送请求之前做些什么
        const tokens = localStorage.getItem('token')
        if (tokens) {
          config.headers = {
            token:tokens,
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
    this.service.interceptors.response.use(
      function (response) {
        const { data } = response
        console.log(data);
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
  }

}
export default new RequestHttp(config);
