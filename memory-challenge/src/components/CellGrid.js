import React from "react";
import utils from "../math-utils";
import Cell from "./Cell";
import {BorderedBox} from "./StyledComponents";

const CellGrid = props => (
    <BorderedBox>
    { utils.createArray(25).map(cell => (
        <Cell 
            key={cell}
            number={cell} 
            onClick={props.onCellClick} 
            status={props.cellStatus(cell)}
        /> 
    ))
    }
    </BorderedBox>
)

export default CellGrid;