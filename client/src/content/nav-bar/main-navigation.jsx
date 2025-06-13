import React from "react";
import logo from "../../assets/ChatGPT Image Jun 10, 2025, 04_03_49 PM.png";
import "./navigation.css";
import { useSelector } from "react-redux";

function MainNavigation({ isAuthenticated }) {
  const { user } = useSelector((state) => state.auth);

  const cartClick = () => {
    document.querySelector(".empty-cart").style.display = "none";
    document.querySelector(".full-cart").style.display = "block";
  };

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
        {!isAuthenticated && (
          <div>
            <button className="login-btn">Log In</button>
            <button className="register-btn">Register</button>
          </div>
        )}
        {isAuthenticated && (
          <div className="profile-section">
            <div className="user-name">
              <h1>{user.username[0]}</h1>
            </div>
            <div className="cart">
              <svg
                className="full-cart"
                fill="#8f8f8f"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.954 512.954"
                xml:space="preserve"
                stroke="#8f8f8f"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M396.648,115.314h-49.705V90.721C346.943,40.699,306.247,0,256.218,0c-50.022,0-90.716,40.704-90.716,90.721v24.593 h-49.196c-5.486,0-9.941,4.45-9.941,9.941v377.758c0,5.483,4.455,9.94,9.941,9.94h280.342c5.488,0,9.94-4.457,9.94-9.94V125.255 C406.589,119.764,402.137,115.314,396.648,115.314z M185.379,90.716c0-39.059,31.771-70.839,70.834-70.839 c39.066,0,70.848,31.781,70.848,70.839v24.593H185.379V90.716z M177.025,211.47c-11.217,0-20.311-9.094-20.311-20.312 c0-11.217,9.094-20.311,20.311-20.311s20.311,9.094,20.311,20.311C197.336,202.376,188.242,211.47,177.025,211.47z M337.722,211.47 c-11.22,0-20.312-9.094-20.312-20.312c0-11.217,9.092-20.311,20.312-20.311s20.311,9.094,20.311,20.311 C358.032,202.376,348.941,211.47,337.722,211.47z"></path>{" "}
                    <rect
                      x="169.656"
                      y="139.387"
                      width="14.337"
                      height="49.382"
                    ></rect>{" "}
                    <rect
                      x="328.961"
                      y="139.387"
                      width="14.338"
                      height="49.382"
                    ></rect>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                onClick={cartClick}
                className="empty-cart"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.954 512.954"
                xml:space="preserve"
                stroke="#000000"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M396.648,115.314h-49.705V90.721C346.943,40.699,306.247,0,256.218,0c-50.022,0-90.716,40.704-90.716,90.721v24.593 h-49.196c-5.486,0-9.941,4.45-9.941,9.941v377.758c0,5.483,4.455,9.94,9.941,9.94h280.342c5.488,0,9.94-4.457,9.94-9.94V125.255 C406.589,119.764,402.137,115.314,396.648,115.314z M185.379,90.716c0-39.059,31.771-70.839,70.834-70.839 c39.066,0,70.848,31.781,70.848,70.839v24.593H185.379V90.716z M177.025,211.47c-11.217,0-20.311-9.094-20.311-20.312 c0-11.217,9.094-20.311,20.311-20.311s20.311,9.094,20.311,20.311C197.336,202.376,188.242,211.47,177.025,211.47z M337.722,211.47 c-11.22,0-20.312-9.094-20.312-20.312c0-11.217,9.092-20.311,20.312-20.311s20.311,9.094,20.311,20.311 C358.032,202.376,348.941,211.47,337.722,211.47z"></path>{" "}
                    <rect
                      x="169.656"
                      y="139.387"
                      width="14.337"
                      height="49.382"
                    ></rect>{" "}
                    <rect
                      x="328.961"
                      y="139.387"
                      width="14.338"
                      height="49.382"
                    ></rect>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="nav-links">
        <ul>
          <li>What's new</li>
          <li>Artworks</li>
          <li>Artists</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Your Gallery</li>
        </ul>
      </div>
    </section>
  );
}

export default MainNavigation;
