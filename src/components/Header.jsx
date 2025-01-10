import React,{useState} from "react";
import Navbar from "./Navbar";
import { CiSearch, CiHeart } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

import Profile from "../pages/profile";
import "./Header.css";

const Header = () => {

  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
   setIsMenuOpen(!IsMenuOpen);
  }


  return (
    <>
      <div className="p-2 flex justify-between border-b-4 border-b-gray-300 sticky top-0 bg-white w-[100%]">
        <div className=" md:mt-3 sm:ml-5 -ml-2 -mt-2 pt-2 flex">
          <div className="md:hidden sm:text-3xl text-xl text-gray-600 sm:mt-4 mt-2 cursor-pointer">
          <button onClick={toggleMenu} className="text-xl p-2 sm:text-2xl">
                { IsMenuOpen ? (<FaTimes/>)   : (<FaBars/>)}             
            </button>
          </div>
          <a href="/">
            <img
              src="https://static.toiimg.com/photo/imgsize-282668,msid-80601325/80601325.jpg"
              alt="Myntra logo"
              className="hover:cursor-pointer sm:w-20  w-16 sm:mt-2 md:mt-0 "
              id="myntra_image"
            />
          </a>
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="mt-6 flex sm:mr-12 sm:gap ">
          <div className="sm:flex gap-1 border-3 border-black rounded-md h-10  mt-2">
            <span
              className="relative text-3xl sm:mt-2 cursor-pointer hidden md:block"
              title="search"
            >
              <CiSearch />
            </span>
            <input
              type="text"
              list="products"
              className=" sm:w-96 p-2 h-10 mr-2 bg-slate-100 hidden md:block
              outline-none"
              placeholder="search for products, brands and many more "
            />
            <datalist id="products">
              <option value="Mens"></option>
              <option value="Women"></option>
              <option value="Kids"></option>
              <option value="Electronics"></option>
              <option value="Kitchen"></option>
              <option value="Latest"></option>
              <option value="High discount"></option>
            </datalist>
          </div>
          <div className="flex md:gap-8 sm:gap-5 text-3xl -mt-3 h-10 sm:-mr-7  ">
            <div id="Person">
              <a href="/login">
                <IoPersonOutline />
                <span className="text-sm  relative -pt-12 hidden sm:block">
                  Profile
                </span>
              </a>
              <div id="person_detail" className="hidden sm:block">
                <Profile />
              </div>
            </div>
            <div title="Wishlist">
              <a href="/wishlist">
                <CiHeart />
                <span className="text-sm  relative -pt-12 hidden sm:block">
                  Wishlist
                </span>
              </a>
            </div>
            <div title="Bag">
              <a href="/bag">
                <IoBagOutline></IoBagOutline>
                <span className="text-sm  relative -pt-12 hidden sm:block">
                  Bag{" "}
                </span>
                <span className="rounded-[30px] relative md:-top-10   md:w-10  sm:p-1 p-[3px] ml-6 -top-12 sm:-top-14 sm:w-12  sm:text-lg text-[10px] text-white bg-red-600">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex sm:justify-center fixed sm:left-48 top-[40px] sm:w-[40%] left-32 sm:top-[22px]  mt-3 bg-gray-300 rounded-2xl" id="search">
              <input type="text" className=" h-8 w-[100%] mt-[2px] ml-3 rounded-xl bg-gray-300 p-2" placeholder="Search your products" id="search_box" list="products" />
              <div className="text-2xl mr-1  mt-2 cursor-pointer">
                <CiSearch/>
              </div>
        </div>
        <div  className={`${IsMenuOpen ? 'block text-xl': 'hidden'}`}>
         <Sidebar/>
         </div>
    </>
  );
};

export default Header;
