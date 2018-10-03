/*
使用HTML5 API创建子窗口

window.open方法

window.open(url[,title][,attributes])

1. url：要打开页面的链接（可以是本地的链接，也可以是Web链接）
2. title：设置要打开页面的标题，如果在页面中已经设置了标题，那么这个参数将被忽略
3. attributes：可以设置与窗口相关的一些属性，例如，窗口的宽度和高度

window.open方法的返回值

BrowserWindowProxy：可以认为是BrowserWindow的代理类

控制窗口

1. 获取窗口焦点：focus
2. 让窗口失去焦点状态：blur
3. 关闭窗口：close
4. 显示打印对话框：print
 */
//  打开一个子窗口
function onClick_OpenWindow() {
    win = window.open('./child.html','子窗口','width=300,height=200');
   // win = window.open('https://geekori.com')
}

//  获取窗口焦点
function onClick_Focus() {
    if(win != undefined) {
        win.focus();
    }
}

//  让窗口失去焦点
function onClick_Blur() {
    if(win != undefined) {
        win.blur();
    }
}

//  关闭窗口
function onClick_Close() {
    if(win != undefined) {
        if(win.closed) {
            alert('子窗口已经关闭，不需要再关闭');
            return;
        }
        win.close();
    }
}

//  显示打印对话框
function onClick_PrintDialog() {
    if(win != undefined) {
        win.print();
    }
}