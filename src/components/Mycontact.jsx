import React from "react";
import { FaWhatsapp, FaLinkedin, FaSquareGithub } from "react-icons/fa";

export default function MyContact() {
  return (
    <>
      <div className="bg-[#3b2930] py-10 px-4">
        <h1 className="text-4xl text-[#ffc107] font-bold my-10 text-center">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h1 className="text-[#ffc107] text-xl font-semibold">Phone No:</h1>
            <h1 className="text-white text-xl font-semibold">+923488740758</h1>

            <h1 className="text-[#ffc107] text-xl font-semibold mt-4">
              Email:
            </h1>
            <h1 className="text-white text-xl font-semibold">
              abdullah144246@gmail.com
            </h1>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl text-[#ffc107] font-bold my-4 md:my-0">
              Let's Chat
            </h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex flex-row items-center">
                <a
                  href="https://wa.me/923488740758"
                  className="text-white text-xl font-semibold mr-2"
                >
                  Whatsapp
                </a>
                <FaWhatsapp className="text-[#ffc107] text-xl font-semibold" />
              </div>
              <div className="flex flex-row items-center">
                <a
                  href="https://www.linkedin.com/in/muhammad-abdullah-180a00299/"
                  className="text-white text-xl font-semibold mr-2"
                >
                  Linkedin
                </a>
                <FaLinkedin className="text-[#ffc107] text-xl font-semibold" />
              </div>
              <div className="flex flex-row items-center">
                <a
                  href="https://github.com/MAbdullah1515"
                  className="text-white text-xl font-semibold mr-2"
                >
                  Github
                </a>
                <FaSquareGithub className="text-[#ffc107] text-xl font-semibold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
