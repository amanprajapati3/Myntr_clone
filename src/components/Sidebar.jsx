import React  from "react";


const Sidebar = () => {

   

  return (
    <> 
      <div className=" bg-slate-300">
            <ul className="text-[15px]">
                <li className="pl-5 text-black hover:bg-gray-400 cursor-pointer active:scale-105 font-medium">
                    <a href="/login">Login</a>
                </li>
                <li className="pl-5 text-black hover:bg-gray-400 cursor-pointer active:scale-105 font-medium">
                    <a href="#">Men</a>
                </li>
                <li className="pl-5 text-black hover:bg-gray-400 cursor-pointer active:scale-105 font-medium">
                    <a href="#">Woman</a>
                </li>
                <li className="pl-5 text-black hover:bg-gray-400 cursor-pointer active:scale-105 font-medium">
                    <a href="#">Kids</a>
                </li>
                <li className="pl-5 text-black hover:bg-gray-400 cursor-pointer active:scale-105 font-medium">
                    <a href="#">Kitchen</a>
                </li>
                <li className="pl-5 text-black hover:bg-gray-400 cursor-pointer active:scale-105 font-medium">
                    <a href="#">Beauty</a>
                </li>
            </ul>
      </div>
    </>
  );
};

export default Sidebar;
