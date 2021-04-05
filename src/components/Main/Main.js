import React from "react";
import About from "./About/About";
import Counts from "./Counts/Counts";
import Features from "./Features/Features";
import Values from "./Values/Values";
import Services from "./Services/Services";
import Pricing from "./Pricing/Pricing";
import Faq from "./FAQ/Faq";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import Team from "./Team/Team";
import Client from "./Clients/Clients";
import "./Main.css";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

const Main = () => {
  return (
    <div id="main">
      <About />
      <Values />
      <Counts />
      <Features />
      <Services />
      <Pricing />
      <Faq />
      <Portfolio />
      <Testimonials />
      <Team />
      <Client />
      <Blog />
      <Contact />
    </div>
  );
};

export default Main;
