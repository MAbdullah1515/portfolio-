import React from "react";

export default function IntroSkills() {
  return (
    <>
      <div className="bg-[#311e25]">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl py-10">
            I'm a React JS Developer, specializing in clean, responsive, and
            user-friendly web applications. I have a passion for coding and a
            keen eye for design, ensuring each project is both functional and
            visually appealing. I enjoy solving problems and continuously
            learning new technologies.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-[#C9C9C9] text-lg md:text-xl py-4">
                Experienced in building dynamic web applications using React JS,
                I excel at transforming complex problems into elegant solutions.
                My projects reflect a blend of robust functionality and clean
                design, ensuring a seamless user experience.
              </h2>
              <p className="text-[#C9C9C9]">
                Dedicated to continuous improvement, I thrive on learning new
                skills and applying them to create innovative web solutions.
              </p>
            </div>
            <div>
              <h2 className="text-[#ffc107] text-2xl font-bold">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                <p className="text-white text-lg">HTML</p>
                <p className="text-white text-lg">CSS</p>
                <p className="text-white text-lg">Tailwind</p>
                <p className="text-white text-lg">JavaScript</p>
                <p className="text-white text-lg">React JS</p>
                <p className="text-white text-lg">React Native</p>
                <p className="text-white text-lg">Git & GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
