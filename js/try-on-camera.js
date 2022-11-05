'use strict';
/*------------------
CAMERA
--------------------*/

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

(function ($) {
    
            /*------------------
                Product filter
            --------------------*/
            $('.filter__tryon li').on('click', function () {
                $('.filter__tryon li').removeClass('active');
                $(this).addClass('active');
            });
            if ($('.property__gallery').length > 0) {
                var containerEl = document.querySelector('.property__gallery');
                var mixer = mixitup(containerEl);
            }
})(jQuery);