import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Handler to navigate
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Your Habit Tracker</h1>
      <div style={styles.cardGrid}>
        <div style={styles.card} onClick={() => goTo("/create-habit")}>
          <h2>Create Habit</h2>
          <p>Add new habits to track your progress.</p>
        </div>

        <div style={styles.card} onClick={() => goTo("/ViewHabits")}> 
          <h2>View Habits</h2>
          <p>See your current habits and streaks.</p>
        </div>

        <div style={styles.card} onClick={() => goTo("/community")}>
          <h2>Community Forum</h2>
          <p>Connect with others, share tips, and get support.</p>
        </div>

        <div style={styles.card} onClick={() => goTo("/points")}>
          <h2>Points & Rewards</h2>
          <p>Track your points and redeem rewards.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 900,
    margin: "40px auto",
    padding: 20,
    backgroundColor: "#e6f0ff",
    borderRadius: 12,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 6px 15px rgba(0, 51, 102, 0.2)",
  },
  heading: {
    color: "#003366",
    textAlign: "center",
    marginBottom: 30,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 3px 8px rgba(0, 51, 102, 0.15)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 51, 102, 0.3)",
  },
};

export default Dashboard;
