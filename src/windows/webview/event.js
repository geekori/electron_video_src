/*
在窗口中嵌入Web页面

1. <webview>
2. webview的事件
3. 在<webview>中装载页面中执行Node.js API
4. webview常用的API

 */

function onLoad() {
    const webview = document.getElementById('webview1');
    const loadstart = () => {
        console.log('loadstart');
    }
    const loadstop = () => {
        console.log('loadstop');
    }

    webview.addEventListener('did-start-loading', loadstart);
    webview.addEventListener('did-stop-loading',loadstop);
}

function onClick_API() {
    webview = document.getElementById('webview1');
    //webview.loadURL("https://www.baidu.com");
    webview.reload();

    console.log(webview.getTitle())
    console.log(webview.getURL());
    const title = webview.getTitle();
    webview.executeJavaScript('console.log("' + title + '");');
    webview.openDevTools();
}
