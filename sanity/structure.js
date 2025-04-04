export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Quizzes")
        .child(
          S.list()
            .title("Quiz Management")
            .items([
              S.documentTypeListItem("quiz").title("All Quizzes"),
              S.documentTypeListItem("question").title("Questions"),
            ])
        ),
      S.documentTypeListItem("user").title("Users"),
    ]);
