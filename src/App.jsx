import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (event) => {
    const newCart = cart;
    newCart.push({
      id: event.target.id,
      quantity: Number(event.target.parentNode.childNodes[3].value),
    });
    setCart(newCart);
    const totalQuantity = cart.reduce((sum, { quantity }) => sum + quantity, 0);
    setQuantity(totalQuantity);
  };

  return (
    <>
      <Navbar quantity={quantity} />
      <Outlet context={handleAddToCart}></Outlet>
    </>
  );
}

export default App;
