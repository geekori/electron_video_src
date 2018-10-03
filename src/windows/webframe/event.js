/*
使用webFrame渲染页面

放大、缩小页面
 */

const {webFrame} = require('electron');
//  放大页面
function onClick_ZoomIn() {
    //webFrame.insertText('hello world');  //  向处于焦点状态的文本输入框插入文本
     //webFrame.setZoomLevel(2);
    //  每增加或减少1，放大或缩小20%
    webFrame.setZoomLevel(webFrame.getZoomLevel() + 1);
}

//  缩小页面
function onClick_ZoomOut() {
    webFrame.setZoomLevel(webFrame.getZoomLevel() - 1);
}