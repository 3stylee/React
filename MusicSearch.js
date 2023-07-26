import React, { useState } from "react";
import { AppContainer, ContentDisplay, TitleBanner } from "./StyledComponents";
import SearchForm from "./SearchForm";
import ItemList from "./ItemList";
import { Typography, Box, Container, useTheme } from "@mui/material";

const PAGE_SIZE = 12;

const useMusicSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('initial');
    const [filters, setFilters] = useState({
        Songs: true,
        Artists: true,
        Albums: true
    });

    const getSearchResults = async (url) => {
        setStatus('loading');
        try {
            const response = await fetch(url)
            const data = await response.json();
            setResults(data.results);
            setStatus('loaded');
        } catch (error) {
            throw error;
        }
    }

    const onSwitchChanged = (event, ) => {
        const key = event.target.name;
        console.log({key})
        const checked = event.target.checked;
        
        setFilters(prevState=>{
            console.log({prevState})
            const newFilters ={
                ...prevState,
                [key]: checked,
            }
            console.log({newFilters})
            console.log( Object.values(newFilters))
            console.log( !Object.values(newFilters).every(Boolean))
        //    return newFilters 
            return !Object.values(newFilters).every(Boolean) ? prevState : newFilters 
        });
    }

    const onSearchChanged = (event) => {
        setSearchText(event.target.value);
    }

    return { searchText, results, filters, page, status, getSearchResults, onSwitchChanged, onSearchChanged, setPage};
}

const MusicSearch = () => {
    const theme = useTheme();

    const { 
        searchText,
        results,
        filters,
        page,
        status,
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
        getSearchResults(constructURL(PAGE_SIZE));
    }

    const onPageChanged = async (newPage) => {
        if (newPage === '...') { return; }
        try {
            await getSearchResults(constructURL(PAGE_SIZE, PAGE_SIZE*(newPage-1)));
            setPage(newPage);
        } catch (error) {
            console.log(error);
        }
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
            <Container maxWidth={false}>
                <AppContainer color={theme.palette.primary.main}>
                    <SearchForm 
                        onClick={onButtonClick} 
                        filters={filters}
                        onSearchChanged={onSearchChanged} 
                        onSwitchChanged={onSwitchChanged}
                    />
                    <ContentDisplay>
                        <ItemList 
                            results={results} 
                            color={theme.palette.secondary.main} 
                            page={page} 
                            onPageChanged={onPageChanged}
                            status={status}
                        />
                    </ContentDisplay>
                </AppContainer>
            </Container>
        </Box>
    )
}

export default MusicSearch;