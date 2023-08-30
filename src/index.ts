import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import mongoose from "mongoose";
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("listening on port 8000 http://localhost:8080");
});

const MONGO_URI = "mongodb://localhost:27017/node_api_typescript";

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_URI)
  .then(() => console.info("connection successful"))
  .catch((err: Error) => console.info(err));

mongoose.set("debug", true);
