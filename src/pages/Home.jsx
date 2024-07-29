import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import IntroSkills from "../components/IntroSkills";
import Myservices from "../components/Myservices";
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";
import Mycontact from "../components/Mycontact";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* <h1>hlo</h1> */}
        <img src="images/banner.png.webp" className="absolute -z-10" />
        <Nav />
       <Intro/>
       <IntroSkills/>
       <Myservices/>
       <MyWork/>
       <Mycontact/>
       <Footer/>
      </div>
    </>
  );
}
