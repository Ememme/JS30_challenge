const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}



// Hooking up event listeners:
// Video toggles play if video window or playButton is clicked
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);