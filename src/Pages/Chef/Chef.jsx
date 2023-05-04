import { useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Chef = () => {
	const chef = useLoaderData();
	const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
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
	const handleFavorite = () => {
		toast('Added to Favorites!');
		setIsFavoriteAdded(true);
	};
	return (
		<Container>
			<h3 className="text-center my-5">{chef.name} BIO DATA</h3>
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
						<small>{chef.yearsOfExperience} years</small>
					</p>
					<p>
						<span className="fw-bold">Likes :</span> {chef.likes}
					</p>
					<p>
						<span className="fw-bold">NumRecipes</span> : {chef.numRecipes}
					</p>
				</div>
			</div>

			<div>
				<h3 className="my-5 text-center text-decoration-underline">
					Recipes Here
				</h3>
				<Row xs={1} md={3} className="g-4 my-5">
					{chef.recipes.map((recipe) => (
						<Col key={recipe.id}>
							<Card>
								<Card.Img
									variant="top"
									className="img-fluid"
									src={recipe.photoUrl}
									style={{ height: '500px', width: '500px' }}
								/>
								<Card.Body>
									<Card.Title>{recipe.recipeName}</Card.Title>
									<div className="mt-3">
										<h4 className="fs-5">ingredients</h4>
										<ul>
											<li className="fw-semibold">
												Name : {chef.ingredients.name}
											</li>
											<li className="fw-semibold">
												Amount : {chef.ingredients.amount}
											</li>
										</ul>
										<Button
											onClick={handleFavorite}
											variant="dark"
											className="w-full"
											disabled={isFavoriteAdded}
										>
											Add Favorite Recipe
										</Button>
										<ToastContainer />
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Chef;
