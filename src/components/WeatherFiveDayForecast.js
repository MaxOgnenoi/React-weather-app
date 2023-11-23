import React from "react";
import WeatherCard from "./WeatherCard";
import "../styles/WeatherForecast.css";

const WeatherFiveDayForecast = ({ forecastData }) => {
  const forecastList = forecastData.list.slice(0, 5);

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {forecastList.map((forecast) => {
          const date = new Date(forecast.dt * 1000);
          const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);

          return (
            <WeatherCard
              key={forecast.dt}
              weatherData={forecast}
              showDate
              dayOfWeek={dayOfWeek}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherFiveDayForecast;
