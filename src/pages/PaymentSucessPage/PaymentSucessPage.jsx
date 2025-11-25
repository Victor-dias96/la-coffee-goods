import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./PaymentSucessPage.css";
import iconConcluido from "../../assets/icons-button/icone-concluido.svg";

export default function PaymentSucessPage() {
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
        <Button>Continuar</Button>
      </div>
    </div>
  );
}
