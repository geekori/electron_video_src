// 全屏窗口
/*
fullscreen:true

如果设置了width、height、x、y，系统会忽略这些属性，仍然是全屏显示

maxWidth、maxHeight

fullscreenable:false，在Mac OS X会阻止单击最大化按钮隐藏菜单

setFullScreen方法可以动态将窗口设置为全屏状态，但fullscreenable属性值必须是true

通过win.isFullScreen()方法可以获取窗口是否为全屏
 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({width:400,height:400});
    win.loadFile('index.html');
    win.setFullScreen(true);
    win.isFullScreen();
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

