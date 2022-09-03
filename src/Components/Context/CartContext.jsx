import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartContext({ children }) {

  const gettingItemFromLocalStorage = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const [cart, setCart] = useState(gettingItemFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContext;
