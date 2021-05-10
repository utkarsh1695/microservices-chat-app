import { UserSession } from "#root/adapters/UsersService";
import { Request, Response } from "express";

export interface ResolverContext {
  req: Request;
  res: Response;
}

export interface UserSessionType extends UserSession {}