## 主进程与渲染进程

### 概念

Electron应用程序区分主进程和渲染进程。线程是进程的子集，进程不共享内存，线程可以共享内存，一个进程会创建多个线程。例子中yarn start执行index.js中的代码就是在Electron的主进程中，主进程负责创建窗口并加载index.html，而index.html中编写的代码运行在Electron的渲染进程中。

- 主进程负责完成监听应用程序的生命周期事件，启动窗口，加载页面，应用程序关闭后回收资源，退出程序等工作。主进程管理窗口及其渲染进程。
- 渲染进程负责完成渲染界面，接收用户输入，响应用户交互等工作。

一个Electron应用只会有一个主进程，多个渲染进程。一个BrowserWindow实例代表一个渲染进程。

JS的事件循环机制使得JS适合处理高IO的应用，不适合处理CPU密集型的任务，所以一般使用Node.js来接管web请求（IO操作），复制的业务逻辑（CPU操作）由node.js转交给java执行。

### 进程互访

#### 渲染进程访问主进程


### 扩展阅读

- mac下使用 Alt+Command+I 即可打开渲染进程的调试窗口。
- mac下使用 Command+R 刷新页面
- 使用 win.webContents.openDevTools(); 可以在页面启动时打开开发者工具