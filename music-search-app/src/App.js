import { ThemeProvider, createTheme } from "@mui/material";
import MusicSearch from "./Components/MusicSearch";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#e3f2fd'
    },
  },
  typography: {
    fontFamily: 'Arial'
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MusicSearch/>
    </ThemeProvider>
  );
}

export default App;
