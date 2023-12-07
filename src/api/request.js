import axios from "axios"
import { getToken, getLocalItem } from "../utils/localStorage"
// import {translate} from '../utils/onlineTranslation';
import { toastShow } from "../utils/toast"
import { loading, dismissLoading } from "../utils/loading"
import { showServerError } from "../utils/serverError"
import { getBusyError } from "../../app/api/user"
let tokenInstance = null
// const translate = require('google-translate-api');

//创建请求管理器
let requestManager = axios.CancelToken.source()
console.log(window._$BASE_URL, "window._$BASE_URL---")

const instance = axios.create({
  // baseURL: window._$BASE_URL, //"https://hashdragon.io/",//"http://208.72.155.81:8520/",
  baseURL: "https://test.beyondedgellc.com/", //"https://hashdragon.io/",//"http://208.72.155.81:8520/",
  //  timeout: 3000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItMSIsImN0cyI6MTY4NzE2NDQzNjAxNSwiZXhwaXJlVHMiOjE2ODcxNjQ0MzYwMTUsImlhdCI6MTY4NzE2NDQzNn0.YI-1iO5kBi9ocTbWlo7AJyhPmi9T9YU3pAxfZep2JMw",
  },
})

// 设置默认请求头
instance.interceptors.request.use(
  (config) => {
    // if (!tokenInstance) {
    //   tokenInstance = getToken();
    // }
    const localLng = getLocalItem("language")
    const lang = localLng // 你的语言值，可以根据需要从其他地方获取
    config.data = {
      ...config.data,
      lang,
    }
    tokenInstance = getToken()
    if (tokenInstance) {
      config.headers["Authorization"] = `Bearer ${tokenInstance}`
    }
    if (config.showLoading) loading()
    return config
  },
  (error) => {
    console.log("Request Error", error)
    dismissLoading()
    Promise.reject(error)
  }
)

let retryCount = 0
instance.interceptors.response.use(
  (res) => {
    // 成功的响应处理逻辑
    // translate('Ik spreek Engels', {to: 'en'})
    //     .then(res => {
    //         console.log(res.text);
    //         //=> I speak English
    //         console.log(res.from.language.iso);
    //         //=> nl
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    console.log(res.data, "res===")
    if (res.data.code === 0) {
    }
    // if (res.data.code === 4) {
    //     // 弹出登录的逻辑
    //     window.location.href('/login');
    // }
    // ...
    retryCount = 0 // 重置重试计数器
    dismissLoading()
    return res
  },
  (error) => {
    // 失败的响应处理逻辑
    // 取消加载提示
    dismissLoading()
    // 如果重试次数已经超过了阈值，弹出提示信息并停止
    if (retryCount === 3) {
      if (axios.isCancel(error)) {
        // 请求被取消
        // ...
        getBusyError(error.code, error.message, error.config.url)
      } else if (error.code === "ECONNABORTED") {
        // 请求超时
        // ...
        getBusyError(error.code, error.message, error.config.url)
        showServerError()
        toastShow("Time out", "warning")
      } else {
        // 其他错误
        // ...
        getBusyError(error.code, error.message, error.config.url)
        showServerError()
        toastShow("Unknow error", "warning")
      }
      retryCount = -1
      return Promise.reject(error)
    }

    if (retryCount !== -1) {
      // 否则延时1秒后重新发起请求
      retryCount++
      setTimeout(() => {
        instance.request(error.config)
      }, 1000)
    }

    return Promise.reject(error)
  }
)

const http = {
  request(config) {
    requestManager = axios.CancelToken.source()
    return new Promise(async (r, v) => {
      const res = await instance
        .request({
          ...config,
          cancelToken: requestManager.token, //设置请求的取消令牌
        })
        .catch((err) => {
          console.log("报错")
          // toastShow(err.toString(), "warning");
          v(err)
        })
      if (config?.unChanged) r(res)
      if (res?.data?.code === 2) {
        toastShow(res.data.msg.toString(), "warning")
      }
      r(res?.data)
    })
  },
  post(url, data, config) {
    return this.request({
      method: "POST",
      url,
      data,
      ...config,
    })
  },
  get(url, params, config) {
    return this.request({
      method: "GET",
      url,
      params,
      ...config,
    })
  },
}

const cancelAllRequests = () => {
  if (requestManager) {
    requestManager.cancel("Cancel Request")
    requestManager = null
  }
}
export { cancelAllRequests }
export default http
