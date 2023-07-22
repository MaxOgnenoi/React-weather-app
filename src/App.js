import React, { useState } from "react";
import Weather from "./components/Weather";
import "./styles/App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
      <header>
        <h1>Weather App</h1>
        <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Weather />
    </div>
  );
}

export default App;
