import ProductItem from "./components/ProductItem/ProductItem.jsx";
import TestPage from "./pages/TestPage/TestPage.jsx";

function App() {
  return (
    <div className="App">
      {/* <TestPage /> */}
      <ProductItem
        title="Goods Coffee - Edição Especial"
        category="Grão de Café"
        description="Grãos premium com vibe bobbiegoodiana — torra média, notas de pistache e chocolate amargo; energia estilosa para quem vive cronicamente ativo."
        image="https://res.cloudinary.com/dqfsrp3ky/image/upload/v1758754329/goods-coffee-edicao-especial_irlw8c.png"
        price={128.90}
      />
    </div>
  );
}

export default App;
