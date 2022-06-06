import React, { useState } from "react";

const UseStateButton1 = () => {
    const [data, setData] = useState("");
    const [print, setPrint] = useState(false);

    const getData = (val) => {
        setData(val.target.value);
        setPrint(false);
    }
    const fun = () => {
        setPrint(true);
    }
    return (
        <>
            <div>
                {print ?
                    <h1>{data} </h1> : null
                }
                <input type="text" onChange={getData}>
                </input>
                {/* <button onClick={() => setPrint(true)}>Print</button> */}
                <button onClick={() => fun()}>print</button>
            </div>
        </>
    );
}
export default UseStateButton1;