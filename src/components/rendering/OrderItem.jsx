import React, { memo } from 'react';
import orderSlice from '../../reducers/orderSlice';
import { useDispatch } from 'react-redux';

const OrderItem = ({ order }) => {
	console.log('OrderItem Render');
	const dispatch = useDispatch();
	const handleItemClick = () => {
		dispatch(orderSlice.actions.update(order.id));
	};

	return (
		<li
			id={order.id}
			onClick={handleItemClick}
			className={` ${order.isCompleted ? 'text-green-400' : 'font-bold'}`}
		>
			{order.isCompleted ? '🎁 픽업대기' : order.name}
		</li>
	);
};

export default memo(OrderItem);
