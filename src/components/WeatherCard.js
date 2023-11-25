import React from "react";
import moment from "moment";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiDayCloudy,
  WiThermometer,
  WiHumidity,
  WiBarometer,
  WiDayFog,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
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

const WeatherCard = ({ weatherData, showTime }) => {
  const { name, main, weather, sys, visibility, wind } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-container">
        <div className="weather-info">
          <div>{getWeatherIcon(weather[0].main)}</div>
          <div className="temperature">
            <WiThermometer size={16} />
            {Math.round(main.temp)}°C
          </div>

          <div className="other-info">
            <div className="feels-like">
              <WiThermometer />
              Feels like: {Math.round(main.feels_like)}°C
            </div>

            <div className="humidity">
              <WiHumidity />
              Humidity: {main.humidity}%
            </div>
            <div className="pressure">
              <WiBarometer />
              Pressure: {main.pressure} hPa
            </div>
            <div className="visibility">
              <WiDayFog />
              Visibility: {visibility / 1000} km
            </div>
            <div className="wind">
              <WiStrongWind />
              Wind: {wind.speed} m/s
            </div>
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div>{weather[0].description}</div>
        <div><WiSunrise />Sunrise: {moment.unix(sys.sunrise).format("HH:mm")}</div>
        <div><WiSunset />Sunset: {moment.unix(sys.sunset).format("HH:mm")}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
