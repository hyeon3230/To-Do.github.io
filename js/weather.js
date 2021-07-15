const API_KEY = "d426a0a5abbbb8afc63e58d6bb6d69b9";

function navSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json().then(data => {
    const country = document.querySelector("#weather-country");
    const city = document.querySelector("#weather-city");
    const temp = document.querySelector("#weather-temp");
    const weather = document.querySelector("#weather-icon");
    country.innerText = data.sys.country;
    city.innerText = data.name;
    temp.innerText = Math.floor(data.main.temp) + "°";
    weather.innerText = data.weather[0].main;
  }));
}

function navError(){
  alert("I can't find you :(");
}

navigator.geolocation.getCurrentPosition(navSuccess, navError);
