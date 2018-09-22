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
    options.defaultPath = '/drivers';
    options.properties = ['openFile'];
    label.innerText = dialog.showOpenDialog(options);
}

// 选择文件类型
function onClick_FileType() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择文件类型';  // 设置Windows标题
    options.message = '选择文件类型';  // 设置Mac的标题
    options.buttonLabel = '选择';
    options.properties = ['openFile'];
    options.filters = [
        {name:'图像文件',extensions:['jpg','bmp','png','gif']},
        {name:'视频文件',extensions:['mkv','avi','mp4']},
        {name:'音频文件',extensions:['mp3','wav']},
        {name:'所有文件（*.*）',extensions:['*']}

    ];
    label.innerText = dialog.showOpenDialog(options);
}
//  选择目录
function onClick_Directory() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择目录';  // 设置Windows标题
    options.message = '选择目录';  // 设置Mac的标题
    options.buttonLabel = '选择';
    options.properties = ['openDirectory'];
    label.innerText = dialog.showOpenDialog(options);
}
