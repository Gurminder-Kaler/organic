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
    },
    Failure: {
        User: {
            NotFound: "No User Found!"
        },
        Users: {
            NotFound: "No Users Found!"
        },
        UnAuthorized: "Invalid credentials",
        UserAlreadyTaken: "User already exists"
    }
};