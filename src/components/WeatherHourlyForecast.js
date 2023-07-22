import React from "react";
import WeatherCard from "./WeatherCard";
import "../styles/WeatherHourlyForecast.css";

function WeatherHourlyForecast({ hourlyForecastData }) {
  const hourlyForecastList = hourlyForecastData.list.slice(0, 6); // Get the first 6 hours of forecast

  return (
    <div className="hourly-forecast-container">
      <h2>Hourly Forecast</h2>
      <div className="hourly-forecast-cards">
        {hourlyForecastList.map((forecast) => (
          <WeatherCard key={forecast.dt} weatherData={forecast} showTime />
        ))}
      </div>
    </div>
  );
}

export default WeatherHourlyForecast;
