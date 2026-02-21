import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        current: z.boolean().default(false),
        location: z.string(),
        description: z.string(),
    }),
});

const talksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        event: z.string(),
        date: z.string(),
        slides: z.string().url().optional(),
        video: z.string().url().optional(),
        language: z.enum(['en', 'es']),
        summary: z.string(),
    }),
});

const conferencesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        event: z.string(),
        date: z.string(),
        location: z.string(),
    }),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        language: z.enum(['en', 'es']),
        summary: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'experience': experienceCollection,
    'talks': talksCollection,
    'conferences': conferencesCollection,
    'blog': blogCollection,
};
