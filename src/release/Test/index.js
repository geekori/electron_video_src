// 设置窗口图标
/*
icon
 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({width:400,height:400,icon:'..\\..\\..\\images\\folder.ico'});
    win.loadFile('index.html');
    if(process.platform != 'darwin') {
        win.setIcon('..\\..\\..\\images\\folder1.ico')
    }

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

