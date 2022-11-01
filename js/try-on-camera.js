// find video-webcam
var video = document.querySelector("#video-webcam");

// ask for user permission
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

// if user give permission
if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, handleVideo, videoError);
}

// fungsi ini akan dieksekusi jika  izin telah diberikan
function handleVideo(stream) {
    video.srcObject = stream;
}

// fungsi ini akan dieksekusi kalau user menolak izin
function videoError(e) {
    // do something
    alert("Allow webcam for try-on!")
}