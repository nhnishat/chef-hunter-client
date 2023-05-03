import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const ChefSection = () => {
	return (
		<div>
			<Container>
				<div className="text-center my-5 p-5">
					<h1 className="fs-2 fw-bold text-uppercase text-warning">
						Chef <span className="text-secondary">Community</span>
					</h1>
					<p>
						<small className="fw-semibold">
							Our greatest strength is our community. That is why as a
							community, we are committed to <br /> holding ourselves to a
							higher standard.
						</small>
					</p>
				</div>
				<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-4 gap-5 justify-content-between">
					<div>
						<img
							src={
								'https://i.ibb.co/KVTnLrb/tr-ng-trung-c-p-kinh-t-du-l-ch-thanh-ph-h-chi-minh-cet-4i-Lr-M6-S5m-CI-unsplash.jpg'
							}
							alt=""
							className="w-full rounded-2 img-fluid"
						/>
					</div>
					<div className="">
						<h1 className="text-warning text-uppercase">
							Learn <span className="text-secondary">Chef</span>
						</h1>
						<p>
							The Learn Chef curriculum is designed by learning professionals to
							help you
							<br />
							learn about Chef and DevOps and quickly apply your skills. All of
							the courses <br />
							are optimized for self-paced learning.
						</p>
						<Button variant="dark">
							Learn Chef
							<FontAwesomeIcon
								icon={faArrowRight}
								className="ms-2 text-warning"
							/>
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ChefSection;
