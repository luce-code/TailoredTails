import mongoose from "mongoose";

const mydogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: [
    {
      type: Number,
      required: true,
    },
  ],
  weight: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const mydogsModel = mongoose.model("Mydogs", mydogSchema);
