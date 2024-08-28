"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const formSchema = z.object({
	characters: z.string().min(1, "At least one character is required"),
	storyOutline: z
		.string()
		.min(100, "Story outline must be at least 100 characters"),
	customPhrases: z.string().optional(),
	animationStyle: z.string().optional(),
	voiceStyle: z.string().optional(),
	language: z.string().optional(),
});

export default function Component() {
	const [progress, setProgress] = useState(0);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			characters: "",
			storyOutline: "",
			customPhrases: "",
			animationStyle: "",
			voiceStyle: "",
			language: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
		// Handle form submission
	};

	const updateProgress = () => {
		const fields = [
			"characters",
			"storyOutline",
			"customPhrases",
			"animationStyle",
			"voiceStyle",
			"language",
		];
		const filledFields = fields.filter((field) =>
			form.getValues(field as keyof z.infer<typeof formSchema>),
		);
		setProgress((filledFields.length / fields.length) * 100);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			< 
				c="bg-white p-6 rounded-lg shadow-lg w-4/5 h-4/5">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div
								className="bg-blue-600 h-2.5 rounded-full"
								style={{ width: `${progress}%` }}
							/>
						</div>

						<FormField
							control={form.control}
							name="characters"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Who should appear in this story?</FormLabel>
									<FormControl>
										<div className="flex items-center space-x-2">
											<Textarea
												placeholder="Noah, a 3-year-old blonde toddler who loves adventures; Guis, Noah's caring grandmother who always has wise advice; Daniel, Noah's dad, a calm and patient figure who teaches him life lessons."
												className="min-h-[100px]"
												{...field}
												onChange={(e) => {
													field.onChange(e);
													updateProgress();
												}}
											/>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger asChild>
														<Button type="button" size="icon" variant="outline">
															<Plus className="h-4 w-4" />
														</Button>
													</TooltipTrigger>
													<TooltipContent>
														<p>Add more characters</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</div>
				s
								</FormControl>
									<FormDescription>
										Characters: {field.value.length} | At least one character is
										required.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="storyOutline"
							render={({ field }) => (
								<FormItem>
									<FormLabel>What is the story going to be about?</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Noah's adventure begins when he gets a new bike. Excited but nervous, he learns valuable lessons from his dad, Daniel, as they explore the neighborhood together."
											className="min-h-[150px]"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												updateProgress();
											}}
										/>
									</FormControl>
									<FormDescription>
										Story Outline: {field.value.length} characters | Minimum 100
										characters required.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="customPhrases"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Do you want to add any custom phrases or names?
									</FormLabel>
									<FormControl>
										<Input
											placeholder="E.g., Call Daniel 'Papa Bear'"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												updateProgress();
											}}
										/>
									</FormControl>
									<FormDescription>
										Optional: Add unique names or phrases.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="animationStyle"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Select Animation Style</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
											updateProgress();
										}}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Choose an animation style" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{[
												"Japanese Manga",
												"Disney-like",
												"Pixar-like",
												"Classic Western Animation",
												"Watercolor Storybook",
												"Fantasy Illustration",
												"Minimalist Flat Design",
											].map((style) => (
												<SelectItem key={style} value={style}>
													{style}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>
										Optional: Choose your preferred animation style.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="voiceStyle"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Select Voice Style</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
											updateProgress();
										}}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Choose a voice style" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{[
												"Affectionate",
												"Calm",
												"Cheerful",
												"Empathetic",
												"Friendly",
												"Gentle",
												"Lyrical",
												"Narration-Relaxed",
												"Poetry-Reading",
											].map((style) => (
												<SelectItem key={style} value={style}>
													{style}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>
										Optional: Choose your preferred voice style.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="language"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Select Language</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
											updateProgress();
										}}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Choose a language" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{["English", "Spanish", "Both"].map((lang) => (
												<SelectItem key={lang} value={lang}>
													{lang}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>
										Optional: Choose the language for your story.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit">Create Story</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
