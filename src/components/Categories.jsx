import React, { useRef, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  addToCategory,
  selectCategory,
} from "../feature/addToCart/categoryListSlice";
import { useDispatch, useSelector } from "react-redux";
import data from "../../mockdata/data.json";

const Categories = ({ setSelectedCategory }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const categoryList = useSelector(selectCategory);
  const dispatch = useDispatch();

  const getUniqueCategories = (data) => {
    const categories = data.menuItems.map((item) => item.category);
    return [...new Set(categories)];
  };

  useEffect(() => {
    dispatch(addToCategory(getUniqueCategories(data)));
  }, [dispatch]);

  return (
    <div className="sticky top-12 border-[2px] rounded-full bg-white px-4 my-1">
      <div
        className="flex scroll-bar gap-28 overflow-x-scroll p-1"
        {...events}
        ref={ref}
      >
        {categoryList?.map((item, index) => (
          <button
            className="text-nowrap cursor-pointer"
            onClick={() => setSelectedCategory(item)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
