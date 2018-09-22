const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
//  关闭当前窗口
function onClick_Close() {
    const win = remote.getCurrentWindow();
    win.close();
}

//
function onClick_CreateMultiWindows() {
    if(global.windows == undefined) {
        //  初始化windows数组
        global.windows = [];
    }

    var win = new BrowserWindow({show:false,x:10,y:20,widht:400,height:400});
    global.windows.push(win);
    win.loadFile('./child.html');
    win.on('ready-to-show',()=>{
        win.show();
    })
}
//  关闭所有的窗口（除了主窗口）
function onClick_CloseAllWindows() {
    if(global.windows != undefined) {
        //  扫描并关闭除了主窗口外的所有窗口
        for(var i = 0; i < global.windows.length;i++)
        {
            global.windows[i].close();
        }
        global.windows.length = 0;
        global.windows = undefined;
    }
}
