import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import shopIcon from "../../assets/icons-button/shop.svg";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import { categoryConverter } from "../../utils/categoryConverter.js";
import "./ProductsPage.css";

function ProductsPage() {

   const categoryProduct = categoryConverter['GRAO'] || categoryConverter['DEFAULT'];

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
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
          <ProductItem title="Goods Coffee - Edição Especial" price={128.90.toFixed(2)} category={categoryProduct} description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo." image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png" />
        </div>
      
      </div>

      <Button icon={shopIcon} children="Adicionar ao carrinho" />
    </div>
  );
}

export default ProductsPage;
