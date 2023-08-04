import { combineReducers } from '@reduxjs/toolkit';
import apiCallsInProgress from './apiStatusReducer';
import results from './resultsReducer';

const rootReducer = combineReducers({
	results,
	apiCallsInProgress,
});

export default rootReducer;
