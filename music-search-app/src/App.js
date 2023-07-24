import { ThemeProvider, createTheme } from "@mui/material";
import MusicSearch from "./Components/MusicSearch";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: red
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
