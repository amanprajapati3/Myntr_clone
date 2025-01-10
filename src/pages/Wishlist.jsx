import React from "react";

const Wishlist = () => {
  return (
    <>
      <div className="flex justify-center sm:mt-32 mt-12">
        <div>
          <h1 className="text-2xl font-bold py-3">PLEASE LOG IN</h1>
          <p className="py-3">Login to view items in your wishlist</p>
          <div className="h-36 w-28 shadow-lg rounded-md shadow-blue-500 my-12 border-4 border-blue-500 transform rotate-12 hover:ease-out hover:duration-700 hover:rotate-0">
            <center className="text-[4.4rem] pt-1 font-extrabold text-yellow-300 ">
              {" "}
              +{" "}
            </center>
          </div>
          <center>
            <button className="py-2 px-10 text-2xl text-blue-600 border-2 border-gray-700 hover:text-white hover:bg-blue-600 rounded-lg hover:ease-out hover:duration-700"><a href="/login">LOGIN</a></button>
          </center>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
