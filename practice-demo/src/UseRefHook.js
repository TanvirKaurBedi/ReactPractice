import React, { useRef } from "react";
const UseRefHook = () => {
  let inputRef = useRef();
  const getData = () => {
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.fontSize = "60px";
    inputRef.current.style.color = "yellow";
    inputRef.current.style.fontWeight = "bold";
    inputRef.current.style.fontFamily = "sanitizeFn";
    inputRef.current.value = "waheguru";
    inputRef.current.focus();
    // inputRef.current.style.display = "none";
  };
  return (
    <>
      <div>
        <h1>useRef in React</h1>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            getData();
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};
export default UseRefHook;
