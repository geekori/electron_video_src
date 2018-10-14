
const {app, BrowserWindow} = require('electron');


 function createWindow () {

    win = new BrowserWindow({width: 800, height: 600});


    win.loadFile('./index.html');

    win.on('closed', () => {
      console.log('closed');
      win = null;
    })
  }

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        console.log('darwin');
        app.quit();
    }
})

app.on('activate', () => {

    if (win === null) {
        createWindow();
    }
})