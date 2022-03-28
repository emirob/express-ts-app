import { login } from "../handler/auth";
import { home } from "../handler/home";
import { signup } from "../handler/users";
import { requestLogger } from "./requestLogger";
import { Route } from "../types";

export const routes: Route[] = [
    //home path
    {
        method: 'get',
        path: "/",
        middleware: [],
        handler: home
    },
    //users path
    {
        method: 'post',
        path: "/users",
        middleware: [],
        handler: signup
    },
    //login path
    {
        method: 'post',
        path: "/login",
        middleware: [requestLogger],
        handler: login
    }
];