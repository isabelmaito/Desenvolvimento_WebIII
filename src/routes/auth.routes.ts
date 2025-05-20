import express, {Request, Response} from 'express';
import jwt from "jsonwebtoken"

import dotenv from "dotenv";
dotenv.config()


export const authRouter = express.Router();

authRouter.post("/", (req: Request, res: Response) => {
    console.log("TESTE")
    const { username, password } = req.body;
    const secret = process.env.AUTH_SECRET || "blublublu";


    if(username === "admin" && password === "admin"){
        const token = jwt.sign({username: "admin"}, secret);
        res.status(200).json({token});
    }
    res.status(401).send();
});