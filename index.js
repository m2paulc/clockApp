let isMilitaryTime = true;

window.onload = function init() {
  showCalendar();
  setClock();
  setInterval(setClock, 1000);
};

const changeFormat = document.querySelector("#changeFormat");
changeFormat.addEventListener("click", function () {
  if (changeFormat.innerHTML === "12 hour format") {
    changeFormat.innerHTML = "24 hour format";
    isMilitaryTime = false;
  } else {
    changeFormat.innerHTML = "12 hour format";
    isMilitaryTime = true;
  }
});


function setClock() {
  const now = new Date();
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#mins");
  const seconds = document.querySelector("#secs");
  hours.innerHTML = getHours(now);
  minutes.innerHTML = getMinutes(now);
  seconds.innerHTML = getSeconds(now);
  setTimeOfDay(now.getHours());
}

function getSeconds(now) {
  let secs = now.getSeconds();
  return secs < 10 ? secs = `0${secs}` : secs;
}

function getMinutes(now) {
  let mins = now.getMinutes();
  return mins < 10 ? mins = `0${mins}` : mins;
}

function getHours(now) {
  let hrs = now.getHours();
  if (!isMilitaryTime) {
    hrs = changeHourFormat(hrs);
  }
  return (hrs < 10) ? hrs = `0${hrs}` : hrs;
}

function changeHourFormat(hours) {
  return hours > 12 ? Math.ceil(hours % 12) : hours;
}

function setTimeOfDay(hours) {
  const container = document.querySelector(".container");
  const day = document.querySelector(".day");
  const night = document.querySelector(".night");

  if (hours < 12) {
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

  if (hours >= 18 || hours <= 5) {
    container.classList.remove("dayTime");
    container.classList.add("nightTime");
  } else {
    container.classList.remove("nightTime");
    container.classList.add("dayTime");
  }
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
  const calendarDate = document.querySelector(".calendarDate");
  const calendarDay = document.querySelector(".calendarDay");

  calendarDay.innerHTML = dayArray[now.getDay()];
  calendarDate.innerHTML = `${
    monthArray[now.getMonth()]
    } ${now.getDate()}, ${now.getFullYear()}`;
}
