const express = require("express");
const { getServices, createService, getServiceById } = require("../controllers/services.controller");

const serviceRouter = express.Router();

serviceRouter.get("/getall", getServices);
serviceRouter.post("/create", createService);
serviceRouter.get("/:id/get", getServiceById);

module.exports = serviceRouter;