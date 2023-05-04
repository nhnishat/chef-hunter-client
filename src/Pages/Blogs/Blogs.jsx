import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
	return (
		<Container>
			<h1 className="mt-5 text-center">Question & Answer </h1>
			<div className="shadow-lg p-3 rounded-4">
				<h3 className="fw-semibold">
					Tell us the differences between uncontrolled and controlled
					components?
				</h3>
				<p>
					<ul>
						<h4>Controlled Components:</h4>
						<li>
							Controlled components are components that are fully controlled by
							React.
						</li>
						<li>
							The component's state is managed by React and passed down to the
							component through props.
						</li>
						<li>
							Any changes to the component's state must be done through a
							callback function, which updates the state and re-renders the
							component.
						</li>
					</ul>
					<ul>
						<h4>Uncontrolled Components:</h4>
						<li>
							Uncontrolled components are components that handle their own state
							and data without the help of React.
						</li>
						<li>
							The component's state is managed internally, usually through the
							DOM or the component's own internal logic.
						</li>
						<li>
							Any changes to the component's state are done through events, such
							as onChange, onSubmit, or onClick.
						</li>
					</ul>
				</p>
			</div>
			<div className="shadow-lg p-4 rounded-4">
				<h4 className="fw-bold">
					How to validate React props using PropTypes?
				</h4>
				<p>
					To validate React props using PropTypes, you need to import the
					PropTypes package and define the expected data type and shape of the
					props in your component. This helps catch bugs and errors early on and
					ensures that the component receives the correct props.
				</p>
			</div>
		</Container>
	);
};

export default Blogs;
