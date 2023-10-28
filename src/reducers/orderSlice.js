import { createSelector, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

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
	{
		id: 4,
		name: '타코 🌮',
		isCompleted: false,
	},
	{
		id: 5,
		name: '타코 🌮',
		isCompleted: false,
	},
];

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		create: (state, action) => {
			state.push(action.payload);
		},
		update: (state, action) => {
			return state.map((v) =>
				v.id === action.payload ? { ...v, isCompleted: !v.isCompleted } : v
			);
		},
	},
});
export default orderSlice;
