import React from "react";
import bg from "../assets/bbgpot.jpg";
import Navbar from "./Navbar";
import gb from "../assets/bg.jpg";
import gbb from "../assets/gadobangkong.jpeg";
import badak from '../assets/badak.jpg'
import hanoman from '../assets/hanoman3.jpg'

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-conver min-h-screen md:bg-cover md:min-h-screen text-center bg-fixed -z-20 bg-gradient-to-br bg-no-repeat absolute top-0"
        style={{ backgroundImage: `url(${bg})`, opacity: 0.5, width: "100%" }}
      ></div>
      <h1 className="text-xl md:text-4xl md:mt-8 font-bold text-center mt-5 mb-3">DESTINATION</h1>
      <div className="container absolute bottom-20">
        <div className="flex justify-center flex-wrap">
          <div className="w-28 md:w-48 bg-[#000300] mx-3 rounded-lg border border-white hover:scale-125 duration-500 shadow-lg shadow-slate-500 mt-5">
            <div className="p-2">
              <img src={gb} alt="curug" />
              <p className="text-center font-bold">Curug Batu Black</p>
            </div>
          </div>
          <div className="w-28 md:w-48 bg-[#000300] mx-3 rounded-lg border border-white hover:scale-125 duration-500 shadow-lg shadow-slate-500 mt-5">
            <div className="p-2">
              <img src={gbb} alt="curug" />
              <p className="text-center font-bold">Curug Gado Bangkong</p>
            </div>
          </div>
          <div className="w-28 md:w-48 bg-[#000300] mx-3 rounded-lg border border-white hover:scale-125 duration-500 shadow-lg shadow-slate-500 mt-5">
            <div className="p-2">
              <img src={badak} alt="curug" />
              <p className="text-center font-bold">Curug Badak</p>
            </div>
          </div>
          <div className="w-28 md:w-48 bg-[#000300] mx-3 rounded-lg border border-white hover:scale-125 duration-500 shadow-lg shadow-slate-500 mt-5">
            <div className="p-2">
              <img src={hanoman} alt="curug" />
              <p className="text-center font-bold">Curug Batu Hanoman</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="rounded-full bg-gradient-to-tr from-green-600 to-green-900 px-3 font-light hover:font-bold duration-200 mt-8">See More</button>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
