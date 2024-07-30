import React from "react";
import Nav from "../components/Nav";
import Myservices from "../components/Myservices";
import Footer from "../components/Footer";
import Mycontact from "../components/Mycontact";

export default function Services() {
  return (
    <>
      <div className="bg-[#3b2930]">
        <Nav />
        <Myservices />
        <Mycontact />
        <Footer />
      </div>
    </>
  );
}
