import React, { Component } from "react";
import {
  virtualData,
  nextId,
  setNextId,
} from "./components/StockItems/virtualData";
import StockList from "./components/StockList/StockList";
import InputBox from "./components/InputBox/InputBox";

class App extends Component {
  state = {
    virtualData,
    name: ``,
    productNumber: ``,
    size: ``,
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { virtualData, name, productNumber, size } = this.state;

    if (name === `` || productNumber === `` || size === ``) {
      alert(`빠진 부분없이 입력해 주세요`);
      return;
    }

    this.state({
      virtualData: {
        ...virtualData,
        [nextId]: {
          id: nextId,
          name,
          productNumber,
          size,
        },
      },
      name: ``,
      productNumber: ``,
      size: ``,
    });

    setNextId();
  };

  render() {
    const { handleInput, handleSubmit } = this;
    const { virtualData, name, productNumber, size } = this.state;

    return (
      <div className="container">
        <InputBox
          name={name}
          productNumber={productNumber}
          size={size}
          onChange={handleInput}
          onSubmit={handleSubmit}
        />
        <StockList list={virtualData} />
      </div>
    );
  }
}

export default App;
