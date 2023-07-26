import React from "react"
import Pagination from "./Pagination"
import { Typography, Box, Grid, CircularProgress } from "@mui/material"
import ItemCard from "./ItemCard"

const ItemList = props => {
    if (props.status === 'loading') { return <CircularProgress color="inherit"/> }
    if (props.results.length > 0){
        return (
            <>  
                <Grid container spacing={2}>
                    {props.results.map((item, index) => (
                        <Grid item xs={3} key={index}>
                            <ItemCard data={item} color={props.color}/>
                        </Grid>
                        ))
                    }
                </Grid>
                <Box mt={3}>
                    <Pagination page={props.page} onPageChanged={props.onPageChanged} />
                </Box>
            </>
        )
    } else {
        if (props.status === 'initial') { return; }
        return (<Typography variant="h5" component="h5">Sorry, no results found</Typography>)
    }
}

export default ItemList;