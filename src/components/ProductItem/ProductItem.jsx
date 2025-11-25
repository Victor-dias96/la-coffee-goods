import { useState } from "react";
import "./ProductItem.css";

// title, description, category, price, image

function ProductItem({ title, description, category, price, image }) {
  const [contentPrimary, setContentPrimary] = useState(true);
  const [itemSelected, setItemSelected] = useState(false);

  const handleSwitchContent = () => {
    setContentPrimary((prev) => !prev);
    setItemSelected((prev) => !prev);
  };

  const handleSelected = () => {
    setItemSelected((prev) => !prev);
  }

  return (
    <div className={`product-container ${itemSelected ? "product-selected" : ""}`} onClick={handleSelected}>
      {itemSelected ? (<div className="product-selected-tag">Selecionado</div>) : ""}
      {contentPrimary ? (
        <div className="product-front">
          <div className="product-image">
            <img src={image} alt={`Foto - ${title}`} />
          </div>
          <h2>{title}</h2>
          <p>{category}</p>
          <button onClick={handleSwitchContent} className="switch-details-front">Ver detalhes</button>
        </div>
      ) : (
        <div className="product-back">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={handleSwitchContent} className="switch-details-back">Voltar</button>
        </div>
      )}
      <div className="product-price">
        <h3>R$ {price}</h3>
      </div>
    </div>
  );
}

export default ProductItem;
