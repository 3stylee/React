import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const setUpStore = initalState => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initalState,
		middleware: [thunk],
	});
};

export default setUpStore;
