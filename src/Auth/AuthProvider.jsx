import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/Firebase';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const user = { displayName: 'korim' };
	const auth = getAuth(app);
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const singIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const authInfo = {
		user,
		createUser,
		singIn,
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
