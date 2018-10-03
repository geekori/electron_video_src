/*
使用HTML5 API创建子窗口

window.open方法

window.open(url[,title][,attributes])

1. url：要打开页面的链接（可以是本地的链接，也可以是Web链接）
2. title：设置要打开页面的标题，如果在页面中已经设置了标题，那么这个参数将被忽略
3. attributes：可以设置与窗口相关的一些属性，例如，窗口的宽度和高度

window.open方法的返回值

BrowserWindowProxy：可以认为是BrowserWindow的代理类

 */

function onClick_OpenWindow() {
    win = window.open('./child.html','子窗口','width=300,height=200');
   // win = window.open('https://geekori.com')
}