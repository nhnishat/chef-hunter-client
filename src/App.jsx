import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';

const App = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<div>
			Header
			<Outlet />
		</div>
	);
};

export default App;
