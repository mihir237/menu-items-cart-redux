import React from "react";
import { useDispatch } from "react-redux";
import CustomizeOptions from "./CustomizeOptions";
import MenuItemDetails from "./MenuItemDetails";
import { addItemToCart } from "../feature/addToCart/addToCartSlice";

const MenuItem = ({ item, onClick, modal }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(item));
  };

  return (
    <div
      className={`relative border-[1px] border-gray-600 rounded-lg ${
        modal ? "p-4 w-full h-full pt-6 bg-white" : "m-4 p-4 w-[20rem]"
      }`}
      onClick={onClick}
    >
      <MenuItemDetails item={item} modal={modal} />
      <div className="flex flex-col mt-2">
        {modal && <CustomizeOptions options={item.customizeOptions} />}
        <div
          className={`flex justify-between items-baseline  bottom-0 left-0 right-0  bg-white border-t border-gray-300 ${
            modal ? "absolute px-4 pt-2 mb-4" : ""
          }`}
        >
          {modal ? (
            <h3>{item.price} $</h3>
          ) : (
            <h3 className="text-left mt-4 text-sm font-medium underline decoration-gray-300 underline-offset-4 cursor-pointer">
              Customize
            </h3>
          )}
          <button
            className="border-[1px] rounded-full px-6 mt-2 border-gray-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
