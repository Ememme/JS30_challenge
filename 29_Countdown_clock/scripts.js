let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
console.log(buttons);


function timer(seconds) {
    // Clear preexisting timers
    clearInterval(countdown)
    // Get time value from when the count should start
    // Time object is represented in milliseconds so account for that

    const startTime = Date.now();
    const endTime = startTime + seconds * 1000;
    displayEndTime(endTime)
    // displayTime used to show the initial value of seconds, as setInterval causes 1s delay in showing the value
    displayTime(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000)
        
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft);
    }, 1000);
}

function displayTime(seconds) {  
    // convert seconds to minutes & seconds for display
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const display = `${minutes}:${secondsRemaining < 10 ?'0':''}${secondsRemaining}`;
   
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const minutes = end.getMinutes()
    const hour = end.getHours();
    // Variable for US/Canadian repersentation of hours
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    endTimeDisplay.textContent = `Be back at ${hour}:${minutes < 10? '0':''}${minutes}`
}

buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimer(){
    // Getting preset values from buttons
    const setTime = parseInt(this.dataset.time);
    timer(setTime);
}

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const timeToSet = this.minutes.value;
    timer(timeToSet * 60);
    // clear form
    this.reset()
});

