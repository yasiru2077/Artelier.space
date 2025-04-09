import express from "express";
const app = express();

import authRoutes from "./routes/auth.js";
import artistRoutes from "./routes/artist.js";
import categoriesRoutes from "./routes/categories.js";
import artworkRoutes from "./routes/artworks.js";
import ordersRoutes from "./routes/orders.js";
import orderItemsRoutes from "./routes/orderItems.js";

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
app.use("/api/artist", artistRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/artworks", artworkRoutes);
app.use("/api/order", ordersRoutes);
app.use("/api/orderItems", orderItemsRoutes);

app.listen(port, () => {
  console.log(`API working on ${port}`);
});
