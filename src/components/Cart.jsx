// src/Cart.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="mx-6 border-s-[1px] border-gray-600 ps-4 hidden md:block md:w-[25rem]">
      <h1 className="flex justify-center text-3xl font-bold">Cart</h1>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="border-[1px] border-gray-600 rounded-lg m-4 px-4 w-[22rem]  h-[6rem]">
            <h2 className="text-center">Cart is empty</h2>
          </div>
        )}
      </div>
      <div className="flex justify-between border-t-[1px] border-gray-500 mx-4 py-4">
        <h3 className="font-bold">Total</h3>
        <p className="font-bold">{totalAmount.toFixed(2)} $</p>
      </div>
    </div>
  );
};

export default Cart;
