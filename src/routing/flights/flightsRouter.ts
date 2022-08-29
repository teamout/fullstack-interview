import { Request, Response, Router } from "express";

const getFlightById = (req: Request, res: Response) => {
  return res.json({ data: "ok" });
};

export const createRouter = (): Router => {
  const clientRouter = Router();

  clientRouter.get("/:id", getFlightById);

  return clientRouter;
};
