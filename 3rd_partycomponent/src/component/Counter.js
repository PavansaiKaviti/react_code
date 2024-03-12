import { useState } from "react";
import React from "react";
const Counter = () => {
  const [data, setData] = useState(10);
  const increment = () => {
    setData((data) => {
      return data + 1;
    });
  };
  return (
    <div>
      <h1>counter:{data}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
