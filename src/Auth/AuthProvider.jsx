import {
	createUserWithEmailAndPassword,
	getAuth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const auth = getAuth(app);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const singIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};
	const updateProfileData = (currentUser, displayName, photo) => {
		setLoading(true);
		return updateProfile(currentUser, {
			displayName: displayName,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
				setLoading(false);
			} else {
				setCurrentUser(null);
			}
		});

		return unsubscribe;
	}, []);

	const LogOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	const authInfo = {
		currentUser,
		createUser,
		singIn,
		resetPassword,
		updateProfileData,
		LogOut,
		loading,
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
