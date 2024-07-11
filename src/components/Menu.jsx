import React from "react";
import data from "../../mockdata/data.json";
import MenuItem from "./MenuItem";
import {
  selectItemId,
  selectModalVisibility,
  setModalState,
} from "../feature/menuItemModalSlice";
import { useDispatch, useSelector } from "react-redux";

const Menu = ({ selectedCategory }) => {
  const itemId1 = useSelector(selectItemId);
  const modalVisibility1 = useSelector(selectModalVisibility);
  const dispatch = useDispatch();

  const findMenuItemDetailsForModal = () => {
    return data.menuItems.find((item) => item.id === itemId1);
  };

  const selectedItem = itemId1 ? findMenuItemDetailsForModal() : null;

  return (
    <div>
      <h1
        className="flex justify-center text-3xl font-bold text-left ms-4"
        onClick={() =>
          dispatch(setModalState({ modalVisibility: true, itemId: 1 }))
        }
      >
        Menu
      </h1>
      <h2 className="flex justify-center text-xl font-bold text-left ms-4">
        {selectedCategory}
      </h2>

      <div className="flex flex-1 justify-center flex-wrap">
        {data.menuItems.map((item) =>
          selectedCategory === "All Items" ||
          selectedCategory === item.category ? (
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
          className="flex flex-col z-30 w-[90%] md:w-[60%] h-[80%] md:h-[70%] rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="flex justify-end pe-2 text-white text-sm font-extrabold"
            onClick={() =>
              dispatch(setModalState({ modalVisibility: false, itemId: null }))
            }
          >
            X
          </button>
          {selectedItem && (
            <MenuItem item={selectedItem} modal={true} onClick={() => {}} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
