import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
	All: '전체',
	Completed: '픽업대기',
	Uncompleted: '준비중',
};

const initialState = {
	status: StatusFilters.All,
};

const filterslice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		statusFilterChanged: (state, action) => {
			return {
				status: action.payload,
			};
		},
	},
});
export default filterslice;

export const { statusFilterChanged } = filterslice.actions;
