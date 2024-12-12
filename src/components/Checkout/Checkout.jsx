import React from "react";
import { useOutletContext } from "react-router-dom";
import { ItemCart } from "../ItemCart/ItemCart.jsx";

const Checkout = () => {
  const { cart } = useOutletContext();
  const { handleDeleteFromCart } = useOutletContext();
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
  const itemToList = cart[0].map((item) => {
    return (
      <ItemCart
        id={item.id}
        itemName={item.name}
        itemImgSrc={item.imgSrc}
        itemPrice={item.price}
        quantity={item.quantity}
        deleteItem={handleDeleteFromCart}
      ></ItemCart>
    );
  });
  let totalPrice = 0;
  for (let item in cart[0]) {
    totalPrice = totalPrice + cart[0][item].price * cart[0][item].quantity;
  }

  totalPrice = totalPrice.toFixed(2);
  return (
    <>
      <p>Checkout</p>
      {itemToList}
      <h2>
        Total:<span>{totalPrice}</span>
      </h2>
    </>
  );
};

export { Checkout };
