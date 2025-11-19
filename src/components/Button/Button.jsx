import React from "react";
import "./Button.css";

export default function Button({ text, icon = null, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
