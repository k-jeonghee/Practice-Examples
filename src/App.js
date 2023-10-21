import Form from './components/rendering/Form';
import ShoppingList from './components/rendering/ShoppingList';

const data = ['사과', '바나나', '망고'];

function App() {
	return (
		<>
			<Form />
			<ShoppingList />
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
