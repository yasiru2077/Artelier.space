import express from "express";
const app = express();

import authRoutes from "./routes/auth.js";

import cors from "cors";
import cookieParser from "cookie-parser";

const port = 3000;
const FRONTEND_URL = "http://localhost:5173";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`API working on ${port}`);
});
