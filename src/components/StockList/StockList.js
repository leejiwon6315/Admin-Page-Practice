import React from "react";
import StockItems from "../StockItems/StockItems";

const StockList = ({ list }) => {
  return (
    <div>
      {Object.values(list).map((item) => {
        return <StockItems {...item} key={item.id} />;
      })}
    </div>
  );
};

export default StockList;
