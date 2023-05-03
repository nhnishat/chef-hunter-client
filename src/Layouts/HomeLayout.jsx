import React from 'react';
import Carousels from '../Pages/Home/Carousels/Carousels';
import ChefSection from '../Pages/Home/OurChef/ChefSection';
import ShowChef from '../Pages/ShowChef/ShowChef';

const HomeLayout = () => {
	return (
		<>
			<Carousels />
			<ChefSection />
			<ShowChef />
		</>
	);
};

export default HomeLayout;
