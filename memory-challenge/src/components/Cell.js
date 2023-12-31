import React from "react";
import colors from "../color-utils";
import { StyledCell } from "./StyledComponents";

const Cell = props => (
    <StyledCell 
        style={{ width: '20%', backgroundColor: colors[props.status]}} 
        onClick={() => {props.onClick(props.number, props.status)}}
    />
)

export default Cell;