import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Register = () => {
	const [accepted, setAccepted] = useState(false);
	const [error, setError] = useState('');
	const { createUser, currentUser, updateProfileData } =
		useContext(AuthContext);
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const photo = form.photo.value;
		const password = form.password.value;
		console.log(name, photo, email, password);
		if (password.length < 6) {
			return setError('please provide the 6 characters Password');
		}
		createUser(email, password)
			.then((result) => {
				const createdUser = result.user;
				form.reset();
				setError('');
				updateUserData(result.user, name, photo);
				console.log(createdUser);
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const updateUserData = (user, name, photo) => {
		if (name) {
			updateProfileData(user, name, photo)
				.then(() => console.log('Profile updated successfully'))
				.catch((error) => setError(error.message));
		}
	};
	const acceptHandle = (e) => {
		setAccepted(e.target.checked);
	};

	return (
		<Container className="mx-auto mt-5 p-5">
			<h1 className="mb-4 text-center">Register</h1>
			<Form onSubmit={handleRegister}>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Enter Name"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPhoto">
					<Form.Label>Photo Url</Form.Label>
					<Form.Control
						type="text"
						name="photo"
						placeholder="Enter photo url"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>
						Password <small>( password minimum 6 characters)</small>
					</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<p className="text-danger">{error}</p>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						onClick={acceptHandle}
						type="checkbox"
						name="checkbox"
						label={
							<>
								Accept <Link to="/terms">Terms and Condition</Link>
							</>
						}
					/>
				</Form.Group>
				<Button
					disabled={!accepted}
					variant="primary"
					type="submit"
					className="mb-2"
				>
					Register
				</Button>
				<p>
					Already Have An Account ?
					<Link to="/login" className="text-danger ms-2">
						Login
					</Link>
				</p>
			</Form>
		</Container>
	);
};

export default Register;
