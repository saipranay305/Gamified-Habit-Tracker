const express = require("express");
const Habit = require("../models/Habit");
const router = express.Router();

// Create a habit
router.post("/", async (req, res) => {
  const { userId, title, description } = req.body;

  if (!userId || !title) {
    return res.status(400).json({ message: "Title and user ID are required." });
  }

  try {
    const habit = new Habit({ userId, title, description });
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ message: "Error creating habit", error: err.message });
  }
});

// Get all habits for a user
router.get("/:userId", async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.params.userId });
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: "Error fetching habits" });
  }
});

// Update streak - PUT /api/habits/:id/streak
router.put("/:id/streak", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    // Only increment streak if lastUpdated is not today
    const today = new Date().toDateString();
    const lastUpdated = habit.lastUpdated ? new Date(habit.lastUpdated).toDateString() : null;

    if (today !== lastUpdated) {
      habit.streak = (habit.streak || 0) + 1;
      habit.lastUpdated = new Date();
      await habit.save();
    }

    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: "Error updating streak", error: err.message });
  }
});

module.exports = router;
