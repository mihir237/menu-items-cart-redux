import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="ms-6 border-s-[1px] border-gray-600 ps-4 ">
      <h1 className="flex justify-center text-3xl font-bold">Cart </h1>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex justify-between border-t-[1px] border-gray-500 mx-4">
        <h3 className="font-bold">Total</h3>
        <p className="font-bold">99.99 $</p>
      </div>
    </div>
  );
};

export default Cart;
