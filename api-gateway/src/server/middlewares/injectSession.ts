import UsersService from "#root/adapters/UsersService";
import { Request, Response, NextFunction } from "express";

const injectSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.cookies.userSessionId) {
      const userSession = await UsersService.fetchUserSession({ sessionId: req.cookies.userSessionId });
      res.locals.userSession = userSession;
    }
  } catch (err) {
    console.log("Error in injecting Session", err);
  }

  return next();
}

export default injectSession;