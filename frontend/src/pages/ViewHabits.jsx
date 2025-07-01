import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ViewHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/habits/${user.user.id}`);
        setHabits(res.data);
      } catch (err) {
        console.error("Error fetching habits", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Your Habits</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : habits.length === 0 ? (
          <p className="text-center text-gray-600">No habits yet.</p>
        ) : (
          <ul className="space-y-4">
            {habits.map((habit) => (
              <li key={habit._id} className="p-4 border border-blue-200 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-800">{habit.title}</h3>
                <p className="text-gray-600">{habit.description || 'No description'}</p>
                <p className="text-sm text-blue-500">🔥 Streak: {habit.streak}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 text-center">
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewHabits;
