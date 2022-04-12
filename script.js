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

//forecast day 2 
var forecast1DatesEl = document.getElementById("forecast-dates1")
var forecast1TempEl = document.getElementById("forecast-temperature1")
var forecast1WindEl = document.getElementById("forecast-wind-speed1")
var forecast1HumidityEl = document.getElementById("forecast-humidity1")

//forecast day 3 
var forecast2DatesEl = document.getElementById("forecast-dates2")
var forecast2TempEl = document.getElementById("forecast-temperature2")
var forecast2WindEl = document.getElementById("forecast-wind-speed2")
var forecast2HumidityEl = document.getElementById("forecast-humidity2")

//forecast day 4 
var forecast3DatesEl = document.getElementById("forecast-dates3")
var forecast3TempEl = document.getElementById("forecast-temperature3")
var forecast3WindEl = document.getElementById("forecast-wind-speed3")
var forecast3HumidityEl = document.getElementById("forecast-humidity3")

//forecast day 5 
var forecast4DatesEl = document.getElementById("forecast-dates4")
var forecast4TempEl = document.getElementById("forecast-temperature4")
var forecast4WindEl = document.getElementById("forecast-wind-speed4")
var forecast4HumidityEl = document.getElementById("forecast-humidity4")


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
      for (var i = 0; i < forecastData.list[i]; i + 8)
      forecastEl.textContent = forecastData.city.name
      forecastTempEl.textContent = forecastData.list[0].main.temp + " deg C"
      forecastWindEl.textContent = forecastData.list[0].wind.speed + " MPH"
      forecastHumidityEl.textContent = forecastData.list[0].main.humidity + " %"

      forecast1TempEl.textContent = forecastData.list[1].main.temp + " deg C"
      forecast1WindEl.textContent = forecastData.list[1].wind.speed + "MPH"
      forecast1HumidityEl.textContent = forecastData.list[1].main.humidity + " %"
      
      forecast2TempEl.textContent = forecastData.list[1].main.temp + " deg C"
      forecast2WindEl.textContent = forecastData.list[1].wind.speed + "MPH"
      forecast2HumidityEl.textContent = forecastData.list[1].main.humidity + " %"

      forecast3TempEl.textContent = forecastData.list[1].main.temp + " deg C"
      forecast3WindEl.textContent = forecastData.list[1].wind.speed + "MPH"
      forecast3HumidityEl.textContent = forecastData.list[1].main.humidity + " %"

      forecast4TempEl.textContent = forecastData.list[1].main.temp + " deg C"
      forecast4WindEl.textContent = forecastData.list[1].wind.speed + "MPH"
      forecast4HumidityEl.textContent = forecastData.list[1].main.humidity + " %"


      });
    };
  
    searchBtn.addEventListener('click', apiParameters);

    3902868265




    727-567-2495