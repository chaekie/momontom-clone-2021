"use strict";
const weather = document.querySelector(".js-weather");

const API_KEY = "1f8df0d58280f08cfe4b490e40aceb02";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //   console.log(json);
      const temperature = Math.round(json.main.temp);
      const place = json.name;
      weather.innerText = `${temperature}℃  @${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.getItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  //   console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, //latitude = latitude
    longitude, // longitude = longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    // console.log(parseCoords);
    getWeather(parsedCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
