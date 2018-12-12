const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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


// Hooking up event listeners:
// Video toggles play if video window or playButton is clicked
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);

// Updating playButton whenever video is paused/started - could be done via 3rd party plugins, etc.
video.addEventListener('play', updateButtonIcon);
video.addEventListener('pause', updateButtonIcon);