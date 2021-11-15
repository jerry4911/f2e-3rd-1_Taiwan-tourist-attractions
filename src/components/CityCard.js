import React from "react";
import map from "../assets/images/map.svg"

function CityCard(props) {
  const city_card = `city-card city-card-${props.size}`
  return (
    <div className={city_card}>
      <img src={props.city} alt={props.name}></img>
      <div className="city-card-mask"></div>
      <embed className="city-icon" src={map} alt="map"></embed>
      <p>{props.name}</p>
    </div>
  );
}

export default CityCard;