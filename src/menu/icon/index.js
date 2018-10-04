/*
为菜单项添加图标

windows
ico

其他系统
png

icon设置图标

图标会按原尺寸显示

16*16
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
function createWindow() {
    win = new BrowserWindow({width:800,height:600});
    win.loadFile('index.html');
    var icon = '';
    if(process.platform == 'win32') {
        icon = '../../../images/folder.ico';
    } else {
        icon = '../../../images/open.png';
    }


    //  定义菜单模板
    const template = [
        {
            label:'文件',
            submenu:[
                {
                    label:'打开',
                    icon:icon
                },
                {
                    label:'重做',
                    role:'redo'
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
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

