

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const RandomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;


}
let IntervalId;

function startInterval() {
    if (!IntervalId) {
        IntervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = RandomColor();
    }
}

function stopInterval() {
    clearInterval(IntervalId);
    IntervalId = null;
    console.log("stop");
}

start.addEventListener("click", startInterval);
stop.addEventListener("click", stopInterval);