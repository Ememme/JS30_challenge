const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const rewindButtons = player.querySelectorAll('[data-skip]');
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

function rewindVideo() {
    console.log(this.dataset.skip);
    video.currentTime += +this.dataset.skip;
}

function updateRange() {
    console.log(this.value);
    video[this.name] = this.value;
}

// Hooking up event listeners:
// Video toggles play if video window or playButton is clicked
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);

// Updating playButton whenever video is paused/started - could be done via 3rd party plugins, etc.
video.addEventListener('play', updateButtonIcon);
video.addEventListener('pause', updateButtonIcon);

// Rewinding video

rewindButtons.forEach(button => button.addEventListener('click', rewindVideo));

// Updating range values (volume and playbackRate)
ranges.forEach(range => range.addEventListener('change', updateRange));