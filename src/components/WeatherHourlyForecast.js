import React from "react";
import HourlyWeatherCard from "./HourlyWeatherCard"; // Import the new component
import "../styles/WeatherHourlyForecast.css";

const WeatherHourlyForecast = ({ hourlyForecastData }) => {
  if (!hourlyForecastData || !hourlyForecastData.list) {
    return null;
  }

  const hourlyForecastList = hourlyForecastData.list.slice(0, 6);

  return (
    <div className="hourly-forecast-container">
      <h2>Hourly Forecast</h2>
      <div className="hourly-forecast-cards">
        {hourlyForecastList.map((forecast) => (
          <HourlyWeatherCard key={forecast.dt} weatherData={forecast} showTime />
        ))}
      </div>
    </div>
  );
};

export default WeatherHourlyForecast;
