import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/WeatherMap.css";

function WeatherMap({ weatherData }) {
  const { coord, name } = weatherData;

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  useEffect(() => {
    if (coord) {
      const map = document.querySelector(".map-container .map .leaflet-container");

      if (map) {
        map.scrollIntoView();
      }
    }
  }, [coord]);

  return (
    <div className="map-container">
      <h2>{name} Map</h2>
      <div className="map">
        <MapContainer center={[coord.lat, coord.lon]} zoom={10} scrollWheelZoom={false}>
          <SetViewOnClick coords={[coord.lat, coord.lon]} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coord.lat, coord.lon]}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default WeatherMap;
