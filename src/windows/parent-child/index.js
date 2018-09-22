// 父子窗口
/*
1. 子窗口总是在父窗口上面
2. 如果父窗口关闭，子窗口自动关闭

子窗口相当于父窗口的悬浮窗口
 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    //  创建父窗口
    parentWin = new BrowserWindow();
    //  创建子窗口
    childWin = new BrowserWindow({parent:parentWin,width:100,height:100});
    parentWin.loadFile('index.html');

    childWin.loadFile('child.html');



    parentWin.on('closed',()=> {
        console.log('closed');
        parentWin = null;
    });
    childWin.on('closed',()=> {
        console.log('closed');
        childWin = null;
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

