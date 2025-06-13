import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, setIsAuthenticated }) {
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  console.log("is authenticated:", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
