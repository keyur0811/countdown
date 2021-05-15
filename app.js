const countdown = () => {
  const countDate = new Date("May 16, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;

  if (countDate == now) {
    console.log("====================Welcome====================")
  }
  else if (countDate >= now) {
    console.log(`${gap} "Time left"`)
  }
  else if (countDate <= now) {
    console.log("Opening Website")
    // window.open("https://www.google.com/");
    location.replace("https://www.google.com/");
  }
  else {
    console.log("====================something wrong====================")
  }
}

setInterval(countdown, 1000);

// const date = new Date().getTime();
// console.log("Date====>", date);