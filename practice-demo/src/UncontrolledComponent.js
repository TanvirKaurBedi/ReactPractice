import React, { useRef } from "react";

const UncontrolledComponent = () => {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  let inputField3 = document.getElementById("Inputfield3").value;
  console.log(`hello ${inputField3}`);
  function submitForm(e) {
    e.preventDefault();
    console.log("Input field 1's value is:", inputRef1.current.value);
    inputRef2.current.style.color = "red";
    inputRef1.current.style.color = "blue";
  }
  return (
    <>
      <div>
        <h1>UnControlled Component</h1>
        <form onSubmit={submitForm}>
          <input type="text" ref={inputRef1} />
          <br />
          <br />
          <input type="text" ref={inputRef2} />
          <br />
          <br />
          <input type="text" id="Inputfield3" defaultValue={100} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default UncontrolledComponent;
