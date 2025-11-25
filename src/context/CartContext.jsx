import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItems) => {
    setCartItems((prev) => [...prev, ...newItems]);
  };

  const removeFromCart = (productId) => {
    // Mantém na lista apenas os itens que NÃO têm esse ID
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}