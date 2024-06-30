import React from "react";

const CartItem = () => {
  return (
    <div className="border-[1px] border-gray-600 rounded-lg m-4 px-4">
      <h2 className="text-base font-semibold text-left my-2">
        Margherita Pizza
      </h2>
      <div className="flex gap-1">
        <p className="text-sm">With</p>
        <span className="border-[1px] text-xs border-gray-600 rounded-full px-2">
          Extra cheese
        </span>
        <span className="border-[1px] text-xs border-gray-600 rounded-full px-2">
          Extra cheese
        </span>
        <span className="border-[1px] text-xs border-gray-600 rounded-full px-2">
          Extra cheese
        </span>
      </div>
      <div className="flex justify-between my-3">
        <p className="text-xs  underline decoration-gray-500 underline-offset-4 flex justify-end my-1">
          Customize
        </p>
        {/* <h3 className="font-bold"></h3> */}
        <p className="font-bold">99.99 $</p>
      </div>{" "}
    </div>
  );
};

export default CartItem;
