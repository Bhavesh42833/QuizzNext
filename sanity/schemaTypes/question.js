import { defineField, defineType } from "sanity";

export const question = defineType({
    name: "question",
    title: "Question",
    type: "document",
    fields: [
        defineField({
            name: "questionText",
            type: "string",
            title: "Question",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image (Optional)",
            options: { hotspot: true },
        }),
        defineField({
            name: "options",
            type: "array",
            title: "Options",
            of: [{ type: "string" }],
            validation: Rule => Rule.required().min(2).max(6), // At least 2, at most 6 options
        }),
        defineField({
            name: "correctAnswer",
            type: "string",
            title: "Correct Answer",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "score",
            type: "number",
            title: "Score for this Question",
            validation: Rule => Rule.required().min(1),
        }),
        defineField({
            name: "timer",
            type:"number",
        })
    ],
});
