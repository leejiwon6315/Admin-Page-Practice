/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import InputBox from "../InputBox";
import Search from "../../components/Search";
import StockList from "../StockList";
import { virtualData, nextId, setNextId } from "../../lib/virtualData.js";
import styles from "./MainSection.module.scss";
import useInput from "../../lib/useInput";

const MainSection = () => {
  const [data, setData] = useState(virtualData);
  const [name, setName, onChangeName] = useInput("");
  const [productNumber, setProductNumber, onChangeProductNumber] = useInput("");
  const [size, setSize, onChangeSize] = useInput("");
  const [price, setPrice, onChangePrice] = useInput("");
  const [quantity, setQuantity, onChangeQuantity] = useInput("");

  const handleSubmit = () => {
    if (
      name === "" ||
      productNumber === "" ||
      size === "" ||
      price === "" ||
      quantity === ""
    ) {
      alert("정보를 모두 입력해 주세요");
      return;
    }

    setData({
      ...data,
      [nextId]: {
        id: String(nextId),
        name,
        productNumber,
        size,
        price,
        quantity,
      },
    });
    setName("");
    setProductNumber("");
    setSize("");
    setPrice("");
    setQuantity("");
    setNextId();
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.main_middle_section}>
        <Search />
        <StockList list={data} />
      </div>
      <InputBox
        name={name}
        productNumber={productNumber}
        size={size}
        price={price}
        quantity={quantity}
        onChangeName={onChangeName}
        onChangeProductNumber={onChangeProductNumber}
        onChangeSize={onChangeSize}
        onChangePrice={onChangePrice}
        onChangeQuantity={onChangeQuantity}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default MainSection;
