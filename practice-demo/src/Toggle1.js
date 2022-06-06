import React, { useState } from "react";
const Toggle1 = () => {
    const [data, setData] = useState(true);
    return (
        <>
            <div>
                {data ?
                    <h1>HELLO</h1> : null
                }
                <button onClick={() => setData(!data)}>Toggle</button>
            </div>
        </>
    );
};
export default Toggle1;