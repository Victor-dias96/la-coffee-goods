import React from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="page-container">
      <Header />

      <div className="login-content">
        <h2 className="page-title">
          Seja Bem-Vindo
          <br />
          Novamente!
        </h2>

        <form className="login-form">
          <Input label="Email:" placeholder="" type="email" />

          <Input label="Senha:" placeholder="" type="password" />

          <div className="form-footer">
            <a href="#" className="forgot-password">
              Esqueci a senha
            </a>
            <a href="#" className="signup-link">
              Cadastrar-se
            </a>
          </div>

          <div className="button-container">
            <Button variant="primary">ENTRAR</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
