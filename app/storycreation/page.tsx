import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Navbar from "../components/shared/navbar/Navbar";
import React from "react";

const StoryCreation = () => {
	return (
		<div>
			<Navbar />
			<div className="container mx-auto py-8">
				<Card className="w-full max-w-4xl mx-auto">
					<CardHeader className="text-center">
						<CardTitle className=" text-primary text-xl font-bold">
							Story Creation
						</CardTitle>
						<CardDescription className="text-base">
							Fill out the details below to create your personalized story.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
};

export default StoryCreation;
