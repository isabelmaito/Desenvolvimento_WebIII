import express from "express";
import { Request, Response } from "express";
import { listAll } from "../controllers/brand.controller";


const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    listAll();
    res.json({});

})

export default router;