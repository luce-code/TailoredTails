import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { mydogsRouter } from "./routes/mydogs.js";

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/mydogs", mydogsRouter);

mongoose.connect(
  "mongodb+srv://TailoredTails:E3McVkTXMLTF0wUQ@tailoredtails.uarpfpi.mongodb.net/TailoredTails?retryWrites=true&w=majority"
);

app.listen(3002, () => console.log("SERVER STARTED"));
