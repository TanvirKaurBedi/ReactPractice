import React, { useReducer } from "react";
const reducer = (state, action) => {
    if (action.type === "Incr") {
        state = state + 1;
    };
    if (state > 0 && action.type === "Decr") {
        state = state - 1;
    }
    return state;
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <>
            <div className="parentDiv">
                <div className="childDiv">
                    <p>{myNumber}</p>
                    <div class="button1" onClick={() => dispatch({ type: "Incr" })}>INCREMENT

                    </div>
                    <div class="button2" onClick={() => dispatch({ type: "Decr" })}>DECREMENT

                    </div>

                </div>
            </div>
        </>


    );
}
export default UseReducer;