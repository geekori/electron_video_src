// 模态窗口
/*
模态窗口是指禁用父窗口的子窗口，也就是说，处于模态的子窗口显示后，无法使用父窗口，直到子窗口关闭

1.  模态窗口需要是另外一个窗口的子窗口
2.  一旦模态窗口显示，父窗口将无法使用

modal = true
 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    //  创建父窗口
    parentWin = new BrowserWindow();
    //  创建子窗口
    childWin = new BrowserWindow({parent:parentWin,width:200,height:200,modal:true});


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

