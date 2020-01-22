const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    image: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    positive: {
      type: Number,
      required: true,
      trim: true
    },
    negative: {
      type: Number,
      required: true,
      trim: true
    },
    total: {
      type: Number,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
