import React, { useState } from "react";

const UseSetButton = () => {

    const [data, setData] = useState("");

    const getData = async (val) => {
        console.log(`hi...`, val);

        await setData(val.target.value);
        console.log({ data });
    }

    return (
        <>
            <div>
                <h1> {data} </h1>
                <input type="text" onChange={getData} />
            

            </div>
        </>
    );
}
export default UseSetButton;