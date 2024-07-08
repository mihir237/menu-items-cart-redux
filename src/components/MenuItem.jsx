import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div>
      <div className="border-[1px] border-gray-600 rounded-lg m-4 p-4 w-[20rem]">
        <div className="flex justify-between items-baseline">
          <h2 className="text-base text-left font-semibold ">{item.name}</h2>
          <h3 className="font-bold text-xl">{item.price} $</h3>
        </div>
        <p className="text-left text-xs font-semibold text-gray-600">
          {item.description}
        </p>

        <div className="flex justify-between mt-2">
          <h3 className="text-left mt-4 text-sm font-medium underline decoration-gray-300 underline-offset-4 cursor-pointer">
            Customize
          </h3>
          <button className="border-[1px] rounded-full px-6 mt-2 border-gray-600 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
