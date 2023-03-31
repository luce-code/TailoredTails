import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.listen(3003, () => console.log("SERVER STARTED"));
