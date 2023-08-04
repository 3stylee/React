import * as types from './actionTypes';

export const updatePage = newPage => {
	return { type: types.UPDATE_PAGE, newPage };
};

export const revertPageBack = () => {
	return { type: types.REVERT_PAGE_BACK };
};
