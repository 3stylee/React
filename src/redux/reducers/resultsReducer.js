import * as types from '../actions/actionTypes';
import initalState from '../initalState';

const resultsReducer = (state = initalState.results, action) => {
	switch (action.type) {
		case types.CLEAR_RESULTS:
			return [];
		case types.LOAD_RESULTS_SUCCESS:
			return [...state, ...action.results];
		default:
			return state;
	}
};

export default resultsReducer;
