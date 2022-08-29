import * as express from "express";
import * as bodyParser from "body-parser";
import { routing } from "./routing";

export const createApp = (): express.Application => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  routing(app);
  return app;
};
