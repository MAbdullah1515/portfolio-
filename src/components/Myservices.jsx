import React from "react";

export default function MyServices() {
  return (
    <>
      <div className="bg-[#3b2930] py-10 px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border-[1px] border-[#ffc107] rounded-md flex flex-col items-center p-6">
            <img src="images/1.svg" className="w-20 h-20 my-2" />
            <h1 className="text-[#ffc107] text-lg my-2">
              Web & Mobile Development
            </h1>
            <p className="text-[#C9C9C9] text-center">
              With a focus on clean design and efficient code, I deliver web
              applications that are both functional and visually appealing.
            </p>
          </div>
          <div className="border-[1px] border-[#ffc107] rounded-md flex flex-col items-center p-6">
            <img src="images/2.svg" className="w-20 h-20 my-2" />
            <h1 className="text-[#ffc107] text-lg my-2">Web Development</h1>
            <p className="text-[#C9C9C9] text-center">
              With a focus on clean design and efficient code, I deliver web
              applications that are both functional and visually appealing.
            </p>
          </div>
          <div className="border-[1px] border-[#ffc107] rounded-md flex flex-col items-center p-6">
            <img src="images/3.svg" className="w-20 h-20 my-2" />
            <h1 className="text-[#ffc107] text-lg my-2">E-commerce</h1>
            <p className="text-[#C9C9C9] text-center">
              With a focus on clean design and efficient code, I deliver web
              applications that are both functional and visually appealing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
