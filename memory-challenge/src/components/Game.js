import { useState } from "react";
import utils from "../math-utils";
import Cell from "./Cell";
import GameMessage from "./GameMessage";

const useGameState = () => {
    const [gameStatus, setGameStatus] = useState('not-active');
    const [chosenCells, setChosenCells] = useState([]);
    const [correctCells] = useState(utils.sampleArray(utils.createArray(9), 3));

    const setGameState = newChosenCells => {
        const [includeCount, excludeCount] = utils.arrayCrossCounts(newChosenCells, correctCells);
        if (includeCount === correctCells.length){
            setGameStatus('won')
        }

        if (excludeCount > 2){
           setGameStatus('lost')
        }

        setChosenCells(newChosenCells);
    }

    return {correctCells, chosenCells, gameStatus, setGameState, setGameStatus};
}

const Game = () => {
    const {correctCells, chosenCells, gameStatus, setGameState, setGameStatus} = useGameState();

    const startGame = () => {
        setGameStatus('starting');
        setTimeout(() => {setGameStatus('active')}, 3000);
    }

    const onCellClick = (key, currentStatus) => {
        if (!(gameStatus === 'active')) { return; }
        if (currentStatus !== 'available') { return; }

        const newChosenCells = chosenCells.concat(key);
        setGameState(newChosenCells);
    }

    const cellStatus = key => {
        if (gameStatus === 'starting' && correctCells.includes(key)) { return 'preview' }
        if (!(chosenCells.includes(key))) { return 'available'; }
        if (correctCells.includes(key)) { return 'correct'; }
        if (!(correctCells.includes(key))) { return 'wrong'; }
    }

    return (
      <div className="game">
        <div className="grid">
            { utils.createArray(9).map(cell => (
            <Cell 
                key={cell}
                number={cell} 
                onClick={onCellClick} 
                status={cellStatus(cell)}
            /> 
            ))}
        </div>
        <div className="message">
            <GameMessage status={gameStatus}/>
        </div>
        <div className="button">
          <button onClick={startGame}>Start Game</button>
        </div>
      </div>
    );
  };

export default Game;