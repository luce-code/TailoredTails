import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://TailoredTails:E3McVkTXMLTF0wUQ@tailoredtails.uarpfpi.mongodb.net/TailoredTails?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("SERVER STARTED"));
