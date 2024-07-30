import React from "react";
import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <>
      <div className="bg-[#311e25] py-10 px-4">
        <h1 className="text-4xl font-bold text-white text-center">My Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="images/sample 1.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 1"
          />
          <img
            src="images/Sample 2.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 2"
          />
          <img
            src="images/sample 3.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 3"
          />
        </div>
        <div className="text-center mt-8">
          <Link to="/work">
            <button className="hover:text-white hover:bg-[#ffc107] bg-transparent border-[#ffc107] border-2 rounded py-2 px-8 font-bold text-xl">
              More Works
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
