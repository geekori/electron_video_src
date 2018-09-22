const remote = require('electron').remote;
const dialog = remote.dialog;

//  显示最简单的打开对话框
function onClick_OpenFile() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({properties:['openFile']})
}
//  定制打开对话框
function onClick_CustomOpenFile() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';  // 设置Windows标题
    options.message = '打开我的文件';  // 设置Mac的标题
    options.buttonLabel = '选择';
    options.properties = ['openFile'];
    label.innerText = dialog.showOpenDialog(options);
}

