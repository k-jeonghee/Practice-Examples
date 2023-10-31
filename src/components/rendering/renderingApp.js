// import React from 'react';
// import Form from './components/rendering/Form';
// import OrderItem from './components/rendering/OrderItem';
// import { useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';
// import Filter from './components/rendering/Filter';

// const getFilteredList = (orders, filter) => {
// 	console.log('getFilteredList');
// 	switch (filter) {
// 		case '전체':
// 			return orders;
// 		case '픽업대기':
// 			return orders.filter((item) => item.isCompleted);
// 		case '준비중':
// 			return orders.filter((item) => !item.isCompleted);
// 		default:
// 			return orders;
// 	}
// };

// const selectItemsByFilter = createSelector(
// 	[(state) => state.order, (state) => state.filter.status],
// 	(orders, status) => {
// 		console.log('selectItemsBtFilter');
// 		switch (status) {
// 			case '전체':
// 				return orders;
// 			case '픽업대기':
// 				return orders.filter((item) => item.isCompleted);
// 			case '준비중':
// 				return orders.filter((item) => !item.isCompleted);
// 			default:
// 				return orders;
// 		}
// 	}
// );

// function App() {
// 	console.log('App Render');
// 	const orders = useSelector(selectItemsByFilter);

// 	return (
// 		<>
// 			<Form />
// 			<Filter />

// 			<ul className="border border-gray-100 p-4">
// 				{orders.map((order) => (
// 					<OrderItem key={order.id} order={order} />
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default App;
