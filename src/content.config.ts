import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		name: z.string(),
		category: z.string(),
		image: z.string().optional(),
		order: z.number(),
	}),
});

export const collections = { projects };
