import React, { useState } from "react";
import { AppContainer, ContentDisplay, TitleBanner } from "./StyledComponents";
import SearchForm from "./SearchForm";
import ItemList from "./ItemList";
import { Typography, Box, Container, useTheme } from "@mui/material";

const useMusicSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
        Songs: true,
        Artists: true,
        Albums: true
    });

    const getSearchResults = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    const onSwitchChanged = (event) => {
        const key = event.target.name;
        const checked = event.target.checked;
        setFilters(prevState => ({
            ...prevState,
            [key]: checked,
        }));
    }

    const onSearchChanged = (event) => {
        setSearchText(event.target.value);
    }

    return { searchText, results, filters, page, getSearchResults, onSwitchChanged, onSearchChanged, setPage};
}

const MusicSearch = () => {
    const theme = useTheme();

    const { 
        searchText,
        results,
        filters,
        page,
        getSearchResults,
        onSwitchChanged,
        onSearchChanged,
        setPage
    } = useMusicSearch();

    const baseURL = 'https://itunes.apple.com/search?term='

    const constructURL = (limit, offset=0) => {
        const searchWords = searchText.split(' ');
        const formattedSearchTerm = searchWords.join('+');
        return baseURL + formattedSearchTerm + getFilterString() + "&limit=" + limit + "&offset=" + offset
    }

    const onButtonClick = () => {
        setPage(1);
        getSearchResults(constructURL(3));
    }

    const onPageChanged = (newPage) => {
        setPage(newPage);
        getSearchResults(constructURL(3, 3*(newPage-1)))
    }

    const getFilterString = () => {
        const chosenFilters = [];
        if (filters.Albums) { chosenFilters.push('album'); }
        if (filters.Artists) { chosenFilters.push('musicArtist'); }
        if (filters.Songs) { chosenFilters.push('musicTrack'); }

        if (chosenFilters.length === 0) { return '' } 
        return '&entity=' + chosenFilters.join(',')
    }

    return (
        <Box>
            <TitleBanner>
                <Typography variant='h3' component='h3' mb={1}>Music Search App</Typography>
            </TitleBanner>
            <Container sx={{ p: '2rem' }}>
                <AppContainer color={theme.palette.primary.main}>
                    <SearchForm 
                        onClick={onButtonClick} 
                        filters={filters}
                        onSearchChanged={onSearchChanged} 
                        onSwitchChanged={onSwitchChanged}
                    />
                    <ContentDisplay>
                        <ItemList results={results} color={theme.palette.secondary.main} page={page} onPageChanged={onPageChanged}/>
                    </ContentDisplay>
                </AppContainer>
            </Container>
        </Box>
    )
}

export default MusicSearch;