import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { mydogsRouter } from "./routes/mydogs.js";

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

app.use("/auth", userRouter);
app.use("/mydogs", mydogsRouter);

mongoose.connect(
  "mongodb+srv://TailoredTails:E3McVkTXMLTF0wUQ@tailoredtails.uarpfpi.mongodb.net/TailoredTails?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to database");
  app.listen(3001, () => console.log("Server started on port 3001"));
});
