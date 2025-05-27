import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );

      const userData = response.data;
      console.log(userData);

      navigate("/");
    } catch (err) {
      setErr(err.response?.data || "An error occurred");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          autoComplete="new-username"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <button type="submit">login</button>
        {err && <p className="error">{err}</p>}
      </form>
    </div>
  );
}

export default Login;
