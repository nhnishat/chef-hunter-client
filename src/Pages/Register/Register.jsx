import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Register = () => {
	const [accepted, setAccepted] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
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
				<div className="position-relative mb-2">
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>
							Password <small>( password minimum 6 characters)</small>
						</Form.Label>
						<Form.Control
							type={showPassword ? 'text' : 'password'}
							name="password"
							placeholder="Password"
							required
						/>
					</Form.Group>
					<Link
						onClick={() => {
							setShowPassword(!showPassword);
						}}
						className="bottom-0 end-0 p-2 text-black position-absolute"
						password="true"
					>
						{showPassword ? (
							<FontAwesomeIcon icon={faEyeSlash} />
						) : (
							<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
						)}
					</Link>
				</div>
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
					Already have an Account ?
					<Link to="/login" className="text-danger ms-2">
						Login
					</Link>
				</p>
				<div className="my-4">
					<Button variant="dark">
						<img
							className="me-2"
							src="https://i.ibb.co/ZdHLMqw/google-logo-png-2015-10-285463384.png"
							alt=""
							style={{ height: '25px', width: '25px' }}
						/>
						Sing up With Google
					</Button>
				</div>
				<div>
					<Button variant="dark">
						<img
							className="me-2"
							src="https://i.ibb.co/pyzt6Rb/github-PNG40-3901690518.png"
							alt=""
							style={{ height: '30px', width: '30px' }}
						/>
						Sing up With Github
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default Register;
