import express from "express";
import Cors from "cors";

import { createJRPCServer } from "libjrpc";

const app = express();

const cors = Cors();
const bodyParser = require("body-parser");

app.use(cors);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const projectName = async () => {
  return await "Vinyl";
};

const jrpcServer = createJRPCServer({
  projectName: projectName,
});

app.post("/api/jsonrpc", async (req, res) => {
  const response = await jrpcServer.handleRequest(req.body);

  res.json({ data: response });
});

export default app;
