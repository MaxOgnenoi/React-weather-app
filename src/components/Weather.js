import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import SearchBox from "./SearchBox";
import WeatherForecast from "./WeatherForecast";
import WeatherHourlyForecast from "./WeatherHourlyForecast";
import WeatherMap from "./WeatherMap"; // Add the WeatherMap component
import "../styles/Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      // Fetch current weather data
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

      // Fetch 5-day forecast data
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        )
        .then((response) => {
          setForecastData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching 5-day forecast data:", error);
        });

      // Fetch hourly forecast data
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        )
        .then((response) => {
          setHourlyForecastData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching hourly forecast data:", error);
        });
    }
  }, [city]);

  return (
    <div className="weather-container">
      <SearchBox setCity={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {forecastData && <WeatherForecast forecastData={forecastData} />}
      {hourlyForecastData && (
        <WeatherHourlyForecast hourlyForecastData={hourlyForecastData} />
      )}
      {weatherData && <WeatherMap weatherData={weatherData} />}
    </div>
  );
}

export default Weather;
