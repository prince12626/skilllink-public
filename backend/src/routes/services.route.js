const express = require("express");
const {
  getServices,
  createService,
  getServiceById,
  deleteService,
  getProfile
} = require("../controllers/services.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const serviceRouter = express.Router();

serviceRouter.get("/getall", getServices);
serviceRouter.get("/:id/get", getServiceById);
serviceRouter.post("/create", createService);
serviceRouter.delete('/delete/:id', deleteService);
serviceRouter.get('/profile/:id', getProfile);

module.exports = serviceRouter;
