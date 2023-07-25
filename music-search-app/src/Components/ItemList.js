import React from "react"
import Pagination from "./Pagination"
import { Typography, Box } from "@mui/material"
import ItemCard from "./ItemCard"

const ItemList = props => {
    if (props.results.length > 0){
        return (
            <>
                {props.results.map((item, index) => (<ItemCard key={index} data={item} color={props.color}></ItemCard>))}
                <Box mt={4}>
                    <Pagination page={props.page} onPageChanged={props.onPageChanged} />
                </Box>
            </>
        )
    } else {
        return (<Typography variant="h5" component="h5">Sorry, no results found</Typography>)
    }
}

export default ItemList;