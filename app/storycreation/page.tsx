import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Navbar from "../components/shared/navbar/Navbar";
import React from "react";
import CharacterInput from "../components/StoryCreationForm/InputCharacter";
import { Label } from "@/components/ui/label";

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
						<CardDescription className="text-base py-4">
							Fill out the details below to create your personalized story.
						</CardDescription>
						<CardContent>
							<div className="flex ">
								<Label
									htmlFor="Characters in the story"
									className="my-4" // Removed unnecessary classes
								>
									Characters in the story
								</Label>
							</div>
							<CharacterInput />
						</CardContent>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
};

export default StoryCreation;
