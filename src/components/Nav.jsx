import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-[#311e25] py-4 px-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-[#ffc107] font-bold">Abdullah.</h1>
        </Link>
        <div className="hidden md:flex gap-4">
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
    </nav>
  );
}
