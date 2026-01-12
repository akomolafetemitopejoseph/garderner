import React from "react";
import { BsFillTreeFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10">
        <div>
          <BsFillTreeFill />
          <h1>plant & garden</h1>
        </div>
        <div>
          <ul>
           
           <a href="#home" className="bg--green-600"></a>
          </ul>
        </div>
        <div>
          <button>connect</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
