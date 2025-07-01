// src/pages/CreateHabit.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const CreateHabit = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return setMessage("Title is required");

    try {
      const res = await axios.post('http://localhost:5000/api/habits', {
        userId: user.user.id,
        title,
        description,
      });
      setMessage("✅ Habit created successfully!");
      setTitle('');
      setDescription('');
    } catch (err) {
      setMessage("❌ Error creating habit");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Create New Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Habit Title"
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description (optional)"
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Create Habit
          </button>
          {message && <p className="text-sm text-center mt-2">{message}</p>}
        </form>
        <div className="mt-4 text-center">
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateHabit;
