function getWeather() {
    const cityInput = document.getElementById("city-Input").value.trim();

    if (!cityInput) {
        alert("Please enter a city name");
        return;
    }

    fetchWeatherData(cityInput);
}

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${encodeURIComponent(city)}`);
        const text = await response.text();   // read raw response first

        console.log("Raw response:", text);

        const data = JSON.parse(text);        // parse only after checking

        if (!response.ok) {
            document.getElementById('location').innerHTML = "City not found";
            document.getElementById('temperature').innerHTML = "";
            document.getElementById('humidity').innerHTML = "";
            document.getElementById('windspeed').innerHTML = "";
            return;
        }

        document.getElementById('location').innerHTML = "Location: " + data.name;
        document.getElementById('temperature').innerHTML = "Temperature: " + data.main.temp + " °C";
        document.getElementById('humidity').innerHTML = "Humidity: " + data.main.humidity + "%";
        document.getElementById('windspeed').innerHTML = "Wind Speed: " + data.wind.speed + " km/h";

        console.log(data);
    } catch (error) {
        console.error("Fetch failed:", error);
        alert("Failed to fetch weather data");
    }
}