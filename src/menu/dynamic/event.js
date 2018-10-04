const electron = require('electron');
const app = electron.app;

const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
function saveClick() {
    var win = new BrowserWindow({width:300,height:200});
    win.loadURL('https://geekori.com');
}
var customMenu = new Menu();
function onClick_AllOriginMenu() {
    const menu = new Menu();
    var icon = '';
    if(process.platform == 'win32') {
        icon = '../../../images/folder.ico';
    } else {
        icon = '../../../images/open.png';
    }

    var menuitemOpen = new MenuItem({label:'打开',icon:icon});
    var menuitemSave = new MenuItem({label:'保存',click:saveClick});

    var menuitemFile = new MenuItem({label:'文件',submenu:[menuitemOpen,menuitemSave]});

    menuitemCustom = new MenuItem({label:'定制菜单',submenu:customMenu})
    menu.append(menuitemFile);
    menu.append(menuitemCustom);

    Menu.setApplicationMenu(menu);

}

function onClick_AddMenuItem() {
    var type='normal';
    if(radio.checked) {
        type = 'radio';
    }
    if(checkbox.checked) {
        type = 'checkbox';
    }

    customMenu.append(new MenuItem({label:menuitem.value,type:type}));
    menuitem.value = '';
    radio.checked = false;
    checkbox.checked = false;

    Menu.setApplicationMenu(Menu.getApplicationMenu());
}