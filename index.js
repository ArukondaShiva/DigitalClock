const hourElement = document.getElementById("hour");
const minElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");
const msecElement = document.getElementById("milliseconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let milliseconds = new Date().getMilliseconds() % 1000;
    let ampm = "AM";

    if(hour>12){
        hour = hour-12;
        ampm = "PM";
    }
    
    hour = hour<10 ? "0"+hour : hour;
    minute = minute<10 ? "0"+minute : minute;
    seconds = seconds<10 ? "0"+seconds : seconds;
    milliseconds = milliseconds<10 ? "00"+milliseconds : (milliseconds<100 ? "0"+milliseconds : milliseconds);

    hourElement.innerText = hour;
    minElement.innerText = minute;
    secElement.innerText = seconds;
    msecElement.innerText = milliseconds;
    ampmElement.innerText = ampm;

    setTimeout(()=>{
      updateClock();
    },1);

};

updateClock();

