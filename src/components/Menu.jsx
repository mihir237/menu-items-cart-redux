import React, { useEffect } from "react";
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

  useEffect(() => {
    if (modalVisibility1) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalVisibility1]);

  return (
    <div className="">
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
        } fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-60 overflow-hidden justify-center items-center`}
        onClick={() =>
          dispatch(setModalState({ modalVisibility: false, itemId: null }))
        }
      >
        <div
          className="flex flex-col z-30 w-[90%] md:w-[60%] h-[80%] md:h-[70%] rounded-lg shadow-2xl mb-12 md:mb-0"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="self-end me-1 px-2 rounded-full border-[1px] text-white text-sm font-extrabold"
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
