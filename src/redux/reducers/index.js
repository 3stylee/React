import { combineReducers } from '@reduxjs/toolkit';
import apiCallsInProgress from './apiStatusReducer';
import results from './resultsReducer';
import page from './pageReducer';

const rootReducer = combineReducers({
	results,
	apiCallsInProgress,
	page,
});

export default rootReducer;
