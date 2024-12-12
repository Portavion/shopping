import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const handleDeleteFromCart = (event) => {
    let newCart = cart;
    newCart = newCart.filter((item) => item.id != event.target.id);
    setCart(newCart);
    handleQuantityChange();
  };
  const handleQuantityChange = () => {
    const totalQuantity = cart.reduce((sum, { quantity }) => sum + quantity, 0);
    setQuantity(totalQuantity);
  };

  const handleAddToCart = (event) => {
    const alreadyAdded =
      cart.find((item) => item.id === event.target.id) === undefined
        ? false
        : true;
    if (!alreadyAdded) {
      const newCart = cart;
      newCart.push({
        id: event.target.id,
        name: event.target.parentNode.childNodes[1].innerText,
        imgSrc: event.target.parentNode.childNodes[0].src,
        price: event.target.parentNode.childNodes[2].innerText.slice(0, -1),
        quantity: Number(event.target.parentNode.childNodes[3].value),
      });
      setCart(newCart);
    } else {
      const newCart = cart;
      const indexToUpdate = cart.findIndex(
        (item) => item.id === event.target.id,
      );
      newCart[indexToUpdate].quantity =
        newCart[indexToUpdate].quantity +
        Number(event.target.parentNode.childNodes[3].value);
    }
    handleQuantityChange();
  };
  useEffect(() => {
    handleQuantityChange();
  }, [cart]);

  return (
    <>
      <Navbar quantity={quantity} />
      <Outlet
        context={{
          handleAddToCart,
          cart: [cart, setCart],
          handleDeleteFromCart,
        }}
      ></Outlet>
    </>
  );
}

export default App;
