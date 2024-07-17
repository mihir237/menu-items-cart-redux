// src/CartItem.js
import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../feature/addToCart/addToCartSlice";
import CustomizeOptions from "./CustomizeOptions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <div className="border-[1px] border-gray-600 rounded-lg m-4 px-4 w-[22rem]">
      <div className="flex justify-between">
        <h2 className="text-base font-semibold text-left my-2">{item.name}</h2>
        <div className="flex items-center">
          <button
            className="px-2 border-[1px] border-black items-center rounded-full"
            onClick={handleAddToCart}
          >
            +
          </button>
          <p className="font-bold px-2">{item.quantity}</p>
          <button
            className="px-2 border-[1px] border-black items-center rounded-full "
            onClick={handleRemoveFromCart}
          >
            -
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        <p className="text-sm">With</p>
        {/* {item.customizeOptions?.map((option, index) => (
          <span
            key={index}
            className="border-[1px] text-xs border-gray-600 rounded-full px-2"
          >
            {option}
          </span>
        ))} */}
      </div>
      {/* <CustomizeOptions options={item.customizeOptions} /> */}
      <div className="flex justify-between my-3">
        <p className="text-xs underline decoration-gray-500 underline-offset-4 flex justify-end my-1">
          Customize
        </p>
        <p className="font-bold">{item.price} $</p>
      </div>
    </div>
  );
};

export default CartItem;
