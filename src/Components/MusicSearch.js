import React, { useState } from 'react';
import { AppContainer, ContentDisplay, TitleBanner } from './StyledComponents';
import SearchForm from './SearchForm';
import ItemList from './ItemList';
import { Typography, Box, Container, useTheme } from '@mui/material';
import { loadResults, clearResults } from '../redux/actions/resultsActions';
import { updatePage } from '../redux/actions/pageActions';
import { connect } from 'react-redux';
import { PAGE_SIZE } from '../constants';

const useMusicSearch = () => {
	const [searchText, setSearchText] = useState('');
	const [filters, setFilters] = useState({
		Songs: true,
		Artists: true,
		Albums: true,
	});

	const onSwitchChanged = event => {
		const key = event.target.name;
		const checked = event.target.checked;

		setFilters(prevState => {
			const newFilters = {
				...prevState,
				[key]: checked,
			};
			return Object.values(newFilters).every(item => !item)
				? prevState
				: newFilters;
		});
	};

	const onSearchChanged = event => {
		setSearchText(event.target.value);
	};

	return {
		searchText,
		filters,
		onSwitchChanged,
		onSearchChanged,
	};
};

const MusicSearch = ({
	results,
	loading,
	page,
	loadResults,
	updatePage,
	clearResults,
}) => {
	const theme = useTheme();

	const { searchText, filters, onSwitchChanged, onSearchChanged } =
		useMusicSearch();

	const baseURL = 'https://itunes.apple.com/search?term=';

	const constructURL = (limit, offset = 0) => {
		const searchWords = searchText.split(' ');
		const formattedSearchTerm = searchWords.join('+');
		return (
			baseURL +
			formattedSearchTerm +
			getFilterString() +
			'&limit=' +
			limit +
			'&offset=' +
			offset
		);
	};

	const onButtonClick = async () => {
		clearResults();
		await loadResults(constructURL(PAGE_SIZE))
			.then(updatePage(1))
			.catch(error => {
				alert('Failed to load results ' + error);
			});
	};

	const onLoadMore = async () => {
		await loadResults(constructURL(PAGE_SIZE, PAGE_SIZE * page))
			.then(updatePage(page + 1))
			.catch(error => {
				alert('Failed to load results ' + error);
			});
	};

	const getFilterString = () => {
		const chosenFilters = [];
		if (filters.Albums) {
			chosenFilters.push('album');
		}
		if (filters.Artists) {
			chosenFilters.push('musicArtist');
		}
		if (filters.Songs) {
			chosenFilters.push('musicTrack');
		}

		if (chosenFilters.length === 0) {
			return '';
		}
		return '&entity=' + chosenFilters.join(',');
	};

	return (
		<Box>
			<TitleBanner>
				<Typography variant="h5" component="h5" mb={1} color={'white'}>
					Music Search App
				</Typography>
			</TitleBanner>
			<Container maxWidth={false}>
				<AppContainer color={theme.palette.primary.main}>
					<SearchForm
						onClick={onButtonClick}
						filters={filters}
						onSearchChanged={onSearchChanged}
						onSwitchChanged={onSwitchChanged}
					/>
					<ContentDisplay>
						<ItemList
							results={results}
							onLoadMore={onLoadMore}
							loading={loading}
							constructURL={constructURL}
							initial={page === 0} // to avoid showing 'no results found' on initial load
						/>
					</ContentDisplay>
				</AppContainer>
			</Container>
		</Box>
	);
};

const mapStateToProps = state => {
	return {
		results: state.results,
		loading: state.apiCallsInProgress > 0,
		page: state.page,
	};
};

const mapDispatchToProps = {
	loadResults,
	clearResults,
	updatePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch);
