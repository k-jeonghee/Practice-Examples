import { createSelector, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

const initialState = [
	{
		id: 1,
		name: '치킨 🍗',
		isCompleted: false,
	},
	{
		id: 2,
		name: '햄버거 🍔',
		isCompleted: false,
	},
	{
		id: 3,
		name: '타코 🌮',
		isCompleted: true,
	},
];

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		create: (state, action) => {
			state.push({
				...action.payload,
				id: uuid(),
			});
		},
		update: (state, action) => {
			return state.map((v) =>
				v.id === action.payload ? { ...v, isCompleted: !v.isCompleted } : v
			);
		},
	},
});
export default orderSlice;
