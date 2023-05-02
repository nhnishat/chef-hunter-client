import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';
import Header from './Share/Header/Header';

const App = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<div>
			{/* <h1>{currentUser && currentUser.displayName} </h1> */}
			{/* <img src={currentUser.photoURL} alt="" /> */}
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
