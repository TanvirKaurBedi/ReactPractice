import React, { useState } from "react";

const TernaryOperator = () => {
    const [data, setData] = useState(2);
    // const data = 3;

    return (
        <>
            <div>
                {
                    data == 1 ?
                        <h1>Hello Kity</h1> :
                        data == 2 ?
                            <h1>Hello Bella</h1> :
                            <h1>Hello you</h1>
                }
            </div>
        </>
    );
}
export default TernaryOperator;