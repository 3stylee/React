import React from 'react';
import { Typography, Grid, CircularProgress, Button } from '@mui/material';
import ItemCard from './ItemCard';
import { StyledGrid } from './StyledComponents';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ItemList = props => {
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			props.onLoadMore();
		}
	}, [inView]);

	if (props.initial) {
		return;
	}
	if (props.results.length > 0 || props.loading) {
		return (
			<>
				<StyledGrid container spacing={2}>
					{props.results.map((item, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<ItemCard data={item} />
						</Grid>
					))}
				</StyledGrid>
				{props.loading ? (
					<CircularProgress color="inherit" />
				) : (
					<Button
						ref={ref}
						onClick={props.onLoadMore}
						color="secondary">
						Load More...
					</Button>
				)}
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
