/*
生成图标的多尺寸图像

 */

function stopDefaultEvent(event) {
	event.preventDefault();
	return false;
}

window.ondragover = stopDefaultEvent;
function displayImageInIconSet(filePath) {
	var images = document.querySelectorAll('#icons img');
	for (var i = 0 ; i < images.length;i++) {
		images[i].src = filePath;
	}
}
function init() {
    loadiconholder.ondrop = function(event) {
    	event.preventDefault();
    	if(event.dataTransfer.files.length != 1) {
    		alert('只能拖动一个图像文件');
		} else {
    		loadiconholder.style.display = 'none';
    		icons.style.display = 'block';
    		var file = event.dataTransfer.files[0];
    		displayImageInIconSet(file.path);
		}
		return false;
	}
}

window.onload = function() {
	init();
}