import express from "express";
import morgan from "morgan";
import cors from "cors";

import Enviroment from "./config/enviroment.js";
import HomeRoutes from "./routes/home.routes.js";

export default class Application {
  constructor() {
    this.app = express();
    this.env = new Enviroment();
  }

  initialize() {
    //Config...
    this.app.set("port", this.env.PORT);
    //Middlewares
    this.app.use(morgan("dev"));
    this.app.use(cors());

    //routes...
    this.app.use("/api/v1/", new HomeRoutes().initialize());

    return this.app;
  }
}
