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
    options.properties = ['openDirectory','createDirectory'];
    label.innerText = dialog.showOpenDialog(options);
}
//  多选（文件和目录）
function onClick_MultiSelection() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';  // 设置Windows标题
    options.message = '选择多个文件和目录';  // 设置Mac的标题
    options.buttonLabel = '选择';
    options.properties = ['openFile','createDirectory','multiSelections'];
    //  如果是Mac系统，添加openDirectory属性
    if(process.platform == 'darwin') {
        options.properties.push('openDirectory');
    }
    label.innerText = dialog.showOpenDialog(options);
}

//  通过回调函数返回选择结果
function onClick_Callback() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';  // 设置Windows标题
    options.message = '选择多个文件和目录';  // 设置Mac的标题
    options.buttonLabel = '选择';
    options.properties = ['openFile','createDirectory','multiSelections'];
    //  如果是Mac系统，添加openDirectory属性
    if(process.platform == 'darwin') {
        options.properties.push('openDirectory');
    }
    dialog.showOpenDialog(options,(filePaths) => {
        for(var i = 0; i < filePaths.length;i++) {
            label.innerText += filePaths[i] + '\r\n';
        }
    });
}