import {Router, Request, Response} from "express";

const router = Router();

router.get('/example', async(req: Request, res: Response) => {
    res.status(200).json({name: "Rafael"});
});

export default router;
