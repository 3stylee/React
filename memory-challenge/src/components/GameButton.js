import React from "react";
import { Button } from "@mui/material";

const GameButton = props => {
    if (props.gameStatus === 'not-active'){
        return ( <Button variant='contained' onClick={props.startGame}>Start Game</Button> )
    }
    if (props.gameStatus === 'won' || props.gameStatus === 'lost'){
        return ( <Button variant='contained' onClick={props.playAgain}>Play Again</Button> )
    }
}

export default GameButton;