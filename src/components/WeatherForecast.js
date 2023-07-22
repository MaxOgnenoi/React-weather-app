import React from "react";
import WeatherCard from "./WeatherCard";
import "../styles/WeatherForecast.css";

function WeatherForecast({ forecastData }) {
  const forecastList = forecastData.list.slice(0, 5); // Get the first 5 days of forecast

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {forecastList.map((forecast) => (
          <WeatherCard key={forecast.dt} weatherData={forecast} showDate />
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
