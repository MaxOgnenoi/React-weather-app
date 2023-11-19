import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import SearchBox from "./SearchBox";
import "../styles/Weather.css";

function Weather() {
  const [city, setCity] = useState("New York City");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });
    }
  }, [city]);

  return (
    <div className="weather-container">
      <SearchBox setCity={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default Weather;
