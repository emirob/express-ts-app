import express from "express";
import bodyParser from "body-parser";
import { addUser, getUser } from "./data/users";
import { routes } from "./middleware/routes";
import "dotenv/config";


const {
    MONGO_USER,
    MONGO_PASSWORD,
    PORT,
    MONGO_PATH,
    DEVELOPER,
} = process.env;



console.log(MONGO_PASSWORD + ", " + MONGO_PATH + ", " + MONGO_USER + ", " + DEVELOPER);

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

routes.forEach((route) => {
    const {method, path, middleware, handler } = route;
    app[method](path, middleware, handler);
});

app.listen(PORT, function(){
    console.log("listening on port "+ PORT);
})