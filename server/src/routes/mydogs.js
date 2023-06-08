import express from 'express';
import mongoose from 'mongoose';
import { MydogsModel } from '../models/Mydogs.js';
import { UserModel } from '../models/Users.js';

const router = express.Router();

//each user can only see her/his posts
router.get('/', async (req, res) => {
  const userID = req.headers['user-id'];
  const myDogs = await MydogsModel.find({ userOwner: userID });
  try {
    console.log('Dogs found:', myDogs);
    res.status(200).json(myDogs);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const mydogs = new MydogsModel(req.body);
  try {
    console.log('Before save:', mydogs);
    const result = await mydogs.save();
    console.log('After save:', result);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const mydog = await MydogsModel.findById(req.params.id);
    const user = await UserModel.findById(req.body.userId);

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    user.savedMydogs?.push(mydog?._id);
    await user.save();
    console.log('After save:', user.savedMydogs);
    res.status(200).json({ savedMydogs: user.savedMydogs });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/my-dog/ids', async (req, res) => {
  try {
    const user = await UserModel.findById(req.query.userID);
    res.json({ savedMydogs: user?.savedMydogs });
  } catch (error) {
    res.json(error);
  }
});

router.post('/my-dog', async (req, res) => {
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

// router.delete("/:id", authenticateMiddleware, async (req, res) => {
//   try {
//     const mydog = await MydogsModel.findById(req.params.id);
//     if (!mydog) {
//       return res.status(404).send("Mydog not found");
//     }
//     if (mydog.userOwner.toString() !== req.user.id) {
//       return res.status(401).send("Not authorized");
//     }
//     const deletedMydog = await MydogsModel.findByIdAndDelete(req.params.id);
//     res.send(deletedMydog);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server error");
//   }
// });
router.delete('/:id', async (req, res) => {
  try {
    const mydog = await MydogsModel.findByIdAndDelete(req.params.id);
    if (!mydog) {
      return res.status(404).send('Mydog not found');
    }
    res.send(mydog);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export { router as mydogsRouter };
