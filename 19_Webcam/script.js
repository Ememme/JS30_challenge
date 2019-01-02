// import { get } from "https";

// const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    // way to access the media devices
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (mediaStream) {
            let video = document.querySelector('.player');
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
}
getVideo();