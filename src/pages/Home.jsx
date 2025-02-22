import React from "react";
import { item } from "../Data/Data";
import { useState } from "react";

const Home = () => {
  const [HandleBagButton, setHandleBagButton] = useState(true);
  const [Item_count, setItem_count] = useState(0);

  const HandleBag = () => {
    setHandleBagButton(!HandleBagButton);
    if (HandleBagButton == true) {
      let Product_count = Item_count + 1;
      setItem_count(Product_count);
      return Product_count;
    } else {
      let Product_count = Item_count - 1;
      setItem_count(Product_count);
      return Product_count;
    }
  };

  return (
    <> 
      <div className="flex justify-center mt-10 lg:gap-5 flex-wrap">
        {item.map((items, index) => (
          <div
            key={index}
            className="w-[300px] lg:w-[380px] rounded-xl hover:shadow-xl hover:transition-shadow hover:shadow-gray-400"
          >
            <img
              src={items.image}
              className="w-full h-80 p-1"
              alt="item_image"
            />
            <span className="flex text-xl p-3 ">
              Rating: {items.rating}{" "}
              <img src={items.star_img} className="w-10 -mt-2" alt="" />
            </span>
            <label htmlFor="" className="font-semibold text-2xl pl-5">
              {items.name}
            </label>
            <br />
            <label htmlFor="" className="text-xl pl-5">
              {" "}
              Product Company : {items.company}
            </label>{" "}
            <br />
            <label htmlFor="" className="text-xl pl-5">
              {" "}
              Rs.{items.current_price}{" "}
              <span className="line-through text-sm">
                Rs.{items.original_price}
              </span>{" "}
              <span className="text-red-600 text-sm">
                {items.discount_percentage}
              </span>
            </label>
            {HandleBagButton ?  <button
              className="w-[70%] m-8 py-2 px-4 bg-green-500 font-normal cursor-pointer sm:text-2xl rounded-xl hover:bg-green-700"
              onClick={() => HandleBag()}
            >
              Add item to bag
            </button> :  <button
              className="w-[70%] m-8 py-2 px-4 bg-red-500 font-normal cursor-pointer sm:text-2xl rounded-xl hover:bg-red-700"
              onClick={() => HandleBag()}
            >
              Remove from bag
            </button> }
          
          </div>
        ))}
      </div> 
    </>
  );
};

export default Home;
