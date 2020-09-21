/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./InputBox.module.scss";

const InputBox = ({
  name,
  productNumber,
  size,
  price,
  quantity,
  onChangeName,
  onChangeProductNumber,
  onChangeSize,
  onChangePrice,
  onChangeQuantity,
  onSubmit,
}) => {
  return (
    <div className={styles.inputBox}>
      <div className={styles.inputBox_items}>
        <h1 className={styles.inputBox_title}>제품 등록</h1>
        <div className={styles.inputBox_file}>
          <div></div>
          <button className={styles.inputBox_file_button} onClick={null}>
            이미지 업로드
          </button>
        </div>
        <div className={styles.inputBox_item_wrapper}>
          <div className={styles.inputBox_item}>
            <h2 className={styles.inputBox_subTitle}>제품명</h2>
            <input
              type="text"
              placeholder="제품명"
              name="name"
              onChange={onChangeName}
              value={name}
              className={styles.inputBox_input}
            />
          </div>

          <div className={styles.inputBox_item}>
            <h2 className={styles.inputBox_subTitle}>제품번호</h2>
            <input
              type="text"
              placeholder="제품번호"
              name="productNumber"
              onChange={onChangeProductNumber}
              value={productNumber}
              className={styles.inputBox_input}
            />
          </div>

          <div className={styles.inputBox_item}>
            <h2 className={styles.inputBox_subTitle}>사이즈</h2>
            <input
              type="text"
              placeholder="사이즈"
              name="size"
              onChange={onChangeSize}
              value={size}
              className={styles.inputBox_input}
            />
          </div>

          <div className={styles.inputBox_item}>
            <h2 className={styles.inputBox_subTitle}>가격</h2>
            <input
              type="text"
              placeholder="가격"
              name="price"
              onChange={onChangePrice}
              value={price}
              className={styles.inputBox_input}
            />
          </div>

          <div className={styles.inputBox_item}>
            <h2 className={styles.inputBox_subTitle}>수량</h2>
            <input
              type="text"
              placeholder="수량"
              name="quantity"
              onChange={onChangeQuantity}
              value={quantity}
              className={styles.inputBox_input}
            />
          </div>
        </div>

        <button className={styles.inputBox_button} onClick={onSubmit}>
          등록
        </button>
      </div>
    </div>
  );
};

export default InputBox;
