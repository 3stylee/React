import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const Pagination = props => {

    const getPages = () => {
        if (props.page < 3){
            return [1, 2, 3, '...'];
        } else {
            return [1, '...', props.page-1, props.page, props.page+1, '...'];
        }
    }

    return (
        <ButtonGroup variant="outlined" color="secondary" aria-label="outlined button group">
            {getPages().map((page, index) =>  (
                <Button 
                    key={index} 
                    variant={page === props.page ? 'contained' : 'outlined'}
                    onClick={() => props.onPageChanged(page)}
                >
                    {page}
                </Button> 
            ))}
        </ButtonGroup>
    );
}

export default Pagination;