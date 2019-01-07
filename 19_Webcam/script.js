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
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        // ImageData is a huge array of Object, with key-value pairs representing RGBA and their values
    
        // apply filters on pixels array
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    // pixels = greenScreen(pixels);
     // putting image back on canvas
     ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // playing sound when photo is taken
    snap.currentTime = 0;
    snap.play();
    // taking still from video

    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'image');
    link.innerHTML = `<img src=${data}>`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
      pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
  }
  
  function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }
  
  function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });

    console.log(levels);
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }
  
getVideo();

// On page load: listen for video ready and putting its content on canvas
video.addEventListener('canplay', videoToCanvas);