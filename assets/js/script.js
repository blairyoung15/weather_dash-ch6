var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var cityButtonsEl = document.querySelector("#city-buttons");


var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();

    if (cityName) {
        createCityButton(cityName);
        getLatLon(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city")
    }
};

/*// button created for previously searched city is clicked
var buttonClickHandler = function(event) {
    // get the weather data from the clicked element
    var cityWeather = event.target.getAttribute("");
  
    if (cityWeather) {
      getPreviousWeatherData(cityWeather);
    }
  };
  */

var getLatLon = function(city) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=a43227cdaf84c90e772c877927f059c5"

    fetch(apiUrl)
    .then(function(response) {
        // request was sucessful 
        if (response.ok) {
            console.log(response);
            response.json().then(function(data){
                console.log(data);
                getWeatherForCity(data[0].lat, data[0].lon, data[0].name)
            });
        } else {
            alert('Error: City Not Found');
        }
    })
}

var getWeatherForCity = function(lat, lon, city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=a43227cdaf84c90e772c877927f059c5";

    
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
    });
    
};

var displayWeather = function(data, city) {
    document.querySelector("#city-searched").textContent= city
    document.querySelector("#current-date").textContent= moment().format("dddd, MMMM Do YYYY")
    //document.querySelector("#day-icon").textContent= data.current.weather[0].icon
    document.querySelector("#today-temp").textContent= data.current.temp
    document.querySelector("#today-wind").textContent= data.current.wind_speed
    document.querySelector("#today-humidity").textContent= data.current.humidity
    document.querySelector("#today-uv").textContent= data.current.uvi

    document.querySelector("#dayOne").textContent= moment().add(1, 'd').format("M/D/YYYY")
    //document.querySelector("#day-temp-1").textContent= data.day[0].

    document.querySelector("#dayTwo").textContent= moment().add(2, 'd').format("M/D/YYYY")

    document.querySelector("#dayThree").textContent= moment().add(3, 'd').format("M/D/YYYY")

    document.querySelector("#dayFour").textContent= moment().add(4, 'd').format("M/D/YYYY")

    document.querySelector("#dayFive").textContent= moment().add(5, 'd').format("M/D/YYYY")
    
}

var createCityButton = function(city) {
    var newButton = document.createElement("button")
    newButton.textContent = city
    newButton.addEventListener("click", function(){
        getLatLon(city)
    })
    document.querySelector("#city-buttons").append(newButton)
}

/* Weather Icon display
var icon = ("<img src='http://openweathermap.org/img/w/" + weatherDataIn.weather[0].icon + ".png'>");
$('#display').html( icon );


// saved weather data from search formatted, so when button is clicked, previous data fetched will fill in 
var getPreviousWeatherData = function()


// display Today's Forecast
var displayTodayForecast = function()

// display 5 day forecast
var display5Day = function()
*/





// event listeners
cityFormEl.addEventListener("submit", formSubmitHandler);
//cityButtonsEl.addEventListener("click", buttonClickHandler)



