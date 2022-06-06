import React from "react";
import "./Style1.css";

const UseState = () => {
    const initialData = 10;
    const [myNumber, setMyNum] = React.useState(initialData);
    return (
        <>
            <div className="parentDiv">
                <div className="childDiv">
                    <p>{myNumber}</p>
                    <div class="button1" onClick={() => setMyNum(myNumber + 1)}>INCREMENT

                    </div>
                    <div class="button2" onClick={() => (myNumber > 0 ? setMyNum(myNumber - 1) : setMyNum(0))}>DECREMENT

                    </div>

                </div>
            </div>
        </>
    )
}
export default UseState;