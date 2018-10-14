//  将electron-packager与Electron应用结合

//  electron-packager-interactive

const remote = require('electron').remote;
const dialog = remote.dialog;
var spawn = require('child_process').execFile;

function onload() {
    if(process.platform == 'win32') {
        mac.disabled = true;
    }
}

//  选择Electron工程目录
function onClick_SelectProject() {
    var options = {};
    options.title = '选择Electron工程目录';
    options.properties = ['openDirectory'];
    label_source.innerText = dialog.showOpenDialog(options);
}
// 选择输出目录
function onClick_SelectOut() {
    var options = {};
    options.title = '选择输出目录';
    options.properties = ['openDirectory','createDirectory'];
    label_out.innerText = dialog.showOpenDialog(options);
}

// 开始打包
function onClick_Package() {
    const args = [];
    //  设置Electron工程目录
    args.push(label_source.innerText);
    //  设置应用程序名称
    args.push(appName.value);
    //  设置输出目录
    args.push('--out=' + label_out.innerText);
    // 设置Electron的版本
    args.push('--electron-version=3.0.2');

    if(asar.checked) {
        args.push('--asar');
    }

    var os = '';
    if(mac.checked) {
        os +='darwin';
    }
    if(windows.checked) {
        if(os !='') {
            os += ',';
        }
        os += 'win32';
    }

    if(linux.checked) {
        if(os != '') {
            os += ',';
        }
        os += 'linux';
    }

    if(os != '') {
        args.push('--platform=' + os);
    }

    var cmd = 'electron-packager';
    if(process.platform == 'win32') {
        cmd += '.cmd';
    }

    //  开始执行electron-packager
    spawn(cmd,args,(error,stdout,stderr) =>{
       if(error) {
           console.error('stderr',stderr);
           packager_status.innerText = '打包失败';
       } else {
           packager_status.innerText = '打包成功';
       }
    });
    packager_status.innerText = '正在打包，请稍后...';


}
