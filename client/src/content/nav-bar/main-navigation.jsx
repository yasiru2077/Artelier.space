import React from "react";
import logo from "../../assets/ChatGPT Image Jun 10, 2025, 04_03_49 PM.png";
import "./navigation.css";

function MainNavigation() {
  return (
    <section className="main-navigation">
      <div>
        <div>
          <img src={logo} alt="logo" />
          <div>
            <input
              className="search"
              maxlength="120"
              // size="40"
              type="text"
              placeholder="Search by artist name, title or medium"
            />
          </div>
        </div>

        <div>
          <button className="login-btn">Log In</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          <li>What's new</li>
          <li>Artworks</li>
          <li>Artists</li>
          <li>Buy</li>
        </ul>
      </div>
    </section>
  );
}

export default MainNavigation;
