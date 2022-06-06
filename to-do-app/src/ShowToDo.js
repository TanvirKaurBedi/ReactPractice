import React from "react";

const ShowToDo = (props) => {
  console.log(props);
  return (
    <>
      <div className="form-group todo-row">
        <div>
          <textarea
            className="textArea"
            rows="3"
            cols=""
            id="comment"
            key={props.id}
          >
            {props.text}
          </textarea>
        </div>
        <div>
          <button
            className="btn btn-info btn-lg"
            onClick={() => {
              props.deleteItem(props.id);
              console.log(`a=${props.id}`);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
export default ShowToDo;
