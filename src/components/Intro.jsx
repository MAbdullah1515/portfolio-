import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div className="pt-12 px-20 flex flex-row">
        <div className="p-8">
          <h1 className="text-white text-6xl font-light">
            Hi There,I Am Abdullah <br />
            <h1 className=" text-[#ffc107]"> Front-End Developer</h1>
          </h1>
          <Link to="/work">
            <button className="hover:text-white hover:bg-[#ffc107] text-[#ffc107] rounded border-[1px] border-[#ffc107] mt-20 text-2xl py-2 px-10">
              View Works
            </button>
          </Link>
        </div>
        <div className="">
          <img src="images/Ab Img.webp" className="  w-[300px] h-[470px]" />
        </div>
      </div>
    </>
  );
}
