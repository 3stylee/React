import React from "react";

const InputDisplay = props => {
    return (
        <>
            <button onClick={() => props.onClick('Yes')}>Yes</button>
            <p></p>
            <button onClick={() => props.onClick('No')}>No</button>
        </>
    );
}

export default InputDisplay;