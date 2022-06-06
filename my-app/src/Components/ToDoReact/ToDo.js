import React from "react";
import "./style.css";

const ToDo = () => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./Images/ToDoList2022.jpg" alt="tododlogo" />
                        <figcaption>Add Your List Here👇  </figcaption>
                    </figure>



                    <div className="addItems">
                        <input type="text" placeholder="✍Add Item" className="form-control">
                            <i className="fa-solid fa-plus"></i>

                        </input>
                    </div>




                </div>
            </div>

        </>
    );
};
export default ToDo;