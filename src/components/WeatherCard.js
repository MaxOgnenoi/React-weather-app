import React from "react";
import moment from "moment";
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy } from "react-icons/wi";
import "../styles/Weather.css";

const getWeatherIcon = (weatherDescription) => {
  switch (weatherDescription) {
    case "Clear":
      return <WiDaySunny size={64} />;
    case "Rain":
      return <WiRain size={64} />;
    case "Clouds":
      return <WiCloudy size={64} />;
    default:
      return <WiDayCloudy size={64} />;
  }
};

const WeatherCard = ({ weatherData, showTime, showSunriseSunset }) => {
  const { name, main, weather, sys, visibility, wind } = weatherData;

  

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <div>{getWeatherIcon(weather[0].main)}</div>
        <div className="temperature">{Math.round(main.temp)}°C</div>
        {showTime && <div className="feels-like">Feels like: {Math.round(main.feels_like)}°C</div>}
        <div className="humidity">Humidity: {main.humidity}%</div>
        <div className="pressure">Pressure: {main.pressure} hPa</div>
        <div className="visibility">Visibility: {visibility / 1000} km</div>
        <div className="wind">Wind: {wind.speed} m/s</div>
      </div>
      <div className="weather-details">
        <div>{weather[0].description}</div>
        <div>Sunrise: {moment.unix(sys.sunrise).format("HH:mm")}</div>
        <div>Sunset: {moment.unix(sys.sunset).format("HH:mm")}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
