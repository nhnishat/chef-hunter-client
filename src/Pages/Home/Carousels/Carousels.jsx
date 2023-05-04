import React from 'react';

import { Carousel, Container } from 'react-bootstrap';
import Slide1 from '../../../assets/imgCarousel/Slide1.avif';
import Slide2 from '../../../assets/imgCarousel/Slide2.avif';
import Slide3 from '../../../assets/imgCarousel/Slide3.avif';
const Carousels = () => {
	return (
		<div>
			<div className="bg-dark">
				<Container className="py-3">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100 rounded-2"
								src={Slide1}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>Burger & French Fries</h3>
								<p>Most Favorite Fast Food in World.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100 rounded-2" src={Slide2} />

							<Carousel.Caption>
								<h3>French Fries</h3>
								<p>Most Favorite Fast Food in World.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 rounded-2"
								src={Slide3}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3 className="fs-1">vegetables Fish</h3>
								<p>Most Favorite Fast Food in World</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>
			</div>
		</div>
	);
};

export default Carousels;
