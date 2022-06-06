import React from "react";
const PropsExample = (props) => {
    // const { myFun, heading } = props
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <button onClick={() => { props.myFun() }}>Click</button>
            </div>

        </>
    );
}
export default PropsExample;