/*
菜单类型

1. normal：默认的菜单类型
2. separator：分割线
3. submenu:子菜单
4. checkbox：多选菜单
5. radio：单选菜单




 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
function createWindow() {
    win = new BrowserWindow({width:800,height:600});
    win.loadFile('index.html');

    //  定义菜单模板
    const template = [
        {
            label:'编辑',
            submenu:[
                {
                    label:'撤销',
                    role:'undo'
                },
                {
                    label:'重做',
                    role:'redo'
                },
                {
                  type:'separator'
                },

                {
                    label:'剪切',
                    role:'cut'
                },
                {
                    label:'复制',
                    role:'copy'
                },
                {
                    label:'粘贴',
                    role:'paste'
                }

            ]
        },
        {
            label:'我的菜单',
            submenu:[
                {
                    label: '多选1',
                    type:'checkbox'
                },
                {
                    label:'多选2',
                    type:'checkbox'
                }
                ,
                {
                    label:'多选3',
                    type:'checkbox'
                },
                {
                  type:'separator'
                }
                ,
                {
                    label:'单选1',
                    type:'radio'
                }
                ,
                {
                    label:'单选2',
                    type:'radio'
                }
                ,
                {
                    label:'单选3',
                    type:'radio'
                },
                {
                    label:'windows',
                    type:'submenu',
                    role:'windowMenu'
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

