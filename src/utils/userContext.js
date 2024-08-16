import { createContext } from "react"

const userContext = createContext({
    user: {
        name: "Random Name",
        email: "randomname@gmail.com"
    }
});

userContext.displayName = "userContext";

export default userContext;