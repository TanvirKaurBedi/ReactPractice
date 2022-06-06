import React, { useState } from "react";
const ControlledComponent = () => {
  let [data, setData] = useState("");
  return (
    <>
      <div>
        <h1>Controlled Component</h1>
        <input
          type="text"
          defaultValue={100}
          onChange={(event) => {
            setData(event.target.value);
          }}
        />
      </div>
    </>
  );
};
export default ControlledComponent;
