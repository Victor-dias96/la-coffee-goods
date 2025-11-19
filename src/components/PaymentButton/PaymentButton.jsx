import React from "react";
import "./PaymentButton.css";

export default function PaymentButton({ icon, title, subtitle, onClick }) {
  return (
    <button className="payment-button" onClick={onClick}>
      <img src={icon} alt={title} className="payment-icon" />

      <div className="payment-container">
        <span className="payment-title">{title}</span>
        {subtitle && <span className="payment-subtitle">{subtitle}</span>}
      </div>
    </button>
  );
}
