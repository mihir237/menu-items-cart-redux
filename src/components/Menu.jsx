import React from "react";
import data from "../../mockdata/data.json";
import MenuItem from "./MenuItem";
import {
  selectItemId,
  selectModalVisibility,
  setModalState
} from "../feature/menuItemModalSlice"; // Import setModalState action
import { useDispatch, useSelector } from "react-redux";

const Menu = ({ selectedCategory }) => {
  const itemId1 = useSelector(selectItemId);
  const modalVisibility1 = useSelector(selectModalVisibility);
  const dispatch = useDispatch();

  console.log("------>", modalVisibility1);
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold text-left ms-4" onClick={() =>
                dispatch(
                  setModalState({ modalVisibility: true, itemId: 1 })
                )
              }>
        Menu
      </h1>
      <h2 className="flex justify-center text-xl font-bold text-left ms-4">
        {selectedCategory}
      </h2>

      <div className="flex flex-1 justify-center flex-wrap">
        {data.menuItems.map((item) =>
          selectedCategory === "All Items" || selectedCategory === item.category ? (
            <MenuItem
              key={item.id}
              item={item}
              onClick={() =>
                dispatch(
                  setModalState({ modalVisibility: true, itemId: item.id })
                )
              }
            />
          ) : null
        )}
      </div>
      <div
        className={`${
          modalVisibility1 ? "flex" : "hidden"
        } fixed top-0 left-0 w-[100vw] h-screen border-[1px] bg-gray-500/[0.6] overflow-hidden justify-center items-center`}
        onClick={() =>
          dispatch(setModalState({ modalVisibility: false, itemId: null }))
        }
      >
        <div
          className="relative z-30 w-[90%] md:w-[60%] h-[80%] md:h-[70%] bg-white rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-xs border-2 px-2 py-1 rounded-full border-gray-500 text-gray-500 font-extrabold"
            onClick={() =>
              dispatch(setModalState({ modalVisibility: false, itemId: null }))
            }
          >
            X
          </button>
          <div className="">
            <h2 className="text-base text-left font-semibold ">test</h2>
            <h3 className="font-bold text-2xl">test$</h3>

            <p className="text-left text-xs font-semibold text-gray-600">
              test
            </p>
            <h3 className="text-left mt-4 text-sm font-medium underline decoration-gray-300 underline-offset-4">
              Customize
            </h3>
            <div className="">
              <button className="border-[1px] rounded-full px-6 mt-2 border-gray-600 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
