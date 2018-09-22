const remote = require('electron').remote;
const dialog = remote.dialog;

function onClick_MessageBox() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '这是一个消息提示框';
    label.innerText = dialog.showMessageBox(options);
}