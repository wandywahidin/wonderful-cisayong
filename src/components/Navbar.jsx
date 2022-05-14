import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [togle, settogle] = useState(true);

  const handleTogle = () => {
    settogle(!togle);
  };

  return (
    <div className="flex justify-between md:justify-between items-center my-4 mx-4 px-4 bg-transparent sticky top-0 z-30">
      <h1 className="font-bold max-w-[30%] md:text-2xl">WONDERFULL CISAYONG</h1>
      <div></div>
      <nav>
        <ul className="hidden md:flex">
          <Link to="/" className="mx-3">
            Home
          </Link>
          <Link to="/" className="mx-3">
            About Us
          </Link>
          <Link to="/destination" className="mx-3">
            Destination
          </Link>
          <Link to="/hotel" className="mx-3">
            Hotel
          </Link>
        </ul>
      </nav>
      <div onClick={handleTogle} className="flex md:hidden">
        {!togle ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={
          !togle
            ? "fixed top-14 right-0 w-[60%] h-full border-l border-l-gray-900 ease-in-out duration-500 bg-transparent"
            : "fixed  top-14 right-[-1000px] ease-in-out duration-500"
        }
      >
        <ul className="uppercase flex flex-col text-right">
          <Link to="/" className=" mt-2 p-1 border-b border-b-white-800">
            Home
          </Link>
          <Link to="/" className="mx-1 mt-2 p-2 border-b border-b-white-800">
            about us
          </Link>
          <Link
            to="/destination"
            className="mx-1 mt-2 p-2 border-b border-b-white-800"
          >
            destination
          </Link>
          <Link to="/hotel" className="mx-1 mt-2 p-2 ">
            Hotel
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
