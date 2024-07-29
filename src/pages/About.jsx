import React from "react";
import Nav from "../components/Nav";
import Mycontact from "../components/Mycontact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="relative">
        {/* <h1>hlo</h1> */}
        <img src="images/banner.png.webp" className="absolute -z-10" />
        <Nav />
        <div className="px-16">
          <h1 className="text-4xl text-[#ffc107] font-bold">Education:</h1>
          <h1 className="text-2xl text-white my-6 font-semibold">
            Graduated From <br />
            <h1 className="text-4xl text-[#ffc107] mt-2 before:absolute before:bg-white before:w-[90%] before:h-[1px] before:mt-14">
              University Of Narowal In BS COMPUTER SCIENCE
            </h1>
          </h1>
          <h1 className="text-4xl text-[#ffc107] font-bold mt-10">
            Experience:
          </h1>
          <h1 className="text-[#ffc107] text-2xl font-bold mt-4">
            1- Shop Online New York (Tony LLC)
          </h1>
          <h1 className="text-white text-sm mt-5">
            <h1 className="felx flex-row">
              During my internship at Tony LLC, an online shop based in New
              York, I gained extensive experience in front-end development. My
              responsibilities included:
            </h1>
            <br />
            <h1>
              Developing and enhancing the eCommerce website's responsiveness
              using HTML, CSS, and Tailwind CSS.
            </h1>
            <br />
            <h1>
              Creating and maintaining various web templates to ensure a
              seamless user experience across different devices.
            </h1>
            <br />
            <h1>
              Collaborating with the design team to implement visually appealing
              and functional user interfaces.
            </h1>
            <br />
            <h1>
              Practicing and refining my skills in React JS, working on dynamic
              and interactive web components.
            </h1>
            <br />
            <h1>
              This internship allowed me to apply my knowledge in a real-world
              setting, significantly improving my technical skills and
              understanding of web development best practices.
            </h1>
          </h1>
        </div>
        <div className="bg-[#3b2930] mt-0 py-10 px-16">
          <h1 className=" text-[#ffc107] text-2xl font-bold before:absolute before:bg-white before:w-[90%] before:h-[1px] before:-mt-5">
            2- Sigi Technologies
          </h1>
          <h1 className="text-white text-sm mt-5">
            <h1>
              At Sigi Technologies, I was involved in various stages of web
              development, from initial design to deployment.
            </h1>
            <br />
            <h1> Key highlights of my experience include:</h1>
            <br />
            <h1>
              Developing website templates from scratch using HTML, CSS, and
              Tailwind CSS, ensuring a balance between aesthetics and
              functionality.
            </h1>
            <br />
            <h1>
              Building dynamic web applications with React JS, integrating
              RESTful APIs to fetch and display real-time data.
            </h1>
            <br />
            <h1>
              Working on a live project, the PPS Admin Panel, where I utilized
              Figma for design references and implemented live RESTful APIs.
            </h1>
            <br />
            <h1>
              Collaborating with cross-functional teams to ensure projects met
              both design and technical specifications.
            </h1>
            <br />
            <h1>
              Troubleshooting and resolving numerous queries related to web
              development, enhancing my problem-solving skills and technical
              knowledge.
            </h1>
            <br />
            <h1 className="before:absolute before:bg-white before:w-[90%] before:h-[1px] before:mt-14">
              {" "}
              My time at Sigi Technologies was instrumental in advancing my
              skills in front-end development and gaining hands-on experience in
              creating robust web applications.
            </h1>
          </h1>
        </div>
        <Mycontact />
        <Footer />
      </div>
    </>
  );
}
