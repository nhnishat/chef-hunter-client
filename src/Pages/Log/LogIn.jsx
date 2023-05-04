import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const LogIn = () => {
	const { singIn, resetPassword } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');
	const emailRef = useRef();

	const handleLogIn = (event) => {
		event.preventDefault();
		const form = event.target;
		// const name = form.name.value;
		const email = form.email.value;
		// const photo = form.photo.value;
		const password = form.password.value;
		console.log(email, password);
		if (password.length < 6) {
			return setError(`password don't match`);
		}
		singIn(email, password)
			.then((result) => {
				const createdUser = result.user;
				form.reset();
				setError('');
				console.log(createdUser);
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const handleResetPassword = () => {
		const email = emailRef.current.value;
		if (!email) {
			alert('please provide your email address to reset password');
		}
		resetPassword(email)
			.then(() => {
				alert('please check your email');
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<Container className="mx-auto mt-5 p-5">
			<h1 className="mb-4 text-center">Login Now</h1>
			<Form onSubmit={handleLogIn}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						required
						ref={emailRef}
					/>
				</Form.Group>

				<div className="position-relative mb-2">
					<Form.Group className="" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
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
				<p>
					<Link onClick={handleResetPassword}>Forget Password?</Link>
				</p>
				<p className="text-danger">{error}</p>
				<Button variant="primary" type="submit" className="my-2">
					Login
				</Button>
				<p>
					Dont’t have an Account ?
					<Link to="/register" className="text-danger ms-2">
						Register
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

export default LogIn;
