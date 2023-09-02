import express from "express";
import authenticationRouter from "./authentication";
import userRouter from "./user";

const router = express.Router();

export default (): express.Router => {
  authenticationRouter(router);
  userRouter(router);
  return router;
};
