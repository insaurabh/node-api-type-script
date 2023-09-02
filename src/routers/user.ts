import express from "express";

import { deleteUser, getAllUsers } from "./../controllers/user";
import { isAuthenticated } from "./../middlewares";
export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/user/:id", deleteUser);
};
