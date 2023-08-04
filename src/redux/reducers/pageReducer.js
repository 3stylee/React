import * as types from '../actions/actionTypes';
import initalState from '../initalState';

const pageReducer = (state = initalState.page, action) => {
	switch (action.type) {
		case types.UPDATE_PAGE:
			return action.newPage;
		case types.REVERT_PAGE_BACK:
			return state - 1;
		default:
			return state;
	}
};

export default pageReducer;
