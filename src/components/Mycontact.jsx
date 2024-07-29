import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function Mycontact() {
  return (
    <>
      <div className="bg-[#3b2930] py-10 px-16  ">
        <h1 className="text-4xl text-[#ffc107] font-bold my-10">Contact</h1>
        <div className="grid grid-cols-2  justify-items-stretch content-start ml-20">
          <h1 className="text-[#ffc107] text-xl font-semibold">Phone No:</h1>
          <h1 className="text-white text-xl font-semibold">+923488740758</h1>
          <h1 className="text-[#ffc107] text-xl font-semibold">Email:</h1>
          <h1 className="text-white text-xl font-semibold">
            abdullah144246@gmail.com
          </h1>
        </div>
        <div className="">
          <h1 className="text-4xl text-[#ffc107] font-bold my-10">Lets Chat</h1>
        </div>

        <div className="grid grid-cols-3 justify-items-stretch content-start ml-20">
          <div className="flex flex-row">
            <a
              href="https://wa.me/923488740758"
              className="text-white text-xl font-semibold"
            >
              Wattsapp
            </a>
            <a href="https://wa.me/923488740758">
              <FaWhatsapp className="text-[#ffc107] text-xl font-semibold mt-2 ml-2" />
            </a>
          </div>
          <div className="flex flex-row">
            <a
              href="https://www.linkedin.com/in/muhammad-abdullah-180a00299/"
              className="text-white text-xl font-semibold"
            >
              Linkedin
            </a>
            <a href="https://www.linkedin.com/in/muhammad-abdullah-180a00299/">
              <FaLinkedin className="text-[#ffc107] text-xl font-semibold mt-2 ml-2" />
            </a>
          </div>
          <div className="flex flex-row">
            <a
              href="https://github.com/MAbdullah1515"
              className="text-white text-xl font-semibold"
            >
              Github
            </a>
            <a href="https://github.com/MAbdullah1515">
              <FaSquareGithub className="text-[#ffc107] text-xl font-semibold mt-2 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}