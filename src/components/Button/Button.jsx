import React from "react";
import "./Button.css";

export default function Button({ children, icon = null, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <img src={icon} />
      {children}
    </button>
  );
}
