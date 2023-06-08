import mongoose from 'mongoose';

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

  image: {
    type: String,
  },
  breed: {
    type: String,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const MydogsModel = mongoose.model('Mydogs', mydogsSchema);
