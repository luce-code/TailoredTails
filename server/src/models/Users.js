import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  savedMydogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "create-mydog" }],
});

export const UserModel = mongoose.model("users", UserSchema);
