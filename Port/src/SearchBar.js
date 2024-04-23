import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons
import CityCard from "./CityCard";

const SearchBar = ({ setSelectedCity }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //city suggestions]
  const fetchCities = async (searchTerm) => {
    //OpenWeatherMap API
    const apiKey = "b0f30d0084644a9ded36070df87e9f67";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${searchTerm}&appid=${apiKey}`
    );
    const data = await response.json();
    setSearchResults(data.list);
  };

  //input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    fetchCities(e.target.value);
  };

  // city selection
  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search city..."
        className="w-full p-2 pl-10 pr-4 border rounded-md focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={handleChange}
      />
      <FaSearch className="absolute top-0 left-3 text-gray-500 mt-3 ml-2" /> {/* Search icon */}
      {searchResults && searchResults.length > 0 && (
        <div className="mt-2">
          {searchResults.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              handleSelectCity={handleSelectCity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
