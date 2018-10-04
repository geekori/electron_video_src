const electron = require('electron');
const app = electron.app;
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
const dialog = remote.dialog;


function  onload() {
    const menu = new Menu();
    var icon = '';
    if(process.platform == 'win32') {
        icon = '../../../images/folder.ico';
    } else {
        icon = '../../../images/open.png';
    }
    const win = remote.getCurrentWindow();

    var menuItemOpen = new MenuItem({label:'打开',icon:icon,click:()=>{
            var paths = dialog.showOpenDialog({properties:['openFile']});
            if(paths != undefined) {
                win.setTitle(paths[0]);
            }
        }});

    var menuItemSave = new MenuItem({label:'保存',click:saveClick});

    var menuItemFile = new MenuItem({label:'文件',submenu:[menuItemOpen,menuItemSave]});

    var menuItemInsertImage = new MenuItem({label:'插入图像'});
    var menuItemRemoveImage = new MenuItem({label:'删除图像'});

    menu.append(menuItemFile);
    menu.append(menuItemInsertImage);
    menu.append(menuItemRemoveImage);

    panel.addEventListener('contextmenu',function(event) {
        event.preventDefault();
        x = event.x;
        y = event.y;
        menu.popup({x:x,y:y});
        return false;
    })

}
function saveClick() {
    var win = new BrowserWindow({width:300,height:200});
    win.loadURL('https://geekori.com');
}