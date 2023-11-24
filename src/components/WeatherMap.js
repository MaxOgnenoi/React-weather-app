import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/WeatherMap.css";

function WeatherMap({ weatherData }) {
  // Destructure coord and name with optional chaining
  const { coord, name } = weatherData || {};

  function SetViewOnClick({ coords }) {
    // Use useMap hook correctly
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  useEffect(() => {
    if (coord) {
      // Use ref to access map container
      const mapContainer = document.querySelector(".map-container .map .leaflet-container");

      if (mapContainer) {
        mapContainer.scrollIntoView();
      }
    }
  }, [coord]);

  return (
    <div className="map-container">
      <h2>{name} Map</h2>
      <div className="map">
        <MapContainer center={[coord?.lat || 0, coord?.lon || 0]} zoom={10} scrollWheelZoom={false}>
          <SetViewOnClick coords={[coord?.lat || 0, coord?.lon || 0]} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coord?.lat || 0, coord?.lon || 0]}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default WeatherMap;
