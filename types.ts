import { Request, Response, NextFunction } from "express";

export type Middleware = (req: Request, res: Response, next: NextFunction) => any; 
export type Handler = (req: Request, res: Response) => any;

export type User = {
        username: string; 
        password: string 
    };

    type Method =  | 'get' | 'head' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace' | 'patch';

    export type Route = {
        method: Method;
        path: string;
        middleware: Middleware[];
        handler: any;
    }

