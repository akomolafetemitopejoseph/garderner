import React from "react";
import Header from "./Component/Header";
import About from "./Component/About";
import Project from "./Component/Project";
import Testimonials from "./Component/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
      <Testimonials />
    </div>
  );
};

export default App;
