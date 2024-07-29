import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MyWorkDetail from "../components/MyWorkDetail";
// import Mycontact from 'module';
import Mycontact from "../components/Mycontact";

export default function Work() {
  return (
    <>
      <div className="bg-[#311e25] ">
        <Nav />
        <div className="mt-5 px-16">
          <h1 className="text-4xl text-[#ffc107] font-bold mb-5">
            LANDING PAGES
          </h1>
          <h1 className="text-white ">
            Here are some screenshots of landing pages I have successfully
            created. Each project showcases my expertise in responsive design,
            clean code, and user-friendly interfaces.
          </h1>
        </div>
        <MyWorkDetail />
        <Mycontact />
        <Footer />
      </div>
    </>
  );
}
