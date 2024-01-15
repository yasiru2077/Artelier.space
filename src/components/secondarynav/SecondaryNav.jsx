import React from "react";
import "./secondarynavigation.css";
import { Link } from "react-router-dom";

export default function SecondaryNav() {
  return (
    <div>
      <div className="secondary-navigation p-3 bg-white rounded-lg shadow-md max-w-full">
        <ul className="flex flex-row gap-16 justify-center text-center">
          <li>
            <span className="material-symbols-outlined">home</span>
          </li>

          <li>
            <Link to="/gallery">
              <span className="material-symbols-outlined">yard</span>
            </Link>
          </li>

          <li>
            <span className="material-symbols-outlined">potted_plant</span>
          </li>
          <li>
            <span className="material-symbols-outlined">move_item</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
