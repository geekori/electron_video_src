//  根据当前操作系统定制样式

// os模块

function labelOS(osName) {
    os_label.innerText = osName;
}

// 页面初始化函数
function initialize() {
    var os = require('os');
    var platform = os.platform();

    switch(platform) {
        case 'darwin':      // Mac OS X系统
            labelOS('Mac OS X');
            break;
        case 'linux':       // Linux系统
            labelOS('linux');
            break;
        case 'win32':       //  Windows系统
            labelOS('Windows');
            break;
        default:
            console.log('无法检测您当前的操作系统平台',platform);
    }
}

window.onload = initialize;