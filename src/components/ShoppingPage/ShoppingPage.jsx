import { useEffect, useState } from "react";
import React from "react";
import { Item } from "../Item/Item";
import styles from "./ShoppingPage.module.css";

const Shop = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6", { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else if (error) {
    return <p>An error has occured: {error}</p>;
  }
  console.log(items);
  const itemCards = items.map((item) => {
    return (
      <Item
        id={item.id}
        itemName={item.title}
        itemImgSrc={item.image}
        itemPrice={item.price}
      ></Item>
    );
  });
  console.log({ itemCards });
  return <div className={styles.itemsContainer}>{itemCards}</div>;
};

export { Shop };
