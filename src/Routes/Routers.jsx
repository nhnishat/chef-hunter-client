import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomeLayout from '../Layouts/HomeLayout';
import Blogs from '../Pages/Blogs/Blogs';
import Chef from '../Pages/Chef/Chef';
import LogIn from '../Pages/Log/LogIn';
import Register from '../Pages/Register/Register';
import ShowChef from '../Pages/ShowChef/ShowChef';
import Trams from '../Pages/Trams/Trams';
import Error from '../Share/Error/Error';
import PrivateRoute from './Private/PrivateRoute';
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
				path: 'chef',
				element: <ShowChef />,
			},
			{
				path: 'chef/:id',
				element: (
					<PrivateRoute>
						<Chef />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://chef-hunter-server-nhnishat.vercel.app/chef/${params.id}`
					),
			},
		],
	},
]);

export default Routers;
