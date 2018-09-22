// 文件展示窗口（只针对Mac OS X）
/*

通过BrowserWindow对象的setRepresentedFilename方法设置文件的路径，当前窗口
会将文件的图标放到窗口标题栏上，标题栏右键菜单会显示该文件所在的目录层次
 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({show:false});

    win.loadFile('index.html');
    win.setRepresentedFilename('/temp/centos7-node1（192.168.56.15）.ova')

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

