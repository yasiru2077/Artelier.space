import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import SecondaryNavigation from "../../content/nav-bar/secondary-navigation";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(logout());

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      // Still dispatch logout to clear local state
      dispatch(logout());
    }
  };

  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <h1>Welcome to Art Gallery</h1>
  //       <p>Please log in to access your account.</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <SecondaryNavigation />
      <h1>Welcome to Your Art Gallery</h1>
      <div className="user-info">
        <h2>User Information</h2>
        <p>
          <strong>ID:</strong> {user?.user_id}
        </p>
        <p>
          <strong>Username:</strong> {user?.username}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Full Name:</strong> {user?.first_name} {user?.last_name}
        </p>
        <p>
          <strong>Role:</strong> {user?.role}
        </p>
        <p>
          <strong>Member Since:</strong>{" "}
          {new Date(user?.created_at).toLocaleDateString()}
        </p>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
