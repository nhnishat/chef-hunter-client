import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trams = () => {
	return (
		<Container className="my-5">
			<h2>Trams And Condition</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
				voluptatem perferendis, dolore beatae odio libero voluptas rem nemo
				error sapiente labore quam. Inventore numquam autem quisquam
				necessitatibus omnis temporibus dolor.
			</p>
			<p>
				Go Back <Link to="/register">Register</Link>
			</p>
		</Container>
	);
};

export default Trams;
