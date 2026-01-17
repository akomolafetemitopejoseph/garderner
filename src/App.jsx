import React from "react";
import Header from "./Component/Header";
import About from "./Component/About";
import Project from "./Component/Project";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
    </div>
  );
};

export default App;
