import React, { useState, useEffect } from "react";
import { WiHumidity, WiThermometer, WiStrongWind } from "react-icons/wi"; // Import weather icons from react-icons

const WeatherDetails = ({ selectedCity }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "b0f30d0084644a9ded36070df87e9f67";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${selectedCity.id}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [selectedCity]);

  if (!weatherData) {
    return null; 
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">
        Weather Details for {selectedCity.name}, {selectedCity.sys.country}
      </h2>
      <div className="flex items-center mb-2">
        <WiThermometer className="w-6 h-6 mr-2 text-blue-500" />
        <p className="font-bold">Temperature:</p>
        <p className="ml-2">{weatherData.main.temp}°C</p>
      </div>
      <div className="flex items-center mb-2">
        <WiHumidity className="w-6 h-6 mr-2 text-blue-500" />
        <p className="font-bold">Humidity:</p>
        <p className="ml-2">{weatherData.main.humidity}%</p>
      </div>
      <div className="flex items-center">
        <WiStrongWind className="w-6 h-6 mr-2 text-blue-500" />
        <p className="font-bold">Wind Speed:</p>
        <p className="ml-2">{weatherData.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
