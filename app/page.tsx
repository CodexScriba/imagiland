import React from "react";
import Navbar from "./components/shared/navbar/Navbar";

const Homepage = () => {
	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center h-screen">
				<h1 className=" text-3xl font-bold text-center">
					Create magical personalized stories turning any moment into a
					adventure.
				</h1>
			</div>
		</div>
	);
};

export default Homepage;
