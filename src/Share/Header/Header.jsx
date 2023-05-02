import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Header = () => {
	const { currentUser, LogOut } = useContext(AuthContext);
	const handleLogOut = () => {
		LogOut()
			.then()
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Nav className="d-flex justify-content-center align-items-center">
						<div>
							{currentUser && currentUser.photoURL && (
								<Nav.Link href="#deets">
									<img
										src={currentUser.photoURL}
										alt="Profile"
										title={currentUser.displayName}
										style={{
											width: '60px',
											height: '60px',
											borderRadius: '50%',
										}}
									/>
								</Nav.Link>
							)}
						</div>

						<div>
							{currentUser ? (
								<button
									onClick={handleLogOut}
									type="button"
									className="btn btn-secondary"
								>
									Logout
								</button>
							) : (
								<Link
									to="/login"
									className="btn btn-secondary text-white text-decoration-none"
								>
									Login
								</Link>
							)}
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
