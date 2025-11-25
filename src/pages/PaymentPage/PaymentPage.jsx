import React from "react";
import "./PaymentPage.css";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import PaymentButton from "../../components/PaymentButton/PaymentButton";

// Ícones de pagamento
import pixIcon from "../../assets/icons-button/pix.svg";
import cardIcon from "../../assets/icons-button/cartao.svg";
import moneyIcon from "../../assets/icons-button/dinheiro.svg";
import voltarIcon from "../../assets/icons-button/seta-voltar.svg";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="payment-page">
      {/* Logo no topo */}
      <Header />

      {/* Botão Voltar */}
      <div className="back-button">
        <Button icon={<img src={voltarIcon} />} onClick={() => navigate("/cart")}>Voltar</Button>
      </div>

      {/* Título */}
      <div className="payment-title">
        <p>Escolha sua forma de pagamento:</p>
      </div>

      <div className="payment-options">
        {/* Área dos botões */}
        <PaymentButton icon={pixIcon} title="Pix" onClick={() => navigate("/payment-sucess")} />

        <PaymentButton icon={cardIcon} title="Cartão" onClick={() => navigate("/payment-sucess")} />

        <PaymentButton icon={moneyIcon} title="Dinheiro" onClick={() => navigate("/payment-sucess")} />
      </div>
    </div>
  );
}
