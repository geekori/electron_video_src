// 关闭多窗口
/*
BrowserWindow对象的close方法用于关闭当前窗口

关闭多窗口的基本原理：将所有窗口的BrowserWindow对象保存起来，只需要调用
指定窗口的close方法，就可以关闭指定的一些窗口

global：全局变量，将所有窗口的BrowserWindow对象保存到windows数组中，将该数组保存到global中

 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({show:false});
    win.loadFile('./index.html');
    win.on('ready-to-show',()=>{
       win.show();
    });

    win.on('closed',()=> {
        console.log('closed');
        win = null;
    });
}

app.on('ready',createWindow);
app.on('window-all-closed',()=>{
    console.log('window-all-closed');
    if(process.platform != 'darwin') {
      app.quit();
    }
});

app.on('activate',() =>{
    console.log('activate');
    if(win == null) {
        createWindow();
    }
})

