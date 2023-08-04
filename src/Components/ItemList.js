import React from 'react';
import Pagination from './Pagination';
import { Typography, Box, Grid, CircularProgress } from '@mui/material';
import ItemCard from './ItemCard';

const ItemList = props => {
	if (props.loading) {
		return <CircularProgress color="inherit" />;
	}
	if (props.results.length > 0) {
		return (
			<>
				<Grid container spacing={2}>
					{props.results.map((item, index) => (
						<Grid item xs={3} key={index}>
							<ItemCard data={item} />
						</Grid>
					))}
				</Grid>
				<Box mt={3}>
					<Pagination constructURL={props.constructURL} />
				</Box>
			</>
		);
	} else {
		if (props.initial) {
			return;
		}
		return (
			<Typography variant="h5" component="h5">
				Sorry, no results found
			</Typography>
		);
	}
};

export default ItemList;
