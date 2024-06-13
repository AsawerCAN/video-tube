import cookieParser from "cookie-parser";
import express from "express";

const app = express();

const port = 3000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
