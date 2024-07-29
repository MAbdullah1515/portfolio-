import React from "react";

export default function IntroSkills() {
  return (
    <>
      <div className="bg-[#311e25]">
        <h1 className="py-10 px-16 text-white text-lg">
          I'm a React JS Developer, specializing in clean, responsive, and
          user-friendly web applications. I have a passion for coding and a keen
          eye for design, ensuring each project is both functional and visually
          appealing. I enjoy solving problems and continuously learning new
          technologies.
        </h1>
        <div className="grid grid-cols-2 px-16 py-10">
          <div className="flex flex-col">
            <h1 className="text-[#C9C9C9] py-4 text-balance">
              Experienced in building dynamic web applications using React JS, I
              excel at transforming complex problems into elegant solutions. My
              projects reflect a blend of robust functionality and clean design,
              ensuring a seamless user experience.
            </h1>
            <h1 className="text-[#C9C9C9]">
              Dedicated to continuous improvement, I thrive on learning new
              skills and applying them to create innovative web solutions.
            </h1>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[#ffc107] text-2xl font-bold ">
              Technical skills
            </h1>
            <div className="grid grid-cols-2 mt-5">
              <h1 className="text-white text-lg">HTML</h1>
              <h1 className="text-white text-lg">CSS</h1>
              <h1 className="text-white text-lg">TAILWIND</h1>
              <h1 className="text-white text-lg">JAVASCRIPT</h1>
              <h1 className="text-white text-lg">React JS</h1>
              <h1 className="text-white text-lg">React NATIVE</h1>
              <h1 className="text-white text-lg">GIT & GITHUB</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
