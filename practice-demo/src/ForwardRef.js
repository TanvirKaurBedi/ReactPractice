import React, { forwardRef } from "react";
const ForwardRef = (props, ref) => {
  return (
    <>
      <div>
        <label>Name </label>
        <input type="text" ref={ref} />
      </div>
    </>
  );
};
export default forwardRef(ForwardRef);
