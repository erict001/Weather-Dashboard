var city = document.getElementById("cityInput");
var searchBtn = document.querySelector("#searchBtn");
var localCityEl = document.querySelector("#city");
var temperatureEl = document.querySelector('#temperature');
var windSpeedEl = document.querySelector('#wind-speed');
var humidityEl = document.querySelector('#humidity');
var uvEl = document.querySelector('#uv-index');
var ApiKey = "fa7d52ba051ca9699cdf472c349d267c";
var newCityBtn = document.getElementsByClassName("list")


//searches
var pastSearches = []

//forecast data
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


  // CITY DATA
  function apiParameters() {
    let queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + "&appid=" + ApiKey; 
      fetch(queryURL)
      .then(function(getApi){
        return getApi.json();
      })
      .then(function (data) {
        document.querySelector("#forecast").classList.remove("hide")

        var unixTime = data.dt * 1000
        var today = moment(unixTime).format("M/D/YYYY")

      localCityEl.textContent = data.name + " " + today;
      windSpeedEl.textContent = "Wind: " + data.wind.speed + " MPH";
      humidityEl.textContent = "Humidity: " + data.main.humidity + " %";
      
      // localStorage.setItem("city", JSON.stringify(data.name))
      // pastSearches.push(data.name)
      
      //fetch Temp data for Farheinheit
        return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + ApiKey + "&units=imperial")
      }) .then(function (response) {
          return response.json();
      })  
      .then (function (tempData) {
      console.log(tempData)
      temperatureEl.textContent = "Temp: " + tempData.main.temp + " deg F";

        var lat = tempData.coord.lat
        var lon = tempData.coord.lon

    //fetch data for UV Index
      return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + ApiKey)
      }) .then(function (response) {
          return response.json();
      })  
      .then (function (data1) {
      console.log(data1)
      uvEl.textContent = "UV Index: " + data1.current.uvi

        if (data1.current.uvi < 4) {
          uvEl.classList.add("green")
        } else if (data1.current.uvi < 8) {
          uvEl.classList.add(".yellow")
        } else {
          uvEl.classList.add("red");
        }
      
      var lat1 = data1.lat;
      var lon1 = data1.lon;
      
      // 5 Day Forecast
      return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat1 + "&lon=" + lon1 + "&appid=" + ApiKey)
      }) .then(function (forecast) {
          return forecast.json();
      })  
      .then (function (forecastData) {
      console.log(forecastData)

      //tomorrow date
      var unixTomorrow = (forecastData.list[1].dt_txt)
      var tomorrow = moment(unixTomorrow).format("M/D/YYYY")

      //2nd day date
      var unixSecond = (forecastData.list[9].dt_txt)
      var secondDay = moment(unixSecond).format("M/D/YYYY")

      //3rd day date
      var unixThird = (forecastData.list[18].dt_txt)
      var thirdDay = moment(unixThird).format("M/D/YYYY")

      //4th day
      var unixFourth = (forecastData.list[27].dt_txt)
      var fourthDay = moment(unixFourth).format("M/D/YYYY")

      //5th day
      var unixFifth = (forecastData.list[36].dt_txt)
      var fifthDay = moment(unixFifth).format("M/D/YYYY")


      for (var i = 8; i < forecastData.list[i]; i + 8);

      forecastDatesEl.textContent = tomorrow;
      forecastTempEl.textContent = "Temp: " + forecastData.list[8].main.temp + " deg C"
      forecastWindEl.textContent = "Wind: " + forecastData.list[8].wind.speed + " MPH"
      forecastHumidityEl.textContent = "Humidity: " + forecastData.list[8].main.humidity + " %"

      forecast1DatesEl.textContent = secondDay;
      forecast1TempEl.textContent = "Temp: " + forecastData.list[16].main.temp + " deg C"
      forecast1WindEl.textContent = "Wind: " + forecastData.list[16].wind.speed + "MPH"
      forecast1HumidityEl.textContent = "Humidity: " + forecastData.list[16].main.humidity + " %"
      
      forecast2DatesEl.textContent = thirdDay;
      forecast2TempEl.textContent = "Temp: " + forecastData.list[24].main.temp + " deg C"
      forecast2WindEl.textContent = "Wind: " + forecastData.list[24].wind.speed + "MPH"
      forecast2HumidityEl.textContent = "Humidity: " + forecastData.list[24].main.humidity + " %"

      forecast3DatesEl.textContent = fourthDay;
      forecast3TempEl.textContent = "Temp: " + forecastData.list[32].main.temp + " deg C"
      forecast3WindEl.textContent = "Wind: " + forecastData.list[32].wind.speed + "MPH"
      forecast3HumidityEl.textContent = "Humidity: " + forecastData.list[32].main.humidity + " %"

      forecast4DatesEl.textContent = fifthDay;
      forecast4TempEl.textContent = "Temp: " + forecastData.list[39].main.temp + " deg C"
      forecast4WindEl.textContent = "Wind: " + forecastData.list[39].wind.speed + "MPH"
      forecast4HumidityEl.textContent = "Humidity: " + forecastData.list[39].main.humidity + " %"
     
  
    });
  };

  


  //past Searches
  function pushCities() {
    pastSearches.unshift(city.value)

    var ul = document.querySelector("#history");
  localStorage.setItem("city", pastSearches)
  localStorage.getItem(pastSearches[0])
  var liList = $("history")
  var li = document.createElement("button");
  li.textContent = pastSearches[0];
  liList.append(pastSearches[0])
  li.classList.add("list")
  ul.append(li)
  }


  function myCityBtn () {
    var newCityBtn = document.getElementsByClassName("list")
  }

  searchBtn.addEventListener('click', apiParameters);
  searchBtn.addEventListener('click', pushCities);
  newCityBtn.addEventListener('click', apiParameters)
