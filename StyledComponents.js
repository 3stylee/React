import styled from "@emotion/styled";
import { Box, Button, Card, TextField } from "@mui/material";

const AppContainer = styled(Card)((props) => ({
    borderRadius: '1rem',
    paddingTop: '1.6rem',
    marginTop: '1rem',
    minHeight: '60vh',
    backgroundColor: props.color,
    //overflowY: 'scroll',
    // width: '100vw'
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
    marginBottom: '1rem'
})

const ICard = styled(Card)((props) => ({
    marginBottom: '0.2rem',
    backgroundColor: props.color,
    height: '9rem'
}))

export { AppContainer, TitleBanner, ContentDisplay, SearchButton, SearchInput, SearchBar, ICard }