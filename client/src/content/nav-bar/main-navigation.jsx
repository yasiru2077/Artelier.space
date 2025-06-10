import React from "react";
import logo from "../../assets/ChatGPT Image Jun 10, 2025, 04_03_49 PM.png";
import "./navigation.css";

function MainNavigation() {
  return (
    <section className="main-navigation">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button>login</button>
        <button>register</button>
      </div>
    </section>
  );
}

export default MainNavigation;
