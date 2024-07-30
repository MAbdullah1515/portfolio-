import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div
        className="flex flex-col   
 md:flex-row items-center justify-between pt-12 px-4"
      >
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-light">
            Hi There, I Am Abdullah <br />
            <span className="text-[#ffc107]">Front-End Developer</span>
          </h1>
          <Link to="/work">
            <button className="hover:text-white hover:bg-[#ffc107] text-[#ffc107] rounded border-[1px] border-[#ffc107] mt-6 md:mt-10 text-xl py-2 px-8">
              View Works
            </button>
          </Link>
        </div>
        <div className="md:ml-8">
          <img
            src="images/Ab Img.webp"
            className="w-full md:w-[300px] h-auto"
            alt="Abdullah"
          />
        </div>
      </div>
    </>
  );
}
