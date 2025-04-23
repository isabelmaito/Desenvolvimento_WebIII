import express from "express";
import { Request, Response } from "express";
import { create, listAll } from "../controllers/brand.controller";


const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const brands = await listAll();
    res.status(200).json(brands);
});

router.post("/", async (req: Request, res: Response) => {
    const { description } = req.body;

    const brand = await create(description);
    res.status(201).json(brand)
})

export default router;