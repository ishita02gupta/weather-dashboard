import React from "react";

const CityCard = ({ city, handleSelectCity }) => {
  const handleClick = () => {
    handleSelectCity(city);
  };

  return (
    <div
      className="bg-white p-2 border rounded-md cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      {city.name}, {city.sys.country}
    </div>
  );
};

export default CityCard;
