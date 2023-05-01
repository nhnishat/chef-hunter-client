import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleTogglePassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
	return (
		<Container className="w-25 mx-auto mt-5 p-5">
			<h1 className="mb-4 text-center">Log in</h1>
			<Form>
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
					<Form.Label>Password</Form.Label>
					<Form.Control
						type={showPassword ? 'text' : 'password'}
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Link onClick={handleTogglePassword} className="my-2 text-black ">
					{showPassword ? 'Hide' : 'Show'} password
				</Link>
				<br />
				<Button variant="primary" type="submit" className="my-2">
					Login
				</Button>
			</Form>
			<p>
				Dont’t Have An Account ?
				<Link to="/register" className="text-danger ms-2">
					Register
				</Link>
			</p>
		</Container>
	);
};

export default LogIn;
