import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

const CenteredBox = styled(Box)({
    textAlign: 'center',
    padding: '2rem'
})

const AppContainer = styled(Box)({
    backgroundColor: blue[400],
    borderRadius: '2rem',
    height: '80vh',
    marginTop: '1rem'
})

const TitleBanner = styled(Box)({
    borderBottom: '2px solid black',
    padding: '0.5rem',
    textAlign: 'center'
})

export { CenteredBox, AppContainer, TitleBanner }