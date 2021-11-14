import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import NavButton from "./NavButton";

function Header(props) {
  const [navbuttons, setNavbutton] = useState(props.navbuttons);
  const navbuttonList = navbuttons.map( navbutton => (
    <NavButton 
      className="nav-btn"
      key={navbutton.id}
      name={navbutton.name}
      color={navbutton.color}
      icon={navbutton.icon}
    />
  ));
  
  return (
    <div className="header">
        <Logo></Logo>
        <div className="nav-btn-group">
          {navbuttonList}
        </div>
    </div>
  );
}

export default Header;