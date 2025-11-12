import React from "react";
import "./Input.css";

function Input({ label, type = "text", value, onChange, placeholder }) {
  const inputId = `input-${label.toLowerCase().replace(":", "")}`;

  return (
    <div className="input-group">
      <label htmlFor={inputId} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className="custom-input"
        required
      />
    </div>
  );
}

export default Input;
