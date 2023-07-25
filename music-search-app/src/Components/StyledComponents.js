import styled from "@emotion/styled";
import { Box, Button, Card, TextField } from "@mui/material";

const AppContainer = styled(Card)((props) => ({
    borderRadius: '1rem',
    height: '80vh',
    paddingTop: '1.6rem',
    backgroundColor: props.color,
}));

const TitleBanner = styled(Box)({
    borderBottom: '2px solid black',
    padding: '0.5rem',
    marginTop: '0.5rem',
    textAlign: 'center',
    boxSizing: 'border-box'
})

const ContentDisplay = styled(Box)({
    margin: '1.5rem',
    textAlign: 'center',
    overflow: 'auto',
    borderRadius: '1rem'
})

const SearchButton = styled(Button)({
    height: '3.5rem',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0'
})

const SearchInput = styled(TextField)({
    width: 'calc(100% - 4rem)',
})

const SearchBar = styled(Box)({
    marginBottom: '0.5rem'
})

const ICard = styled(Card)((props) => ({
    marginBottom: '1rem',
    backgroundColor: props.color
}))

export { AppContainer, TitleBanner, ContentDisplay, SearchButton, SearchInput, SearchBar, ICard }