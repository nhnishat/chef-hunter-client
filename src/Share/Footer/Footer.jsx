import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
	return (
		<div className='"w-full bg-black mt-5'>
			<Container className=" mt-5">
				<div className="footer">
					<div className="w-3/3 mt-3">
						<h2 className="mb-3 text-white">Chef Hunter</h2>
						<p className="mb-2 text-white">
							There are many variations of passages of Lorem Ipsum , but the
							majority have suffered alteration in some form.
						</p>
						<img src="" alt="" />
					</div>
					<div className="w-3/3 mt-3">
						<h3 className="mb-3 text-white">Company</h3>
						<p className="mb-2 text-white">About Us</p>
						<p className="mb-2 text-white">Work</p>
						<p className="mb-2 text-white">Latest News</p>
						<p className="mb-2 text-white">Careers</p>
					</div>
					<div className="w-3/3 mt-3">
						<h4 className="mb-3 text-white">Product </h4>
						<p className="mb-2 text-white">Prototype</p>
						<p className="mb-2 text-white">Plans & Pricing </p>
						<p className="mb-2 text-white">Customers</p>
						<p className="mb-2 text-white">Integrations</p>
					</div>
					<div className="w-3/3 mt-3">
						<h5 className="mb-3 text-white">Support</h5>
						<p className="mb-2 text-white">Help Desk</p>
						<p className="mb-2 text-white">Sales</p>
						<p className="mb-2 text-white">Become a Partner</p>
						<p className="mb-2 text-white">Developers</p>
					</div>
					<div className="w-3/3 mt-3">
						<h5 className="mb-3 text-white">Contact</h5>
						<p className="mb-2 text-white">524 Broadway , NYC</p>
						<p className="mb-2 text-white">+1 777 - 978 - 5570</p>
					</div>
				</div>
				<div className="text-white">
					<hr />
				</div>
				<div className="flex justify-between my-container">
					<p className="mb-2 text-white">
						@2023 CareerHub. All Rights Reserved
					</p>
					<p className="mb-2 text-white">Powered by CareerHub</p>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
