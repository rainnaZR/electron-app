## 引入前端框架

### 引入步骤

- yarn add webpack --dev
- yarn add electron-webpack --dev
- package.json中的start命令修改下：

```
"scripts": {
    "start": "electron-webpack dev",
    "build": "electron-webpack build"
}
```
- 项目目录调整



### 扩展阅读

- webpack的热更新原理是利用websocket技术和hash缓存。
- Node.js环境提供__dirname（所在目录的绝对路径）, __filename（当前文件的绝对路径）, global（全局环境）, process（当前进程）, console等变量。
- electron-webpack 和 webpack 包依赖的版本要保持一致，否则可能打包不了。
