// 窗口的尺寸和位置
/*
单位都是像素

width：窗口宽度
height：窗口高度

minWidth：窗口允许的最小宽度
minHeight：窗口允许的最小高度
maxWidth：窗口允许的最大宽度
maxHeight：窗口允许的最大高度

x：指定窗口的横坐标
y：指定窗口的纵坐标

获取窗口的尺寸
getSize()  返回数组，[0]：width   [1]：height
设置窗口尺寸
setSize(wight,height,flag)  flag：true，以动画效果改变尺寸（仅限于Mac OS X）
获取窗口位置
getPosition() 返回数组：[0]：x   [1]：y
设置窗口尺寸
setPosition(x,y,flag) flag：true，以动画效果改变位置（仅限于Mac OS X）



 */

const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({width:400,height:600,minWidth:200,minHeight:300,
    maxWidth:600,maxHeight:600,x:20,y:20});
    win.loadFile('index.html');

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

