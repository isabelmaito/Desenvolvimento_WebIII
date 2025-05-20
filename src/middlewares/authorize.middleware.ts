import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config()

export const AuthorizeMiddleware = (
    req: Request, 
    rest: Response, 
    next: NextFunction
) => {
    const { authorization } = req.headers;
    const secret = process.env.AUTH_SECRET || "blublublu";

    jwt.verify(authorization || "", secret, (err) => {
        if (err) {
            return rest.status(401).json({ message: "Invalid token" });
        }
        next();
    });
    
    console.log(">> ", authorization);
};