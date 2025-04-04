import { defineField, defineType } from "sanity";

export const user = defineType({
    name: "user",
    title: "User",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Full Name",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "email",
            type: "string",
            title: "Email",
            validation: Rule => Rule.required().email(),
        }),
        defineField({
            name: "username",
            type: "string",
            title: "Username",
        }),
        defineField({
            name: "avatar",
            title: "Avatar",
            type: "url",
            options: { hotspot: true },
        }),
        defineField({
            name: "quiz",
            title: "Quizzes",
            type: "array",
            of: [{ type: "reference", to: [{ type: "quiz" }] }],
        }),
        defineField({
            name: "createdAt",
            type: "datetime",
            title: "Created At",
            readOnly: true,
        }),
    ],
});
