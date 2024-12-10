import React from "react";
import { Item } from "../Item/Item";
import styles from "./ShoppingPage.module.css";

const Shop = () => {
  return (
    <div className={styles.itemsContainer}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export { Shop };
