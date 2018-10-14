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