import React from "react";

function NavButton(props) {
  const btn = `btn nav-btn btn-${props.color}`
  const icon = `btn-icon-${props.icon}`
  const text = `nav-text text-${props.color}`
  return (
    <div className="inline-block">
      <button
        type="button"
        className={btn}
      >
        <div className={icon}></div>
      </button>
      <label className={text}>
        {props.name}
      </label>
    </div>
  );
}

export default NavButton;