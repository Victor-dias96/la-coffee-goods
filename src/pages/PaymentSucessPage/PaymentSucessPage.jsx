import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./PaymentSucessPage.css";
import iconConcluido from "../../assets/icons-button/icone-concluido.svg";
import { useNavigate } from "react-router-dom";

export default function PaymentSucessPage() {
  const navigate = useNavigate();

  return (
    <div className="payment-success-container">
      <Header />
      <div className="success-box">
        <img
          src={iconConcluido}
          alt="Ícone de sucesso"
          className="success-icon"
        />
        <p className="success-message">Compra Finalizada com sucesso!</p>
      </div>
      <div className="button-continue">
        <Button onClick={() => navigate("/order-status")}>Continuar</Button>
      </div>
    </div>
  );
}
