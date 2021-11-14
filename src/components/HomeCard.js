import React from "react";
import photo from "../assets/images/景點.png";
import title from "../assets/images/title.svg";

function HomeCard(props) {
  return (
    <div>
      <div className="home-card">
          <img className="bg" src={photo} alt="Photo"></img>
          <embed className="title " src={title} alt="Title"></embed>
          <div className="subtitle">台北、台中、台南、屏東、宜蘭……遊遍台灣</div>
          
      </div>
      <div className="shadow shadow-left"></div>
      <div className="shadow shadow-right"></div>
    </div>
  );
}

export default HomeCard;