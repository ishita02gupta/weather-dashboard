// App.js
import React, { useState } from "react";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className=" bg-blue-300 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <CurrentWeather />
        <h1 className=" text-black mb-2 font-semibold px-1">Discover your next forecast adventure</h1>
        <SearchBar setSelectedCity={setSelectedCity} />
        {selectedCity && <WeatherDetails selectedCity={selectedCity} />}
      </div>
    </div>
  );
};

export default App;
