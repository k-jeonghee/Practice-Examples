import React from 'react';
import Form from './components/rendering/Form';
import OrderItem from './components/rendering/OrderItem';
import { useSelector } from 'react-redux';
import orderSlice from './orderSlice';
import { createSelector } from '@reduxjs/toolkit';
import Filter from './components/rendering/Filter';
import { StatusFilters } from './filterSlice';

const getFilteredList = (orders, filter) => {
	console.log('getFilteredList');
	switch (filter) {
		case '전체':
			return orders;
		case '픽업대기':
			return orders.filter((item) => item.isCompleted);
		case '준비중':
			return orders.filter((item) => !item.isCompleted);
		default:
			return orders;
	}
};

const selectItemsByFilter = createSelector(
	[(state) => state.order, (state) => state.filter.status],
	(orders, status) => {
		console.log('selectItemsBtFilter');
		switch (status) {
			case '전체':
				return orders;
			case '픽업대기':
				return orders.filter((item) => item.isCompleted);
			case '준비중':
				return orders.filter((item) => !item.isCompleted);
			default:
				return orders;
		}
	}
);

// const filteredOrderList = createSelector(
// 	(state) => {
// 		console.log('selector');
// 		return state.order;
// 	},
// 	(orders) => {
// 		return getFilteredList(orders);
// 	}
// );

function App() {
	console.log('App Render');
	const orders = useSelector(selectItemsByFilter);

	// const selectItemsByFilter = useMemo(makeSelectItemsByFilter, []);
	// const itemsByFilter = useSelector((state) =>
	// 	selectItemsByFilter(state, '전체')
	// );

	// const orders = useSelector((state) => {
	// 	console.log('select 호출~');
	// 	return getFilteredList(state.order, filter);
	// });

	// const orders = useSelector(selectTest);
	// const filter = useSelector((state) => state.filter.status);

	// const filteredList = getFilteredList(orders, filter);

	return (
		<>
			<Form />
			{/* <Filter status={filter} onChange={setFilter} /> */}
			<Filter />
			<ul className="border border-gray-100 p-4">
				{orders.map((order) => (
					<OrderItem key={order.id} order={order} />
				))}
			</ul>
		</>
	);
}

export default App;

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import A from './components/A';
// import { Outlet } from 'react-router';

// const queryClient = new QueryClient();
// function App() {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<A />
// 			<Outlet />
// 		</QueryClientProvider>
// 	);
// }

// export default App;

// const handleFilter = useCallback((filter) => {
// 	setFilter((prev) =>
// 		prev.map((v) =>
// 			v.name === filter.name
// 				? { ...v, active: true }
// 				: { ...v, active: false }
// 		)
// 	);
// 	setActiveFilter(filter.name);
// }, []);
