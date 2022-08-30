import { Application } from "express";
import { createRouter as createFlightsRouter } from "./routing/flights/flightsRouter";

export const routing = (app: Application): void => {
  app.get("/health", (_req, res) => res.sendStatus(200));

  app.use("/flights", [createFlightsRouter()]);

  app.all("*", (_req, res) => res.sendStatus(404));
};
