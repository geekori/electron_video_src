const remote = require('electron').remote;
const dialog = remote.dialog;
function onClick_ErrorBox() {
    dialog.showErrorBox('错误','这是一个错误');
}