import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navContents}>
        <div className={styles.logo}>
          <div className={styles.logoImage}></div>
          <h1 className={styles.title}>Song A Zi</h1>
        </div>
        <div className={styles.navItems}>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
          <Link to="/Reservation" className={styles.navItem}>
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
