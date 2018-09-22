// 优雅地加载页面
/*
1.  创建一个隐藏的窗口
2.  装载页面
3.  将ready-to-show事件绑定到窗口上
4.  在ready-to-show事件中显示窗口
 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({show:false});

    win.loadFile('index.html');

    // ready-to-show
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

