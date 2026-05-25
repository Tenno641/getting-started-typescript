// Define an interface for a User with the following fields:
// - id (number)
// - email (optional string)

interface User {
    id: number;
    email?: string;
}

const user: User = {
    id: 1,
    email: "example@example.com",
}

const userWithoutEmail: User = {
    id: 1
}
