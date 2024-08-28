import React from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	storyCreationSchema,
	type StoryCreationForm,
} from "@/app/schemas/storyCreationSchema";

const CharacterInput = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<StoryCreationForm>({
		resolver: zodResolver(storyCreationSchema),
		defaultValues: {
			characters: [{ name: "" }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "characters",
	});

	const onSubmit = (data: StoryCreationForm) => {
		console.log(data);
		// Handle form submission
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			{fields.map((field, index) => (
				<div key={field.id} className="flex items-center space-x-2">
					<Controller
						name={`characters.${index}.name`}
						control={control}
						render={({ field }) => (
							<div className="flex-grow">
								<Label htmlFor={`character-${index}`} className="sr-only">
									Character Name
								</Label>
								<Input
									{...field}
									id={`character-${index}`}
									placeholder="Enter character name"
									className={
										errors.characters?.[index]?.name ? "border-red-500" : ""
									}
								/>
								{errors.characters?.[index]?.name && (
									<p className="text-red-500 text-sm mt-1">
										{errors.characters[index]?.name?.message}
									</p>
								)}
							</div>
						)}
					/>
					<Button
						type="button"
						size="icon"
						variant="destructive"
						onClick={() => remove(index)}
						className="flex-shrink-0"
					>
						X
					</Button>
				</div>
			))}
			<Button
				type="button"
				onClick={() => append({ name: "", characterDescription: "" })} // Add characterDescription
				className="flex items-center space-x-2"
			>
				<FaPlus className="w-4 h-4" />
				<span>Add Character</span>
			</Button>
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default CharacterInput;
