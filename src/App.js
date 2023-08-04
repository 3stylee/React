import { ThemeProvider, createTheme } from '@mui/material';
import MusicSearch from './Components/MusicSearch';
import { blue } from '@mui/material/colors';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const theme = createTheme({
	palette: {
		primary: blue,
		secondary: {
			main: '#e3f2fd',
			dark: '#2c2c2c',
		},
	},
	typography: {
		fontFamily: 'Raleway',
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<MusicSearch />
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
