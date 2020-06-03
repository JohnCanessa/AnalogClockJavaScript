// **** ****
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// ???? ????
console.log("Number.MAX_VALUE: ", Number.MAX_VALUE, " Number.MIN_VALUE: ", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER: ", Number.MAX_SAFE_INTEGER);

// **** ****
var date = new Date();

// ???? ????
console.log(date);

// **** ****
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let ms = date.getMilliseconds();

// ???? ????
console.log("time: " + hr + ":" + min + ":" + sec + "." + ms);

// **** ****
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

// **** function to run the clock ****
function runTheClock() {

  // **** increment position of hands ****
  secPosition += 6;
  minPosition += (6 / 60);
  hrPosition += (3 / 360);

  // ???? ????
  if (secPosition % 360 == 0) {
    console.log("milliseconds: ", new Date().getMilliseconds());
  }

  // ???? ????
  // console.log("secPosition: ", secPosition);
  // console.log("minPosition: ", minPosition);
  // console.log("hrPosition: ", hrPosition);

  // **** update hand position on clock ****
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// **** run the clock every 1000 milliseconds ****
var interval = setInterval(runTheClock, 1000);
