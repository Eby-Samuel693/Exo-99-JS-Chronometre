// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let temps = 0;
let countUp = (function() {
    let interval = setInterval(function (){
        if(temps < 60){
            seconds.innerHTML = temps;
            temps++;
        }
        else {
            clearInterval(interval);
        }
    },1000);
})();

// How can you make it stop counting?
let stopCountUp = function() {
    if(temps = seconds){
        clearInterval(seconds);
    }

};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);