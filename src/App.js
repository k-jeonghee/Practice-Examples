import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import A from '../src/components/async/A';
import { Outlet } from 'react-router';

const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<A />
			<Outlet />
		</QueryClientProvider>
	);
}

export default App;
