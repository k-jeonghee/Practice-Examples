// import React, { memo } from 'react';
// import { statusFilterChanged } from '../../filterSlice';
// import { useDispatch } from 'react-redux';
// import { StatusFilters2 } from '../../App';

// const Filter = ({ status, onChange }) => {
// 	// console.log('Filter Render');
// 	const renderedFilters = Object.keys(StatusFilters2).map((key) => {
// 		const value = StatusFilters2[key];
// 		const handleClick = () => onChange(value);
// 		const active = value === status ? true : false;

// 		return (
// 			<li key={key}>
// 				<button
// 					className={`bg-gray-100 rounded-md px-2 py-1 text-xs hover:bg-gray-50 ${
// 						active &&
// 						'bg-green-50 text-green-400 border border-green-400 font-bold'
// 					}`}
// 					onClick={handleClick}
// 				>
// 					{value}
// 				</button>
// 			</li>
// 		);
// 	});

// 	return <ul className="flex gap-1 mb-4">{renderedFilters}</ul>;
// };

// export default Filter;

import React, { memo } from 'react';
import { StatusFilters, statusFilterChanged } from '../../reducers/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
	console.log('Filter Render');
	const status = useSelector((state) => state.filter.status);
	const dispatch = useDispatch();

	const renderedFilters = Object.keys(StatusFilters).map((key) => {
		const value = StatusFilters[key];
		const handleClick = () => dispatch(statusFilterChanged(value));
		const active = value === status ? true : false;

		return (
			<li key={key}>
				<button
					className={`bg-gray-100 rounded-md px-2 py-1 text-xs hover:bg-gray-50 ${
						active &&
						'bg-green-50 text-green-400 border border-green-400 font-bold'
					}`}
					onClick={handleClick}
				>
					{value}
				</button>
			</li>
		);
	});

	// StatusFilters.map((filter) => {
	// 	const key = filter.key;
	// 	const value = filter[key];
	// 	const handleClick = () => statusFilterChanged(value);
	// 	const active = value === status ? true : false;

	return <ul className="flex gap-1 mb-4">{renderedFilters}</ul>;
};

export default memo(Filter);
