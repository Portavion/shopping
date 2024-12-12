import { useEffect, useState } from "react";
import React from "react";
import { Item } from "../Item/Item";
import styles from "./ShoppingPage.module.css";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6", { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response = response.map((item) => Object.assign(item, { quantity: 1 }));
        setItems(response);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else if (error) {
    return <p>An error has occured: {error}</p>;
  }

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
  return <div className={styles.itemsContainer}>{itemCards}</div>;
};

export { Shop };
