// 打开对话框：最简单的打开对话框
/*

Dialog.showOpenDialog([browserWindow,]options[,callback])

browserWindow参数允许该对话框将自身附加到父窗口，作为父窗口的模态对话框。

callback：返回选中的文件或路径，如果不指定该参数，选中的文件和目录的路径会通过showOpenDialog方法的返回值返回

options：
1. title String  对话框的标题（Windows）
2. defaultPath String 默认的路径
3. buttonLabel String Open按钮的文本
4. filters：Array 过滤器，用于过滤指定类型的文件
5. properties：Array  包含对话框的功能，如打开文件、打开目录、多选等。
6. message String  对话框标题（Mac OS X）


打开对话框：定制对话框

title、buttonLabel、defaultPath

打开对话框：选择指定类型的文件

options.filters :对象类型的数组


打开对话框：选择和创建目录

openDirectory


 */
const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow();
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

