import React from 'react';
import { Typography, Grid, CircularProgress } from '@mui/material';
import ItemCard from './ItemCard';

const ItemList = props => {
	console.log(props.results);
	if (props.initial) {
		return;
	}
	if (props.loading) {
		return <CircularProgress color="inherit" />;
	}
	if (props.results[0].length > 0) {
		return (
			<>
				{props.results.map((page, index) => (
					<Grid container spacing={2} key={index} mt={1}>
						{page.map((item, index) => (
							<Grid item xs={3} key={index}>
								<ItemCard data={item} />
							</Grid>
						))}
					</Grid>
				))}
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
