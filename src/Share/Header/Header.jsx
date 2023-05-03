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
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="shadow-lg"
		>
			<Container>
				<Link to="/" className="text-white text-decoration-none">
					CHEF HUNTER
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" style={{ marginRight: '470px' }}>
						<Nav.Link to="/">About</Nav.Link>
						<Nav.Link to="/">Blogs</Nav.Link>
					</Nav>
					<Nav>
						<div>
							{currentUser && currentUser.photoURL && (
								<Nav.Link>
									<img
										src={currentUser.photoURL}
										alt="Profile"
										title={currentUser.displayName}
										style={{
											width: '30px',
											height: '30px',
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
