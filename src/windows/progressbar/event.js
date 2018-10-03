/*
任务栏进度条（仅限于Windows）



*/
const remote = require('electron').remote;
function onClick_ProgressBar() {
    const win = remote.getCurrentWindow();
    win.setProgressBar(0.3);
}