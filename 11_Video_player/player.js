const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const rewindButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen');

function togglePlay() {
   video.paused ? video.play() : video.pause()
}

function updateButtonIcon() {
    // console.log('Update me!');
    // console.log(this);
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    playButton.textContent = icon;
}

function rewindVideo() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
    console.log(this.value);
    video[this.name] = this.value;
}

function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    // progress bar is done with flex, so flexBasis 0 will show empty, 100 > filled with yellow
    progressBar.style.flexBasis = `${percent}%`;
    console.log(percent);

}
// Based on the click position on progress bar, video will rewind accordingly
function adjustVideo(event) {
    const adjustedTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = adjustedTime;
}

function toggleFullScreen() {
    const browserPrefixes = video.requestFullscreen || video.webkitRequestFullScreen;
    browserPrefixes.call(video);

}

// Hooking up event listeners:
// Video toggles play if video window or playButton is clicked
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);

// Updating playButton whenever video is paused/started - could be done via 3rd party plugins, etc.
video.addEventListener('play', updateButtonIcon);
video.addEventListener('pause', updateButtonIcon);
video.addEventListener('timeupdate', updateProgressBar);

// Rewinding video with buttons

rewindButtons.forEach(button => button.addEventListener('click', rewindVideo));

// Rewinding video with progress bar
progress.addEventListener('click', adjustVideo);

let mousedown = false;
progress.addEventListener('mousemove', (event) => mousedown && adjustVideo(event));
progress.addEventListener('mousedown', () => mousedown === true);
progress.addEventListener('mouseup', () => mousedown === false);

// Updating range values (volume and playbackRate)
ranges.forEach(range => range.addEventListener('change', updateRange));

// Making video fullscreen

fullScreen.addEventListener('click', toggleFullScreen);


