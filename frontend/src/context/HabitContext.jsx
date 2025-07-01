// src/context/HabitContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user) {
      fetchHabits();
    }
  }, [user]);

  const fetchHabits = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/habits/${user.user.id}`);
      setHabits(res.data);
    } catch (err) {
      console.error("Failed to fetch habits", err);
    }
  };

  const addHabit = async (title, description) => {
    try {
      const res = await axios.post("http://localhost:5000/api/habits", {
        userId: user.user.id,
        title,
        description,
      });
      setHabits((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Failed to add habit", err);
    }
  };

  const incrementStreak = async (habitId) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/habits/streak/${habitId}`);
      setHabits((prev) =>
        prev.map((h) => (h._id === habitId ? res.data : h))
      );
    } catch (err) {
      console.error("Failed to increment streak", err);
    }
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, incrementStreak }}>
      {children}
    </HabitContext.Provider>
  );
};
