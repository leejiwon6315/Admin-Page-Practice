import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navContents}>
        <div className={styles.content_front}>
          <div className={styles.logo}>
            <div className={styles.logoImage}></div>
            <h1 className={styles.title}>Song A Zi</h1>
          </div>
          <div className={styles.navItems}>
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
            <Link to="/reservation" className={styles.navItem}>
              Reservation
            </Link>
          </div>
        </div>
        <button className={styles.logoutBtn}>로그아웃</button>
      </div>
    </div>
  );
};

export default Navigation;
