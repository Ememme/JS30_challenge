
let countdown;


function timer(seconds) {
    // Get time value from when the count should start
    // ! Time object is represented in milliseconds so account for that

    const startTime = Date.now();
    console.log(startTime);

    const endTime = startTime + seconds * 1000;

    console.log({startTime, endTime});
    // displayTime used to show the initial value of seconds, as setInterval causes 1s delay in showing the value
    displayTime(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000)
        
        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft);
    }, 1000);
}

function displayTime(seconds) {
    console.log(seconds)
}