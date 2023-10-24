import React, { memo, useMemo } from 'react';
import orderSlice from '../../orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectItemsByFilter } from '../../App';

const CompletedItem = () => {
	console.log('CompletedItem Render');
	const selectItemsByFilter = useMemo(makeSelectItemsByFilter, []);
	const itemsByFilter = useSelector((state) =>
		selectItemsByFilter(state, '픽업대기')
	);
	const dispatch = useDispatch();
	const handleItemClick = (id) => {
		dispatch(orderSlice.actions.update(id));
	};

	return (
		<ul className="border border-gray-100 p-4">
			{itemsByFilter.map((order, idx) => (
				<li
					key={idx}
					id={order.id}
					onClick={() => handleItemClick(order.id)}
					className={` ${order.isCompleted ? 'text-green-400' : 'font-bold'}`}
				>
					{order.isCompleted ? '🎁 픽업대기' : order.name}
				</li>
			))}
		</ul>
	);
};

export default memo(CompletedItem);
