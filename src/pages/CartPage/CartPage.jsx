import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import shopIcon from "../../assets/icons-button/shop.svg";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import { categoryConverter } from "../../utils/categoryConverter.js";
import { useCart } from "../../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.css"; // Vamos criar esse CSS rapidinho no passo 3

function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  const totalValue = cartItems.reduce((acc, item) => {
    return acc + (item.price || 0);
  }, 0);

  const renderEmptyCart = () => (
    <div className="empty-cart-container">
      <h2>Seu carrinho está vazio 😢</h2>
      <p>Volte para a loja e escolha suas delícias!</p>
      <br />
      <Button onClick={() => navigate("/products")}>
        Voltar para Produtos
      </Button>
    </div>
  );

  return (
    <div className="page-container">
      <Header />

      <div className="cart-title">
        <h1>Seu Carrinho</h1>
        <p>{cartItems.length} itens selecionados</p>
      </div>

      {cartItems.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          <div className="productsItem-container">
            <div className="products-grid">
              {cartItems.map((product) => {
                const categoryProduct =
                  categoryConverter[product.category] ||
                  categoryConverter["DEFAULT"];

                return (
                  <div key={product.cartId} className="cart-item-wrapper">
                    <ProductItem
                      title={product.name}
                      price={product.price?.toFixed(2)}
                      category={categoryProduct}
                      description={product.description}
                      image={product.image}
                    />

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(product.cartId)}
                    >
                      Remover
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="cart-footer">
            <div className="total-info">
              <span>Total do Pedido:</span>
              <strong>R$ {totalValue.toFixed(2)}</strong>
            </div>
            <Button icon={shopIcon} onClick={() => navigate("/payment")}>Finalizar Compra</Button>
          </footer>
        </>
      )}
    </div>
  );
}

export default CartPage;
