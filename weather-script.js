// weather-script.js

async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Example usage
fetchWeather('London').then(data => {
    if (data) {
        console.log(`Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`);
    }
});