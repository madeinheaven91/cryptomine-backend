import express from "express";
import { userRouter } from "./routes/user.routes";
import cors from "cors";
import * as dotenv from "dotenv";

// Variables
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const frontendURL = process.env.FRONTEND_URL as string;
const backendURL = process.env.BACKEND_URL as string;

// Config
const app = express();
app
  .use(express.json())
  .use(
    cors({
      methods: "GET,POST,PUT,DELETE,OPTIONS",
      optionsSuccessStatus: 200,
      origin: frontendURL,
    }),
  )
  .options("*", cors());

// Routes
app.use("/api", userRouter);

export { app, port };
