import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/slices/authSlice";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

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
    dispatch(loginStart());

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );

      const userData = response.data;
      dispatch(loginSuccess(userData));
      console.log("Login successful:", userData);
      
      navigate("/");
    } catch (err) {
      setErr(err.response?.data || "An error occurred");
      dispatch(loginFailure(err.response?.data || "An error occurred"));
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {err && <p className="error">{err}</p>}
      </form>
    </div>
  );
}

export default Login;
