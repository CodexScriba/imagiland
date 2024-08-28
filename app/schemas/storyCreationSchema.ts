import { z } from "zod";

export const characterSchema = z.object({
	name: z.string().min(1, { message: "Character name is required" }),
	characterDescription: z.string().min(3, {
		message: "Character description must be at least 3 characters",
	}),
});

export const storyCreationSchema = z.object({
	characters: z
		.array(characterSchema)
		.min(1, { message: "At least one character is required" }),
	// Add other fields here as we expand the form
});

export type Character = z.infer<typeof characterSchema>;
export type StoryCreationForm = z.infer<typeof storyCreationSchema>;
