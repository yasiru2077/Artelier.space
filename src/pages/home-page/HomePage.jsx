import React from "react";
import { Link } from "react-router-dom";
import './homepage.css';
import SecondaryNav from "../../components/secondarynav/SecondaryNav";


export default function HomePage() {
  return (
    <React.Fragment>
    <div className="homepage bg-gradient-to-b from-green-200 text-black to-green-400">
      {" "}
      <div className="flex flex-col justify-center font-mono items-center">
        <div className=" m-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to Plant Haven</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your ultimate destination for plant care tips and guides.
        </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 m-3">
          <div className="p-8 bg-white rounded-lg shadow-md max-w-md">
            <h2 className="text-2xl font-bold mb-4">Plant Care Guide</h2>
            <p className="text-gray-700 mb-6">
              Explore our comprehensive soil care guide for a thriving and green
              space.
            </p>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-col">
              <Link
                to="/indoor-plants"
                className="text-gray-700 mb-2 hover:underline"
              >
                Indoor Plants
              </Link>
              <a
                href="/outdoor-plants"
                className="text-gray-700 hover:underline"
              >
                Outdoor Plants
              </a>
            </div>
            <br />
            <a
              href="/plant-care-guide"
              className="text-green-500 hover:underline"
            >
              Explore Now
            </a>
          </div>
        </div>
      <br />
      </div>
    </div>
    <SecondaryNav/>
    </React.Fragment>
  );
}
