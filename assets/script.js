// use day.js to pull current date in MM/DD/YYYY format


// store var API Key
var key = '2b82885f735995470d3e4c3561b9e55c';
// create variables for the API to call
var city;

// Built-in API request by city name
let api;
function requestAPI (city) {
    // construct Query URL to Make the API call
    queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=$'+ city +'&appid='+ key;
    // make the API call using fetch()
    fetch(queryURL);
};


// Weather Parameters to Pull:
// Temperature
// Wind Speed
// Humidity

// Switch to metric units (OPTIONAL):
// api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=metric