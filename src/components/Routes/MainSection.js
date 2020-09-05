/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import InputBox from "../InputBox";
import StockList from "../StockList";
import { virtualData, nextId, setNextId } from "../../lib/virtualData.js";
import styles from "./MainSection.module.scss";
import useInput from "../../lib/useInput";

const MainSection = () => {
  const [data, setData] = useState(virtualData);
  const [name, setName, onChangeName] = useInput("");
  const [productNumber, setProductNumber, onChangeProductNumber] = useInput("");
  const [size, setSize, onChangeSize] = useInput("");

  const handleSubmit = () => {
    if (name === "" || productNumber === "" || size === "") {
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
      },
    });
    setName("");
    setProductNumber("");
    setSize("");

    setNextId();
  };

  return (
    <div className={styles.container}>
      <InputBox
        name={name}
        productNumber={productNumber}
        size={size}
        onChangeName={onChangeName}
        onChangeProductNumber={onChangeProductNumber}
        onChangeSize={onChangeSize}
        onSubmit={handleSubmit}
      />

      <StockList list={data} />
    </div>
  );
};

export default MainSection;
