import React, {useState} from 'react';
import Game from './components/Game';
import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
	typography: {
		fontFamily: 'Arial',
		fontSize: 16
	},
	palette: {
		primary: red
	}
})

const MemoryGame = () => {
	const [gameId, setGameId] = useState(1);
	return (
		<ThemeProvider theme={theme}>
			<Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
		</ThemeProvider>
	);
}

export default MemoryGame;