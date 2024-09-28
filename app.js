var getHtmlSec = document.querySelector(".seconds");
var getHtmlMin = document.querySelector(".minutes");
var getHtmlHour = document.querySelector(".hours");

let sec = 0;
let min = 0;
let hour = 0;
var timer = null;  

function startTimer() {
    if (timer !== null) {
        return; 
    }
    timer = setInterval(function () {
        sec++; 

        if (sec >= 60) {
            sec = 0;
            min++;
        }
        if (min >= 60) {
            min = 0;
            hour++;
        }

        if(sec < 10){
            getHtmlSec.innerHTML = `0${sec}`;
        }
        else{
            getHtmlSec.innerHTML = sec
        }
        if(min < 10){
            getHtmlMin.innerHTML = `0${min}`;
        }
        else{
            getHtmlMin.innerHTML = min
        }
        if(hour < 10){
            getHtmlHour.innerHTML = `0${hour}`;
        }
        else{
            getHtmlHour.innerHTML = hour
        }

    }, 1000); 
}

function stopTimer() {
    clearInterval(timer);
    timer = null; 
}

function resetTimer() {
    clearInterval(timer); 
    timer = null;  

    sec = 0;
    min = 0;
    hour = 0;

    getHtmlSec.innerHTML = "00";
    getHtmlMin.innerHTML = "00";
    getHtmlHour.innerHTML = "00";
}