import { Handler } from "../types";

export const home: Handler = (req, res) => {
    res.send("hello home message");
};