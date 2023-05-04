import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
	const chef = useLoaderData();
	console.log(chef);
	if (!chef) {
		return (
			<Spinner
				animation="border"
				className="visually-hidden"
				variant="danger"
			/>
		);
	}
	return (
		<Container>
			<h3 className="text-center my-5">{chef.name} Data</h3>
			<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-4 gap-5 justify-content-between shadow-lg rounded-3 mt-5">
				<div>
					<img
						src={chef.picture}
						alt=""
						className="w-full rounded-2 img-fluid"
						style={{ height: '500px', width: '500px' }}
					/>
				</div>
				<div className="w-50">
					<h1>Name : {chef.name}</h1>
					<p>
						<span className="fw-bold">description : </span>
						{chef.description}
					</p>
					<p>
						<span className="fw-bold">Experience : </span>
						<small>{chef.yearsOfExperience}</small>
					</p>
					<p>
						<span className="fw-bold">Likes :</span> {chef.likes}
					</p>
					<p>
						<span className="fw-bold">NumRecipes</span> : {chef.numRecipes}
					</p>
				</div>
			</div>

			<Row xs={1} md={3} className="g-4 my-5">
				{chef.recipes.map((recipe) => (
					<Col key={recipe.id}>
						<Card>
							<Card.Img
								variant="top"
								className="img-fluid"
								src={recipe}
								style={{ height: '500px', width: '500px' }}
							/>
							<Card.Body>
								<Card.Title>{recipe.recipeName}</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Chef;
