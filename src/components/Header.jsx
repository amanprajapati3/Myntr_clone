import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <>
      <div className="sm:px-10 opacity-95 px-5 pt-2 bg-pink-200 shadow-xl shadow-gray-500 flex justify-between sticky top-0">
        <div>
          <a href="/" className="">
            <img className="w-[40px] sm:w-[60px] mix-blend-multiply " src="https://img.theweek.in/content/dam/week/news/myntra.jpg" alt="" />
          </a>
        </div>
        {/* navbar for mobile responsive */}
        <ul className={`${IsMenuOpen ? "block bg-pink-200 top-12 w-[100%] right-[1px] absolute transition-all duration-300 " : "hidden"}`}>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="#" className=" rounded-md  ">
                Mens
              </a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="#" className=" rounded-md lg:text-xl ">
                Womans
              </a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="#" className=" rounded-md  ">
                Kids
              </a>
            </li>
            <li className="py-1 px-20 rounded-md hover:bg-blue-600 hover:text-white">
              <a href="#" className=" rounded-md  ">
                Kitchen
              </a>
            </li>
          </ul>
        <nav className="">
          <ul className="hidden md:flex gap-4 mt-3">
            <li>
              <a
                href="#"
                className="hover:border-b-4 border-b-pink-600 rounded-md p-1"
              >
                Mens
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 border-b-pink-600 rounded-md p-1"
              >
                Womans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 border-b-pink-600 rounded-md p-1"
              >
                Kids
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 border-b-pink-600 rounded-md p-1"
              >
                Kitchen
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 mr-3">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-xl mt-2 pt-1 sm:text-2xl">
              {IsMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <button className="p-1 h-fit text-2xl  hover:opacity-90 ">
            {" "}
            <a href="/bag" title="Cart"><IoBagAddOutline/></a>
          </button>
          <button className="pt-2 h-fit text-2xl hover:opacity-90 ">
            {" "}
            <a href="/wishlist" title="Wishlist"><FaRegHeart/></a>
          </button>
          <button className="py-1 px-2 mt-1 h-fit  bg-red-800 hover:opacity-90 text-white rounded-sm">
            {" "}
            <a href="/login" title="Register">Register</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
