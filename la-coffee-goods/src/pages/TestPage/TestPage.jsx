import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import "./TestPage.css";

function TestPage() {
  const [testValue, setTestValue] = useState("");

  return (
    <div className="test-page-container">
      <Header />

      <div className="test-content-box">
        <h2>Teste de Cores e Componentes</h2>

        <Input
          label="Nome do Produto:"
          type="text"
          value={testValue}
          onChange={(e) => setTestValue(e.target.value)}
          placeholder="Digite algo para testar o input..."
        />

        <p className="test-output">
          Valor digitado: <strong>{testValue}</strong>
        </p>

        <p className="highlight-color-test">
          Esta é a cor de destaque (Vinho) do site.
        </p>
      </div>

      {/* Teste do Botão Gabriel */}
      <div className="test-content-box test-button-page">
        <h2>Teste do Componente Button</h2>

        <Button
          text="Botão com Ícone"
          icon={<span>🔥</span>}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default TestPage;
