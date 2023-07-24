import { useEffect, useState } from "react";
import utils from "../math-utils";
import GameMessage from "./GameMessage";
import GameButton from "./GameButton";
import { Typography } from "@mui/material";
import CellGrid from "./CellGrid";
import { BoxSizeReset, Button, Footer, GameContainer, Message, Timer } from "./StyledComponents";

const useGameState = () => {
    const [gameStatus, setGameStatus] = useState('not-active');
    const [chosenCells, setChosenCells] = useState([]);
    const [correctCells] = useState(utils.sampleArray(utils.createArray(25), 5));
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        let timerId;
        if (gameStatus === 'starting'){
            timerId = setTimeout(() => {
                setGameStatus('active');
            }, 3000);
        }
        if (gameStatus === 'active'){
            timerId = setTimeout(() => {
                if (timeLeft === 1){
                    clearTimeout(timerId);
                    setGameStatus('lost');
                }
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
        return () => clearTimeout(timerId);
    }, [timeLeft, gameStatus]);

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

    return {correctCells, chosenCells, gameStatus, timeLeft, setGameState, setGameStatus};
}

const Game = props => {
    const {correctCells, chosenCells, gameStatus, timeLeft, setGameState, setGameStatus} = useGameState();

    const startGame = () => {
        setGameStatus('starting');
    }

    const onCellClick = (key, currentStatus) => {
        if (!(gameStatus === 'active')) { return; }
        if (currentStatus !== 'available') { return; }

        const newChosenCells = chosenCells.concat(key);
        setGameState(newChosenCells);
    }

    const cellStatus = key => {
        if ((gameStatus === 'starting' || gameStatus === 'lost') 
        && correctCells.includes(key)) { return 'preview' }

        if (!(chosenCells.includes(key))) { return 'available'; }
        if (correctCells.includes(key)) { return 'correct'; }
        if (!(correctCells.includes(key))) { return 'wrong'; }
    }

    return (
        <BoxSizeReset>
            <GameContainer>
                <CellGrid cellStatus={cellStatus} onCellClick={onCellClick}/>
                <Footer>
                    <Message>
                        <GameMessage status={gameStatus}/>
                    </Message>
                    <Timer>
                        <Typography component="p" mt={1.5}>Time left: {timeLeft}s</Typography>
                    </Timer>
                    <Button>
                        <GameButton gameStatus={gameStatus} startGame={startGame} playAgain={props.startNewGame}/>
                    </Button>
                </Footer>
            </GameContainer>
        </BoxSizeReset>
    );
  };

export default Game;