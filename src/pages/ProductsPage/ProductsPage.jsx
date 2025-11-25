import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import shopIcon from "../../assets/icons-button/shop.svg";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import { categoryConverter } from "../../utils/categoryConverter.js";
import "./ProductsPage.css";
import { useProductsData } from "../../hooks/useProductsData.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // --- Lógica dos dados selecionados para o carrinho ---
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const toggleProductSelection = (product) => {
    if (selectedProductIds.includes(product.id)) {
      setSelectedProductIds((prev) => prev.filter((id) => id !== product.id));
    } else {
      setSelectedProductIds((prev) => [...prev, product.id]);
    }
  };

  const handleAddToCart = () => {
    const productsToAdd = data.filter((p) => selectedProductIds.includes(p.id));

    addToCart(productsToAdd);

    navigate("/cart");
  };

  // --- Conexão com o Banco de dados ou Mock (caso o BD esteja indisponível) ---
  const { data, isLoading, isError, error } = useProductsData();

  const renderContent = () => {
    if (isLoading) {
      return <span className="loading-msg">Carregando produtos...</span>;
    }

    if (isError) {
      return (
        <span className="error-msg">Erro ao buscar dados: {error.message}</span>
      );
    }

    if (!data || data.length === 0) {
      return <span>Nenhum produto encontrado.</span>;
    }

    // --- Lógica do filtro da ".category-bar" ---

    const filteredProducts = data.filter((product) => {
      if (selectedCategory === null) {
        return true;
      }

      return product.category === selectedCategory;
    });

    return filteredProducts.map((product) => {
      const categoryProduct =
        categoryConverter[product.category] || categoryConverter["DEFAULT"];

      return (
        <div key={product.id} onClick={() => toggleProductSelection(product)}>
          <ProductItem
            key={product.id}
            title={product.name}
            price={product.price?.toFixed(2)}
            category={categoryProduct}
            description={product.description}
            image={product.image}
          />
        </div>
      );
    });
  };

  const handleCategoryClick = (categoryKey) => {
    if (selectedCategory === categoryKey) {
      setSelectedCategory(null);
      return;
    }

    setSelectedCategory(categoryKey);
  };

  return (
    <div className="page-container">
      <Header />

      <nav className="category-bar">
        <button
          onClick={() => handleCategoryClick("BEBIDA")}
          className={selectedCategory === "BEBIDA" ? "active" : ""}
        >
          Bebida
        </button>
        <span>|</span>
        <button
          onClick={() => handleCategoryClick("GRAO")}
          className={selectedCategory === "GRAO" ? "active" : ""}
        >
          Grão de Café
        </button>
        <span>|</span>
        <button
          onClick={() => handleCategoryClick("SALGADO")}
          className={selectedCategory === "SALGADO" ? "active" : ""}
        >
          Salgado
        </button>
        <span>|</span>
        <button
          onClick={() => handleCategoryClick("SOBREMESA")}
          className={selectedCategory === "SOBREMESA" ? "active" : ""}
        >
          Sobremesa
        </button>
      </nav>

      <div className="productsItem-container">
        <div className="products-grid">{renderContent()}</div>
      </div>

      <Button
        icon={shopIcon}
        onClick={handleAddToCart}
        disabled={selectedProductIds.length === 0}
      >
        Adicionar ao carrinho
      </Button>
    </div>
  );
}

export default ProductsPage;
