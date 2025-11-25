import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./HomeScreenPage.css";

function HomeScreenPage() {
    return (
        <div className="home-screen-page">
            <Header />
            <div className="button-row">
                <div className="button-cadastro">
                    <Button variant="primary" href="/register">ENTRAR COM CADASTRAR</Button>
                </div>

                <div className="button-sem-cadastro">
                    <Button variant="secondary" href="/login">ENTRAR SEM CADASTRO</Button>
                </div>
            </div>
        </div>
    );
}

export default HomeScreenPage;