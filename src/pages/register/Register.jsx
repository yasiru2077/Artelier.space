import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering with:', name, email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" autoComplete='off'>
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-blue active:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
