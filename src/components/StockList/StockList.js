import React from "react";
import StockItems from "../StockItems/StockItems";
import styles from "./StockList.module.scss";

const StockList = ({ list }) => {
  return (
    <div className={styles.stockList_container}>
      {Object.values(list).map((item) => {
        return <StockItems {...item} key={item.id} />;
      })}
    </div>
  );
};

export default StockList;
