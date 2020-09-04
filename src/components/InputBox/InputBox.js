import React from "react";
import styles from "./InputBox.module.scss";

const InputBox = ({ name, productNumber, size, onChange, onSubmit }) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="제품명"
          name="name"
          onChange={onChange}
          value={name}
          className={styles.inputBox_input}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="제품번호"
          name="productNumber"
          onChange={onChange}
          value={productNumber}
          className={styles.inputBox_input}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="사이즈"
          name="size"
          onChange={onChange}
          value={size}
          className={styles.inputBox_input}
        />
      </div>
      <button className={styles.inputBox_button} onClick={onSubmit}>
        등록
      </button>
    </>
  );
};

export default InputBox;
