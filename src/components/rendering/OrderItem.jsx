import React, { memo } from 'react';

const OrderItem = ({ order, onChange }) => {
	console.log('OrderItem Render');
	return (
		<li
			id={order.id}
			onClick={() => onChange(order.id)}
			className={` ${order.isCompleted ? 'text-green-400' : 'font-bold'}`}
		>
			{order.isCompleted ? '🎁 픽업대기' : order.name}
		</li>
	);
};

export default memo(OrderItem);
