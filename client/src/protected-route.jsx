import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/verify",
          {
            withCredentials: true,
          }
        );

        setIsAuthenticated(true);

        console.log("is authenticated:", isAuthenticated);
      } catch (error) {
        console.log("Authentication failed:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
      }
    };

    verifyAuth();
  }, []);

  console.log("is authenticated:", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
