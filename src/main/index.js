let electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,  // 窗口对象集成node.js环境
            enableRemoteModule: true  // 访问remote
        }
    });

    // 加载文件
    let path = require('path');
    let URL = require('url');
    let url = '';
    if(process.env.NODE_ENV !== 'production'){
        // 如果开发环境，通过http协议加载本地localhost的web服务
        url = `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`;
    }else{
        // 如果是生产环境，通过file协议加载本地html文件
        url = URL.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file'
        })
    }
    win.loadURL(url);
    win.on('closed', () => {
        win = null;
    })
})
app.on('window-all-closed', () => {
    app.quit();
})