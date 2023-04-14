import express from "express";
import mongoose from "mongoose";
import { MydogsModel } from "../models/Mydogs.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await MydogsModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const mydogs = new MydogsModel(req.body);
  try {
    console.log("Before save:", mydogs);
    const result = await mydogs.save();
    console.log("After save:", result);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const mydog = await MydogsModel.findById(req.body.mydogId);
    const user = await UserModel.findById(req.body.userId);

    user.savedMydogs.push(mydog._id);
    await user.save();
    console.log("After save:", user.savedMydogs);
    res.status(200).json({ savedMydogs: user.savedMydogs });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/my-dog/ids", async (req, res) => {
  try {
    const user = await UserModel.findById(req.query.userID);
    res.json({ savedMydogs: user?.savedMydogs });
  } catch (error) {
    res.json(error);
  }
});

router.post("/my-dog", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedMydogs = await MydogsModel.find({
      _id: { $in: user.savedMydogs },
    });
    res.json({ savedMydogs });
  } catch (error) {
    res.json(error);
  }
});

export { router as mydogsRouter };
