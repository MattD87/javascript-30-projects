const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `roate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

//setInterval allows us to set the rate at which setDate function fires, in this case every 1s (1000ms)
//getSeconds allows us to do as the name implies, takes the seconds from our variable now which is a date variable
//secondDegrees allows us to convert seconds into degrees as a clock face is 360 degrees for the transform on the clock hands. + 90 offsets the intial 90deg style in .hand
