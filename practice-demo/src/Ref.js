import React, { createRef } from "react";
class Ref extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  getValue() {
    console.log(this.inputRef);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "black";
  }
  render() {
    return (
      <>
        <div className="app">
          <h1>Ref in React</h1>
          <input type="text" ref={this.inputRef}></input>
          <button
            onClick={() => {
              this.getValue();
            }}
          >
            Click
          </button>
        </div>
      </>
    );
  }
}
export default Ref;
