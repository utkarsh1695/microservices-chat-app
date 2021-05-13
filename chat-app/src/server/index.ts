import express from "express";
import path from "path";
import webpack from "webpack";
import config from "config";
import webpackClientConfig from "../../webpack.config.js";

import server from "./server";

const PORT = config.get("PORT");

const app = express();

const compiler = webpack([webpackClientConfig] as any) as webpack.Compiler;
compiler.run((err, stats) => {
  if (err) console.log(err);
  console.log(stats);

  app.use(express.static(path.join(__dirname, "../../public/")));
  
  app.use(server);

  app.listen(PORT, () => {
    console.log(`Chat App running on http://localhost:${PORT}`);
  })
})