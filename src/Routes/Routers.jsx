import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomeLayout from '../Layouts/HomeLayout';
import About from '../Pages/About/About';
import Blogs from '../Pages/Blogs/Blogs';
import Chef from '../Pages/Chef/Chef';
import LogIn from '../Pages/Log/LogIn';
import Register from '../Pages/Register/Register';
import ShowChef from '../Pages/ShowChef/ShowChef';
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
			{
				path: 'blog',
				element: <Blogs />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
	{
		path: 'chef',
		element: <ShowChef />,
	},
	{
		path: 'chef/:id',
		element: <Chef />,
		loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`),
	},
]);

export default Routers;
