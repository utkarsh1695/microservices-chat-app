import express, { Request, Response } from "express";
import AppOnServer from "./appOnServer";

const server = express();

server.get("*", (req: Request, res: Response) => {
  res.send(AppOnServer());
});

export default server;