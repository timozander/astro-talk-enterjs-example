import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content", // oder 'data'
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
