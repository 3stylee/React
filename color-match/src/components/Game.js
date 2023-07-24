import React, { useState } from "react";
import getRandomColor from "../color-utils";
import InputDisplay from "./InputDisplay";
import FinishMessage from "./FinishMessage";

const useGameState = () => {
    const [topColor] = useState(getRandomColor());
    const [bottomColor] = useState(getRandomColor());
    const [bottomColorText] = useState(getRandomColor());
    const [message, setMessage] = useState('');

    const setGameState = (value) => {
        let gameWon = false;
        topColor === bottomColor 
        ?  value === "Yes" ? gameWon = true : gameWon = false
        : value === "No" ? gameWon = true : gameWon = false;
        
        gameWon ? setMessage("Congrats, you were right") : setMessage("Unlucky, you were wrong");
    }

    return {topColor, bottomColor, bottomColorText, message, setGameState};
}

const Game = props => {
    const {topColor, bottomColor, bottomColorText, message, setGameState} = useGameState();

    const onButtonClick = (value) => {
        setGameState(value);
        setTimeout(function() {
            props.startNewGame();
        }, 1000);
    }

    return (
       <div className="main-content">
            <div className="top">
                <h1>{topColor}</h1>
                <h1 style={{color: bottomColor}}>{bottomColorText}</h1>
            </div>
            <FinishMessage message={message}/>
            <div className="bottom">
                <InputDisplay onClick={onButtonClick}/>
            </div>
       </div> 
    );
}

export default Game