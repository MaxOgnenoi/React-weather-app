
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
  };
};

const HourlyWeatherCard = ({ weatherData, showTime }) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <div>{getWeatherIcon(weather[0].main)}</div>
        <div className="temperature">{Math.round(main.temp)}°C</div>
      </div>
      <div className="weather-details">
        <div>{weather[0].description}</div>
        {showTime && <div>Time: {moment.unix(weatherData.dt).format("HH:mm")}</div>}
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
