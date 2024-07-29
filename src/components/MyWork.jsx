import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function MyWork() {
  return (
    <>
      <div className="bg-[#311e25] py-32 px-16">
        <h1 className="text-4xl font-bold text-white">My Works</h1>
        <img
          src="images/sample 1.PNG"
          className="m-10 border-[#ffc107] border-spacing-20 border-[5px]"
        />
        <img
          src="images/Sample 2.PNG"
          className="m-10 border-[#ffc107] border-spacing-20 border-[5px]"
        />
        <img
          src="images/sample 3.PNG"
          className="m-10 border-[#ffc107] border-spacing-20 border-[5px]"
        />
        <div className="flex justify-center">
          <Link to="/work">
            <button className=" hover:text-white hover:bg-[#ffc107] w-[400px] rounded  py-2 font-bold text-xl text-[#ffc107] border-[1px] border-[#ffc107]">
              More Works
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
