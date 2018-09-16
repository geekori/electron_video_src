// 全屏窗口
/*
fullscreen:true

如果设置了width、height、x、y，系统会忽略这些属性，仍然是全屏显示

maxWidth、maxHeight


 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({fullscreen:true,maxWidth:600,maxHeight:400});
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

