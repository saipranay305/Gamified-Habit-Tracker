// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points:   { type: Number, default: 0 },
  xp:       { type: Number, default: 0 },
  level:    { type: Number, default: 1 },
  hearts:   { type: Number, default: 3 },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
