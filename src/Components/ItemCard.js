import React from 'react';
import { CardHeader, Typography } from '@mui/material';
import {
	StyledCard,
	StyledCardContent,
	MusicThumbnail,
} from './StyledComponents';

const ItemCard = props => {
	return (
		<StyledCard color={'#e3f2fd'}>
			<CardHeader
				title={
					props.data.wrapperType !== 'artist'
						? props.data.collectionName
						: props.data.artistName
				}
			/>
			<StyledCardContent>
				<Typography component="p" color="text.secondary">
					Artist: {props.data.artistName}, Media Type:{' '}
					{props.data.wrapperType === 'collection'
						? 'album'
						: props.data.wrapperType}
				</Typography>
			</StyledCardContent>
			<MusicThumbnail
				component="img"
				image={
					props.data.artworkUrl100 || 'https://placehold.co/130x130'
				}
			/>
		</StyledCard>
	);
};

export default ItemCard;
