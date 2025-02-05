import { defineCollection, z } from "astro:content";

const groupCollection = defineCollection({
  type: "content",
  schema: z.object({
    coordinators: z.array(
      z.object({ name: z.string(), image: z.string(), connect: z.string() }),
    ),
    groupLogo: z.string(),
    title: z.string(),
  }),
});

const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    groupName: z.string(),
    image: z.string(),
    date: z.date(),
    subject: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    location: z.string(),
    price: z.number(),
    signUp: z.string(),
    description: z.string(),
    locationURL: z.string(),
  }),
});

export const collections = {
  groups: groupCollection,
  events: eventCollection,
};
