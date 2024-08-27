import React from "react";
import FlipBook from "./components/FlipBook/FlibBook";
import Navbar from "./components/shared/navbar/Navbar";

const StoryPage = () => {
	return (
		<div>
			<Navbar />
			<h1 className="p-10">Online Children’s Book</h1>
			<FlipBook />
		</div>
	);
};

export default StoryPage;
