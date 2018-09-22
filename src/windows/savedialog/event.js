const remote = require('electron').remote;
const dialog = remote.dialog;

function onClick_Save() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '保存文件';
    options.buttonLabel = '保存';
    options.defaultPath='.';
    options.nameFieldLabel = 'hahaha：';
    options.filters = [
        {name:'图像文件',extensions:['jpg','bmp','png','gif']},
        {name:'视频文件',extensions:['mkv','avi','mp4']},
        {name:'音频文件',extensions:['mp3','wav']},
        {name:'所有文件（*.*）',extensions:['*']}

    ];
   // label.innerText = dialog.showSaveDialog(options,);
    dialog.showSaveDialog(options,(filename) => {
        label.innerText = filename;
    });

}