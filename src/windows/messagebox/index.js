// 消息对话框：显示简单的消息对话框
/*
消息对话框：title和message

showMessageBox(options)

设置消息对话框的图标


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

