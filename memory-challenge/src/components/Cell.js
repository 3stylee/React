import React from "react";
import colors from "../color-utils";

const Cell = props =>  (
<div className="cell" 
    style={{ width: '20%', backgroundColor: colors[props.status]}} 
    onClick={() => {props.onClick(props.number, props.status)}}
/>)

export default Cell;