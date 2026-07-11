import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		name: z.string(),
		category: z.string(),
		order: z.number(),
		overview: z.string(),
		services: z.array(z.string()),
		liveUrl: z.string().optional(),
		mainImage: z.string().optional(),
		galleryImages: z.array(z.string()).length(3).optional(),
	}),
});

export const collections = { projects };
