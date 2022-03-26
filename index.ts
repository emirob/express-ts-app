import express from "express";
import bodyParser from "body-parser";
import { addUser, getUser } from "./data/users";

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) =>{
    res.send("hello");
})

app.post("/users", (req, res) => {
    const {username, password} = req.body;
    if(!username?.trim() || !password?.trim()){
        return res.status(400).send("Bad username");
    }

    addUser({username, password});
    res.status(201).send("User created");
})

app.post("/login", (req, res) =>{
    const {username, password } = req.body;
    const found = getUser( {username, password} )
    if(!found){
        return res.status(401).send("login failed");
    }

    res.status(201).send("Success in login");
})

app.listen(port, function(){
    console.log("listening on port "+ port);
})