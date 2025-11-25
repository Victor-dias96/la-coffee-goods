import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import OrderStatusPage from "./pages/OrderStatusPage/OrderStatusPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/order-status" element={<OrderStatusPage />} />

        {/* Exemplo de rota de teste (Opcional) */}
        {/* <Route path="/test" element={<TestPage />} /> */}

        {/* Rota para páginas não encontradas (404 - Opcional) */}
        <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
      </Routes>
    </div>
  );
}

export default App;

/* =============================================================================
   GUIA PARA A EQUIPE - COMO ADICIONAR NOVAS TELAS E ROTAS 
  =============================================================================
  
  PASSO 1: Criar a Página
  - Crie sua pasta em 'src/pages/NomeDaPagina' com o arquivo .jsx e .css.

  PASSO 2: Registrar a Rota (AQUI NESTE ARQUIVO)
  - Importe seu componente lá em cima.
  - Adicione uma nova linha <Route ... /> dentro de <Routes> abaixo.
    Ex: <Route path="/carrinho" element={<CarrinhoPage />} />

  PASSO 3: Criar Links (Navegação)
  - Nas suas páginas, NÃO use a tag <a href="..."> (isso recarrega o site).
  - Use o componente <Link> do react-router-dom:
    
    1. Importe: import { Link } from 'react-router-dom';
    2. Use: <Link to="/carrinho">Ir para o Carrinho</Link>
  =============================================================================
*/
