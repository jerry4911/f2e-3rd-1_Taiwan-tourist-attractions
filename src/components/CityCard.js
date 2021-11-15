import React from "react";



function CityCard(props) {
  const city_card = `city-card city-card-${props.size}`
  return (
    <img className={city_card} src={props.city} alt={props.name}></img>
  );
}

export default CityCard;