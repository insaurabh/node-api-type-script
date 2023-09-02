import express from "express";
import { getUserByEmail, createUser } from "./../db/users";
import { authentication, random } from "./../helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, username, password } = req.body;
    console.log(`register fired: ${username} ${password} ${email}`);

    if (!email || !username || !password) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }
    const salt = random;

    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    console.log(password);
    if (!email || !password) {
      return res.sendStatus(401);
    }

    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);

    console.log("expectedHash", expectedHash);
    console.log("stored hash", user.authentication.password);

    if (user.authentication.password !== expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random;
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();

    res.cookie("NODE-API-REST", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    console.log("user", user);
    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};
