// 窗口之间的交互（数据传递）
/*

window1和window2， window1 <-> window2
窗口之间的交互就是两个窗口之间双向的数据传递

使用ipc（interProcess Communication，进程间通讯）方式在窗口之间传递数据

ipcMain和ipcRendener

ipcMain用于主窗口中
ipcRendener可以用于其他的窗口

主窗口：window1， 其他窗口：window2

window1 <-> window2
在window2中会通过ipcRenderer触发一个事件，用于接收window1传递过来的数据，
在window2关闭时，会通过ipcRenderer给window1发送一个消息，window1通过
ipcMain触发一个事件，用于获取window2发过来的数据。

 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow();
    win.loadFile('index.html');

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

