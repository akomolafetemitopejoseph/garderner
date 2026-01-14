import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/bgImage.jpg')" }}
      id="#header"
    >
      <Navbar />
      <div className="m-auto text-center text-white leading-10 text-xl md:text-2xl font-bold">
        <p>We care for yor garden like it's our own.</p>
        <p>
          Turning every space into a blooming garden, growing beauty and
          naturally
        </p>
      </div>
    </div>
  );
};

export default Header;
