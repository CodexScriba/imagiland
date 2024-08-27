import * as z from "zod";

export const storyCreationSchema = z.object({
	characters: z.string().min(1, "At least one character is required"),
	storyOutline: z
		.string()
		.min(100, "Story outline must be at least 100 characters"),
});

export type StoryCreationFormValues = z.infer<typeof storyCreationSchema>;
