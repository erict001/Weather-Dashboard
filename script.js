var city = document.querySelector("#user-input")
var searchBtn = document.querySelector("#search-input")
var localCityEl = document.querySelector("#city")
var temperatureEl = document.querySelector('#temperature')
var windSpeedEl = document.querySelector('#wind-speed')
var humidityEl = document.querySelector('#humidty')
var uvEl = document.querySelector('#uv-index')
var ApiKey = "fa7d52ba051ca9699cdf472c349d267c"

// search for the city
function citySearch() {
  var weatherDashboard = 'https://api.openweathermap.org/geo/1.0/direct?q='; 
    fetch(weatherDashboard + city + "&appid=" + ApiKey)
    .then(function(response){
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    // localCityEl.textContent = data[0].name;
    // temperatureEl.textContent = data[0].current.temp;
    // uvEl.textContent = data[0].current.uvi;
    // windSpeedEl.textContent = data[0].current.wind_speed;
    });
  };

  searchBtn.addEventListener('click', citySearch());


  // //search for temperature
  // function coordinates () {
  //   var weatherDashboard = 'https://api.openweathermap.org/geo/1.0/direct?q='; 
  //     fetch(weatherDashboard)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //     temperatureEl.textContent = localCity[0].current.temp
      
  //     });
  // }


