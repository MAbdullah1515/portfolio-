import React from "react";
import Nav from "../components/Nav";
import Mycontact from "../components/Mycontact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="relative">
        <img
          src="images/banner.png.webp"
          className="absolute -z-10 w-full h-full object-cover"
        />
        <Nav />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl text-[#ffc107] font-bold text-center">
            Education
          </h1>
          <div className="bg-white rounded-lg p-6 mt-6">
            <h2 className="text-2xl text-gray-800 font-semibold">
              Graduated From
            </h2>
            <h3 className="text-4xl text-[#ffc107] mt-2">
              University Of Narowal In BS COMPUTER SCIENCE
            </h3>
          </div>

          <h1 className="text-4xl text-[#ffc107] font-bold text-center mt-16">
            Experience
          </h1>
          <div className="bg-white rounded-lg p-6 mt-6">
            <h2 className="text-2xl text-gray-800 font-semibold">
              1- Shop Online New York (Tony LLC)
            </h2>
            <p className="text-gray-700 mt-4">
              During my internship at Tony LLC, an online shop based in New
              York, I gained extensive experience in front-end development. My
              responsibilities included:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>
                Developing and enhancing the eCommerce website's responsiveness
                using HTML, CSS, and Tailwind CSS.
              </li>
              <li>
                Creating and maintaining various web templates to ensure a
                seamless user experience across different devices.
              </li>
              <li>
                Collaborating with the design team to implement visually
                appealing and functional user interfaces.
              </li>
              <li>
                Practicing and refining my skills in React JS, working on
                dynamic and interactive web components.
              </li>
              <li>
                This internship allowed me to apply my knowledge in a real-world
                setting, significantly improving my technical skills and
                understanding of web development best practices.
              </li>
            </ul>
          </div>
          {/* Second experience section */}
          {/* ... */}
        </div>
        <Mycontact />
        <Footer />
      </div>
    </>
  );
}
