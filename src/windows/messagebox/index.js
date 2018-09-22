// 消息对话框：显示简单的消息对话框
/*
消息对话框：title和message

showMessageBox(options)

设置消息对话框的图标


设置消息对话框的类型

1.默认对话框：none
2. 信息对话框：info
3. 错误对话框：error
4. 询问对话框：question
5. 警告对话框：warning

设置对话框的按钮



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

