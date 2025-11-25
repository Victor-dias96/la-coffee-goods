import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./HomeScreenPage.css";

function HomeScreenPage() {
  const navigate = useNavigate();

  return (
    <div className="home-screen-page">
      <Header />
      <div className="button-row">
        <div className="button-cadastro">
          <Button variant="primary" onClick={() => navigate("/register")}>
            ENTRAR COM CADASTRAR
          </Button>
        </div>

        <div className="button-sem-cadastro">
          <Button variant="secondary" onClick={() => navigate("/login")}>
            ENTRAR SEM CADASTRO
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreenPage;
