import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Layout from "./content/layout";
import ProtectedRoute from "./protected-route";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        >
          <Route element={<Layout isAuthenticated={isAuthenticated}/>}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
