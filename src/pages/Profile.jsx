import React from "react";

const Profile = () => {
  return (
    <>
      <div className="py-12 px-8 bg-gray-100 rounded-xl absolute right-3">
        <h1 className="font-semibold text-[20px]">Welcome</h1>
        <p className="text-[18px]">To access account and manage orders</p> <br />
        <a href="/login" className="text-red-400 text-xl p-2 mt-12 border-4 border-red-400 hover:border-red-800 hover:text-red-800">
          LOGIN/SIGNUP
        </a> <br /> <br /> <hr />
        <ul className="text-[18px] mt-10">
          <li>
            <a href="">Orders</a>
          </li>
          <li>
            <a href="">Wishlist</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            {" "}
            <a href="">Contact Us</a>
          </li>
          <li>
            {" "}
            <a href="">Myntra Insider <span className="text-red-600"><i>( New )</i></span></a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
