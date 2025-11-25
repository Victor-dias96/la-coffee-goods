import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Input from "../../components/Input/Input.jsx";
import ProductItem from "../../components/ProductItem/ProductItem.jsx"
import "./TestPage.css";
import { categoryConverter } from "../../utils/categoryConverter.js";

function TestPage() {
  const [testValue, setTestValue] = useState("");

  const categoryProduct = categoryConverter['GRAO'] || categoryConverter['DEFAULT'];
  
  return (
    <div className="test-page-container">
      {/* <Header />

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
      </div> */}
      
      <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
    </div>
  );
}

export default TestPage;
