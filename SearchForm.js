import { Container, FormControlLabel, Switch, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { SearchButton, SearchInput, SearchBar } from "./StyledComponents";

const SearchForm = props => (
    <Container maxWidth={false} sx={{ paddingstart: '1rem' }}>
        <SearchBar>
            <SearchInput 
                fullWidth 
                focused
                label="Search" 
                variant="outlined" 
                color="secondary"
                onChange={props.onSearchChanged}
            />
            <SearchButton
                variant="outlined" 
                color="secondary" 
                onClick={props.onClick}
            >
                <SearchIcon/>
            </SearchButton>
        </SearchBar>
        <Box>
            {Object.keys(props.filters).map(filterName => (
                <FormControlLabel 
                    control={
                        <Switch 
                            defaultChecked
                            value={props.filters[filterName]}
                            name={filterName} 
                            color="secondary" 
                            onChange={props.onSwitchChanged}
                        />
                    } 
                    label={filterName} 
                    key={filterName}
                />)
            )}
        </Box>
    </Container>
)

export default SearchForm;