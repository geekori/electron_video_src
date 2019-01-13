//  数据存储：用localStorage读写键值数据

//  Web和Electron的数据存储方案：前端和后端

/*
键值存储：localStorage、IndexedDB
PouchDB：客户端库

SQLite


键值：key-value，相当于Map或Dict
 */

const electron = require('electron');
const app = electron.remote.app;

function initialize() {
    let notes = window.localStorage['notes'];
    if(!notes) notes = '记录生活的点点滴滴...';
    textarea.value = notes;
}
function saveNotes() {
    let notes = textarea.value;
    window.localStorage.setItem('notes',notes);
}

function quit() {
    app.quit();
}
window.onload = initialize;
