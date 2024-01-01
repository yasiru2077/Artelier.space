import React, { useState } from 'react'
import UserData from './database/user.json';

export default function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fetch user data from JSON file
    try {
      const response = await fetch('../../database/user.json'); // Adjust the path accordingly
      const users = await response.json();

      // Check if entered credentials match any user in the JSON file
      const isValidUser = users.some((user) => user.username === username && user.password === password);

      if (isValidUser) {
        // Authentication successful
        console.log('Authentication successful:', username);
      } else {
        // Authentication failed
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md" autoComplete='off'>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2 ">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  )
}
