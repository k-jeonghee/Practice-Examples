import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		children: [
// 			{
// 				// path: '/parent',
// 				index: true,
// 				element: <Parent />,
// 			},
// 			{
// 				path: '/:name',
// 				element: <Child />,
// 			},
// 		],
// 	},
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
