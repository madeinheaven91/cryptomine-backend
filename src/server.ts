import express from "express";
import { userRouter } from "./routes/user.routes";
import cors from "cors";
import * as dotenv from "dotenv";

// Variables
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const frontendURL = process.env.FRONTEND_URL as string;

// Config
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", frontendURL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization",
  );
  next();
});
app.use(
  cors({
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
    origin: '*'
  }),
);

// Routes
app.use("/api", userRouter).use(
  cors({
    origin: frontendURL,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
  }),
);

export { app, port };
