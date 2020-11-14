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
    win.loadFile('index.html');
    win.on('closed', () => {
        win = null;
    })
})
app.on('window-all-closed', () => {
    app.quit();
})