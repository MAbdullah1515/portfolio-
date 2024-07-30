import React from "react";

export default function MyWorkDetail() {
  return (
    <>
      <div className="bg-[#311e25] py-10 px-4">
        <h1 className="text-4xl font-bold text-white text-center">My Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="images/sample 1.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 1"
          />
          <img
            src="images/Sample 2.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 2"
          />
          <img
            src="images/sample 3.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 3"
          />
          <img
            src="images/sample 4.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 4"
          />
          <img
            src="images/sample 5.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 5"
          />
          <img
            src="images/sample 6.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 6"
          />
          <img
            src="images/sample 7.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 7"
          />
          <img
            src="images/sample 8.PNG"
            className="border-[#ffc107] border-2 rounded-lg"
            alt="Project 8"
          />
        </div>
      </div>
    </>
  );
}
