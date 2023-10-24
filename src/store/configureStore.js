import { configureStore } from '@reduxjs/toolkit';
import orderSlice from '../orderSlice';
import filterslice from '../filterSlice';

const store = configureStore({
	reducer: {
		order: orderSlice.reducer,
		filter: filterslice.reducer,
	},
});

export default store;
