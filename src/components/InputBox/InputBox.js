import React from "react";

const InputBox = (name, productNumber, size, onChange, onsubmit) => {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="제품명"
        name="name"
        onChange={onChange}
        value={name}
      />

      <input
        type="text"
        placeholder="제품번호"
        name="productNumber"
        onChange={onChange}
        value={productNumber}
      />

      <input
        type="text"
        placeholder="사이즈"
        name="size"
        onChange={onChange}
        value={size}
      />
      <button onClick={onsubmit}> 등록 </button>
    </div>
  );
};

export default InputBox;
