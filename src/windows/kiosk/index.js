// 锁定模式
/*
如果窗口处于全屏，并且锁定状态，在Mac OS X唯一退出窗口的方式是通过<Command + Q>组合键

如果在Mac OS X下，使用setKiosk方法切换窗口的锁定模式，不能将fullscreen属性设为true


 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({});
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

