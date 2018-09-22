const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

// 获取ipcMain对象
const ipcMain = remote.ipcMain;
const {ipcRenderer} = require('electron');
ipcMain.on('other',(event, str) => {
   const labelReturn = document.getElementById('label_return');
   labelReturn.innerText = labelReturn.innerText + '\r\n' + str;
});
//  主窗口向other窗口发送数据
function onClick_SendData() {
    var win = new BrowserWindow({show:false,x:10,y:20,width:400,height:400});
    win.loadFile('./other.html');
    win.once('ready-to-show',()=>{
        win.show();
        win.webContents.send('data',{name:'Bill',salary:2345});
    });

}

//  other窗口装载页面时显示主窗口发过来的数据
function onLoad() {
    ipcRenderer.on('data',(event, obj) => {
       const labelName = document.getElementById('label_name');
       const labelSalary = document.getElementById('label_salary');
       labelName.innerText = obj.name;
       labelSalary.innerText = obj.salary;
    });
}

//  关闭other窗口

function onClick_Close() {
    const win = remote.getCurrentWindow();
    ipcRenderer.send('other','窗口已经关闭');
    win.close();
}