import { Router } from "express";

import HomeController from "../controllers/home.controller.js";

export default class HomeRoutes {
  constructor() {
    this.router = Router();
    this.homecontroller = new HomeController();
  }

  initialize() {
    this.router.get("/", this.homecontroller.index);
    this.router.post("/create", this.homecontroller.create);
    return this.router;
  }
}
