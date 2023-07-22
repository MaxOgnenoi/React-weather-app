import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/WeatherMap.css";

function WeatherMap({ weatherData }) {
  const { coord, name } = weatherData;

  return (
    <div className="map-container">
      <h2>{name} Map</h2>
      <div className="map">
        {coord && (
          <MapContainer center={[coord.lat, coord.lon]} zoom={10}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coord.lat, coord.lon]}>
              <Popup>{name}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default WeatherMap;
