import dayjs from "dayjs";
import { Express } from "express";
import { getConnection, getRepository } from "typeorm";
import omit from "lodash.omit";

import User from "#root/db/entities/User";
import passwordCompareSync from "#root/helpers/passwordCompareSync";
import generateUUID from "#root/helpers/generateUUID";
import config from "config";
import UserSession from "#root/db/entities/UserSession";
import hashPassword from "#root/helpers/hashPassword";

const USER_SESSION_EXPIRY_HOURS = <number>config.get("USER_SESSION_EXPIRY_HOURS");

const setupRoutes = (app: Express) => {
  const connection = getConnection();
  const userRepository = getRepository(User);
  const userSessionRepository = getRepository(UserSession);

  // create a new session - LOGIN
  app.post("/sessions", async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      return next(new Error("Invalid Body!"));
    }
    try {
      const user = await userRepository.findOne(
        {
          username: req.body.username
        },
        {
          select: ["id", "passwordHash"]
        }
      );
      if (!user) return next(new Error("Invalid UserName!"));

      if (!passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error("Invalid Password!"));
      }

      const expiresAt = dayjs().add(USER_SESSION_EXPIRY_HOURS, "hour").toISOString();
      const sessionToken = generateUUID();

      const userSession = {
        expiresAt,
        id: sessionToken,
        userId: user.id
      };

      await connection.createQueryBuilder().insert().into(UserSession).values([userSession]).execute();

      return res.json(userSession);
    } catch (err) {
      return next(err);
    }
  })

  // delete a session - LOGOUT
  app.delete("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await userSessionRepository.findOne(req.params.sessionId);
      if (!userSession) return next(new Error("Invalid Session ID"));
      await userSessionRepository.remove(userSession);
      res.end();
    } catch (err) {
      return next(err);
    }
  })

  // get existing user sessio
  app.get("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await userSessionRepository.findOne(req.params.userId);
      if (!userSession) return next(new Error("Invalid User Id!"));
      return res.json(userSession);
    } catch (err) {
      return next(err);
    }
  })

  // create a new user - SIGN UP
  app.post("/users", async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      return next(new Error("Invalid Body!"));
    }

    try {
      const newUser = {
        id: generateUUID(),
        passwordHash: hashPassword(req.body.password),
        username: req.body.username
      };
  
      await connection.createQueryBuilder().insert().into(User).values([newUser]).execute();
  
      return res.json(omit(newUser, ["passwordHash"]));
    } catch (err) {
      return next(err);
    }
  });

  // get all user list
  app.get("/users/get-all", async (req, res, next) => {
    try {
      const user = await userRepository.find();
      if (!user) return next(new Error("No Users Found!"));
      return res.send(user);
    } catch (err) {
      return next(err);
    }
  })
  
  // get existing user details
  app.get("/users/:userId", async (req, res, next) => {
    try {
      const user = await userRepository.findOne(req.params.userId);
      if (!user) return next(new Error("Invalid User Id!"));
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  })
}

export default setupRoutes;