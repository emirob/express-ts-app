import express from "express";
import bodyParser from "body-parser";
import { addUser, getUser } from "./data/users";
import { routes } from "./middleware/routes";

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

routes.forEach((route) => {
    const {method, path, middleware, handler } = route;
    app[method](path, middleware, handler);
});

app.listen(port, function(){
    console.log("listening on port "+ port);
})