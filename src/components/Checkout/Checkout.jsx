import React from "react";
import { useOutletContext } from "react-router-dom";
import { ItemCart } from "../ItemCart/ItemCart.jsx";

const Checkout = () => {
  const { cart } = useOutletContext();
  if (cart[0].length === 0) {
    return (
      <>
        <h1>
          Oops your cart is empty. Click the button below to start shopping!
        </h1>
        <button>
          <a href="/shop">Go to shop</a>
        </button>
      </>
    );
  }
  console.log(cart[0]);
  const itemToList = cart[0].map((item) => {
    return (
      <ItemCart
        id={item.id}
        itemName={item.name}
        itemImgSrc={item.imgSrc}
        itemPrice={item.price}
        quantity={item.quantity}
      ></ItemCart>
    );
  });
  return (
    <>
      <p>Checkout</p>
      {itemToList}
    </>
  );
};

export { Checkout };
