import styled from '@emotion/styled';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	TextField,
	Grid,
} from '@mui/material';

const AppContainer = styled(Card)(props => ({
	borderRadius: '1rem',
	paddingTop: '1.6rem',
	marginTop: '1.5rem',
	minHeight: '72vh',
	background: [
		props.color,
		'linear-gradient(to top,' + props.color + ', #add8e6)',
	],
}));

const TitleBanner = styled(Box)({
	padding: '0.5rem',
	paddingTop: '1rem',
	paddingLeft: '2rem',
	textAlign: 'left',
	boxSizing: 'border-box',
	backgroundColor: '#2c2c2c',
	color: 'black',
});

const ContentDisplay = styled(Box)({
	margin: '1.5rem',
	textAlign: 'center',
	borderRadius: '1rem',
	maxHeight: '60vh',
	overflowY: 'auto',
});

const SearchButton = styled(Button)({
	height: '3.5rem',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
});

const SearchInput = styled(TextField)(props => ({
	width: 'calc(100% - 4rem)',
	color: props.color,
}));

const SearchBar = styled(Box)({
	marginBottom: '1rem',
});

const StyledCard = styled(Card)(props => ({
	marginBottom: '0.2rem',
	backgroundColor: props.color,
	height: '8.1rem',
	display: 'flex',
}));

const StyledCardContent = styled(CardContent)({
	display: 'flex',
	alignItems: 'center',
});

const MusicThumbnail = styled(CardMedia)({
	height: '130px',
	width: '130px',
});

const StyledGrid = styled(Grid)({
	marginBottom: '1rem',
});

export {
	AppContainer,
	TitleBanner,
	ContentDisplay,
	SearchButton,
	SearchInput,
	SearchBar,
	StyledCard,
	StyledCardContent,
	MusicThumbnail,
	StyledGrid,
};
