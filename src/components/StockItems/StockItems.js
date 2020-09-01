import React from "react";

const StockItems = ({ name, productNumber, size }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{productNumber}</div>
      <div>{size}</div>
    </div>
  );
};

export default StockItems;
