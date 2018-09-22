const remote = require('electron').remote;
const dialog = remote.dialog;
//  显示简单的消息对话框
function onClick_MessageBox() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '这是一个消息提示框';
    label.innerText = dialog.showMessageBox(options);
}

function onClick_MessageBoxIcon() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '定制消息对话框的图标';
    options.icon = '../../../images/kt.png';
    label.innerText = dialog.showMessageBox(options);
}