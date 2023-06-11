let dates = document.querySelector("ul .date");
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wdnesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let time = now.getHours();
if (time < 10) {
  time = `0${time}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

dates.innerHTML = `${day}, ${time}:${minutes}`;

function fahrenheit(event) {
  event.preventDefault();
  let toFahrenheit = document.querySelector("#weather");
  toFahrenheit.innerHTML = 63;
}

let fahrenheitClick = document.querySelector(".fahrenheit");
fahrenheitClick.addEventListener("click", fahrenheit);

function celsius(response) {
  let toCelsius = document.querySelector("#weather");
  toCelsius.innerHTML = response.data.main.temp;
}

let celsiusClick = document.querySelector(".celsius");
celsiusClick.addEventListener("click", celsius);




function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;

  let apiKey = "76fb06fa46a47159706d99bfcf4c874b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#position");
button.addEventListener("click", getCurrentPosition);

function displayTemp(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#weather");
  temperature.innerHTML = `${currentTemperature}`;
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.name;
}