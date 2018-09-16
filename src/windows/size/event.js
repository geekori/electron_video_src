const remote = require('electron').remote;
function onClick_GetSizePosition(){
    const win = remote.getCurrentWindow();
    console.log("宽度：" + win.getSize()[0])  // 获取窗口宽度
    console.log("高度:" + win.getSize()[1])  //  获取窗口高度

    console.log('X：' + win.getPosition()[0])
    console.log('Y：' + win.getPosition()[1])
}

function onClick_SetSizePosition() {
    const win = remote.getCurrentWindow();
    win.setSize(400,400, true);
    win.setPosition(200,300,true);
}