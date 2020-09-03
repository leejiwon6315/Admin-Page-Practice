import React from "react";

const InputBox = ({ name, productNumber, size, onChange, onSubmit }) => {
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="제품명"
          name="name"
          onChange={onChange}
          value={name}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="제품번호"
          name="productNumber"
          onChange={onChange}
          value={productNumber}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="사이즈"
          name="size"
          onChange={onChange}
          value={size}
        />
      </div>
      <button onClick={onSubmit}> 등록 </button>
    </div>
  );
};

export default InputBox;
