import React from "react";
import styles from "./item.module.scss";

const StockItems = ({ name, productNumber, size }) => {
  return (
    <div className={styles.item_container}>
      <div className={styles.inner_section}>
        <div className={styles.item_image}></div>
        <div className={styles.item_contents}>
          <div className={styles.item_attribute}>
            <span className={styles.item_title}>제품명</span>
            <div className={styles.item_name}>{name}</div>
          </div>
          <div className={styles.item_attribute}>
            <span className={styles.item_title}>제품 코드</span>
            <div className={styles.item_name}>{productNumber}</div>
          </div>
          <div className={styles.item_attribute}>
            <span className={styles.item_title}>사이즈</span>
            <div className={styles.item_name}>{size}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockItems;
