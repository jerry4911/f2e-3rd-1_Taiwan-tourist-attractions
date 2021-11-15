import React from "react";
import taipei_city from "../assets/images/city/台北市.png";
import CityCard from "./CityCard";

function CitySection(props) {
  return (
    <div className="city-section">
      <CityCard city={taipei_city} name="台北市" size="big"></CityCard>
    </div>
  );
}

export default CitySection;