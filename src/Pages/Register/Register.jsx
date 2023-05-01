import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<Container className="w-25 mx-auto mt-5 p-5">
			<h1 className="mb-4 text-center">Register</h1>
			<Form>
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
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="text"
						name="phono Url"
						placeholder="Enter Phono Url"
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
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="mb-2">
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
