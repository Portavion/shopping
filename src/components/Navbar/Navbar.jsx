import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, useOutletContext } from "react-router-dom";

function Navbar({ quantity = 0 }) {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/checkout">Cart({quantity})</NavLink>
    </nav>
  );
}
export { Navbar };
