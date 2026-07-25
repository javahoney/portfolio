import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			category: z.string(),
			order: z.number(),
			overview: z.string(),
			services: z.array(z.string()),
			liveUrl: z.string().optional(),
			mainImage: image().optional(),
			galleryImages: z.array(image()).length(3).optional(),
			testimonial: z
				.object({
					quote: z.string(),
					author: z.string(),
					role: z.string().optional(),
				})
				.optional(),
		}),
});

export const collections = { projects };
