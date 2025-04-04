  import { defineField, defineType } from "sanity";
  
  export const quiz = defineType({
      name: "quiz",
      title: "Quiz",
      type: "document",
      fields: [
          defineField({
              name: "title",
              type: "string",
              title: "Title",
              validation: Rule => Rule.required(),
          }),
          defineField({
              name: "description",
              type: "string",
              title: "Summary",
          }),
          defineField({
              name: "slug",
              type: "slug",
              title: "Slug",
              validation: Rule => Rule.required(),
              options: {
                  source: "title",
                  maxLength: 96,
              },
          }),
          defineField({
            name:"setter",
            type:"reference",
            title:"Setter",
            to:[{type:"user"}]
          }),
          defineField({
             name:"StartDate",
             type:"datetime",
             title:"Start Date", 
          }),
          defineField({
            name:"EndDate",
            type:"datetime",
            title:"End Date", 
         }),
          defineField({
              name: "question",
              title: "Questions",
              type: "array",
              of: [{ type: "reference", to: [{ type: "question" }] }],
          }),
          defineField({
            name: "answeredUsers",
            type: "array",
            title: "Answered Users",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "user",
                            type: "reference",
                            to: [{ type: "user" }],
                            title: "User",
                        }),
                        defineField({
                            name: "answers",
                            type: "array",
                            title: "Answers",
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        defineField({
                                            name: "question",
                                            type: "reference",
                                            to: [{ type: "question" }],
                                            title: "Question",
                                        }),
                                        defineField({
                                            name: "selectedOption",
                                            type: "string",
                                            title: "Selected Option",
                                        }),
                                        defineField({
                                            name: "isCorrect",
                                            type: "boolean",
                                            title: "Correct?",
                                        }),
                                    ],
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),
        
          defineField({
            name: "leaderboard",
            type: "array",
            title: "Leaderboard",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "user",
                            type: "reference",
                            to: [{ type: "user" }],
                            title: "User",
                        }),
                        defineField({
                            name: "score",
                            type: "number",
                            title: "Score",
                            initialValue: 0,
                        }),
                    ],
                },
            ],
        }),
        
          defineField({
              name: "createdAt",
              type: "datetime",
              title: "Created At",
              readOnly: true,
              initialValue: () => new Date().toISOString(),
          }),
      ],
  });
  