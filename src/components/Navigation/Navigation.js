import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_contents}>
        <div className={styles.content_front}>
          <div className={styles.logo}>
            <div className={styles.logo_image}></div>
            <h1 className={styles.title}>Song A Zi</h1>
          </div>
          <div className={styles.nav_items}>
            <Link to="/Home" className={styles.nav_item}>
              Home
            </Link>
            <Link to="/reservation" className={styles.nav_item}>
              Reservation
            </Link>
          </div>
        </div>

        <button className={styles.logout_btn}>로그아웃</button>
      </div>
    </div>
  );
};

export default Navigation;
