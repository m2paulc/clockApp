const calendarDate = document.querySelector(".calendarDate");
const calendarDay = document.querySelector(".calendarDay");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");
const changeFormat = document.querySelector("#changeFormat");
let hrFormat = 0;

changeFormat.addEventListener("click", function () {
  let hourClock = setHours();

  if (changeFormat.innerHTML === "12 hour format") {
    changeFormat.innerHTML = "24 hour format";
    hrFormat = 12;
  } else {
    changeFormat.innerHTML = "12 hour format";
    hrFormat = 24;
  }
});

function setClock() {
  hours.innerHTML = setHours();
  minutes.innerHTML = setMinutes();
  seconds.innerHTML = setSeconds();
}

function setSeconds() {
  const now = new Date();
  let secs = now.getSeconds();
  if (secs < 10) {
    secs = `0${now.getSeconds()}`;
  }
  return secs;
}

function setMinutes() {
  const now = new Date();
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = `0${now.getMinutes()}`;
  }
  return mins;
}

function setHours() {
  const now = new Date();
  let hrs = now.getHours();
  let timeOfDay = hrs;

  if (hrFormat === 12) {
    hrs = changeHourFormat(hrs);
  }
  if (hrs < 10) hrs = `0${hrs}`;

  setTimeOfDay(timeOfDay);
  return hrs;
}

function setTimeOfDay(hr) {
  const container = document.querySelector(".container");
  const day = document.querySelector(".day");
  const night = document.querySelector(".night");

  if (hr < 12) {
    day.style.fontWeight = "bold";
    //lighten the night class
    night.style.color = "gray";
    night.style.opacity = 0.4;
  } else {
    night.style.fontWeight = "bold";
    //lighten the day class
    day.style.color = "gray";
    day.style.opacity = 0.4;
  }

  if (hr >= 18 || hr <= 5) {
    container.classList.remove("dayTime");
    container.classList.add("nightTime");
  } else {
    container.classList.remove("nightTime");
    container.classList.add("dayTime");
  }
}

function changeHourFormat(hr) {
  if (hr > 12) {
    hr = Math.ceil(hr % 12);
  }
  return hr;
}

function showCalendar() {
  const now = new Date();
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  calendarDay.innerHTML = dayArray[now.getDay()];
  calendarDate.innerHTML = `${
    monthArray[now.getMonth()]
    } ${now.getDate()}, ${now.getFullYear()}`;
}

window.onload = function init() {
  showCalendar();
  setInterval(setClock, 1000);
};
