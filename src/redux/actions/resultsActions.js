import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { revertPageBack } from './pageActions';

export const loadResultsSuccess = results => {
	return { type: types.LOAD_RESULTS_SUCCESS, results };
};

export const clearResults = () => {
	return { type: types.CLEAR_RESULTS };
};

export const loadResults = url => {
	return async function (dispatch) {
		dispatch(beginApiCall());
		try {
			const response = await fetch(url);
			const results = await response.json();
			dispatch(loadResultsSuccess(results.results));
		} catch (error) {
			dispatch(apiCallError(error));
			dispatch(revertPageBack());
			throw error;
		}
	};
};
