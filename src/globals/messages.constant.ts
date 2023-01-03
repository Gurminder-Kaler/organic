let S = "Successfully!";
export const messages = {
    Success: {
        Auth: {
            Login: "Logged in " + S,
            Register: "Registered " + S
        },
        User: {
            Update: "User Updated " + S,
            Create: "User Created " + S,
            Delete: "User Deleted " + S,
            GetAllUsers: "Users Found " + S,
        },
        Word: {
            Update: "Word Updated " + S,
            Create: "Word Created " + S,
            Delete: "Word Deleted " + S,
            GetAllWords: "Words Found " + S,
        },
        Answer: {
            Update: "Answer Updated " + S,
            Create: "Answer Created " + S,
            Delete: "Answer Deleted " + S,
            GetAllAnswers: "Answers Found " + S,
        },
    },
    Failure: {
        User: {
            NotFound: "No User Found!"
        },
        Word: {
            NotFound: "No Word Found!"
        },
        Users: {
            NotFound: "No Users Found!"
        },
        Answer: {
            NotFound: "No Answer Found!"
        },
        UnAuthorized: "Invalid credentials",
        UserAlreadyTaken: "User already exists",
        SWW: "Something Went Wrong"
    }
};