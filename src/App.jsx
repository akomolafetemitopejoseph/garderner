import React from "react";
import Header from "./Component/Header";
import About from "./Component/About";
import Project from "./Component/Project";
import Testimonials from "./Component/Testimonials";
import Contact from "./Component/Contact";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
