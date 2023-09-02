import express from "express";

import { getUserBySessionToken } from "./../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const sessionToken = req.cookies["NODE-API-REST"];

  if (!sessionToken) {
    return res.sendStatus(403);
  }

  const existingUser = await getUserBySessionToken(sessionToken);

  if (!existingUser) {
    return res.sendStatus(403);
  }

  console.log("req", req);

  return next();
};
