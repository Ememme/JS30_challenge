
let countdown;


function timer(seconds) {
    // Get time value from when the count should start
    // ! Time object is represented in milliseconds so account for that

    const startTime = Date.now();
    console.log(startTime);

    const endTime = startTime + seconds * 1000;

    console.log({startTime, endTime});

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000)

        if(secondsLeft < 0) {
            clearInterval(countdown);
        }
        console.log(secondsLeft);
    }, 1000);
}