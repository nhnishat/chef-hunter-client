import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { currentUser, loading } = useContext(AuthContext);

	const location = useLocation();
	console.log(location);
	if (loading) {
		return <Spinner animation="border" variant="danger" />;
	}
	if (currentUser) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
