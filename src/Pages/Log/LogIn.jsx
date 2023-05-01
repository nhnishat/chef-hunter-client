import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const LogIn = () => {
	return (
		<Container className="w-25 mx-auto mt-5 p-5">
			<h3 className="mb-4 text-center">Log in</h3>
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
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default LogIn;
