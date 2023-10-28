import { configureStore } from '@reduxjs/toolkit';
import orderSlice from '../reducers/orderSlice';
import filterSlice from '../reducers/filterSlice';
import todoSlice from '../reducers/todoSlice';

const store = configureStore({
	reducer: {
		order: orderSlice.reducer,
		filter: filterSlice.reducer,
		todo: todoSlice.reducer,
	},
});

export default store;
