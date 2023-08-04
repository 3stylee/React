import React from 'react';
import { CardHeader, CardContent, Typography } from '@mui/material';
import { StyledCard } from './StyledComponents';
import { useTheme } from '@emotion/react';

const ItemCard = props => {
	const theme = useTheme();
	return (
		<StyledCard color={'#e3f2fd'}>
			<CardHeader
				title={
					props.data.wrapperType !== 'artist'
						? props.data.collectionName
						: props.data.artistName
				}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Artist: {props.data.artistName}, Media Type:{' '}
					{props.data.wrapperType === 'collection'
						? 'album'
						: props.data.wrapperType}
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default ItemCard;
