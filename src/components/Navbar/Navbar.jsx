import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/checkout">Cart</NavLink>
    </nav>
  );
}
export { Navbar };
