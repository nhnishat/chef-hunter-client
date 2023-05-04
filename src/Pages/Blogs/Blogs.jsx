import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
	return (
		<Container>
			<h1 className="my-5 text-center">Question & Answer </h1>
			<div className="shadow-lg p-3 rounded-4 my-5">
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
			<div className="shadow-lg p-4 rounded-4 my-5">
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
			<div className="shadow-lg p-4 rounded-4 my-5">
				<h4>Tell us the difference between nodejs and express js?</h4>
				<p>
					Node.js is a runtime environment for executing JavaScript code outside
					of a web browser, while Express.js is a framework for building web
					applications in Node.js. Node.js provides a platform for running
					JavaScript on the server-side, allowing developers to use JavaScript
					for building backend applications, whereas Express.js provides a set
					of tools for building web applications such as routing, middleware,
					and templating. While Node.js is the core runtime environment for
					JavaScript, Express.js is an extension of Node.js, adding web
					application functionality to Node.js. In other words, Node.js can be
					used to build a variety of applications, while Express.js is focused
					on building web applications specifically.
				</p>
			</div>
			<div className="shadow-lg p-4 rounded-4 my-5">
				<h4>What is a custom hook, and why will you create a custom hook?</h4>
				<p>
					A custom hook is a reusable function in React that encapsulates
					specific logic or behavior and can be shared across multiple
					components. Custom hooks are useful in scenarios where you need to
					reuse complex logic, state management, or side effects in multiple
					components. Custom hooks allow you to create self-contained
					functionality that is easier to test, maintain and modify. By
					encapsulating complex logic or behavior, you can reduce the amount of
					repetitive code and avoid cluttering your components with unnecessary
					code. Some examples of custom hooks include managing form input state,
					handling authentication, caching data, and fetching data from an API.
					Overall, custom hooks are a powerful and flexible tool that can help
					make your React code more modular, reusable and maintainable.
				</p>
			</div>
		</Container>
	);
};

export default Blogs;
