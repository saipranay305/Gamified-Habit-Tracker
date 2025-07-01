import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data; // Return user data to caller
    } catch (error) {
      // Handle or propagate error
      throw error.response?.data?.message || "Login failed";
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      throw error.response?.data?.message || "Registration failed";
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
