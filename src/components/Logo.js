import React from "react";
import logo from "../assets/images/logo.svg";

function Logo(props) {
  return (
    <div  className="logo">
      <img src={logo} alt="Logo"></img>
    </div>
  );
}

export default Logo;