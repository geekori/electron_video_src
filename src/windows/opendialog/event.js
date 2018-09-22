const remote = require('electron').remote;
const dialog = remote.dialog;

function onClick_OpenFile() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({properties:['openFile']})
}
