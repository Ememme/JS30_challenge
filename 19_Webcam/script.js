// import { get } from "https";

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
console.log(canvas);
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    // way to access the media devices
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (mediaStream) {
            // let video = document.querySelector('.player');
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
}


function videoToCanvas() {
    const width = video.videoWidth;
    console.log(width);
    const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
    

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16); 
}

videoToCanvas();

getVideo();