import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Form from './components/rendering/Form';
import OrderItem from './components/rendering/OrderItem';
import { useDispatch, useSelector } from 'react-redux';
import orderSlice from './orderSlice';
import FilterButton from './components/rendering/FilterButton';

const filters = [
	{ name: '전체', active: true },
	{ name: '준비중', active: false },
	{ name: '픽업대기', active: false },
];
const getFilteredList = (orders, filter) => {
	console.log('getFilteredList');
	switch (filter.name) {
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

function App() {
	console.log('App Render');
	const orders = useSelector((state) => state.order);
	const dispatch = useDispatch();
	const [filter, setFilter] = useState(filters);
	const [activeFilter, setActiveFilter] = useState(filters[0]);

	const handleItemClick = useCallback((id) => {
		dispatch(orderSlice.actions.update(id));
	}, []);

	const filteredList = getFilteredList(orders, activeFilter);

	const handleFilter = useCallback((filter) => {
		setFilter((prev) =>
			prev.map((v) =>
				v.name === filter.name
					? { ...v, active: true }
					: { ...v, active: false }
			)
		);
		setActiveFilter(filter);
	}, []);

	return (
		<>
			<Form />
			<ul className="flex gap-1 mb-4">
				{filter.map((filter, idx) => (
					<FilterButton key={idx} filter={filter} onChange={handleFilter} />
				))}
			</ul>
			<ul className="border border-gray-100 p-4">
				{filteredList.map((order) => (
					<OrderItem key={order.id} order={order} onChange={handleItemClick} />
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
