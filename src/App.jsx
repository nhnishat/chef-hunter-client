import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Auth/AuthProvider';
import Chef from './Pages/Chef/Chef';
import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';

const App = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<div>
			<Header />
			<Chef />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
