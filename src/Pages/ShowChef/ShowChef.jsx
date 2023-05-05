import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ShowChef = () => {
	const [chefInfo, setChefInfo] = useState([]);
	useEffect(() => {
		fetch('https://chef-hunter-server-nhnishat.vercel.app/chef')
			.then((res) => res.json())
			.then((data) => setChefInfo(data));
	}, []);

	return (
		<Container>
			<div className="text-center my-5 p-5">
				<h1 className="fs-2 fw-bold text-uppercase text-secondary">
					All <span className="text-warning">Chefs</span> Here
				</h1>
				<p>
					<small className="fw-semibold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, porro!
					</small>
				</p>
			</div>
			<div>
				<Row xs={1} md={3} className="g-4">
					{chefInfo.map((chef) => (
						<Col key={chef.id}>
							<Card>
								<LazyLoadImage
									variant="top"
									className="img-fluid"
									src={chef.picture}
									style={{ height: '500px', width: '500px' }}
								></LazyLoadImage>

								<Card.Body>
									<Card.Title>{chef.name}</Card.Title>
									<Card.Text>
										{chef.yearsOfExperience} years of experience
									</Card.Text>
									<Card.Text>{chef.numRecipes} recipes</Card.Text>
									<Card.Text>{chef.likes} likes</Card.Text>
									<Link to={`/chef/${chef.id}`}>
										<Button variant="dark">Show Details</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default ShowChef;
