import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-2 py-6 px-4">
        <div>
          <Link to="/">
            <h1 className="ml-5 mr-10 hover:font-bold text-[#ffc107]">Abdullah.</h1>
          </Link>
        </div>
        <div className=" grid grid-cols-5">
          <Link to="/">
            <h1 className="text-[#ffc107] hover:font-bold">Home</h1>
          </Link>
          <Link to="/work">
            <h1 className="text-[#ffc107] hover:font-bold">Work</h1>
          </Link>
          <Link to="/services">
            <h1 className="text-[#ffc107] hover:font-bold">Services</h1>
          </Link>
          <Link to="/about">
            <h1 className="text-[#ffc107] hover:font-bold">About</h1>
          </Link>
          <Link to="/contact">
            <h1 className="text-[#ffc107] hover:font-bold">Contact</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
