import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content", // oder 'data'
  schema: z.object({
    title: z.string(),
    author: reference("authors"),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
