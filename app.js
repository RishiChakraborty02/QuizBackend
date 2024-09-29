import express from "express";
import cors from "cors";
// import authRouter from "./routes/routes.js";
// import dbPool from "./db/connection.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/api/v1", authRouter);

app.listen(3000, () => {
  // dbPool.connect().then(console.log("Database connection successfull"));
  console.log("Server is running on port 3000");
});
