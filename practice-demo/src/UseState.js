import React, { useState } from "react";

const UseSet = () => {
  const [data, setData] = useState("hello");

  const getData = (event) => {
    setData(event.target.value);
  };
  return (
    <>
      <div>
        <h1>{data}</h1>
        <input type="text" onChange={getData} />
      </div>
    </>
  );
};
export default UseSet;
