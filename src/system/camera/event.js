/*
使用摄像头：拍照
*/
const electron = require('electron');
const dialog = electron.remote.dialog;
const fs = require('fs');
let photoData;
let video;
function initialize() {
    video = document.querySelector('video');
    let errorCallback = (error) => {
        console.log(`连接视频流错误： ${error.message}` );
    }
    // 获取视频流
    window.navigator.webkitGetUserMedia({video:true},(localMediaStream) => {
        video.src = window.URL.createObjectURL(localMediaStream);
    },errorCallback)
}
function savePhoto(filePath) {
    if(filePath) {
        fs.writeFile(filePath,photoData,'base64',(err) => {
            if(err) {
                alert(`保存图像有问题：${err.message}`);
                photoData = null;
            }
        })
    }
}
function takePhoto() {
    canvas.getContext('2d').drawImage(video,0,0,800,600);
    photoData = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg|jpeg);base64,/,'');
    console.log(photoData);
    dialog.showSaveDialog({
        title:'保存图像',
        defaultPath:'face.png',
        buttonLabel:'保存'
    },savePhoto);
}
window.onload = initialize;