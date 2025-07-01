import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // New dashboard page
import CreateHabit from "./pages/CreateHabit"; // (to be created)
import Community from "./pages/Community"; // (to be created)
import Points from "./pages/Points"; // (to be created)
import ViewHabits from './pages/ViewHabits';

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-habit" element={<CreateHabit />} />
          <Route path="/community" element={<Community />} />
          <Route path="/points" element={<Points />} />
          <Route path="/ViewHabits" element={<ViewHabits />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
