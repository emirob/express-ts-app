import { Handler } from "../types"
import { getUser } from "../data/users";

export const login: Handler = (req, res) => {
    const {username, password } = req.body;
    const found = getUser({username, password});
    if(!found){
        return res.status(400).send("login failed");
    }

    res.status(201).send("Success in logging in")
}