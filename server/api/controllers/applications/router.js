import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/", controller.create)
  .get("/", controller.all)
  .get("/:id", controller.byId); // Fix bug for get by id;
// Add put request to edit application
// Add delete request to delete application
