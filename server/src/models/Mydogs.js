import mongoose from "mongoose";

const mydogsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  // imageUrl: {
  //   type: String,
  //   required: false,
  // },
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

export const MydogsModel = mongoose.model("Mydogs", mydogsSchema);
