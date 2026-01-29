import React from "react";
import Header from "./Component/Header";
import About from "./Component/About";
import Project from "./Component/Project";
import Testimonials from "./Component/Testimonials";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <ToastContainer />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
