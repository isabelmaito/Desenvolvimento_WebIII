import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { create, listAll } from "../controllers/brand.controller";


const router = express.Router();

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