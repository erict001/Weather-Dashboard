var city = document.getElementById("cityInput");
var searchBtn = document.querySelector("#searchBtn");
var localCityEl = document.querySelector("#city");
var temperatureEl = document.querySelector('#temperature');
var windSpeedEl = document.querySelector('#wind-speed');
var humidityEl = document.querySelector('#humidity');
var uvEl = document.querySelector('#uv-index');
var ApiKey = "fa7d52ba051ca9699cdf472c349d267c";

//forecast data
var forecastEl = document.getElementById("forecast")
var forecastDatesEl = document.getElementById("forecast-dates")
var forecastTempEl = document.getElementById("forecast-temperature")
var forecastWindEl = document.getElementById("forecast-wind-speed")
var forecastHumidityEl = document.getElementById("forecast-humidity")


  // search for city and other data
  function apiParameters() {
    let queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + "&appid=" + ApiKey; 
      fetch(queryURL)
      .then(function(getApi){
        return getApi.json();
      })
      .then(function (data) {
        console.log(data)
        localCityEl.textContent = data.name;
        temperatureEl.textContent = data.main.temp + " deg C";
        windSpeedEl.textContent = data.wind.speed + " MPH";
        humidityEl.textContent = data.main.humidity + " %";

        var lat = data.coord.lat
        var lon = data.coord.lon

      return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + ApiKey)
      }) .then(function (response) {
          return response.json();
      })  
      .then (function (data1) {
      console.log(data1)
      uvEl.textContent = data1.current.uvi

      var lat1 = data1.lat;
      var lon1 = data1.lon;

      return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat1 + "&lon=" + lon1 + "&appid=" + ApiKey)
      }) .then(function (forecast) {
          return forecast.json();
      })  
      .then (function (forecastData) {
      console.log(forecastData)
      forecastEl.textContent = forecastData.city.name
      forecastTempEl.textContent = forecastData.list[0].main.temp + " deg C"
      forecastWindEl.textContent = forecastData.list[0].wind.speed + "MPH"
      forecastHumidityEl.textContent = forecastData.list[0].main.humidity + " %"

      // forecastEl.textContent = forecastData.city.name
      // forecastTempEl.textContent = forecastData.list[1].main.temp + " deg C"
      // forecastWindEl.textContent = forecastData.list[1].wind.speed + "MPH"
      // forecastHumidityEl.textContent = forecastData.list[1].main.humidity + " %"
      });
    };
  
    searchBtn.addEventListener('click', apiParameters);




