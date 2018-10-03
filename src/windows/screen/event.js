/*
获取屏幕尺寸和鼠标绝对坐标


*/

const electron = require('electron');
const remote = electron.remote;
function onClick_Screen() {
    const win = remote.getCurrentWindow();
    const {width,height} = electron.screen.getPrimaryDisplay().workAreaSize;
    console.log('width:' + width);
    console.log('height:' + height);
    win.setSize(width,height,true);
    win.setPosition(0,0);

    // 获取鼠标当前的绝对坐标
    console.log('x:' + electron.screen.getCursorScreenPoint().x);
    console.log('y:' + electron.screen.getCursorScreenPoint().y);


}