import React from "react";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.side_bar_comtainer}>
      <div className={styles.side_bar_profile}>
        <div className={styles.side_bar_image}></div>
        <div className={styles.side_bar_name}>
          <h3>BRAND NAME</h3>
          <h4>branch location</h4>
        </div>
      </div>
      <div className={styles.copyright}>
        copyright 2020. LEE JEEWON.
        <br /> all rights reserved.
      </div>
    </div>
  );
};

export default SideBar;
