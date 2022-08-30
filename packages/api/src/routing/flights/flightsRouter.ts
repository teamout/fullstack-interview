import { Request, Response, Router } from 'express';
import { Flight } from '@fullstack-itw/models';

const getFlightById = (req: Request, res: Response) => {
  const flight: Flight = {
    id: req.params.id,
    model: 'Airbus A380',
    numberOfPassengers: 525,
  };
  return res.json({ data: flight });
};

export const createRouter = (): Router => {
  const clientRouter = Router();

  clientRouter.get('/:id', getFlightById);

  return clientRouter;
};
