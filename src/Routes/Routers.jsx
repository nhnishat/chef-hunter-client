import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LogIn from '../Pages/Log/LogIn';
import Register from '../Pages/Register/Register';
const Routers = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/login',
				element: <LogIn />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

export default Routers;
