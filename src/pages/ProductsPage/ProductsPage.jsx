import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import shopIcon from "../../assets/icons-button/shop.svg";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import { categoryConverter } from "../../utils/categoryConverter.js";
import "./ProductsPage.css";
import { useProductsData } from "../../hooks/useProductsData.js"; 

function ProductsPage() {
  const { data, isLoading, isError, error } = useProductsData();

  const renderContent = () => {
    if (isLoading) {
      return <span className="loading-msg">Carregando produtos...</span>;
    }

    if (isError) {
      return <span className="error-msg">Erro ao buscar dados: {error.message}</span>;
    }

    if (!data || data.length === 0) {
      return <span>Nenhum produto encontrado.</span>;
    }

    return data.map((product) => {
      const categoryProduct =
        categoryConverter[product.category] || categoryConverter["DEFAULT"];

      return (
        <ProductItem
          key={product.id} 
          title={product.name}
          price={product.price?.toFixed(2)}
          category={categoryProduct}
          description={product.description}
          image={product.image}
        />
      );
    });
  };

  return (
    <div className="page-container">
      <Header />

      <nav className="category-bar">
        <button>Bebida</button>
        <span>|</span>
        <button>Grão de Café</button>
        <span>|</span>
        <button>Salgados</button>
        <span>|</span>
        <button>Sobremesas</button>
      </nav>

      <div className="productsItem-container">
        <div className="products-grid">
          {renderContent()}
        </div>
      </div>

      <Button icon={shopIcon}>Adicionar ao carrinho</Button>
    </div>
  );
}

export default ProductsPage;