"use client";
import React from "react";
import FlipBook from "../components/FlibBook";

const TestPage = () => {
	return (
		<div className="bg-slate-400 h-screen flex flex-col items-center justify-center">
			<h1 className="text-white mb-4">Online Children’s Book</h1>
			<div className="w-full h-4/5">
				<FlipBook />
			</div>
		</div>
	);
};

export default TestPage;
