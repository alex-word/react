const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: "development", // 开发模式,打包更加快速,省了代码优化步骤
  devtool: "eval-cheap-module-source-map", // 源码调试模式
  devServer: {
    port: 80, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    },
    client: {
      logging: 'none', // 关闭客户端日志
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    devMiddleware: {
      stats: 'errors-only', // 仅在发生错误时输出统计信息
    },
    proxy: {  // 重写的方式，把请求代理到express服务器上
      '/api': {
        target: 'http://39.107.249.219:8888',
        pathRewrite: { '/api': '' } // 把/api 替换为空
      }
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // 添加热更新插件
  ],
});
