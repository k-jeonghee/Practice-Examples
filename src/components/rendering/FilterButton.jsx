import React, { memo } from 'react';
const FilterButton = ({ filter, onChange }) => {
	console.log('FilterButton Render');

	return (
		<li>
			<button
				className={`bg-gray-100 rounded-md px-2 py-1 text-xs hover:bg-gray-50 ${
					filter.active &&
					'bg-green-50 text-green-400 border border-green-400 font-bold'
				}`}
				onClick={() => onChange(filter)}
			>
				{filter.name}
			</button>
		</li>
	);
};

export default memo(FilterButton);
