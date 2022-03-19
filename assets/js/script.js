var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var cityButtonsEl = document.querySelector("#city-buttons");


var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getWeatherForCity(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city")
    }
};

// button created for previously searched city is clicked
var buttonClickHandler = function(event) {
    // get the weather data from the clicked element
    var cityWeather = event.target.getAttribute("");
  
    if (cityWeather) {
      getPreviousWeatherData(cityWeather);
    }
  };

/*var getWeatherForCity = function(city) {
    var lat =
    var lon = 
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=/" + lat + "/&lon=/" + lon + "/&exclude=minutely,hourly,alerts&appid=a43227cdaf84c90e772c877927f059c5";
    "https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=a43227cdaf84c90e772c877927f059c5"

    
    fetch(apiUrl)
    .then(function(response) {
        // request was sucessful 
        if (response.ok) {
            console.log(response);
            response.json().then(function(data){
                console.log(data);
                displayWeather(data, city);
            });
        } else {
            alert('Error: City Not Found');
        }
    })
    .catch(function(error) {
        alert("Unable to connect to Open Weather");
    }
        response.json().then(function(data) {
            console.log(data);
        });
    
};

// saved weather data from search formatted, so when button is clicked, previous data fetched will fill in 
var getPreviousWeatherData = function()


// display Today's Forecast
var displayTodayForecast = function()

// display 5 day forecast
var display5Day = function()





// event listeners
cityFormEl.addEventListener("search", formSubmitHandler);
cityButtonsEl.addEventListener("click", buttonClickHandler)
*/


