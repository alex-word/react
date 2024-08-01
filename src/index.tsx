import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider, Empty } from "antd"
import store from "./redux/index"
import { App } from "./app"
import zhCN from "antd/lib/locale/zh_CN"
// import moment from "moment"
// import "moment/locale/zh-cn"
// moment.locale("zh-cn")
const root = document.getElementById("root")
if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: "#435ee8", colorTextBase: '#333', colorTextSecondary: '#666' } }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  )
}
