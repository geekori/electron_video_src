/*
托盘应用


 */
const {app,Menu,Tray,BrowserWindow} = require('electron');

let tray;
let contextMenu;
function createWindow() {
    win = new BrowserWindow({width:800,height:600});
    win.loadFile('index.html');

    //  添加托盘图标
    tray = new Tray('../../../../images/open.png');
    // 为托盘图标添加上下文菜单
    contextMenu = Menu.buildFromTemplate([
        {label:'复制',role:'copy'},
        {label:'粘贴',role:'paste'},
        {label:'剪切',role:'cut'}
    ])
    tray.setToolTip('这是一个托盘应用');
    tray.setContextMenu(contextMenu);


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

