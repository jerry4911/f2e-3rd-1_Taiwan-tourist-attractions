import React from "react";
import icon from "../assets/images/triangle.svg"
import taipei_city from "../assets/images/city/台北市.png";
import new_taipei_city from "../assets/images/city/新北市.png";
import momo_city from "../assets/images/city/桃園市.png";
import hsinchu_city from "../assets/images/city/新竹市.png";
import taichung from "../assets/images/city/台中.png";
import Nantou from "../assets/images/city/南投.png";
import Chiayi from "../assets/images/city/嘉義.png";
import CityCard from "./CityCard";

function CitySection(props) {
  return (
    <div className="city-section">
      <div className="title">
        <embed className="title-icon" src={icon} alt="map"></embed>
        <p>熱門城市</p>
      </div>
      <CityCard city={taipei_city} name="台北市" size="big"></CityCard>
      <div className="two-city-card">
        <CityCard city={new_taipei_city} name="新北市" size="small"></CityCard>
        <CityCard city={momo_city} name="桃園市" size="small"></CityCard>
      </div>
      <CityCard city={hsinchu_city} name="新竹市" size="big"></CityCard>
      <div className="two-city-card">
        <CityCard city={taichung} name="台中" size="small"></CityCard>
        <CityCard city={Nantou} name="南投" size="small"></CityCard>
      </div>
      <CityCard city={Chiayi} name="嘉義" size="big"></CityCard>
    </div>
  );
}

export default CitySection;