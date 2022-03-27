import { addUser } from "../data/users";
import { Handler } from "../types";

export const signup: Handler = (req, res) => {
    const {username, password} = req.body;
    if(!username?.trim() || !password?.trim()){
        res.status(400).send("Invalid username or password");
    }

    addUser({username, password});
    res.status(201).send("Created new user uname="+ username + " pass=*******");
}