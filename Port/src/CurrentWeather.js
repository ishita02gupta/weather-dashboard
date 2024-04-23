import React, { useState, useEffect } from "react";
import { WiHumidity, WiThermometer, WiStrongWind } from "react-icons/wi"; // Import weather icons from react-icons

const CurrentWeather = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const fetchCurrentWeatherData = async () => {
        const apiKey = "b0f30d0084644a9ded36070df87e9f67";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setCurrentWeatherData(data);
      };

      fetchCurrentWeatherData();
    }
  }, [currentLocation]);

  if (!currentWeatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Current Weather</h2>
      <div className="mb-2 font-bold">Location: {currentWeatherData.name}, {currentWeatherData.sys.country}</div>
      <div className="flex items-center mb-2">
        <WiThermometer className="w-6 h-6 mr-2 text-blue-500" />
        <p className="font-bold">Temperature:</p>
        <p className="ml-2">{currentWeatherData.main.temp}°C</p>
      </div>
      <div className="flex items-center mb-2">
        <WiHumidity className="w-6 h-6 mr-2 text-blue-500" />
        <p className="font-bold">Humidity:</p>
        <p className="ml-2">{currentWeatherData.main.humidity}%</p>
      </div>
      <div className="flex items-center">
        <WiStrongWind className="w-6 h-6 mr-2 text-blue-500" />
        <p className="font-bold">Wind Speed:</p>
        <p className="ml-2">{currentWeatherData.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
