import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={cartHandler} />}
      <Header onShowCart={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
