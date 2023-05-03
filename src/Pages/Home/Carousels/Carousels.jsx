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
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100 rounded-2" src={Slide2} />

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 rounded-2"
								src={Slide3}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3 className="fs-1">Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>
			</div>
		</div>
	);
};

export default Carousels;
