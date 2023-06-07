let dates = document.querySelector("ul .date");
let now = new Date();


let days = ["Sunday", "Monday", "Tuesday", "Wdnesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let time = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
    time = "0${minutes}";
}


dates.innerHTML = `${days[now.getDay()]
    }, ${now.getHours()}:${now.getMinutes()}`;



function search(event) {
    event.preventDefault();
    let input = document.querySelector("#search-text-input");

    let h1 = document.querySelector("h1");
    h1.innerHTML = "${searchInput.value}";


    let city = document.querySelector("#search-text-input");

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);


function displayTemp(response) {
    let currentTemperature = Math.round(response.data.main.temp);
    let temperature = document.querySelector("#weather")
    let temp = document.querySelector(".temp")
    temp.innerHTML = '${temp}°C'
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}";
    let apiKey = "76fb06fa46a47159706d99bfcf4c874b";
    axios.get(apiUrl).then(currentTemperature);

}
let temp = document.querySelector("#weather");
temp.addEventListener("submit", displayTemp);