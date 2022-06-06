import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [Tnc, setTnc] = useState(false);

  const getFormData = (event) => {
    event.preventDefault();
    console.log(name, Tnc, interest);
  };
  return (
    <>
      <div>
        style=
        {{
          backgroundColor: "burlywood",
          textAlign: "center",
          border: " 50px groove",
          padding: "100px",
          margin: "100px",
          fontWeight: "bold",
        }}
        <h1>Handle Form In React</h1>
        <form onSubmit={getFormData}>
          <label>Name </label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <br />
          <label>Course </label>
          <select>
            onChange=
            {(event) => {
              setInterest(event.target.value);
            }}
            <option>Mca</option>
            <option>MCOM</option>
            <option>MBA</option>
            <option>MA</option>
          </select>
          <br />
          <br />
          <span>Accept Terms And Conditions</span>
          <input
            type="checkbox"
            onChange={(event) => {
              setTnc(event.target.checked);
            }}
          />
          <br />
          <br />
          <button style={{ fontSize: "25px", border: "5px inset" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
