import React, { useState, useRef } from "react";
import UseSet from "./UseState";
import UseSetButton from "./UseStateButton";
import UseStateButton1 from "./UseStateButton1";
import ToggleData from "./ToggleData";
import Toggle1 from "./Toggle1";
import Form from "./Form.js";
import TernaryOperator from "./TernaryOperator";
import PropsExample from "./propsExample";
import MapMethodEgTable from "./MapMethodEgTable";
import NestedTable from "./NestedTable";
import Ref from "./Ref";
import UseRefHook from "./UseRefHook";
import ForwardRef from "./ForwardRef";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import MainPage from "./RoutingExample/MainPage";
import ApiGetExample from "./ApiGetExample";
import ApiPostMethod from "./ApiPostMethod";

function App() {
  //   const [heading, setHeading] = useState("hello");

  //   const myFun = () => {
  //     setHeading("hello baby");
  //     alert("hello baby");

  //   }e
  // let inputRef = useRef(null);
  // const updateInput = () => {
  //   inputRef.current.value = "1000";
  //   inputRef.current.style.color = "red";
  // };
  return (
    <div className="App">
      {/* <UseSet></UseSet> */}
      {/* <UseSetButton></UseSetButton> */}
      {/* <UseStateButton1></UseStateButton1> */}
      {/* <ToggleData></ToggleData> */}
      {/* <Toggle1></Toggle1> */}
      {/* <Form></Form> */}
      {/* <TernaryOperator></TernaryOperator> */}
      {/* <PropsExample 
       myFun={myFun}
      heading={heading}
      /> */}
      {/* <MapMethodEgTable></MapMethodEgTable> */}
      {/* <NestedTable /> */}
      {/* <Ref></Ref> */}
      {/* <UseRefHook></UseRefHook> */}
      {/* <ForwardRef ref={inputRef}></ForwardRef>
      <button
        onClick={() => {
          updateInput();
        }}
      >
        Click
      </button> */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent></UncontrolledComponent> */}
      {/* <MainPage></MainPage> */}
      {/* <ApiGetExample></ApiGetExample> */}
      <ApiPostMethod></ApiPostMethod>
    </div>
  );
}

export default App;
