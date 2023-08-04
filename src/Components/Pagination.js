import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { updatePage } from '../redux/actions/pageActions';
import { connect } from 'react-redux';
import { loadResults } from '../redux/actions/resultsActions';
import { PAGE_SIZE } from '../constants';

const Pagination = ({ page, updatePage, loadResults, constructURL }) => {
	const onPageChanged = newPage => {
		if (newPage === '...' || newPage === page) {
			return;
		}

		loadResults(constructURL(PAGE_SIZE, PAGE_SIZE * (newPage - 1)))
			.then(updatePage(newPage))
			.catch(error => {
				alert('Failed to load results ' + error);
			});
	};

	const getPagesText = () => {
		if (page < 3) {
			return [1, 2, 3, '...'];
		} else {
			return [1, '...', page - 1, page, page + 1, '...'];
		}
	};

	return (
		<ButtonGroup
			variant="outlined"
			color="secondary"
			aria-label="outlined button group">
			{getPagesText().map((pageButtonText, index) => (
				<Button
					key={index}
					variant={pageButtonText === page ? 'contained' : 'outlined'}
					onClick={() => onPageChanged(pageButtonText)}>
					{pageButtonText}
				</Button>
			))}
		</ButtonGroup>
	);
};

const mapStateToProps = state => {
	return {
		page: state.page,
	};
};

const mapDispatchToProps = {
	updatePage,
	loadResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
