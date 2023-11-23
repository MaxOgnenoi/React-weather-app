import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import WeatherFiveDayForecast from "./WeatherFiveDayForecast";
import WeatherHourlyForecast from "./WeatherHourlyForecast";
import WeatherMap from "./WeatherMap";
import SearchBox from "./SearchBox";
import "../styles/Weather.css";

function Weather() {
  const [city, setCity] = useState("New York City");
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null); // State for hourly forecast data

  useEffect(() => {
    // Fetch current weather data
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

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        )
        .then((response) => {
          setWeatherData(response.data);
          console.log("Weather Data:", response.data);
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });


      // Fetch hourly forecast data
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
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
      {hourlyForecastData && <WeatherHourlyForecast hourlyForecastData={hourlyForecastData} />}
      {weatherData && <WeatherMap weatherData={weatherData} />}
    </div>
  );
}

export default Weather;
