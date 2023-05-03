import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomeLayout from '../Layouts/HomeLayout';
import LogIn from '../Pages/Log/LogIn';
import Register from '../Pages/Register/Register';
import Trams from '../Pages/Trams/Trams';
import Error from '../Share/Error/Error';
const Routers = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <HomeLayout />,
			},
			{
				path: '/login',
				element: <LogIn />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: 'terms',
				element: <Trams />,
			},
		],
	},
]);

export default Routers;
