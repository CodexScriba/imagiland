"use client";

import React, { useState } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { storyCreationSchema } from "../schemas/storyCreationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card"; // Adjust import path as needed

export default function StoryCreation() {
	const [progress, setProgress] = useState(0);
	const form = useForm<z.infer<typeof storyCreationSchema>>({
		resolver: zodResolver(storyCreationSchema),
		defaultValues: {
			characters: "",
			storyOutline: "",
		},
	});

	const onSubmit = (values: z.infer<typeof storyCreationSchema>) => {
		console.log(values);
		//todo: handle form submission
	};

	const updateProgress = () => {
		//todo: update progress.
	};

	return (
		<div>
			<Navbar />
			{/* Start of Card Component */}
			<Card className="w-4/5 mx-auto mt-8 max-w-4xl">
				<CardHeader className="flex justify-center items-center">
					<CardTitle>Story Creation</CardTitle>
					<CardDescription>
						Fill out the details below to create your personalized story.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{/* CardContent: This is where the form fields will go */}
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					{/* CardFooter: Optional - You can add buttons or additional information here, such as a "Submit" button */}
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			{/* End of Card Component */}
		</div>
	);
}
