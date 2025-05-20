import  jwt  from 'jsonwebtoken';
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { create, listAll } from "../controllers/brand.controller";
import { AuthorizeMiddleware } from '../middlewares/authorize.middleware';


const router = express.Router(); 

router.use(AuthorizeMiddleware);

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log("LOGGED");
    next();
};

const createBrandMiddleware = ( req: Request, res: Response, next: NextFunction) => {
    console.log("descrição: "+req.body.description);
    next();
}


router.use(logger);

router.get("/", async (req: Request, res: Response) => {
    const brands = await listAll();
    res.status(200).json(brands);
});

router.post("/", createBrandMiddleware, async (req: Request, res: Response) => {
    const { description } = req.body;

    const brand = await create(description);
    res.status(201).json(brand)
})

export default router;