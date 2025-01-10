import React from "react";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Kids from "../pages/Kids";
import Living from "../pages/Living";
import Beauty from "../pages/Beauty";
import Studio from "../pages/Studio";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="md:flex md:gap-8 font-semibold md:mt-8">
        <label htmlFor="" className="hover:border-blue-600 hover:border-b-4" id="hover">
          <a href="#">MEN</a>
          <div className="" id="hover_item">
            <Mens/>
          </div>
        </label>
        <label htmlFor="" className="hover:border-pink-600 hover:border-b-4" id="hover">
          <a href="#">WOMAN</a>
          <div  id="hover_item">
            <Womens/>
          </div>
        </label>
        <label htmlFor="" className="hover:border-yellow-600 hover:border-b-4" id="hover">
          <a href="#">KIDS</a>
          <div  id="hover_item">
            <Kids/>
          </div>
        </label>
        <label htmlFor="" className="hover:border-green-700 hover:border-b-4" id="hover">
          <a href="#">HOME & LIVING</a>
          <div  id="hover_item">
            <Living/>
          </div>
        </label>
        <label htmlFor="" className="hover:border-purple-500 hover:border-b-4" id="hover">
          <a href="#">BEAUTY</a>
          <div  id="hover_item">
            <Beauty/>
          </div>
        </label>
        <label htmlFor="" className="hover:border-red-600 hover:border-b-4" id="hover">
          <a href="#">
            STUDIO <sup className="text-red-700 font-bold">New</sup>
          </a>
          <div  id="hover_item">
            <Studio/>
          </div>
        </label>
      </div>
    </>
  );
};

export default Navbar;
