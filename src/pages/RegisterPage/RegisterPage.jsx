import React from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="page-container">
      <Header />

      <div className="register-content">
        <h2 className="page-title">Crie sua conta</h2>

        <a href="#" className="login-link-top">
          Já tenho conta
        </a>

        <form className="register-form">
          <Input label="Nome Completo:" type="text" />
          <Input label="Email:" type="email" />
          <Input label="Senha:" type="password" />
          <Input label="Confirmar Senha:" type="password" />

          <div className="button-container-register">
            <Button variant="primary">CADASTRAR</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
