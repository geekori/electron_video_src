const remote = require("electron").remote;
function onClick() {
    const button = document.getElementById('button');
    const win = remote.getCurrentWindow();
    if(win.isKiosk()) {
        //  解除锁定模式
        win.setKiosk(false);
        button.innerText = "进入锁定模式";
    }
    else {
        //  进入锁定模式
        win.setKiosk(true);
        button.innerText = "退出锁定模式";
    }
}