import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "customer",
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
      await axios.post("http://localhost:3000/api/auth/register", inputs, {
        withCredentials: true,
      });

      navigate("/login");
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
          autoComplete="register-username"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          autoComplete="register-email"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          autoComplete="register-password"
        />
        <input
          type="text"
          placeholder="first_name"
          name="first_name"
          value={inputs.first_name}
          onChange={handleChange}
          autoComplete="register-first_namer"
        />
        <input
          type="text"
          placeholder="last_name"
          name="last_name"
          value={inputs.last_name}
          onChange={handleChange}
          autoComplete="register-last_name"
        />
        <button type="submit">register</button>
        {err && <p className="error">{err}</p>}
      </form>
    </div>
  );
}

export default Register;
