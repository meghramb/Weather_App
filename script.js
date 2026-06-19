function getWeather(){
    const cityInput = document.getElementById("city-Input").value;
    fetchWeatherData(cityInput);
}

async function fetchWeatherData(city) {
    const apiKey = 'a269a7cdb574c7c6f2fc9f979d6f6bb1';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    document.getElementById('location').innerHTML = "Location: " + data.name;
    document.getElementById('temperature').innerHTML = "Temperature: " + data.main.temp + "°c";
    document.getElementById('humidity').innerHTML = "Humidity: " + data.main.humidity + "%";
    document.getElementById('windspeed').innerHTML = "wind Speed: " + data.wind.speed + "KM/h";
    console.log(data);
}