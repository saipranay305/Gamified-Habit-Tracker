const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  streak: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Habit", habitSchema);
