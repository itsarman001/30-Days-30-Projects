// Get the DOM elements
let displayTime = document.getElementById("stopwatch");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

// Initialize time variables and timer
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

// Add event listeners to buttons
startBtn.addEventListener('click', startStopwatch)
stopBtn.addEventListener('click', stopStopwatch)
resetBtn.addEventListener('click', resetStopwatch)

// Function to update the stopwatch
function stopwatch() {
    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    } else if (minutes == 60) {
        minutes = 0;
        hours++
    }
    // Convert numbers to strings and pad with zeros
    hours = hours.toString().padStart(2, "0")
    minutes = minutes.toString().padStart(2, "0")
    seconds = seconds.toString().padStart(2, "0")
    // Update the display time
    displayTime.innerHTML = hours + " : " + minutes + " : " + seconds;
}

// Function to start the stopwatch
function startStopwatch() {
    // Clear any existing timer
    if (timer !== null) {
        clearInterval(timer);
    }
    // Start a new timer
    timer = setInterval(stopwatch, 1000);
};

// Function to stop the stopwatch
function stopStopwatch() {
    // Clear the timer
    clearInterval(timer);
};

// Function to reset the stopwatch
function resetStopwatch() {
    // Clear the timer
    clearInterval(timer);
    // Reset time variables
    [hours, minutes, seconds] = [0, 0, 0];
    // Reset the display time
    displayTime.innerHTML = "00 : 00 : 00"
}
