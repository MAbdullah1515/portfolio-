import React from "react";

export default function Myservices() {
  return (
    <>
      <div className="bg-[#3b2930] py-10 px-16">
        <h1 className="text-white text-4xl font-bold">My Services</h1>
        <div className="grid grid-cols-3 justify-between py-10">
          <div className="border-[1px] border-[#ffc107] rounded-md flex flex-col justify-center items-center py-8  px-5 mx-5">
            <img src="images/1.svg" className="w-20 h-20 my-2 mx-2" />
            <h1 className="text-[#ffc107] text-lg my-2">
              Web $ Mobile Development
            </h1>
            <h1 className="text-[#C9C9C9] mt-1 mb-2">
              With a focus on clean design and efficient code, I deliver web
              applications that are both functional and visually appealing.
            </h1>
          </div>
          <div className="border-[1px] border-[#ffc107] rounded-md flex flex-col justify-center items-center py-8  px-5 mx-5">
            <img src="images/2.svg" className="w-20 h-20 my-2 mx-2" />
            <h1 className="text-[#ffc107] text-lg my-2">
            Web Development
            </h1>
            <h1 className="text-[#C9C9C9] mt-1 mb-2">
              With a focus on clean design and efficient code, I deliver web
              applications that are both functional and visually appealing.
            </h1>
          </div>
          <div className="border-[1px] border-[#ffc107] rounded-md flex flex-col justify-center items-center py-8  px-5 mx-5">
            <img src="images/3.svg" className="w-20 h-20 my-2 mx-2" />
            <h1 className="text-[#ffc107] text-lg my-2">
            E-commerce
            </h1>
            <h1 className="text-[#C9C9C9] mt-1 mb-2">
              With a focus on clean design and efficient code, I deliver web
              applications that are both functional and visually appealing.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
