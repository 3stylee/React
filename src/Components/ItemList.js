import React from 'react';
import { Typography, Grid, CircularProgress } from '@mui/material';
import ItemCard from './ItemCard';

const ItemList = props => {
	if (props.initial) {
		return;
	}
	if (props.loading) {
		return <CircularProgress color="inherit" />;
	}
	if (props.results[0].length > 0) {
		return (
			<>
				<Grid container spacing={2}>
					{props.results.map((item, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
		return (
			<Typography variant="h5" component="h5">
				Sorry, no results found
			</Typography>
		);
	}
};

export default ItemList;
