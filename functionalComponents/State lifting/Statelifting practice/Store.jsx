import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Cart cart={cart} />
      <Product addToCart={addToCart} />
    </div>
  );
}

export default Store;